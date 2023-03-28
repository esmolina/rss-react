import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { ButtonProps } from './ButtonTypes';

const cx = classNames.bind(styles);

class Button extends Component<ButtonProps> {
  noHandler = () => {
    return 'is not handler';
  };

  render(): React.ReactNode {
    const { buttonType, buttonText, customClass, isSubmit, handleSubmit } = this.props;
    const handler = isSubmit ? handleSubmit : this.noHandler;
    return (
      // eslint-disable-next-line react/button-has-type
      <button type={buttonType} className={cx('button', customClass)} onClick={handler}>
        {buttonText}
      </button>
    );
  }
}

export default Button;
