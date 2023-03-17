import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styles from './Page404.module.scss';

const cx = classNames.bind(styles);

class Page404 extends Component<any> {
  render(): React.ReactNode {
    return (
      <div className={cx('page404__container')}>
        <p className={cx('page404__text')}>Oops! This page doesn`t exist..</p>
      </div>
    );
  }
}

export default Page404;

// <Link to="/ ">
//   <button type="button" className={cx('main__content-homelink')}>
//     Let`s go to catalog ;)
//   </button>
// </Link>
