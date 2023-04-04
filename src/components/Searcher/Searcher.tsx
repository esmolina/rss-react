import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Searcher.module.scss';
import SearchIcon from '../../assets/icons/search.svg';

const cx = classNames.bind(styles);

function Searcher() {
  const searcherRef = useRef<HTMLInputElement>(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const previousInputValue = localStorage.getItem('inputValue') || '';

    if (searcherRef.current) {
      const refVariable: HTMLInputElement = searcherRef.current;
      // the variable refVariable instead just searcherRef.current is needed because the value changes synchronously. The value may change several times before rerender (Eslint react-hooks/exhaustive-deps)
      refVariable.value = previousInputValue;
      return () => {
        localStorage.setItem('inputValue', refVariable.value);
      };
    }
  }, []);

  return (
    <div className={cx('search__wrapper')}>
      <input
        ref={searcherRef}
        type="text"
        placeholder="Search..."
        className={cx('search__input')}
      />
      <img src={SearchIcon} alt="Search icon" className={cx('search__input-icon')} />
    </div>
  );
}

export default Searcher;
