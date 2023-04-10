import React from 'react';
import classNames from 'classnames/bind';
import styles from './ModalPortal.module.scss';
import CartoonBigCard from '../CartoonBigCard/CartoonBigCard';
import { ModalPortalProps } from './ModalPortalTypes';
import ReactDOM from 'react-dom';

const cx = classNames.bind(styles);
const portal = document.getElementById('portal');

const ModalPortal = ({ character, showModal }: ModalPortalProps) => {
  if (portal && showModal) {
    return ReactDOM.createPortal(
      <div className={cx('modal-portal__wrapper')}>
        <CartoonBigCard character={character} />
      </div>,
      portal
    );
  }
};
