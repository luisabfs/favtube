import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Profile from '../../components/Profile';
import Channel from '../../components/Channel';

import {
  Container,
  Wrapper,
  SmallButton,
  Icon,
  SearchContainer,
  TextInput,
  List,
} from './styles';

const Favorites = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Profile />

      <SearchContainer>
        <Wrapper>
          <TextInput placeholder="Channels" />
          <SmallButton mode="dark">
            <Icon name="search" size={16} />
          </SmallButton>
        </Wrapper>

        <List>
          <Channel />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
        </List>
      </SearchContainer>

      <SmallButton mode="dark" onPress={() => navigation.goBack()}>
        back
      </SmallButton>
    </Container>
  );
};

export default Favorites;
