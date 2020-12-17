import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Profile from '../../components/Profile';
import Channel from '../../components/Channel';

import {
  Container,
  Wrapper,
  SmallButton,
  FavoritesContainer,
  List,
  Title,
} from './styles';

const Favorites = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Profile />

      <FavoritesContainer>
        <Wrapper>
          <Icon name="star" size={30} />
          <Title>My favorites</Title>
        </Wrapper>

        <List>
          <Channel />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
        </List>
      </FavoritesContainer>

      <SmallButton mode="dark" onPress={() => navigation.goBack()}>
        back
      </SmallButton>
    </Container>
  );
};

export default Favorites;
