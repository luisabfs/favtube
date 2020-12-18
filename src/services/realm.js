import Realm from 'realm';

import UserSchema from '../schemas/User';

export default function getRealm() {
  return Realm.open({
    schema: [UserSchema],
    deleteRealmIfMigrationNeeded: true,
  });
}
