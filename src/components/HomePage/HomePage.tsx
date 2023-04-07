import classNames from 'classnames/bind';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';
import FakeButton from '../Elements/Buttons/FakeButton';
import { HomePageProps } from './HomePagTypes';

const cx = classNames.bind(styles);

function About({ handleGoAnotherChange }: HomePageProps) {
  useEffect(() => {
    handleGoAnotherChange('Home');
  });

  return (
    <div className={cx('home-page')}>
      <h1 className={cx('home-page__header')}>Beauty Land</h1>
      <Link to="/catalog" className={cx('home-page__router-link')}>
        <FakeButton buttonText="Go to Catalog" customClass="home-page__button" />
      </Link>
    </div>
  );
}

export default About;
