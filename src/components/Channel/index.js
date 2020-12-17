import React, { useState } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, Title, SmallButton } from './styles';

const Channel = ({ title, thumbnail }) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <Container>
      <Image style={{ width: 40, height: 40 }} source={{ uri: thumbnail }} />

      <Title>{title}</Title>

      <SmallButton onPress={() => setFavorite(!favorite)}>
        <Icon name={favorite ? 'star' : 'star-o'} size={16} />
      </SmallButton>
    </Container>
  );
};

Channel.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Channel;
