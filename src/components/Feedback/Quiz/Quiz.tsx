import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Quiz.module.scss';
import products from '../../../dataBase/products';
import Button from '../../Elements/Buttons/Button';
import { QuizProps, QuizState } from './QuizTypes';
import {
  agreementCheck,
  dateCheck,
  fileCheck,
  nameCheck,
  radioCheck,
  selectCheck,
} from './QuizValidation';

const cx = classNames.bind(styles);

class Quiz extends Component<QuizProps, QuizState> {
  nameRef: React.RefObject<HTMLInputElement> = React.createRef();

  dateRef: React.RefObject<HTMLInputElement> = React.createRef();

  productRef: React.RefObject<HTMLSelectElement> = React.createRef();

  goodScoreRef: React.RefObject<HTMLInputElement> = React.createRef();

  badScoreRef: React.RefObject<HTMLInputElement> = React.createRef();

  photoRef: React.RefObject<HTMLInputElement> = React.createRef();

  agreementRef: React.RefObject<HTMLInputElement> = React.createRef();

  constructor(props: QuizProps) {
    super(props);
    this.state = {
      userName: '',
      userDate: '',
      userProduct: '',
      userFilePath: '',
      nameIsValid: true,
      dateIsValid: true,
      productIsValid: true,
      estimateIsValid: true,
      fileCoordsIsValid: true,
      agreementIsValid: true,
      showMessage: false,
    };
  }

  readImg = (callback: (base64: string) => void) => {
    if (this.photoRef.current && this.photoRef.current.files) {
      const file = this.photoRef.current.files.item(0);
      if (!file) return;
      const reader = new FileReader();

      reader.onload = () => {
        callback(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  clearForm = () => {
    this.nameRef.current!.value = '';
    this.dateRef.current!.value = '';
    this.productRef.current!.value = 'not selected';
    this.photoRef.current!.value = '';
    this.goodScoreRef.current!.checked = false;
    this.badScoreRef.current!.checked = false;
    this.agreementRef.current!.checked = false;

    this.setState({
      nameIsValid: true,
      dateIsValid: true,
      productIsValid: true,
      estimateIsValid: true,
      fileCoordsIsValid: true,
      agreementIsValid: true,
      showMessage: false,
    });
  };

  handleClickSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    const resultCheckName = nameCheck(this.nameRef.current?.value || '');
    const resultCheckDate = dateCheck(this.dateRef.current?.value || '');
    const resultCheckSelect = selectCheck(this.productRef.current?.value || '');
    const resultCheckRadio = radioCheck(
      this.goodScoreRef.current?.checked as boolean,
      this.badScoreRef.current?.checked as boolean
    );
    const resultCheckFile = fileCheck(this.photoRef.current?.value || '');
    const resultCheckAgreement = agreementCheck(this.agreementRef.current?.checked || false);
    const finishResult =
      resultCheckName &&
      resultCheckDate &&
      resultCheckSelect &&
      resultCheckRadio &&
      resultCheckFile &&
      resultCheckAgreement;

    this.setState({
      nameIsValid: resultCheckName,
      dateIsValid: resultCheckDate,
      productIsValid: resultCheckSelect,
      estimateIsValid: resultCheckRadio,
      fileCoordsIsValid: resultCheckFile,
      agreementIsValid: resultCheckAgreement,
      showMessage: finishResult,
    });

    const renderCard = (base64: string) => {
      const newFeedbackName = this.nameRef.current?.value || '';
      const newFeedbackDate = this.dateRef.current?.value || '';
      const newFeedbackProduct = this.productRef.current?.value || '';

      let newFeedbackOpinion = '';
      if (this.goodScoreRef.current?.checked) {
        newFeedbackOpinion = 'good';
      }
      if (this.badScoreRef.current?.checked) {
        newFeedbackOpinion = 'bad';
      }

      const newFeedback = {
        userName: newFeedbackName,
        product: newFeedbackProduct,
        datePurchase: newFeedbackDate,
        opinion: newFeedbackOpinion,
        photoPath: base64 || '',
      };

      this.props.handleNewFeedback(newFeedback);
    };

    if (finishResult) {
      this.readImg(renderCard);
      setTimeout(this.clearForm, 3000);
    }
  };

  render() {
    const optionsList: Array<string> = ['not selected'];

    products.map((product) => optionsList.push(`${product.brand} - ${product.name}`));
    const {
      userName,
      userDate,
      userProduct,
      userFilePath,
      nameIsValid,
      dateIsValid,
      productIsValid,
      estimateIsValid,
      fileCoordsIsValid,
      agreementIsValid,
      showMessage,
    } = this.state;

    return (
      <div className={cx('quiz__wrapper')}>
        <form>
          <label htmlFor="input-quiz-name" className={cx('label')}>
            My name...
          </label>
          <input
            ref={this.nameRef}
            type="text"
            id="input-quiz-name"
            placeholder="John Doe"
            className={cx('input')}
            required
            defaultValue={userName}
          />
          {!nameIsValid && <span className={cx('input__span')}>Please, correct data</span>}

          <label htmlFor="input-quiz-date" className={cx('label')}>
            Date of purchase...
          </label>
          <input
            ref={this.dateRef}
            type="date"
            id="input-quiz-date"
            className={cx('input')}
            autoComplete="off"
            required
            defaultValue={userDate}
          />
          {!dateIsValid && (
            <span className={cx('input__span')}>
              Please, correct data.The purchase cannot be earlier than 01.01.2020 and later than the
              current date
            </span>
          )}

          <label htmlFor="input-quiz-select" className={cx('label')}>
            I bought...
          </label>
          <select
            ref={this.productRef}
            name="input-select"
            id="input-quiz-select"
            className={cx('select')}
            defaultValue={userProduct}
            required
          >
            {optionsList.map((option) => {
              return (
                <option key={`key-option-${option}`} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
          {!productIsValid && <span className={cx('input__span')}>Please select the product</span>}

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
            <label htmlFor="input-quiz-radio-good" className={cx('label__radio')}>
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
            <label htmlFor="input-quiz-radio-bad" className={cx('label__radio')}>
              Bad
            </label>
          </p>

          {!estimateIsValid && <span className={cx('input__span')}>Please, enter score</span>}

          <label htmlFor="input-quiz-file" className={cx('label')}>
            Add photo
          </label>
          <input
            ref={this.photoRef}
            type="file"
            name="input-quiz-file"
            defaultValue={userFilePath}
          />
          {!fileCoordsIsValid && <span className={cx('input__span')}>Please, download photo</span>}

          <p>
            <label htmlFor="input-quiz-checkbox" className={cx('label')}>
              I agree to the processing of my data
            </label>
            <input
              ref={this.agreementRef}
              type="checkbox"
              id="input-quiz-checkbox"
              className={cx('input__checkbox')}
              required
            />
            {!agreementIsValid && (
              <span className={cx('input__span')}>
                Without your consent, we will not be able to publish a response
              </span>
            )}
          </p>

          <Button
            buttonType="submit"
            buttonText="Send feedback"
            customClass="button__quiz-submit"
            // eslint-disable-next-line react/jsx-boolean-value
            isSubmit={true}
            handleSubmit={this.handleClickSubmit}
          />

          {showMessage && (
            <span className={cx('form-feel__message')}>
              Excellent. Your review has been published
            </span>
          )}
        </form>
      </div>
    );
  }
}

export default Quiz;
