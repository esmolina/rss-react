import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CartoonCardsList.module.scss';
import { CartoonCardsListProps } from './CartoonCardsListTypes';
import { Character } from '../RickAndMortyTypes';
import CartoonLittleCard from '../LittleCard/CartoonLittleCard';
import NotFoundMessage from '../../NotFoundMessage/NotFoundMessage';
import { useAppDispatch, useAppSelector } from '../../../customHooks/reduxStoreHooks';
import { fetchCharacter } from '../../../store/reducers/ActionCreators';
import ModalPortal from '../ModalPortal/ModalPortal';

const cx = classNames.bind(styles);
const portal = document.getElementById('portal') as HTMLDivElement;

function CartoonCardsList({ characters }: CartoonCardsListProps) {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const { selectedCharacter, isLoaded } = useAppSelector((state) => state.modalReducer);

  const clickLittleCardHandler = (id: number) => {
    dispatch(fetchCharacter(id));
    setShowModal(true);
  };

  return (
    <div>
      {showModal && selectedCharacter && portal && !isLoaded && (
        <ModalPortal
          character={selectedCharacter}
          setShowModal={setShowModal}
          container={portal}
          isLoadedModal={!isLoaded}
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
