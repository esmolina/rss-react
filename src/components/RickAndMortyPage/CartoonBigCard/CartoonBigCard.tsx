import React from 'react';
import classNames from 'classnames/bind';
import styles from './CartoonBigCard.module.scss';
import { CartoonCardProps } from '../RickAndMortyTypes';
import InfoBlock from './InfoBlock';
import Button from '../../Elements/Buttons/Button';

const cx = classNames.bind(styles);

function CartoonBigCard({
  character: { name, status, species, gender, origin, location, image, episode },
}: CartoonCardProps) {
  const getEpisodesNumbers = (episodes: Array<string>) => {
    const numbers: Array<string> = [];
    episodes.map((cartoonEpisode) => {
      const dividedPath = cartoonEpisode.split('/');
      const episodeNumber = dividedPath[dividedPath.length - 1];
      numbers.push(episodeNumber);
    });
    return numbers.join(', ');
  };

  return (
    <div>
      <div className={cx('cartoon-big-card__wrapper')}>
        <img src={image} alt={`character-${name}`} className={cx('cartoon-big-card__image')} />
        <p className={cx('cartoon-big-card__title')}>INFO</p>
        <InfoBlock title="Name, status" info={`${name} - ${status}`} />
        <InfoBlock title="Species, gender" info={`${species} - ${gender}`} />
        <InfoBlock title="From" info={`${origin.name}`} />
        <InfoBlock title="Current location" info={`${location.name}`} />
        <InfoBlock title="Episode" info={getEpisodesNumbers(episode)} />
      </div>
      <Button buttonType="button" buttonText="X" customClass="button__close" />
    </div>
  );
}

export default CartoonBigCard;
