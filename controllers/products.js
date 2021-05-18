import firebase from "../frontend/src/firebase/db.js";
const firestore = firebase.firestore();

export const getProducts = async (req, res) => {
  let products = await firestore.collection("products").get();
  let productsArray = [];

  products.forEach((doc) => {
    productsArray.push({
      category: doc.id,
      info: doc.data().info,
    });
  });
  res.send(productsArray);
};

export const getProductByCategory = async (req, res) => {
  let category = req.params.category;
  let productRef = await firestore.collection("products").doc(category);
  let doc = await productRef.get();

  //   let productObj = {
  //     category: doc.id,
  //     info: doc.data().info,
  //   };

  res.send(doc.data());
};

export const getProductByCategoryId = async (req, res) => {
  let category = req.params.category;
  let id = req.params.id;

  let productRef = await firestore.collection("products").doc(category);
  let doc = await productRef.get();

  let productObj = doc.data().info[id];

  res.send(productObj);
};
