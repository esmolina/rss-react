import React from 'react';
import classNames from 'classnames/bind';
import styles from './CartoonCardsList.module.scss';
import { CartoonCardsListProps } from './CartoonCardsListTypes';
import { Character } from '../RickAndMortyTypes';
import CartoonLittleCard from '../LittleCard/CartoonLittleCard';

const cx = classNames.bind(styles);

function CartoonCardsList({ characters }: CartoonCardsListProps) {
  return (
    <div data-testid="test-cards-list" className={cx('catalog-grid')}>
      {characters.map((character: Character) => {
        return <CartoonLittleCard character={character} key={character.id} />;
      })}
    </div>
  );
}

export default CartoonCardsList;
