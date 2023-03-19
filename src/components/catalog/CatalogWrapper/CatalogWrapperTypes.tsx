import { ProductInterface } from '../../../dataBase/dataBaseTypes';

export interface CatalogWrapperProps {
  productsData: Array<ProductInterface>;
  handleGoAnotherChange: (pageName: string) => void;
}
