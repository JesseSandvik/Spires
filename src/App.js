import './styles/global.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import Header from './components/header';
import Footer from './components/footer';
import routes from './config/routes';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Auth0ProviderWithHistory>
          <Header />
          <main>
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
          </main>
          <Footer />
        </Auth0ProviderWithHistory>
      </Router>
    </div>
  );
}

export default App;
