import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './CartoonCharactersPage.module.scss';
import { CartoonPageProps } from './CartoonCharactersPageTypes';
import { useAppDispatch, useAppSelector } from '../../../customHooks/reduxStoreHooks';
import CartoonCardsList from '../CartoonCardsList/CartoonCardsList';
import Loader from '../../Elements/Loader/Loader';
import Searcher from '../../Searcher/Searcher';
import { SearchSlice } from '../../../store/reducers/SearchSlice/SearchSlice';
import NotFoundMessage from '../../NotFoundMessage/NotFoundMessage';
import { fetchCharacters } from '../../../store/reducers/ActionCreators';

const cx = classNames.bind(styles);

function CartoonPage({ handleGoAnotherChange }: CartoonPageProps) {
  const dispatch = useAppDispatch();
  const { setStoreSearchValue } = SearchSlice.actions;
  const { searchRequest, searchResponse, isLoaded, error } = useAppSelector(
    (state) => state.searchReducer
  );

  useEffect(() => {
    handleGoAnotherChange('API');
  });

  useEffect(() => {
    dispatch(fetchCharacters(searchRequest));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitSearchInput = (inputValue: string) => {
    dispatch(setStoreSearchValue(inputValue));
    dispatch(fetchCharacters(inputValue));
  };

  return (
    <div className={cx('cartoon-page-wrapper')}>
      <Searcher handleSubmitSearch={submitSearchInput} />
      {error && <NotFoundMessage />}
      {isLoaded ? (
        <Loader />
      ) : (
        searchResponse && !error && <CartoonCardsList characters={searchResponse.results} />
      )}
    </div>
  );
}

export default CartoonPage;
