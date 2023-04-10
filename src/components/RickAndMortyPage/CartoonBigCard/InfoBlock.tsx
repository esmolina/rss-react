import React from 'react';
import classNames from 'classnames/bind';
import styles from './CartoonBigCard.module.scss';

const cx = classNames.bind(styles);

interface InfoBlockProps {
  title: string;
  info: string;
}

function InfoBlock({ title, info }: InfoBlockProps) {
  return (
    <p className={cx('cartoon-big-card__info-block')}>
      <span className={cx('cartoon-big-card__info-title')}>{`${title}:`}</span>
      {`   ${info}`}
    </p>
  );
}

export default InfoBlock;
