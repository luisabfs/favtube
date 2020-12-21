const UserSchema = {
  name: 'User',
  primaryKey: 'email',
  properties: {
    email: 'string',
    password: 'string',
    favorites: 'Favorite[]',
    logged: { type: 'bool', default: false },
  },
};

export default UserSchema;
