type TValue = string | number | undefined | null | boolean;
type TKey = string | number;
type TAttributes = Record<TKey, TValue>;

export interface IBaseObject {
  id: string;
  type: string;
  attributes: TAttributes;
}
