import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { ButtonProps } from './ButtonTypes';

const cx = classNames.bind(styles);

function Button({ buttonType, buttonText, customClass, isSubmit, handleSubmit }: ButtonProps) {
  const noHandler = () => {
    return 'is not handler';
  };

  const handler = isSubmit ? handleSubmit : noHandler;
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={buttonType} className={cx('button', customClass)} onClick={handler}>
      {buttonText}
    </button>
  );
}

export default Button;
