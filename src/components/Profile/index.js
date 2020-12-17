import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import { useNavigation } from '@react-navigation/native';

import Avatar from '../../assets/avatar.png';

import { Container, Wrapper, Title, Icon, SmallButton } from './styles';

const Profile = ({ hasFavorite }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Wrapper>
        <Image source={Avatar} />
        <Title>Username</Title>
      </Wrapper>

      <Wrapper>
        {hasFavorite && (
          <SmallButton
            mode="dark"
            onPress={() => navigation.navigate('Favorites')}
          >
            <Icon name="star-o" color="#fff" size={16} />
          </SmallButton>
        )}

        <SmallButton mode="dark">
          <Icon name="sign-out" color="#fff" size={16} />
        </SmallButton>
      </Wrapper>
    </Container>
  );
};

Profile.defaultProps = {
  hasFavorite: false,
};

Profile.propTypes = {
  hasFavorite: PropTypes.bool,
};

export default Profile;
