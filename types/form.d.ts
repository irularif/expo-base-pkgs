export interface IFieldRef {
  name: string;
  ref: any;
}

export interface IFormContext {
  getRef: (name: string) => RefObject<any> | undefined;
  registerRef: (name: string) => (ref: any) => void;
  nextField: () => void;
}
