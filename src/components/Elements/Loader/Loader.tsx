import React from 'react';
import classNames from 'classnames/bind';
import styles from './Loader.module.scss';

const cx = classNames.bind(styles);

function Loader() {
  return (
    <figure className={cx('loader')}>
      <div className={cx('dot white')}></div>
      <div className={cx('dot')}></div>
      <div className={cx('dot')}></div>
      <div className={cx('dot')}></div>
      <div className={cx('dot')}></div>
    </figure>
  );
}

export default Loader;
