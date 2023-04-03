import { describe, it } from 'vitest';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import React from 'react';
import Quiz from '../components/Feedback/Quiz/Quiz';
import FeedbackCard from '../components/Feedback/FeedbackCard/FeedbackCard';
import { FeedbackCardProps } from '../components/Feedback/FeedbackCard/FeedbackCardTypes';
import {
  agreementCheck,
  dateCheck,
  fileCheck,
  nameCheck,
  radioCheck,
  selectCheck,
} from '../components/Feedback/Quiz/QuizValidation';
import '@testing-library/jest-dom/extend-expect';

const testNewFeedback = {
  userName: 'Elena',
  product: 'Solgar - Omega3',
  datePurchase: '01.01.2023',
  opinion: 'good',
  photoPath: 'img.jpg',
};

const testHandleNewFeedbackFieldsRender = (newFeedback: FeedbackCardProps) => {
  const feedbacks: Array<FeedbackCardProps> = [
    {
      userName: 'Elena',
      product: 'Solgar - Omega3',
      datePurchase: '01.01.2023',
      opinion: 'good',
      photoPath: 'img.jpg',
    },
  ];

  feedbacks.push(newFeedback);
};

describe('Feedback-card rendering', () => {
  it('renders right card', () => {
    render(
      <FeedbackCard
        userName={testNewFeedback.userName}
        product={testNewFeedback.product}
        datePurchase={testNewFeedback.datePurchase}
        opinion={testNewFeedback.opinion}
        photoPath={testNewFeedback.photoPath}
      />
    );
    expect(screen.getByText(/Elena/)).toBeInTheDocument();
  });
});

describe('Form fields rendering', () => {
  it('renders form fields', () => {
    render(<Quiz handleNewFeedback={testHandleNewFeedbackFieldsRender} />);
    expect(screen.getByLabelText('My name...')).toBeInTheDocument();
    expect(screen.getByLabelText('Date of purchase...')).toBeInTheDocument();
    expect(screen.getByLabelText('I bought...')).toBeInTheDocument();
    expect(screen.getByLabelText('Good')).toBeInTheDocument();
    expect(screen.getByLabelText('Bad')).toBeInTheDocument();
  });
});

describe('Form input in the document', () => {
  it('correct inputs in the document', () => {
    render(<Quiz handleNewFeedback={testHandleNewFeedbackFieldsRender} />);
    expect(screen.getByLabelText('My name...')).toBeInTheDocument();
    expect(screen.getByLabelText('Date of purchase...')).toBeInTheDocument();
    expect(screen.getByLabelText('I bought...')).toBeInTheDocument();
    expect(screen.getByLabelText('Good')).toBeInTheDocument();
    expect(screen.getByLabelText('Bad')).toBeInTheDocument();
  });
});

it('Submit button', () => {
  render(<Quiz handleNewFeedback={testHandleNewFeedbackFieldsRender} />);
  const button = screen.getByText('Send feedback') as HTMLButtonElement;

  fireEvent(
    getByText(button, 'Send feedback'),
    new MouseEvent('click', {
      bubbles: true,
    })
  );

  expect(button.textContent).toBe('Send feedback');
});

/*---------------------------*/

describe('Form input event', () => {
  it('Correct form inputs events', async () => {
    render(<Quiz handleNewFeedback={testHandleNewFeedbackFieldsRender} />);
    await screen.findByText(/My name.../);
    expect(screen.queryByText(/Elena/)).toBeNull();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Elena' },
    });

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Elena' },
    });
    expect(screen.getByDisplayValue('Elena') as HTMLInputElement).toBeInTheDocument();
  });
});

/*---------------------------*/

describe('Validation date', () => {
  it('valid date', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(dateCheck('01.01.2022')).toBeTruthy();
    expect(dateCheck('01.01.2000')).toBeFalsy();
  });
});

describe('Validation name', () => {
  it('valid name', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(nameCheck('Elena')).toBeTruthy();
    expect(nameCheck('E')).toBeFalsy();
  });
});

describe('Validation product select', () => {
  it('valid product select', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(selectCheck('Solgar - Omega3')).toBeTruthy();
    expect(selectCheck('not selected')).toBeFalsy();
  });
});

describe('Validation radio', () => {
  it('valid radio', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(radioCheck(true, false)).toBeTruthy();
    expect(radioCheck(false, false)).toBeFalsy();
  });
});

describe('Validation file load', () => {
  it('valid file load', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(fileCheck('img.jpg')).toBeTruthy();
  });
});

describe('Validation agreement', () => {
  it('valid agreement', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(agreementCheck(true)).toBeTruthy();
    expect(agreementCheck(false)).toBeFalsy();
  });
});
