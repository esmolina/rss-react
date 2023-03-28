import React from 'react';
import classNames from 'classnames/bind';
import { CatalogWrapperProps } from './CatalogWrapperTypes';
import styles from './CatalogWraper.module.scss';
import Searcher from '../../Searcher/Searcher';
import CardsList from '../CardsList/CardsList';

const cx = classNames.bind(styles);

class CatalogWrapper extends React.Component<CatalogWrapperProps> {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.handleGoAnotherChange('Catalog');
  }

  render() {
    const { productsData } = this.props;
    return (
      <div className={cx('catalog-wrapper')}>
        <Searcher />
        <CardsList productsData={productsData} />
      </div>
    );
  }
}

export default CatalogWrapper;
