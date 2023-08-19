export type TQueryProduct = {
  id?: number;
  sort?: 'ascending' | 'descending';
  filter?: string;
  property?: 'ID' | 'NameProduct' | 'Description' | 'Price';
};

export type TProductItem = {
  ID?: string;
  NameProduct: string;
  Description: string;
  Price: number;
  TypeColumn: 'Column1' | 'Column2';
};

// type TProductIte = {
//   ID: number | null;
//   NameProduct: string | null;
//   Description: string | null;
//   Price: number | null;
//   Key: string | null;
// } | null;
