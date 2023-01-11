import './App.css';
import './main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './pages/Home';
import Menu from './component/Menu';
import SigninPopup from './component/SigninPopup';
import Register from './pages/Register';
import Signin from './pages/Signin';
import Detail from './pages/Detail';
import Footer from './component/Footer';

const App = () => {

  const menuActive = () => {
    document.getElementsByClassName('menu-contents')[0].classList.toggle('active')
  }

  const signinPopupActive = () => {
    document.getElementsByClassName('signin-page-contents')[0].classList.add('active');
    document.querySelector('body').classList.add('active');
  }

  const eventProductOption = () => {
    const selectedProduct = document.getElementsByClassName('selected-product')[0];
    const selected = document.getElementsByClassName('selected')[0];
    const productImage = document.getElementsByClassName('product-image');
    selectedProduct.addEventListener('click', (e) => {
      if(e.target.className === 'product-image') {
        selected.src = e.target.src;
        for (const i of productImage) {
          i.className = 'product-image'
        }
        e.target.classList.add('active');
      }
    })
  }

  return(
    <BrowserRouter>
      <Header menuActive={menuActive} signinPopupActive={signinPopupActive}/>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product-detail' element={<Detail eventProductOption={eventProductOption} />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
      </Routes>
      <SigninPopup />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
