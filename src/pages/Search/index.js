import React from 'react';

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

const Search = () => (
  <Container>
    <Profile hasFavorite />

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
        <Channel />
        <Channel />
        <Channel />
        <Channel />
      </List>
    </SearchContainer>
  </Container>
);

export default Search;
