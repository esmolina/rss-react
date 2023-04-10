import React from 'react';
import classNames from 'classnames/bind';
import styles from './CartoonCardsList.module.scss';
import { CartoonCardsListProps } from './CartoonCardsListTypes';
import { Character } from '../RickAndMortyTypes';
import CartoonLittleCard from '../LittleCard/CartoonLittleCard';

const cx = classNames.bind(styles);

function CartoonCardsList({ characters, cardClickHandler }: CartoonCardsListProps) {
  return (
    <div className={cx('cartoon-grid')}>
      {characters.map((character: Character) => {
        return (
          <CartoonLittleCard
            character={character}
            cardClickHandler={cardClickHandler}
            key={character.id}
          />
        );
      })}
    </div>
  );
}

export default CartoonCardsList;
