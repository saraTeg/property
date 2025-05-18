import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { AnimatePresence, motion } from 'framer-motion';
import SignupForm from '../Components/Authentication/SignupForm';
import LoginForm from '../Components/Authentication/LoginForm';
import ForgotPasswordPage from './ForgotPasswordPage';

const pageVariants = {
  initial: {
    opacity: 0,
    x: '100vw',
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '-100vw',
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

const AuthPages = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Switch location={location} key={location.pathname}>
        <Route path="/pm/v1/login">
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <LoginForm />
          </motion.div>
        </Route>
        <Route path="/pm/v1/signup">
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <SignupForm />
          </motion.div>
        </Route>
        <Route path="/pm/v1/forgot-password">
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <ForgotPasswordPage />
          </motion.div>
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default AuthPages;
