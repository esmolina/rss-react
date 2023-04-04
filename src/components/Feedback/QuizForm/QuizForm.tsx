import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import React from 'react';
import ReactSelect from 'react-select';
import styles from './Quiz.module.scss';
import { FeedbackCardProps } from '../FeedbackCard/FeedbackCardTypes';
import { QuizProps } from '../Quiz/QuizTypes';
import { FormFields, ProductOptionsInterface } from './QuizFormTypes';
import { getOptionsValue, productOptionsList } from './QuizFormUtils';

const cx = classNames.bind(styles);

function QuizForm({ handleNewFeedback }: QuizProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    control,
  } = useForm<FormFields>({
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    const newFeedback: FeedbackCardProps = {
      userName: getValues('name'),
      product: `${data.product}`,
      datePurchase: getValues('date'),
      opinion: getValues('estimate'),
      file: data.file[0],
    };
    // eslint-disable-next-line no-alert
    alert('Excellent. Your review has been published');
    handleNewFeedback(newFeedback);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cx('quiz__wrapper')}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="input-quiz-name" className={cx('label')}>
        My name...
      </label>
      <input
        type="text"
        id="input-quiz-name"
        placeholder="John Doe"
        className={cx('input')}
        {...register('name', { required: 'Please, correct data', minLength: 2 })}
      />
      {errors.name && <span className={cx('input__span')}>Min length 2 symbols</span>}

      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="input-quiz-date" className={cx('label')}>
        Date of purchase...
      </label>
      <input
        type="date"
        id="input-quiz-date"
        className={cx('input')}
        autoComplete="off"
        {...register('date', {
          required: 'Please, enter data',
          min: '01.01.2020',
          max: new Date().toDateString(),
        })}
      />
      {errors.date && (
        <span className={cx('input__span')}>
          Please, correct data.The purchase cannot be earlier than 01.01.2020 and later than the
          current date
        </span>
      )}

      <Controller
        control={control}
        name="product"
        rules={{ required: 'Please select the product' }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="input-quiz-select" className={cx('label')}>
              I bought...
            </label>
            <ReactSelect
              id="input-quiz-select"
              className={cx('select')}
              placeholder=""
              options={productOptionsList}
              value={getOptionsValue(value)}
              onChange={(newValue) => onChange((newValue as ProductOptionsInterface).value)}
            />
            {error && <span className={cx('input__span')}>Please select the product</span>}
          </div>
        )}
      />

      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="input-quiz-radio" className={cx('label')}>
        I think this product deserves estimation...
      </label>

      <p className={cx('input__radio')}>
        <input
          type="radio"
          id="input-quiz-radio-good"
          className={cx('input__radio')}
          value="good"
          {...register('estimate', {
            required: 'Please, enter your sore',
          })}
        />

        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="input-quiz-radio-good" className={cx('label__radio')}>
          Good
        </label>
      </p>

      <p className={cx('input__radio')}>
        <input
          type="radio"
          id="input-quiz-radio-bad"
          className={cx('input__radio')}
          value="bad"
          {...register('estimate', {
            required: 'Please, enter your sore',
          })}
        />

        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="input-quiz-radio-bad" className={cx('label__radio')}>
          Bad
        </label>
      </p>

      {errors.estimate && <span className={cx('input__span')}>Please, enter score</span>}

      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="input-quiz-file" className={cx('label')}>
        Add photo
      </label>
      <input
        type="file"
        id="input-quiz-date"
        className={cx('input')}
        {...register('file', {
          required: 'Please, download photo',
        })}
      />
      {errors.file && <span className={cx('input__span')}>Please, download photo</span>}

      <p>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="input-quiz-checkbox" className={cx('label')}>
          I agree to the processing of my data
        </label>
        <input
          type="checkbox"
          id="input-quiz-checkbox"
          className={cx('input__checkbox')}
          {...register('agreement', {
            required: 'Please, take your agreement',
          })}
        />
        {errors.agreement && (
          <span className={cx('input__span')}>
            Without your consent, we will not be able to publish a response
          </span>
        )}
      </p>

      <input type="submit" className={cx('button__quiz-submit')} />
    </form>
  );
}

export default QuizForm;
