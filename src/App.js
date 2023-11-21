
import './App.css';
import Layout from './components/Layout';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact'
import Cart from './pages/Cart';
import Login from './pages/Login';
import WishList from './pages/WishList';
import ShopContext from './components/ShopContext'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='blog' element={<Blog />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='cart' element={<Cart />} />
      <Route path='login' element={<Login />} />
      <Route path='wishlist' element={<WishList />} />
      </Route>
    </Routes>
    </BrowserRouter>
 
    </>
  );
}

export default App;
