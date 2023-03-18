import classNames from 'classnames/bind';
import React, { Component } from 'react';
import { ProductsGridProps } from './ProductGridTypes';
import styles from './ProductGrid.module.scss';
import SupplementsImg from '../../../assets/icons/vitamins.png';
import FoodImg from '../../../assets/icons/food.png';
import BeautyImg from '../../../assets/icons/beauty.png';

const cx = classNames.bind(styles);

class ProductsGrid extends Component<ProductsGridProps> {
  render(): React.ReactNode {
    const { productsCommonInfo } = this.props;
    return (
      <div className={cx('about__products-grid')}>
        <img src={SupplementsImg} alt="Supplements" className={cx('about__img')} />
        <img src={FoodImg} alt="Healthy food" className={cx('about__img')} />
        <img src={BeautyImg} alt="Cosmetic" className={cx('about__img')} />
        {productsCommonInfo.categories.map((category: string) => (
          <li key={`about-${category}`} className={cx('about__products-list')}>
            {category}
          </li>
        ))}
        <p className={cx('about__products-text')}>{productsCommonInfo.supplements}</p>
        <p className={cx('about__products-text')}>{productsCommonInfo.snacks}</p>
        <p className={cx('about__products-text')}>{productsCommonInfo.cosmetic}</p>
      </div>
    );
  }
}

export default ProductsGrid;
