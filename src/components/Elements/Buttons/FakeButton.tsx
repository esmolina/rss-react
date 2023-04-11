import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { ButtonProps } from './ButtonTypes';

const cx = classNames.bind(styles);

function FakeButton({ buttonText, customClass }: ButtonProps) {
  return <div className={cx('button', customClass)}>{buttonText}</div>;
}

export default FakeButton;
