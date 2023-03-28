import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Quiz from '../components/Feedback/Quiz/Quiz';
import { FeedbackCardProps } from '../components/Feedback/FeedbackCard/FeedbackCardTypes';
import {
  agreementCheck,
  dateCheck,
  fileCheck,
  nameCheck,
  radioCheck,
  selectCheck,
} from '../components/Feedback/Quiz/QuizValidation';

const testHandleNewFeedbackFieldsRender = (newFeedback: FeedbackCardProps): void => {
  // eslint-disable-next-line no-param-reassign
  newFeedback.userName = 'Ivan';
};

describe('Form fields rendering', () => {
  it('renders form fields', () => {
    render(<Quiz handleNewFeedback={testHandleNewFeedbackFieldsRender} />);
    expect(screen.getByLabelText('My name...')).toBeInTheDocument();
    expect(screen.getByLabelText('Date of purchase...')).toBeInTheDocument();
    expect(screen.getByLabelText('I bought...')).toBeInTheDocument();
  });
});

describe('Validation name', () => {
  it('valid name', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(dateCheck('01.01.2022')).toBeTruthy();
    expect(dateCheck('01.01.2000')).toBeFalsy();
  });
});

describe('Validation date', () => {
  it('valid date', () => {
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
