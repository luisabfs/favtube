import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { useAuth } from '../../hooks/auth';

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
  const { user } = useAuth();

  const navigation = useNavigation();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function loadFavorites() {
      setFavorites(user.favorites);
    }

    loadFavorites();
  }, [user]);

  return (
    <Container>
      <Profile />

      <FavoritesContainer>
        <Wrapper>
          <Icon name="star" size={30} />
          <Title>My favorites</Title>
        </Wrapper>

        <List>
          <ScrollView>
            {favorites.map(channel => (
              <Channel
                key={channel.id}
                id={channel.id}
                title={channel.title}
                thumbnail={channel.thumbnail}
              />
            ))}
          </ScrollView>
        </List>
      </FavoritesContainer>

      <SmallButton mode="dark" onPress={() => navigation.goBack()}>
        back
      </SmallButton>
    </Container>
  );
};

export default Favorites;
