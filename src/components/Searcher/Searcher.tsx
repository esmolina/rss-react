import React from 'react';
import classNames from 'classnames/bind';
import styles from './Searcher.module.scss';
import { SearcherState } from './SearcherTypes';
import SearchIcon from '../../assets/icons/search.svg';

const cx = classNames.bind(styles);

class Searcher extends React.Component<Record<string, never>, SearcherState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { inputValue: localStorage.getItem('inputValue') || '' };
  }

  componentWillUnmount() {
    // eslint-disable-next-line react/destructuring-assignment
    localStorage.setItem('inputValue', this.state.inputValue);
  }

  handleChangeInput = (eventInput: React.ChangeEvent<HTMLInputElement>) => {
    eventInput.preventDefault();
    this.setState({ inputValue: eventInput.target.value });
    // eslint-disable-next-line react/destructuring-assignment
    // localStorage.setItem('inputValue', eventInput.target.value);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className={cx('search__wrapper')}>
        <input
          type="text"
          placeholder="Search..."
          className={cx('search__input')}
          onChange={this.handleChangeInput}
          value={inputValue}
        />
        <img src={SearchIcon} alt="Search icon" className={cx('search__input-icon')} />
      </div>
    );
  }
}

export default Searcher;
