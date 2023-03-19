import React from 'react';
import classNames from 'classnames/bind';
import LittleCard from '../LittleCard/LittleCard';
import { ProductInterface } from '../../../dataBase/dataBaseTypes';
import { CatalogWrapperProps } from './CatalogWrapperTypes';
import styles from './CatalogWraper.module.scss';
import Searcher from '../../Searcher/Searcher';

const cx = classNames.bind(styles);

class CatalogWrapper extends React.Component<CatalogWrapperProps> {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.handleGoAnotherChange('Catalog');
  }

  render() {
    const { productsData } = this.props;
    return (
      <div className={cx('catalog-wrapper')}>
        <Searcher />
        <div className={cx('catalog-grid')}>
          {productsData.map((product: ProductInterface) => {
            return <LittleCard product={product} key={product.productCode} />;
          })}
        </div>
      </div>
    );
  }
}

export default CatalogWrapper;
