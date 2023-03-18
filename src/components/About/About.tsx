import classNames from 'classnames/bind';
import React, { Component } from 'react';
import styles from './About.module.scss';
import { AboutProps } from './AboutTypes';
import ProductsGrid from './ProductsGrid/ProductsGrid';
import ContactsBlock from './Contacts/Contacts';

const cx = classNames.bind(styles);

class About extends Component<AboutProps> {
  render(): React.ReactNode {
    const { companyName, aboutHeader, productCategories, ourContacts } = this.props;
    return (
      <div className={cx('about')}>
        <p className={cx('about__description')}>
          <span className={cx('about__company-name')}>{companyName}</span>
          {` - ${aboutHeader}`}
        </p>
        <ProductsGrid productsCommonInfo={productCategories} />
        <ContactsBlock contacts={ourContacts} />
      </div>
    );
  }
}

export default About;
