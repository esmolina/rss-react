import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import styles from './Searcher.module.scss';
import { SearcherProps, SearchFormFields } from './SearcherTypes';

const cx = classNames.bind(styles);

interface DefaultValues {
  searchRequest: string;
}

function Searcher({ handleSubmitSearch }: SearcherProps) {
  const inputSavedValue = localStorage.getItem('inputValue') || '';
  const defaultValues: DefaultValues = {
    searchRequest: inputSavedValue,
  };

  const { register, handleSubmit, getValues } = useForm<SearchFormFields>({
    mode: 'onSubmit',
    defaultValues,
  });

  const onSubmit: SubmitHandler<SearchFormFields> = () => {
    const inputSubmitValue = getValues('searchRequest');
    handleSubmitSearch(inputSubmitValue);
    localStorage.setItem('inputValue', inputSubmitValue);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cx('search__wrapper')}>
      <input
        type="text"
        id="input-search"
        data-testid="quiz-name-input"
        placeholder="Search...(enter character name)"
        className={cx('search__input')}
        {...register('searchRequest')}
      />
    </form>
  );
}

export default Searcher;
