import React from 'react';
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

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header currentPage="Catalog" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogWrapper productsData={products} />} />
          <Route
            path="/about"
            element={
              <About
                companyName={companyName}
                aboutHeader={aboutHeader}
                productCategories={productCategories}
                ourContacts={ourContacts}
              />
            }
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
