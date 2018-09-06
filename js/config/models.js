import Realm from "realm";

const FaveSchema = {
    name: 'Fave',
    primaryKey: 'id',
    properties: {
      id: "string",
      faved_on: "date"
    }
  };
  
  // let favesId = "1";
  
  // faves.filtered('id==$0', favesId);
  const realm = new Realm({ schema: [FaveSchema] });
  console.log('the path is:', realm.path);
  
  // Create a Fave object
  export const newFave = (id) => {
    realm.write(() => {
      realm.create("Fave", { id: id, faved_on: new Date() });
    })
  };
  
  export const removeFave = (id) => {
    realm.write(() => {
      let allFaves = realm.objects("Fave");
      let faveId = id;
      let currentFave = allFaves.filtered('id == $0', faveId);
      realm.delete(currentFave);
  
    })
  }
  
  export const queryAllFaves = () => {
    let allFaves = realm.objects("Fave");
    let ascFaves = allFaves.sorted("id");
    return ascFaves;
  }
  
  
  export default realm;
  
 