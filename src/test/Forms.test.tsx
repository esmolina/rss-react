import { describe } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { FeedbackCardProps } from '../components/Feedback/FeedbackCard/FeedbackCardTypes';

import '@testing-library/jest-dom/extend-expect';
import QuizForm from '../components/Feedback/QuizForm/QuizForm';

const testNewFeedback = {
  userName: 'Elena',
  product: 'Solgar - Omega3',
  datePurchase: '01.01.2023',
  opinion: 'good',
  file: 'img.jpg',
};

const testHandleNewFeedbackFieldsRender = (newFeedback: FeedbackCardProps) => {
  const feedbacks: Array<FeedbackCardProps> = [];
  feedbacks.push(newFeedback);
};
describe('Form tests', () => {
  test('render form', () => {
    render(<QuizForm handleNewFeedback={testHandleNewFeedbackFieldsRender} />);
  });
});
