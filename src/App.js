import './styles/global/global.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import Header from './components/header';
import Footer from './components/footer';
import routes from './config/routes';

const App = () => {

  const transition = {
    ease: [1.0, 0.01, -0.05, 0.9],
};

const initialMotion = {
    opacity: 0,
};

const animateMotion = {
    opacity: 1,
};

const exitMotion = {
    opacity: 0,
};

  return (
    <div className="app">
      <Router>
        <Auth0ProviderWithHistory>
          <Header />
          <motion.main
            initial={initialMotion}
            animate={animateMotion}
            exit={exitMotion}
            transition={transition}
          >
            <Routes>
              {routes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    element={route.element}
                  />
                )
              })}
            </Routes>
          </motion.main>
          <Footer />
        </Auth0ProviderWithHistory>
      </Router>
    </div>
  );
}

export default App;
