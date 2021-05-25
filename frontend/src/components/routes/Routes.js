import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import Cart from "../cart/Cart";
import Category from "../category/Category";
import Home from "../home/Home";
import Login from "../login/Login";
import Product from "../product/Product";
import Products from "../products/Products";
import Profile from "../profile/Profile";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Router = () => {
  const { isSignIn } = useSelector((state) => state.profile);
  const location = useLocation();
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
    transition: { ease: "easeIn", duration: 100 },
  };

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
          >
            <Home />
          </motion.div>
        </Route>
        <Route path="/products">
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
          >
            <Products />
          </motion.div>
        </Route>
        <Route
          path="/login"
          render={
            isSignIn
              ? () => (
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                  >
                    <Profile />
                  </motion.div>
                )
              : () => (
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                  >
                    <Login />
                  </motion.div>
                )
          }
        ></Route>
        <Route path="/cart">
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
          >
            <Cart />
          </motion.div>
        </Route>
        <Route path="/product/:category/:id">
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
          >
            <Product />
          </motion.div>
        </Route>
        <Route path="/:category">
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
          >
            <Category />
          </motion.div>
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Router;
