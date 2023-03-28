import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Quiz from '../components/Feedback/Quiz/Quiz';
import { FeedbackCardProps } from '../components/Feedback/FeedbackCard/FeedbackCardTypes';

const testHandleNewFeedbackFieldsRender = (newFeedback: FeedbackCardProps): void => {
  // eslint-disable-next-line no-param-reassign
  newFeedback.userName = 'Ivan';
};

describe('Form fields rendering', () => {
  it('renders correct price', () => {
    render(<Quiz handleNewFeedback={testHandleNewFeedbackFieldsRender} />);
    expect(screen.getByLabelText('My name...')).toBeInTheDocument();
    expect(screen.getByLabelText('Date of purchase...')).toBeInTheDocument();
    expect(screen.getByLabelText('I bought...')).toBeInTheDocument();
  });
});
