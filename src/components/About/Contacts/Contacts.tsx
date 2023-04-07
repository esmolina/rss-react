import classNames from 'classnames/bind';
import React from 'react';
import { ContactsProps } from './ContactsTypes';
import styles from './Contacts.module.scss';

const cx = classNames.bind(styles);

function ContactsBlock({ contacts: { address, open, phone, mail } }: ContactsProps) {
  return (
    <div className={cx('about__contacts')}>
      <p className={cx('about__contacts-header')}>Our contacts:</p>
      <p className={cx('about__contacts-text')}>{`Adress: ${address}`}</p>
      <p className={cx('about__contacts-text')}>{`Working time: ${open}`}</p>
      <p className={cx('about__contacts-text')}>{`Phone: ${phone}`}</p>
      <p className={cx('about__contacts-text')}>{`E-mail: ${mail}`}</p>
    </div>
  );
}

export default ContactsBlock;
