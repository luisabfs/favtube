const UserSchema = {
  name: 'User',
  primaryKey: 'email',
  properties: {
    email: 'string',
    password: 'string',
  },
};

export default UserSchema;
