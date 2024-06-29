import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import CategoryQuotes from './containers/CategoryQuotes/CategoryQuotes';
import {SubmitQuote} from './containers/SubmitQuote/SubmitQuote';
import EditQuote from './containers/EditQuote/EditQuote';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes/:categoryId" element={<CategoryQuotes />} />
          <Route path="/submit" element={<SubmitQuote />} />
          <Route path="/quotes/:id/edit" element={<EditQuote />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
