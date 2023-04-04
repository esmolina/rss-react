import { ProductOptionsInterface } from './QuizFormTypes';
import products from '../../../dataBase/products';

export const productOptionsList: Array<ProductOptionsInterface> = [];

products.map((product) =>
  productOptionsList.push({
    value: `${product.brand} - ${product.name}`,
    label: `${product.brand} - ${product.name}`,
  })
);

export const getOptionsValue = (value: string) => {
  return value ? productOptionsList.find((option) => option.value === value) : '';
};
