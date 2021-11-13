import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import HomePage from './pages/home';
import routes from './config/routes';

const App = () => {

  return (
    <div className="app">
      <Router>
        <Auth0ProviderWithHistory>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
            </Routes>
        </Auth0ProviderWithHistory>
      </Router>
    </div>
  );
}

export default App;
