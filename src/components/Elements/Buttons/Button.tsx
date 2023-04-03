import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { ButtonProps } from './ButtonTypes';

const cx = classNames.bind(styles);

function Button({ buttonType, buttonText, customClass, handleSubmit }: ButtonProps) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={buttonType}
      className={cx('button', customClass)}
      onClick={handleSubmit}
    >
      {buttonText}
    </button>
  );
}

export default Button;
