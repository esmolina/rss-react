import classNames from 'classnames/bind';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';
import Button from '../Elements/Buttons/Button';
import { HomePageProps } from './HomePagTypes';

const cx = classNames.bind(styles);

class About extends Component<HomePageProps> {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.handleGoAnotherChange('Home');
  }

  render(): React.ReactNode {
    return (
      <div className={cx('home-page')}>
        <h1 className={cx('home-page__header')}>Beauty Land</h1>
        <Link to="/catalog" className={cx('home-page__router-link')}>
          <Button
            buttonType="button"
            buttonText="Go to Catalog"
            customClass="home-page__button"
            isSubmit={false}
          />
        </Link>
      </div>
    );
  }
}

export default About;
