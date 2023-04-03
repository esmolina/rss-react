import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Searcher.module.scss';
import SearchIcon from '../../assets/icons/search.svg';

const cx = classNames.bind(styles);

function Searcher() {
  const [inputValue, setInputValue] = useState(localStorage.getItem('inputValue') || '');

  useEffect(() => {
    localStorage.setItem('inputValue', inputValue);
  });

  const handleChangeInput = (eventInput: React.ChangeEvent<HTMLInputElement>) => {
    eventInput.preventDefault();
    setInputValue(eventInput.target.value);
  };

  return (
    <div className={cx('search__wrapper')}>
      <input
        type="text"
        placeholder="Search..."
        className={cx('search__input')}
        onChange={handleChangeInput}
        value={inputValue}
      />
      <img src={SearchIcon} alt="Search icon" className={cx('search__input-icon')} />
    </div>
  );
}

export default Searcher;
