import { ComponentProps } from 'react';
import { TGluestackUI } from './gluestack-ui';

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

type TComponentProps<T> = Omit<ComponentProps<T>, 'ref'>;

type TransformComponentsToProps<T> = {
  [K in keyof T]: {
    [P in keyof T[K]]: Omit<ComponentProps<T[K][P]>, 'ref'>;
  };
};

export type TCustomComponents = DeepPartial<
  TransformComponentsToProps<TGluestackUI>
>;

export type TComponentsPath = {
  [K in keyof TGluestackUI]: {
    [P in keyof TGluestackUI[K]]: TComponentProps<TGluestackUI[K][P]>;
  };
};

// Add this new type for string paths
export type TComponentPathString = keyof TGluestackUI;

// For more specific typing with exact component names:
export type TComponentPathStringExact = {
  [K in keyof TGluestackUI]: {
    [P in keyof TGluestackUI[K]]: `${K & string}.${P & string}`;
  }[keyof TGluestackUI[K]];
}[keyof TGluestackUI];

// Fix the ButtonProps to reference the correct type
export type ButtonProps = ComponentProps<TGluestackUI['button']['Button']> & {
  type?: 'submit' | 'reset';
};

// Fix the FormControlProps to reference the correct type
export type FormControlProps = ComponentProps<TGluestackUI['formControl']['FormControl']> & {
  name?: string;
};
