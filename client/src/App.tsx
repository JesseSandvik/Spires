import React from 'react';
import Footer from './components/organisms/footer/Footer';
import Header from './components/organisms/header/Header';

import './App.css';

function App(): React.ReactElement {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
