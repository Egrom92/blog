import React from "react";
import './App.scss';

import { Posts, Post} from './pages';
import { DebugGrid } from './components';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <DebugGrid hide={true} />
      <Router>
        <Routes>
          <Route path="/" exact="true" element={<Posts />} />
          <Route
            path="/posts/:slug"
            exact="true"
            element={<Post />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
