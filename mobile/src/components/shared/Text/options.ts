export enum ESharedTextCategory {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  s1 = "s1",
  p1 = "p1",
}

export type TSharedTextProp =
  | ESharedTextCategory
  | keyof typeof ESharedTextCategory;
