import React from 'react';
import classNames from 'classnames/bind';
import styles from './ModalPortal.module.scss';
import CartoonBigCard from '../CartoonBigCard/CartoonBigCard';
import { ModalPortalProps } from './ModalPortalTypes';
import ReactDOM from 'react-dom';
import Button from '../../Elements/Buttons/Button';
import Loader from '../../Elements/Loader/Loader';

const cx = classNames.bind(styles);

const ModalPortal = ({ character, setShowModal, container, isLoadedModal }: ModalPortalProps) => {
  if (!container) return null;
  return ReactDOM.createPortal(
    <div className={cx('modal-portal__wrapper')}>
      {isLoadedModal && (
        <div className={cx('modal-portal__wrapper_is-loaded')}>
          <CartoonBigCard character={character} />
          <Button
            buttonType="button"
            buttonText="X"
            customClass="button__close"
            handleSubmit={() => setShowModal(false)}
          />
        </div>
      )}
      {!isLoadedModal && <Loader />}
    </div>,
    container as HTMLElement
  );
};

export default ModalPortal;
