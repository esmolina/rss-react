import React from 'react';
import classNames from 'classnames/bind';
import LittleCard from '../LittleCard/LittleCard';
import { ProductInterface } from '../../../dataBase/dataBaseTypes';
import { CatalogWrapperProps } from './CatalogWrapperTypes';
import styles from './CatalogWraper.module.scss';

const cx = classNames.bind(styles);

class CatalogWrapper extends React.Component<CatalogWrapperProps> {
  render() {
    const { productsData } = this.props;
    return (
      <div className={cx('catalog-wrapper')}>
        {productsData.map((product: ProductInterface) => {
          return <LittleCard product={product} key={product.productCode} />;
        })}
      </div>
    );
  }
}

export default CatalogWrapper;
