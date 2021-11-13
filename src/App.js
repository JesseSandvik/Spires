import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './config/routes';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={route.element}
                render={() => (
                  <route.component
                    name={route.name} 
                  />
                )}
              />
            )
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
