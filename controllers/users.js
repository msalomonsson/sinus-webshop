import firebase from "../frontend/src/firebase/db.js";
const firestore = firebase.firestore();

export const getUser = async (req, res) => {
  const uid = req.params.uid;
  let userRef = await firestore.collection("users").get();

  let usersArray = [];

  userRef.forEach((user) => {
    usersArray.push(user.data());
  });

  let filterUser = usersArray.filter((user) => user.uid === uid);

  res.send(filterUser);
};
