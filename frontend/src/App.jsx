import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';


import './App.scss';

// Note: Rendering a single co mponent to build components in isolation
const App = () => (
  <div className="App">
    <PhotoList/>
  </div>
);

export default App;