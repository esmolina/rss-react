import classNames from 'classnames/bind';
import React, { Component } from 'react';
import styles from './HomePage.module.scss';
import Button from '../Buttons/Button';

const cx = classNames.bind(styles);

class About extends Component {
  render(): React.ReactNode {
    return (
      <div className={cx('home-page')}>
        <h1 className={cx('home-page__header')}>Beauty Land</h1>
        <Button buttonText="Go to Catalog" customClass="home-page__button" />
      </div>
    );
  }
}

export default About;
