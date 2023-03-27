import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Quiz.module.scss';
import products from '../../../dataBase/products';
import Button from '../../Elements/Buttons/Button';

const cx = classNames.bind(styles);

class Quiz extends Component<unknown> {
  quizRef: React.RefObject<HTMLFormElement> = React.createRef();

  nameRef: React.RefObject<HTMLInputElement> = React.createRef();

  dateRef: React.RefObject<HTMLInputElement> = React.createRef();

  productRef: React.RefObject<HTMLSelectElement> = React.createRef();

  goodScoreRef: React.RefObject<HTMLInputElement> = React.createRef();

  badScoreRef: React.RefObject<HTMLInputElement> = React.createRef();

  photoRef: React.RefObject<HTMLInputElement> = React.createRef();

  agreementRef: React.RefObject<HTMLInputElement> = React.createRef();

  render(): React.ReactNode {
    const optionsList: Array<string> = [];
    products.map((product) => optionsList.push(`${product.brand} - ${product.name}`));
    return (
      <div className={cx('quiz__wrapper')}>
        <form ref={this.quizRef}>
          <label htmlFor="input-quiz-name" className={cx('label')}>
            My name...
          </label>
          <input
            ref={this.nameRef}
            type="text"
            id="input-quiz-name"
            placeholder="John Doe"
            className={cx('input')}
          />
          <span className={cx('input__span')}>Please, correct data</span>

          <label htmlFor="input-quiz-date" className={cx('label')}>
            Date of purchase...
          </label>
          <input ref={this.dateRef} type="date" id="input-quiz-date" className={cx('input')} />
          <span className={cx('input__span')}>Please, correct data</span>

          <label htmlFor="input-quiz-select" className={cx('label')}>
            I bought...
          </label>
          <select
            ref={this.productRef}
            name="input-select"
            id="input-quiz-select"
            className={cx('select')}
            defaultValue=""
          >
            {optionsList.map((option) => {
              return (
                <option key={`key-option-${option}`} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
          <span className={cx('input__span')}>Please select the product</span>

          <label htmlFor="input-quiz-radio" className={cx('label')}>
            I think this product deserves estimation...
          </label>

          <p className={cx('input__radio')}>
            <input
              ref={this.goodScoreRef}
              type="radio"
              id="input-quiz-radio-good"
              className={cx('input__radio')}
              name="score"
              value="good"
            />
            <label htmlFor="input-quiz-radio" className={cx('label__radio')}>
              Good
            </label>
          </p>

          <p className={cx('input__radio')}>
            <input
              ref={this.badScoreRef}
              type="radio"
              id="input-quiz-radio-bad"
              className={cx('input__radio')}
              name="score"
              value="bad"
            />
            <label htmlFor="input-quiz-radio" className={cx('label__radio')}>
              Bad
            </label>
          </p>

          <span className={cx('input__span')}>Please, enter score</span>

          <label htmlFor="input-quiz-file" className={cx('label')}>
            Add photo
          </label>
          <input ref={this.photoRef} type="file" name="input-quiz-file" />

          <p>
            <label htmlFor="input-quiz-checkbox" className={cx('label')}>
              I agree to the processing of my data
            </label>
            <input
              ref={this.agreementRef}
              type="checkbox"
              id="input-quiz-checkbox"
              className={cx('input__checkbox')}
            />
            <span className={cx('input__span')}>
              Without your consent, we will not be able to publish a response
            </span>
          </p>

          <Button
            buttonType="submit"
            buttonText="Send feedback"
            customClass="button__quiz-submit"
          />
        </form>
      </div>
    );
  }
}

export default Quiz;
