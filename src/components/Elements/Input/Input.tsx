import React from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';
import { InputProps } from './InputTypes';

const cx = classNames.bind(styles);

function Input({
  labelText,
  labelHtmlFor,
  customClassLabel,
  customClassInput,
  spanClass,
  inputType,
  inputValue,
  spanInfo,
}: InputProps) {
  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={labelHtmlFor} className={cx('label', customClassLabel)}>
        {labelText}
      </label>
      <input
        type={inputType}
        id={labelHtmlFor}
        value={inputValue}
        className={cx('input', customClassInput)}
      />
      <span className={cx('spanForInput', spanClass)}>{spanInfo}</span>
    </div>
  );
}

export default Input;
