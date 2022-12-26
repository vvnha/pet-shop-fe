import { Product } from '@/models';
import { Grid } from '@mui/material';
import * as React from 'react';
import { ProductPage as ProductItem } from './product';

export interface ProductListProps {
  productsPerRow?: number;
  productList?: Product[];
}

const tempProductList: Product[] = [
  {
    _id: '1',
    name: 'Drools | 3KG',
    description: 'Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food',
    price: 123.0,
    pet_list: [],
    promotion_list: [],
    image_list: [],
  },
  {
    _id: '2',
    name: 'Drools 1 | 3KG',
    description: 'Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food',
    price: 123.0,
    pet_list: [],
    promotion_list: [],
    image_list: [],
  },
  {
    _id: '3',
    name: 'Drools | 3KG',
    description: 'Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food',
    price: 123.0,
    pet_list: [],
    promotion_list: [],
    image_list: [],
  },
  {
    _id: '4',
    name: 'Drools | 3KG',
    description: 'Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food',
    price: 123.0,
    pet_list: [],
    promotion_list: [],
    image_list: [],
  },
];

export function ProductList({
  productsPerRow = 4,
  productList = tempProductList,
}: ProductListProps) {
  const productNumber = 12 / productsPerRow;

  return (
    <Grid container spacing={2}>
      {productList.map((product) => (
        <Grid key={product._id} item md={productNumber}>
          <ProductItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
