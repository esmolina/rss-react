import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { ButtonProps } from './ButtonTypes';

const cx = classNames.bind(styles);

class Button extends Component<ButtonProps> {
  render(): React.ReactNode {
    const { buttonType, buttonText, customClass } = this.props;
    return (
      <button type="button" className={cx('button', customClass)}>
        {buttonText}
      </button>
    );
  }
}

export default Button;
