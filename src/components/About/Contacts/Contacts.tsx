import classNames from 'classnames/bind';
import React, { Component } from 'react';
import { ContactsProps } from './ContactsTypes';
import styles from './Contacts.module.scss';

const cx = classNames.bind(styles);

class ContactsBlock extends Component<ContactsProps> {
  render(): React.ReactNode {
    const { contacts } = this.props;
    return (
      <div className={cx('about__contacts')}>
        <p className={cx('about__contacts-header')}>Our contacts:</p>
        <p className={cx('about__contacts-text')}>{`Adress: ${contacts.address}`}</p>
        <p className={cx('about__contacts-text')}>{`Working time: ${contacts.open}`}</p>
        <p className={cx('about__contacts-text')}>{`Phone: ${contacts.phone}`}</p>
        <p className={cx('about__contacts-text')}>{`E-mail: ${contacts.mail}`}</p>
      </div>
    );
  }
}

export default ContactsBlock;
