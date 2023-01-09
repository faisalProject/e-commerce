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

  const activeOption = () => {
    const activeProduct = document.getElementsByClassName('active-product')[0];
    const option = document.getElementsByClassName('a-1')[0];
    const thumbs = document.getElementsByClassName('option');
    option.addEventListener('click', (e) => {
      if(e.target.className === 'option') {
        activeProduct.src = e.target.src;
        thumbs.forEach(thumb => {
          thumb.className = 'option';
        });
      }
    })
  }

  return(
    <BrowserRouter>
      <Header menuActive={menuActive} signinPopupActive={signinPopupActive}/>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product-detail' element={<Detail activeOption={activeOption} />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
      </Routes>
      <SigninPopup />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
