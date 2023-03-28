import React from 'react';
import classNames from 'classnames/bind';
import LittleCard from '../LittleCard/LittleCard';
import { ProductInterface } from '../../../dataBase/dataBaseTypes';
import { CardsListProps } from './CardsListTypes';
import styles from './CardsList.module.scss';

const cx = classNames.bind(styles);

class CardsList extends React.Component<CardsListProps> {
  render() {
    const { productsData } = this.props;
    return (
      <div data-testid="test-cards-list" className={cx('catalog-grid')}>
        {productsData.map((product: ProductInterface) => {
          return <LittleCard product={product} key={product.productCode} />;
        })}
      </div>
    );
  }
}

export default CardsList;
