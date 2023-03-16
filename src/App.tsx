import React, { useState } from 'react';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import './App.css';
import products from './dataBase/products';
import CatalogWrapper from './components/catalog/CatalogWrapper/CatalogWrapper';

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
        <CatalogWrapper productsData={products} />
      </div>
    );
  }
}

export default App;
