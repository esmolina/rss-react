import React from 'react';
import classNames from 'classnames/bind';
import styles from './CartoonCardsList.module.scss';
import { CartoonCardsListProps } from './CartoonCardsListTypes';
import { Character } from '../RickAndMortyTypes';
import CartoonLittleCard from '../LittleCard/CartoonLittleCard';
import NotFoundMessage from '../../NotFoundMessage/NotFoundMessage';

const cx = classNames.bind(styles);

function CartoonCardsList({ characters, cardClickHandler }: CartoonCardsListProps) {
  return (
    <div>
      {characters.length === 0 && <NotFoundMessage />}
      {characters && (
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
      )}
    </div>
  );
}

export default CartoonCardsList;
