import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';

import getRealm from '../services/realm';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function loadUsers() {
      const realm = await getRealm();

      const objects = realm.objects('User');

      const user = objects.find(object => object.logged === true);

      user && setData({ loggedUser: user });
    }

    loadUsers();
  }, [data.loggedUser]);

  const signIn = useCallback(async ({ username, password }) => {
    const realm = await getRealm();

    const user = realm
      .objects('User')
      .find(object => object.username === username);

    if (!user) {
      throw new Error('Incorrect username/password confirmation');
    }

    const comparePassword = user.password === password;

    if (!comparePassword) {
      throw new Error('Incorrect username/password confirmation');
    }

    try {
      realm.write(() => {
        realm.create('User', { username, logged: true }, 'modified');
      });

      setData({ loggedUser: user });
    } catch (error) {
      throw new Error('Error logging in.');
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      const realm = await getRealm();

      realm.write(() => {
        realm.create(
          'User',
          { username: data.loggedUser.username, logged: false },
          'modified',
        );
      });

      setData({});
    } catch (error) {
      throw new Error('Error logging out.');
    }
  }, [data.loggedUser]);

  return (
    <AuthContext.Provider value={{ user: data.loggedUser, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

AuthProvider.defaultProps = {
  children: () => null,
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
