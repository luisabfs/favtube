import React, { useState, useEffect } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import getRealm from '../../services/realm';

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
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function loadFavorites() {
      setLoading(true);
      const realm = await getRealm();

      const user = realm
        .objects('User')
        .find(storedUser => storedUser.logged === true);

      if (user) {
        setFavorites(user.favorites);
      }

      setLoading(false);
    }

    loadFavorites();
  }, []);

  return (
    <Container>
      <Profile />

      <FavoritesContainer>
        <Wrapper>
          <Icon name="star" size={30} />
          <Title>My favorites</Title>
        </Wrapper>

        <List>
          {loading ? (
            <ActivityIndicator color="#000" size={30} />
          ) : (
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
          )}
        </List>
      </FavoritesContainer>

      <SmallButton mode="dark" onPress={() => navigation.goBack()}>
        back
      </SmallButton>
    </Container>
  );
};

export default Favorites;
