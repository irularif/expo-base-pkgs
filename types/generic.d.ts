// Better type that preserves key constraints while making values optional
export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
    }
  : T;

// Type to generate deep keys with dot notation
export type DeepKeys<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}` | `${K}.${DeepKeys<T[K]>}`
          : `${K}`
        : never;
    }[keyof T]
  : never;

export type ObjectPath<T extends object> = {
  [K in keyof T]: {
    [P in keyof T[K]]: `${K & string}.${P & string}`;
  }[keyof T[K]];
}[keyof T];
