import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import getRealm from '../../services/realm';

import { Container, Title, Thumbnail, SmallButton } from './styles';

const Channel = ({ id, title, thumbnail }) => {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    async function loadFavorite() {
      const realm = await getRealm();

      const user = realm
        .objects('User')
        .find(storedUser => storedUser.logged === true);

      const isFavorite = user.favorites.find(fav => fav.id === id);

      setFavorite(!!isFavorite);
    }

    loadFavorite();
  }, [id]);

  const handleAddFavorite = async () => {
    const realm = await getRealm();

    const user = realm
      .objects('User')
      .find(storedUser => storedUser.logged === true);

    if (user && !favorite) {
      realm.write(() => {
        user.favorites.push({ id, title, thumbnail });
      });
    }

    setFavorite(!favorite);
  };

  return (
    <Container>
      <Thumbnail source={{ uri: thumbnail }} />

      <Title>{title}</Title>

      <SmallButton onPress={handleAddFavorite}>
        <Icon name={favorite ? 'star' : 'star-o'} size={16} />
      </SmallButton>
    </Container>
  );
};

Channel.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Channel;
