import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home';
import Header from '../Header';

const App = () => (
    <main>
      <Header />
      <Route exact path="/" component={Home} />
    </main>
);

export default App;