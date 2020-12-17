import React, { useState } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Avatar from '../../assets/avatar.png';
import { Container, Title, SmallButton } from './styles';

const Channel = () => {
  const [favorite, setFavorite] = useState(false);
  return (
    <Container>
      <Image source={Avatar} />
      <Title>Channel</Title>
      <SmallButton onPress={() => setFavorite(!favorite)}>
        <Icon name={favorite ? 'star' : 'star-o'} size={16} />
      </SmallButton>
    </Container>
  );
};

export default Channel;
