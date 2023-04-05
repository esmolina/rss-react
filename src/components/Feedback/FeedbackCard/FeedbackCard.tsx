import React from 'react';
import classNames from 'classnames/bind';
import styles from './FeedbackCard.module.scss';
import { FeedbackCardProps } from './FeedbackCardTypes';

const cx = classNames.bind(styles);

function FeedbackCard({ userName, product, datePurchase, opinion, file }: FeedbackCardProps) {
  return (
    <div
      className={cx(
        'feedback__card',
        { 'feedback__is-good': opinion === 'good' },
        { 'feedback__is-bad': opinion === 'bad' }
      )}
    >
      <p className={cx('feedback__card-text-static')}>User-name</p>
      <p className={cx('feedback__card-text', 'feedback__userName')}>{userName}</p>
      <p className={cx('feedback__card-text-static')}>Our product</p>
      <p className={cx('feedback__card-text', 'feedback__product')}>{product}</p>
      <p className={cx('feedback__card-text-static')}>Date of purchase</p>
      <p className={cx('feedback__card-text', 'feedback__datePurchase')}>{datePurchase}</p>
      <p className={cx('feedback__card-text-static')}>Opinion</p>
      <p className={cx('feedback__card-text', 'feedback__opinion')}>{opinion}</p>
      <p className={cx('feedback__card-text-static')}>Photo</p>
      <img
        src={URL.createObjectURL(file)}
        alt="Product photo"
        className={cx('feedback__card-img')}
      />
    </div>
  );
}

export default FeedbackCard;
