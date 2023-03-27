import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Quiz.module.scss';
import products from '../../../dataBase/products';

const cx = classNames.bind(styles);

class Quiz extends Component<unknown> {
  render(): React.ReactNode {
    const optionsList: Array<string> = [];
    const score: Array<number> = [1, 2, 3, 4, 5];
    products.map((product) => optionsList.push(`${product.brand} - ${product.name}`));
    return (
      <div className={cx('quiz__wrapper')}>
        <form>
          <label htmlFor="input-quiz-name" className={cx('label')}>
            My name...
          </label>
          <input type="text" id="input-quiz-name" placeholder="John Doe" className={cx('input')} />
          <span className={cx('input__span')}>Please, correct data</span>

          <label htmlFor="input-quiz-date" className={cx('label')}>
            Date of purchase...
          </label>
          <input type="date" id="input-quiz-date" className={cx('input')} />
          <span className={cx('input__span')}>Please, correct data</span>

          <label htmlFor="input-quiz-select" className={cx('label')}>
            I bought...
          </label>
          <select name="input-select" id="input-quiz-select" className={cx('select')}>
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
          {score.map((estimation) => {
            return (
              <p key={`estimation-${estimation}`} className={cx('input__radio')}>
                <input
                  type="radio"
                  id={`input-quiz-radio${estimation}`}
                  className={cx('input__radio')}
                  name="score"
                  value={estimation}
                />
                <label htmlFor="input-quiz-radio" className={cx('label__radio')}>
                  {estimation}
                </label>
              </p>
            );
          })}
          <span className={cx('input__span')}>Please, enter score</span>

          <label htmlFor="input-quiz-file" className={cx('label')}>
            Add photo
          </label>
          <input type="file" name="input-quiz-file" />

          <label htmlFor="input-quiz-checkbox" className={cx('label')}>
            I agree to the processing of my data
          </label>
          <input type="checkbox" id="input-quiz-checkbox" className={cx('input__checkbox')} />
          <span className={cx('input__span')}>
            Without your consent, we will not be able to publish a response
          </span>
        </form>
      </div>
    );
  }
}

export default Quiz;
