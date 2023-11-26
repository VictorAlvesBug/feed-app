export type OpcionalExceto<T, K extends keyof T> = {
    [P in keyof T]?: T[K];
  } & {
  [P in K]-?: T[K];
};