import { Children, memo, ReactElement, ReactNode, cloneElement } from 'react';

interface IShow {
  children?: ReactElement | ReactElement[];
}
interface IShowTrue {
  if: boolean;
  children?: ReactNode;
}
interface IShowElse {
  renderItem?: ReactNode;
  children?: ReactNode;
}
const BaseShow = (props: IShow) => {
  let when: ReactNode | undefined;
  let otherwise: ReactNode | undefined;

  Children.forEach(props.children, (children) => {
    if ((children?.props as IShowTrue)?.if === undefined) {
      otherwise = children;
    } else if (!when && (children?.props as IShowTrue)?.if === true) {
      when = children;
    }
  });

  return when || otherwise;
};

const When = ({ if: showIf, children }: IShowTrue) => showIf && children;
const Else = ({ renderItem, children }: IShowElse) => renderItem || children;
const Show = Object.assign(memo(BaseShow), {
  When: memo(When),
  Else: memo(Else),
});

interface IEach<T> {
  renderItem: (item: T, index: number) => ReactElement;
  of?: T[] | readonly T[];
  keyExtractor?: (item: T, index: number) => string | number;
}
const Each = <T extends unknown>({
  renderItem,
  of = [],
  keyExtractor,
}: IEach<T>) =>
  of?.map((item, index) => {
    const element = renderItem(item, index);
    const key = keyExtractor ? keyExtractor(item, index) : index;
    return cloneElement(element, { key });
  }) ?? [];

export { Each, Show };
