import React from "react";
import './App.scss';

import { Posts, Post, HomePage} from './pages';
import { DebugGrid } from './components';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  console.log(process.env.CMS_URL);
  return (
    <div className="App">
      <DebugGrid hide={false} />
      <Router>
        <Routes>
          <Route path="/" exact="true" element={<HomePage />} />
          <Route path="/posts" exact="true" element={<Posts />} />
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
