import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import products from './dataBase/products';
import CatalogWrapper from './components/catalog/CatalogWrapper/CatalogWrapper';
import Page404 from './components/Page404/Page404';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import {
  aboutHeader,
  companyName,
  ourContacts,
  productCategories,
} from './components/About/AboutInfo';
import HomePage from './components/HomePage/HomePage';
import FeedbackPage from './components/Feedback/FeedbackPage/FeedbackPage';
import CartoonPage from './components/RickAndMortyPage/CartoonCharactersPage/CartoonChatactersPage';
import Exp from './components/RickAndMortyPage/CartoonCharactersPage/exp';

function App() {
  const [currentPage, setCurrentPage] = useState('');

  const handleGoAnotherChange = (pageName: string) => {
    setCurrentPage(pageName);
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} />
      <Routes>
        <Route path="/" element={<HomePage handleGoAnotherChange={handleGoAnotherChange} />} />
        <Route
          path="/catalog"
          element={
            <CatalogWrapper productsData={products} handleGoAnotherChange={handleGoAnotherChange} />
          }
        />
        <Route
          path="/about"
          element={
            <About
              companyName={companyName}
              aboutHeader={aboutHeader}
              productCategories={productCategories}
              ourContacts={ourContacts}
              handleGoAnotherChange={handleGoAnotherChange}
            />
          }
        />
        <Route
          path="/feedback"
          element={<FeedbackPage handleGoAnotherChange={handleGoAnotherChange} />}
        />
        <Route
          path="/api"
          element={<CartoonPage handleGoAnotherChange={handleGoAnotherChange} />}
        />
        <Route path="/exp" element={<Exp handleGoAnotherChange={handleGoAnotherChange} />} />
        <Route path="*" element={<Page404 handleGoAnotherChange={handleGoAnotherChange} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
