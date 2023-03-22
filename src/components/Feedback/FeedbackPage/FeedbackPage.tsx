import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './FeedbackPage.module.scss';
import { FeedbackPageProps } from './FeedbackPageTypes';
import Quiz from '../Quiz/Quiz';

const cx = classNames.bind(styles);

class FeedbackPage extends Component<FeedbackPageProps> {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.handleGoAnotherChange('Feedback');
  }

  render(): React.ReactNode {
    const { handleQuizNameInput } = this.props;
    return (
      <div className={cx('feedback__wrapper')}>
        <Quiz handleQuizNameInput={handleQuizNameInput} />
      </div>
    );
  }
}

export default FeedbackPage;
