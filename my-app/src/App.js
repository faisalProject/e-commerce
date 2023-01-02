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

function App() {
  return(
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product-detail' element={<Detail />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
      </Routes>
      <SigninPopup />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
