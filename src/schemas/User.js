const UserSchema = {
  name: 'User',
  primaryKey: 'email',
  properties: {
    email: 'string',
    password: 'string',
    logged: { type: 'bool', default: false },
  },
};

export default UserSchema;
