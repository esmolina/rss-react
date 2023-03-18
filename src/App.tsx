import React from 'react';
// import { HashRouter, BrowserRouter } from 'react-router-dom';
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

// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo"/>
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo"/>
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }
//
// export default App;

// function WrappedApp() {
//     return <HashRouter><App/></HashRouter>
// }

// export default WrappedApp;

class App extends React.Component<any> {
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
