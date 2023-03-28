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
import FeedbackPage from './components/Feedback/FeedbackPage/FeedbackPage';
import { AppStateProps } from './AppTypes';

class App extends React.Component<Record<string, never>, AppStateProps> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { currentPage: '' };
  }

  handleGoAnotherChange = (pageName: string) => {
    this.setState({ currentPage: pageName });
  };

  render() {
    const { currentPage } = this.state;
    return (
      <div className="App">
        <Header currentPage={currentPage} />
        <Routes>
          <Route
            path="/"
            element={<HomePage handleGoAnotherChange={this.handleGoAnotherChange} />}
          />
          <Route
            path="/catalog"
            element={
              <CatalogWrapper
                productsData={products}
                handleGoAnotherChange={this.handleGoAnotherChange}
              />
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
                handleGoAnotherChange={this.handleGoAnotherChange}
              />
            }
          />
          <Route
            path="/feedback"
            element={<FeedbackPage handleGoAnotherChange={this.handleGoAnotherChange} />}
          />
          <Route
            path="*"
            element={<Page404 handleGoAnotherChange={this.handleGoAnotherChange} />}
          />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
