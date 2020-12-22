const UserSchema = {
  name: 'User',
  primaryKey: 'username',
  properties: {
    username: 'string',
    password: 'string',
    favorites: 'Favorite[]',
    logged: { type: 'bool', default: false },
  },
};

export default UserSchema;
