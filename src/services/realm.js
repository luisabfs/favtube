import Realm from 'realm';

import UserSchema from '../schemas/User';
import FavoriteSchema from '../schemas/Favorite';

export default function getRealm() {
  return Realm.open({
    schema: [UserSchema, FavoriteSchema],
    deleteRealmIfMigrationNeeded: true,
  });
}
