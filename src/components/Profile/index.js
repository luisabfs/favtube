import React, { useCallback } from 'react';
import { Image, Alert } from 'react-native';
import PropTypes from 'prop-types';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

import Avatar from '../../assets/avatar.png';

import { Container, Wrapper, Title, Icon, SmallButton } from './styles';

const Profile = ({ hasFavorite }) => {
  const navigation = useNavigation();
  const { user, signOut } = useAuth();

  const handleSignOut = useCallback(async () => {
    try {
      await signOut();
    } catch (error) {
      Alert.alert(error.message);
    }
  }, [signOut]);

  return (
    <Container>
      <Wrapper>
        <Image source={Avatar} />
        <Title>{user.email}</Title>
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

        <SmallButton mode="dark" onPress={handleSignOut}>
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
