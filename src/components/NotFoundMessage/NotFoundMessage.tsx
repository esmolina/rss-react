import classNames from 'classnames/bind';
import React from 'react';
import styles from './NotFoundMessage.module.scss';

const cx = classNames.bind(styles);

function NotFoundMessage() {
  return (
    <div className={cx('not-found-message__container')}>
      <h1 className={cx('not-found-message__text')}>Nothing was found for your query</h1>
    </div>
  );
}

export default NotFoundMessage;
