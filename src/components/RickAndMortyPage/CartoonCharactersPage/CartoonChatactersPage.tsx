import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './CartoonCharactersPage.module.scss';
import { CartoonPageProps } from './CartoonCharactersPageTypes';
import { useAppDispatch, useAppSelector } from '../../../customHooks/reduxStoreHooks';
import CartoonCardsList from '../CartoonCardsList/CartoonCardsList';
import Loader from '../../Elements/Loader/Loader';
import Searcher from '../../Searcher/Searcher';
import { SearchSlice } from '../../../store/reducers/SearchSlice/SearchSlice';
import { useGetSearchedCharactersQuery } from '../../../store/services/CharactersService';
import NotFoundMessage from '../../NotFoundMessage/NotFoundMessage';

const cx = classNames.bind(styles);

function CartoonPage({ handleGoAnotherChange }: CartoonPageProps) {
  const dispatch = useAppDispatch();
  const { searchRequest } = useAppSelector((state) => state.searchReducer);
  const { setStoreSearchValue } = SearchSlice.actions;

  const {
    data: fetchedSearchCharacters,
    isLoading,
    isError,
  } = useGetSearchedCharactersQuery(searchRequest);

  useEffect(() => {
    handleGoAnotherChange('API');
  });

  const submitSearchInput = (inputValue: string) => {
    dispatch(setStoreSearchValue(inputValue));
  };

  return (
    <div className={cx('cartoon-page-wrapper')}>
      <Searcher handleSubmitSearch={submitSearchInput} />
      {isError && <NotFoundMessage />}
      {isLoading ? (
        <Loader />
      ) : (
        fetchedSearchCharacters &&
        !isError && <CartoonCardsList characters={fetchedSearchCharacters.results} />
      )}
    </div>
  );
}

export default CartoonPage;
