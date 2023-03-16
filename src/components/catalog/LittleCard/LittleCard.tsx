import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { ProductInterface, Review } from '../../../dataBase/dataBaseTypes';
import styles from './LittleCard.module.scss';
import { LittleCardProps } from './LittleCardTypes';

const cx = classNames.bind(styles);

class LittleCard extends Component<LittleCardProps> {
  render(): React.ReactNode {
    const { product } = this.props;
    const rating = product.reviews.reduce((sum: number, review: Review) => {
      return sum + review.score;
    }, 0);

    return (
      <div className="little-card__wrapper">
        <img src={product.images[0]} alt="product" />
        <p className="little-card__brand">{`${product.brand} (${product.manufacturer})`}</p>
        <p className="little-card__name">{product.name}</p>
        <p className="little-card__specifications">{product.specifications}</p>
        <div className="little-card__bottom">
          <p className="little-card__rating">{`Rating:  ${rating / product.reviews.length}`}</p>
          <p className="little-card__price">{`${product.price}$`}</p>
        </div>
      </div>
    );
  }
}

export default LittleCard;
