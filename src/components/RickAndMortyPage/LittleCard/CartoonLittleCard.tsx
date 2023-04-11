import React from 'react';
import classNames from 'classnames/bind';
import styles from './CartoonLittleCard.module.scss';
import { CartoonLittleCardProps } from './LittleCardTypes';

const cx = classNames.bind(styles);

function CartoonLittleCard({
  character: { id, image, name },
  cardClickHandler,
}: CartoonLittleCardProps) {
  const handlerClick = () => {
    cardClickHandler(id);
  };
  return (
    <div className={cx('cartoon-little-card__wrapper')} onClick={handlerClick}>
      <img src={image} alt={`character-${name}`} className={cx('cartoon-little-card__image')} />
      <p className={cx('cartoon-little-card__name')}>{`${name}`}</p>
    </div>
  );
}

export default CartoonLittleCard;
