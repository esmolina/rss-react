import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './headerTypes';

const cx = classNames.bind(styles);

class Header extends Component<HeaderProps> {
  render(): React.ReactNode {
    const { currentPage } = this.props;
    return (
      <div className={cx('header')}>
        <h1 className={cx('header__title')}>Beauty Land</h1>
        <div className={cx('header__current-page')}>
          <p className={cx('header__current-page-static')}> Current page:</p>
          <p className={cx('header__current-page-dynamic')}>{currentPage}</p>
        </div>
        <nav className={cx('header__nav')}>
          <li className={cx('header__nav-item')}>Catalog</li>
          <li className={cx('header__nav-item')}>About as</li>
        </nav>
      </div>
    );
  }
}

export default Header;
