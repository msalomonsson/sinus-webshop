import firebase from "../frontend/src/firebase/db.js";
const firestore = firebase.firestore();

export const getUser = async (req, res) => {
  const uid = req.params.uid;
  let userRef = await firestore.collection("users").get();

  let usersArray = [];

  userRef.forEach((user) => {
    usersArray.push({ ...user.data(), id: user.id });
  });

  let filterUser = usersArray.filter((user) => user.uid === uid);

  res.send(filterUser);
};

export const updateUser = async (req, res) => {
  let updatedUser = req.body;
  let id = req.params.id;

  console.log(updatedUser);

  res.send(
    await firestore
      .collection("users")
      .doc(id)
      .update({ ...updatedUser })
  );
  res.end();
};

export const createUser = async (req, res) => {
  let user = req.body;

  await firestore.collection("users").doc().set(user);
};
