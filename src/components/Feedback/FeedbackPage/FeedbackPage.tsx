import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './FeedbackPage.module.scss';
import { FeedbackPageProps } from './FeedbackPageTypes';
import Quiz from '../Quiz/Quiz';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import { FeedbackCardProps } from '../FeedbackCard/FeedbackCardTypes';

const cx = classNames.bind(styles);

function FeedbackPage({ handleGoAnotherChange }: FeedbackPageProps) {
  const [feedbacks, setFeedbacks] = useState<Array<FeedbackCardProps>>([]);

  useEffect(() => {
    handleGoAnotherChange('Feedback');
  });

  const handleNewFeedback = (newFeedback: FeedbackCardProps) => {
    setFeedbacks([...feedbacks, newFeedback]);
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
            key={`${feedback.userName}-${feedback.datePurchase}-${feedback.product}-${feedback.opinion}`}
          />
        );
      })}
    </div>
  );
}

export default FeedbackPage;
