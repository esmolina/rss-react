import React from 'react';
import classNames from 'classnames/bind';
import styles from './Searcher.module.scss';
import { SearcherProps } from './SearcherTypes';
import SearchIcon from '../../assets/icons/search.svg';

const cx = classNames.bind(styles);

class Searcher extends React.Component<SearcherProps> {
  render() {
    return (
      <div className={cx('search__wrapper')}>
        <input type="text" placeholder="Search..." className={cx('search__input')} />
        <img src={SearchIcon} alt="Search icon" className={cx('search__input-icon')} />
      </div>
    );
  }
}

export default Searcher;
