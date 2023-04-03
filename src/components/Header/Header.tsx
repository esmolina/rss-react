import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './headerTypes';

const cx = classNames.bind(styles);

function Header({ currentPage }: HeaderProps) {
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
        <NavLink to="/catalog" className={cx('header__router-link')}>
          <li className={cx('header__nav-item')}>Catalog</li>
        </NavLink>
        <NavLink to="/about" className={cx('header__router-link')}>
          <li className={cx('header__nav-item')}>About us</li>
        </NavLink>
        <NavLink to="/feedback" className={cx('header__router-link')}>
          <li className={cx('header__nav-item')}>Feedback</li>
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
