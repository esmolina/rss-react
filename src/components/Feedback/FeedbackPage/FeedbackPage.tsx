import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './FeedbackPage.module.scss';
import { FeedbackPageProps, FeedbackPageState } from './FeedbackPageTypes';
import Quiz from '../Quiz/Quiz';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import { FeedbackCardProps } from '../FeedbackCard/FeedbackCardTypes';

const cx = classNames.bind(styles);

class FeedbackPage extends Component<FeedbackPageProps, FeedbackPageState> {
  constructor(props: FeedbackPageProps) {
    super(props);
    this.state = {
      feedbacks: [
        {
          userName: 'John Doe',
          product: 'California Gold Nutrition - Vitamin D3',
          datePurchase: '01.01.2023',
          opinion: 'good',
          photoPath: 'hnjhhghyj',
        },
      ],
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.handleGoAnotherChange('Feedback');
  }

  render(): React.ReactNode {
    const { feedbacks } = this.state;
    const previousFeedbacks = feedbacks;

    const handleNewFeedback = (newFeedback: FeedbackCardProps) => {
      previousFeedbacks.push(newFeedback);
      this.setState({
        feedbacks: previousFeedbacks,
      });
    };

    return (
      <div className={cx('feedback__wrapper')}>
        <Quiz handleNewFeedback={handleNewFeedback} />
        {feedbacks.map((feedback) => {
          return (
            <FeedbackCard
              userName={feedback.userName}
              product={feedback.product}
              datePurchase={feedback.datePurchase}
              opinion={feedback.opinion}
              photoPath={feedback.photoPath}
              key={`${feedback.userName}-${feedback.datePurchase}`}
            />
          );
        })}
      </div>
    );
  }
}

export default FeedbackPage;
