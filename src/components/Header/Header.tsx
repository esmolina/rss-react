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
        <Link to="/" className={cx('header__router-link')}>
          <h1 className={cx('header__title')}>Beauty Land</h1>
        </Link>
        <div className={cx('header__current-page')}>
          <p className={cx('header__current-page-static')}> Current page:</p>
          <p className={cx('header__current-page-dynamic')}>{currentPage}</p>
        </div>
        <nav className={cx('header__nav')}>
          <Link to="/catalog" className={cx('header__router-link')}>
            <li className={cx('header__nav-item')}>Catalog</li>
          </Link>
          <Link to="/about" className={cx('header__router-link')}>
            <li className={cx('header__nav-item')}>About us</li>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;
