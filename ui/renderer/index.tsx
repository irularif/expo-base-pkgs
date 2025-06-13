import { map } from 'lodash';
import { Children, memo, ReactElement, ReactNode } from 'react';

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
    if (children?.props.if === undefined) {
      otherwise = children;
    } else if (!when && children.props.if === true) {
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
  of?: T[];
}
const Each = <T extends unknown>({ renderItem, of }: IEach<T>) =>
  Children.toArray(map(of, renderItem));

export { Each, Show };
