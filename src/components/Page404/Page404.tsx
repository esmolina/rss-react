import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import styles from './Page404.module.scss';
import FakeButton from '../Elements/Buttons/FakeButton';
import { Page404Props } from './Page404Types';

const cx = classNames.bind(styles);

function Page404({ handleGoAnotherChange }: Page404Props) {
  useEffect(() => {
    handleGoAnotherChange('Page not found');
  });

  return (
    <div className={cx('page404__container')}>
      <h1 className={cx('page404__number')}>404</h1>
      <p className={cx('page404__text')}>Oops! This page doesn`t exist..</p>
      <Link to="/catalog" className={cx('router-link-404')}>
        <FakeButton buttonText="Let's go to catalog ;)" customClass="page404" />
      </Link>
    </div>
  );
}

export default Page404;
