import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CartoonCardsList.module.scss';
import { CartoonCardsListProps } from './CartoonCardsListTypes';
import { Character } from '../RickAndMortyTypes';
import CartoonLittleCard from '../LittleCard/CartoonLittleCard';
import NotFoundMessage from '../../NotFoundMessage/NotFoundMessage';
import { useGetSelectedCharacterQuery } from '../../../store/services/CharactersService';
import ModalPortal from '../ModalPortal/ModalPortal';

const cx = classNames.bind(styles);
const portal = document.getElementById('portal') as HTMLDivElement;

function CartoonCardsList({ characters }: CartoonCardsListProps) {
  const [selectedCharacter, setSelectedCharacter] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);
  const { data: fetchedCharacter, isLoading } = useGetSelectedCharacterQuery(selectedCharacter);

  const clickLittleCardHandler = (id: number) => {
    setSelectedCharacter(id);
    setShowModal(true);
  };

  return (
    <div>
      {showModal && fetchedCharacter && portal && !isLoading && (
        <ModalPortal
          character={fetchedCharacter}
          setShowModal={setShowModal}
          container={portal}
          isLoadedModal={!isLoading}
        />
      )}
      {characters.length === 0 && <NotFoundMessage />}
      {characters && (
        <div className={cx('cartoon-grid')}>
          {characters.map((character: Character) => {
            return (
              <CartoonLittleCard
                character={character}
                cardClickHandler={clickLittleCardHandler}
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
