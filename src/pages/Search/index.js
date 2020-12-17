import React, { useState, useCallback } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';

import { API_KEY } from '@env';

import Profile from '../../components/Profile';
import Channel from '../../components/Channel';

import api from '../../services/api';

import {
  Container,
  Wrapper,
  SmallButton,
  Icon,
  SearchContainer,
  TextInput,
  List,
} from './styles';

const Search = () => {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState();

  const handleSubmit = useCallback(async () => {
    setLoading(true);

    try {
      const { data } = await api.get(
        `?part=snippet&type=channel&q=${inputData}&maxResults=10&key=${API_KEY}`,
      );
      setChannels(data.items);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [inputData]);

  return (
    <Container>
      <Profile hasFavorite />

      <SearchContainer>
        <Wrapper>
          <TextInput
            placeholder="Channels"
            onChangeText={text => setInputData(text)}
            onSubmitEditing={handleSubmit}
          />
          <SmallButton mode="dark" onPress={handleSubmit}>
            <Icon name="search" size={16} />
          </SmallButton>
        </Wrapper>
      </SearchContainer>

      <List>
        {loading ? (
          <ActivityIndicator color="#000" size={30} />
        ) : (
          <ScrollView>
            {channels.map(channel => (
              <Channel
                key={channel.id.channelId}
                title={channel.snippet.title}
                thumbnail={channel.snippet.thumbnails.default.url}
              />
            ))}
          </ScrollView>
        )}
      </List>
    </Container>
  );
};

export default Search;
