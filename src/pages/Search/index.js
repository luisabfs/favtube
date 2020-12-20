import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, Alert } from 'react-native';

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
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState('');
  const [channels, setChannels] = useState({
    items: [],
    nextPageToken: '',
    prevPageToken: '',
  });

  const getChannels = async ({ pageToken = '' }) => {
    setLoading(true);

    try {
      const { data } = await api.get(
        `?part=snippet&type=channel&q=${inputData}&maxResults=10&pageToken=${pageToken}&key=${API_KEY}`,
      );

      setChannels({
        items: data.items,
        nextPageToken: data.nextPageToken,
        prevPageToken: data.prevPageToken,
      });
    } catch (error) {
      Alert.alert('Error retrieving Youtube channels');
    }

    setLoading(false);
  };

  return (
    <Container>
      <Profile hasFavorite />

      <SearchContainer>
        <Wrapper>
          <TextInput
            value={inputData}
            placeholder="Channels"
            onChangeText={setInputData}
            onSubmitEditing={getChannels}
          />
          <SmallButton mode="dark" onPress={getChannels}>
            <Icon name="search" size={16} />
          </SmallButton>
        </Wrapper>
      </SearchContainer>

      <List>
        {loading ? (
          <ActivityIndicator color="#000" size={30} />
        ) : (
          <ScrollView>
            {channels.items.map(channel => (
              <Channel
                key={channel.id.channelId}
                id={channel.id.channelId}
                title={channel.snippet.title}
                thumbnail={channel.snippet.thumbnails.default.url}
              />
            ))}
          </ScrollView>
        )}
      </List>

      {channels.items.length !== 0 && !loading && (
        <Wrapper>
          <SmallButton
            onPress={() => getChannels({ pageToken: channels.prevPageToken })}
            disabled={!channels.prevPageToken}
          >
            <Icon
              name="chevron-left"
              size={16}
              color={!channels.prevPageToken ? '#aaa' : '#000'}
            />
          </SmallButton>

          <SmallButton
            onPress={() => getChannels({ pageToken: channels.nextPageToken })}
          >
            <Icon name="chevron-right" size={16} />
          </SmallButton>
        </Wrapper>
      )}
    </Container>
  );
};

export default Search;
