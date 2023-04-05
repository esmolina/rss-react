import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { FeedbackCardProps } from '../components/Feedback/FeedbackCard/FeedbackCardTypes';
import '@testing-library/jest-dom/extend-expect';
import QuizForm from '../components/Feedback/QuizForm/QuizForm';

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

describe('Form input event', () => {
  it('Correct form inputs events', async () => {
    render(<QuizForm handleNewFeedback={testHandleNewFeedbackFieldsRender} />);
    await screen.findByText(/My name.../);
    expect(screen.queryByText(/Elena/)).toBeNull();

    fireEvent.change(screen.getByLabelText('My name...'), {
      target: { value: 'Elena' },
    });
    expect(screen.getByDisplayValue('Elena') as HTMLInputElement).toBeInTheDocument();
  });
});

describe('Form input error message', () => {
  it('Correct error message', async () => {
    render(<QuizForm handleNewFeedback={testHandleNewFeedbackFieldsRender} />);
    const nameInput = screen.queryByTestId('quiz-name-input');

    if (nameInput) {
      fireEvent.change(nameInput, {
        target: { value: 'E' },
      });
      fireEvent.submit(screen.getByTestId<HTMLFormElement>('quiz-form'));

      expect(await screen.findByText('Min length 2 symbols')).not.toBeNull();
    }
  });
});
