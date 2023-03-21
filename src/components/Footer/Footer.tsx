import classNames from 'classnames/bind';
import React, { Component } from 'react';
import styles from './Footer.module.scss';
import RSSLogo from '../../assets/icons/rslogo.png';
import GHLogo from '../../assets/icons/gh-logo.svg';

const cx = classNames.bind(styles);

class Footer extends Component {
  render(): React.ReactNode {
    return (
      <div className={cx('footer')}>
        <a href="https://rs.school/react/" className={cx('footer__link')}>
          <img src={RSSLogo} alt="RSSchool logo" className={cx('footer__rs-logo')} />
        </a>
        <p className={cx('footer__author')}>by Elena Smolina 2023</p>
        <a href="https://github.com/esmolina" className={cx('footer__link')}>
          <img src={GHLogo} alt="RSSchool logo" className={cx('footer__gh-logo')} />
        </a>
      </div>
    );
  }
}

export default Footer;
