/**
 * @author Freddy Michel
 * @description import all dependancies 
 * and components for route
 */
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './containers/Layout/Header';
import {ProductLists} from './containers/Product/ProductLists';
import ProductDetail from './containers/Product/ProductDetail';
import ProductComponent from './containers/Product/ProductComponent';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
            <Route exact path="/" element={<ProductLists/>}/>
            <Route exact path="/product_detail/:id" element={<ProductDetail/>} />
            <Route exact path="/product" element={<ProductComponent/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
