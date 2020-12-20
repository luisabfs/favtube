const UserSchema = {
  name: 'User',
  primaryKey: 'email',
  properties: {
    email: 'string',
    password: 'string',
    favorites: { type: 'list', objectType: 'Favorite', default: '[]' },
    logged: { type: 'bool', default: false },
  },
};

export default UserSchema;
