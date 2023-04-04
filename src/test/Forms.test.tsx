import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { FeedbackCardProps } from '../components/Feedback/FeedbackCard/FeedbackCardTypes';

import '@testing-library/jest-dom/extend-expect';
import QuizForm from '../components/Feedback/QuizForm/QuizForm';
import FeedbackCard from '../components/Feedback/FeedbackCard/FeedbackCard';

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
describe('Form fields rendering', () => {
  test('render form fields', () => {
    render(<QuizForm handleNewFeedback={testHandleNewFeedbackFieldsRender} />);
    expect(screen.getByLabelText('My name...')).toBeInTheDocument();
    expect(screen.getByLabelText('Date of purchase...')).toBeInTheDocument();
    expect(screen.getByLabelText('Good')).toBeInTheDocument();
    expect(screen.getByLabelText('Bad')).toBeInTheDocument();
  });
});

describe('Feedback-card rendering', () => {
  it('renders right card', () => {
    render(
      <FeedbackCard
        userName={testNewFeedback.userName}
        product={testNewFeedback.product}
        datePurchase={testNewFeedback.datePurchase}
        opinion={testNewFeedback.opinion}
        file={testNewFeedback.file}
      />
    );
    expect(screen.getByText(/Elena/)).toBeInTheDocument();
  });
});
