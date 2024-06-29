import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './containers/Home/Home';
import CategoryQuotes from './containers/CategoryQuotes/CategoryQuotes';
import {SubmitQuote} from './containers/SubmitQuote/SubmitQuote';
import EditQuote from './containers/EditQuote/EditQuote';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quotes/:categoryId" element={<CategoryQuotes />} />
            <Route path="/submit" element={<SubmitQuote />} />
            <Route path="/quotes/:id/edit" element={<EditQuote />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
