import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Quiz.module.scss';
import { QuizProps } from './QuizTypes';
import Input from '../../Elements/Input/Input';

const cx = classNames.bind(styles);

class Quiz extends Component<QuizProps> {
  render(): React.ReactNode {
    const { handleQuizNameInput } = this.props;
    return (
      <div className={cx('quiz__wrapper')}>
        <Input
          labelText="Your name"
          labelHtmlFor="input-quiz-name"
          customClassLabel="input__quiz-label"
          customClassInput="input__quiz-field"
          spanClass="input__quiz-error"
          inputType="text"
          inputValue="Ivan Ivanov"
          spanInfo="please, correct info"
          handleInputChange={handleQuizNameInput}
        />
      </div>
    );
  }
}

export default Quiz;
