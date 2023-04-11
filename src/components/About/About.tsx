import classNames from 'classnames/bind';
import React, { useEffect } from 'react';
import styles from './About.module.scss';
import { AboutProps } from './AboutTypes';
import ProductsGrid from './ProductsGrid/ProductsGrid';
import ContactsBlock from './Contacts/Contacts';

const cx = classNames.bind(styles);

function About({
  companyName,
  aboutHeader,
  productCategories,
  ourContacts,
  handleGoAnotherChange,
}: AboutProps) {
  useEffect(() => {
    handleGoAnotherChange('About');
  });

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

export default About;
