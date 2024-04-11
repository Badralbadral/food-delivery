export type FoodsDataType = {
  foodCategory?: string;
  foodName?: string;
  img?: string;
  ingredients?: [string];
  price?: number;
  sale?: number | undefined;
  stock?: number;
  _id?: string;
  count: number;
};
