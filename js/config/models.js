import Realm from 'realm';

const faveSchema = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    favedOn: 'date',
  },
};

export const realm = new Realm({ schema: [faveSchema] });

export const queryFaves = () => {
  return realm.objects('Fave').map((fave) => fave.id);
};

export const addFave = (id) => {
  realm.write(() => {
    const favedOn = new Date();
    realm.create('Fave', { id, favedOn });
  });
};

export const removeFave = (id) => {
  realm.write(() => {
    const favToDelete = realm.objects('Fave').filtered(`id ==$0`, id);
    realm.delete(favToDelete);
  });
};

export const getFaves = () => {
  return realm.objects('Fave');
};
