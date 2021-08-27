import './App.css';
import { Route, Link } from "react-router-dom";
import Products from './Routes/Products';
import ProductDetails from './Routes/ProductDetails';
import Cart from './Routes/Cart';
import EditProducts from './Routes/EditProducts';
import AddProducts from './Routes/AddProducts';
import Admin from './Routes/Admin';
import Checkout from './Routes/Checkout';

function App() {
  return (
    <div className="App">
      <Route exact path ="/" component={Products} />
      <Route exact path ="/productDetails" component={ProductDetails} />
      <Route exact path ="/cart" component={Cart} />
      <Route exact path ="/edit" component={EditProducts} />
      <Route exact path ="/add" component={AddProducts} />
      <Route exact path ="/admin" component={Admin} />
      <Route exact path ="/checkout" component={Checkout} />
    </div>
  );
}

export default App;
