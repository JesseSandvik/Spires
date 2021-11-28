import './styles/global/global.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import Layout from './layout/layout';

const App = () => {



  return (
    <div className="app">
      <Router>
        <Auth0ProviderWithHistory>
          <Layout />
        </Auth0ProviderWithHistory>
      </Router>
    </div>
  );
}

export default App;
