import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Review } from '../../../dataBase/dataBaseTypes';
import styles from './LittleCard.module.scss';
import { LittleCardProps } from './LittleCardTypes';

const cx = classNames.bind(styles);

class LittleCard extends Component<LittleCardProps> {
  render(): React.ReactNode {
    const { product } = this.props;
    const rating = product.reviews.reduce((sum: number, review: Review) => {
      return sum + review.score;
    }, 0);
    const reviewsQuantity = product.reviews.length;
    let activeClass = '';
    if (product.category === 'supplements') {
      activeClass = 'supplements';
    }
    if (product.category === 'food') {
      activeClass = 'food';
    }
    if (product.category === 'beauty') {
      activeClass = 'beauty';
    }

    return (
      <div className={cx('little-card__wrapper')}>
        <img src={product.images[0]} alt="product" className={cx('little-card__image')} />
        <div className={cx('little-card__info')}>
          <div className={cx('little-card__description')}>
            <p
              className={cx('little-card__brand')}
            >{`${product.brand} (${product.manufacturer})`}</p>
            <p className={cx('little-card__name')}>{product.name}</p>
            <p className={cx('little-card__specifications')}>{product.specifications}</p>
          </div>
          <div className={cx('little-card__bottom', `${activeClass}`)}>
            <p className={cx('little-card__rating')}>{`Rating:  ${(
              rating / reviewsQuantity
            ).toFixed(1)} for ${reviewsQuantity} buyers`}</p>
            <p
              data-testid="test-price"
              className={cx('little-card__price')}
            >{`${product.price}$`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LittleCard;
