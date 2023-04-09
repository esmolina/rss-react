import React from 'react';
import classNames from 'classnames/bind';
import styles from './CartoonLittleCard.module.scss';
import { CartoonCardProps } from '../RickAndMortyTypes';

const cx = classNames.bind(styles);

function CartoonLittleCard({ character: { image, name } }: CartoonCardProps) {
  return (
    <div className={cx('cartoon-little-card__wrapper')}>
      <img src={image} alt={`character-${name}`} className={cx('cartoon-little-card__image')} />
      <p className={cx('cartoon-little-card__name')}>{`${name}`}</p>
    </div>
  );
}

export default CartoonLittleCard;
