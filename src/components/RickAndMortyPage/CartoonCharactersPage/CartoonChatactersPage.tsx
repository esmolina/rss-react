import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './CartoonCharactersPage.module.scss';
import { CartoonPageProps } from './CartoonCharactersPageTypes';
import Searcher from '../../Searcher/Searcher';

const cx = classNames.bind(styles);

function CartoonPage({ handleGoAnotherChange }: CartoonPageProps) {
  useEffect(() => {
    handleGoAnotherChange('API');
  });

  return (
    <div className={cx('catalog-wrapper')}>
      <Searcher />
    </div>
  );
}

export default CartoonPage;
