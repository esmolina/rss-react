import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Quiz.module.scss';
import products from '../../../dataBase/products';
import Button from '../../Elements/Buttons/Button';
import { QuizProps } from './QuizTypes';
import {
  agreementCheck,
  dateCheck,
  fileCheck,
  nameCheck,
  radioCheck,
  selectCheck,
} from './QuizValidation';

const cx = classNames.bind(styles);

function Quiz({ handleNewFeedback }: QuizProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const productRef = useRef<HTMLSelectElement>(null);
  const goodScoreRef = useRef<HTMLInputElement>(null);
  const badScoreRef = useRef<HTMLInputElement>(null);
  const photoRef = useRef<HTMLInputElement>(null);
  const agreementRef = useRef<HTMLInputElement>(null);

  const userName = '';
  const userDate = '';
  const userProduct = '';
  const userFilePath = '';
  const [nameIsValid, setNameIsValid] = useState(true);
  const [dateIsValid, setDateIsValid] = useState(true);
  const [productIsValid, setProductIsValid] = useState(true);
  const [estimateIsValid, setEstimateIsValid] = useState(true);
  const [fileCoordsIsValid, setFileCoordsIsValid] = useState(true);
  const [agreementIsValid, setAgreementIsValid] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const readImg = (callback: (base64: string) => void) => {
    if (photoRef.current && photoRef.current.files) {
      const file = photoRef.current.files.item(0);
      if (!file) return;
      const reader = new FileReader();

      reader.onload = () => {
        callback(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const clearForm = () => {
    nameRef.current!.value = '';
    dateRef.current!.value = '';
    productRef.current!.value = 'not selected';
    photoRef.current!.value = '';
    goodScoreRef.current!.checked = false;
    badScoreRef.current!.checked = false;
    agreementRef.current!.checked = false;

    setNameIsValid(true);
    setDateIsValid(true);
    setProductIsValid(true);
    setEstimateIsValid(true);
    setFileCoordsIsValid(true);
    setAgreementIsValid(true);
    setShowMessage(false);
  };

  const handleClickSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    const resultCheckName = nameCheck(nameRef.current?.value || '');
    const resultCheckDate = dateCheck(dateRef.current?.value || '');
    const resultCheckSelect = selectCheck(productRef.current?.value || '');
    const resultCheckRadio = radioCheck(
      goodScoreRef.current?.checked as boolean,
      badScoreRef.current?.checked as boolean
    );
    const resultCheckFile = fileCheck(photoRef.current?.value || '');
    const resultCheckAgreement = agreementCheck(agreementRef.current?.checked || false);
    const finishResult =
      resultCheckName &&
      resultCheckDate &&
      resultCheckSelect &&
      resultCheckRadio &&
      resultCheckFile &&
      resultCheckAgreement;

    setNameIsValid(resultCheckName);
    setDateIsValid(resultCheckDate);
    setProductIsValid(resultCheckSelect);
    setEstimateIsValid(resultCheckRadio);
    setFileCoordsIsValid(resultCheckFile);
    setAgreementIsValid(resultCheckAgreement);
    setShowMessage(finishResult);

    const renderCard = (base64: string) => {
      const newFeedbackName = nameRef.current?.value || '';
      const newFeedbackDate = dateRef.current?.value || '';
      const newFeedbackProduct = productRef.current?.value || '';

      let newFeedbackOpinion = '';
      if (goodScoreRef.current?.checked) {
        newFeedbackOpinion = 'good';
      }
      if (badScoreRef.current?.checked) {
        newFeedbackOpinion = 'bad';
      }

      const newFeedback = {
        userName: newFeedbackName,
        product: newFeedbackProduct,
        datePurchase: newFeedbackDate,
        opinion: newFeedbackOpinion,
        photoPath: base64 || '',
      };

      handleNewFeedback(newFeedback);
    };

    if (finishResult) {
      readImg(renderCard);
      setTimeout(clearForm, 3000);
    }
  };

  const optionsList: Array<string> = ['not selected'];

  products.map((product) => optionsList.push(`${product.brand} - ${product.name}`));

  return (
    <div className={cx('quiz__wrapper')}>
      <form>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="input-quiz-name" className={cx('label')}>
          My name...
        </label>
        <input
          ref={nameRef}
          type="text"
          id="input-quiz-name"
          placeholder="John Doe"
          className={cx('input')}
          required
          defaultValue={userName}
        />
        {!nameIsValid && <span className={cx('input__span')}>Please, correct data</span>}

        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="input-quiz-date" className={cx('label')}>
          Date of purchase...
        </label>
        <input
          ref={dateRef}
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

        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="input-quiz-select" className={cx('label')}>
          I bought...
        </label>
        <select
          ref={productRef}
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

        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="input-quiz-radio" className={cx('label')}>
          I think this product deserves estimation...
        </label>

        <p className={cx('input__radio')}>
          <input
            ref={goodScoreRef}
            type="radio"
            id="input-quiz-radio-good"
            className={cx('input__radio')}
            name="score"
            value="good"
          />

          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="input-quiz-radio-good" className={cx('label__radio')}>
            Good
          </label>
        </p>

        <p className={cx('input__radio')}>
          <input
            ref={badScoreRef}
            type="radio"
            id="input-quiz-radio-bad"
            className={cx('input__radio')}
            name="score"
            value="bad"
          />

          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="input-quiz-radio-bad" className={cx('label__radio')}>
            Bad
          </label>
        </p>

        {!estimateIsValid && <span className={cx('input__span')}>Please, enter score</span>}

        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="input-quiz-file" className={cx('label')}>
          Add photo
        </label>
        <input ref={photoRef} type="file" name="input-quiz-file" defaultValue={userFilePath} />
        {!fileCoordsIsValid && <span className={cx('input__span')}>Please, download photo</span>}

        <p>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="input-quiz-checkbox" className={cx('label')}>
            I agree to the processing of my data
          </label>
          <input
            ref={agreementRef}
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
          handleSubmit={handleClickSubmit}
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

export default Quiz;
