import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { CatalogWrapperProps } from './CatalogWrapperTypes';
import styles from './CatalogWraper.module.scss';
import CardsList from '../CardsList/CardsList';

const cx = classNames.bind(styles);

function CatalogWrapper({ productsData, handleGoAnotherChange }: CatalogWrapperProps) {
  useEffect(() => {
    handleGoAnotherChange('Catalog');
  });

  return (
    <div className={cx('catalog-wrapper')}>
      <CardsList productsData={productsData} />
    </div>
  );
}

export default CatalogWrapper;
