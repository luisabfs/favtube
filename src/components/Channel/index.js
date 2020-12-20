import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import { useAuth } from '../../hooks/auth';
import getRealm from '../../services/realm';

import { Container, Title, Thumbnail, SmallButton } from './styles';

const Channel = ({ id, title, thumbnail }) => {
  const { user } = useAuth();
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    async function loadFavorite() {
      const isFavorite = user.favorites.find(fav => fav.id === id);

      setFavorite(!!isFavorite);
    }

    loadFavorite();
  }, [id, user.favorites]);

  const handleAddFavorite = async () => {
    const realm = await getRealm();

    realm.write(() => {
      user.favorites.push({ id, title, thumbnail });
    });

    setFavorite(!favorite);
  };

  const handleRemoveFavorite = async () => {
    const realm = await getRealm();

    const storedFavorite = user.favorites.find(fav => fav.id === id);

    realm.write(() => {
      realm.delete(storedFavorite);
    });

    setFavorite(!favorite);
  };

  return (
    <Container>
      <Thumbnail source={{ uri: thumbnail }} />

      <Title>{title}</Title>

      <SmallButton
        onPress={favorite ? handleRemoveFavorite : handleAddFavorite}
      >
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
