import React from 'react';
import classNames from 'classnames/bind';
import styles from './ModalPortal.module.scss';
import CartoonBigCard from '../CartoonBigCard/CartoonBigCard';
import { ModalPortalProps } from './ModalPortalTypes';
import ReactDOM from 'react-dom';
import Button from '../../Elements/Buttons/Button';

const cx = classNames.bind(styles);

const ModalPortal = ({ character, setShowModal, container }: ModalPortalProps) => {
  if (!container) return null;
  return ReactDOM.createPortal(
    <div className={cx('modal-portal__wrapper')}>
      <CartoonBigCard character={character} />
      <Button
        buttonType="button"
        buttonText="X"
        customClass="button__close"
        handleSubmit={() => setShowModal(false)}
      />
    </div>,
    container as HTMLElement
  );
};

export default ModalPortal;
