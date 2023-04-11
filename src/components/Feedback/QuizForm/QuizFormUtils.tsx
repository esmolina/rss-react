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

export const validationFileExtension = (fileList: FileList) => {
  if (fileList) {
    const fileExtension = fileList[0].type;
    return (
      fileExtension === 'image/png' ||
      fileExtension === 'image/jpg' ||
      fileExtension === 'image/jpeg'
    );
  }
};
