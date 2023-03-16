import React from 'react';
import LittleCard from '../LittleCard/LittleCard';
import { ProductInterface } from '../../../dataBase/dataBaseTypes';
import { CatalogWrapperProps } from './CatalogWrapperTypes';

class CatalogWrapper extends React.Component<CatalogWrapperProps> {
  render() {
    const { productsData } = this.props;
    return (
      <div className="CatalogWrapper">
        {productsData.map((product: ProductInterface) => {
          return <LittleCard product={product} key={product.productCode} />;
        })}
      </div>
    );
  }
}

export default CatalogWrapper;
