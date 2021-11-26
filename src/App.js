import './styles/global/global.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';

function App() {



  return (
    <div className="app">
      <Router>
        <Auth0ProviderWithHistory>
          <Header />
          <Main />
          <Footer />
        </Auth0ProviderWithHistory>
      </Router>
    </div>
  );
}

export default App;
