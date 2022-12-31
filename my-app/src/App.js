import './App.css';
import './main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './pages/Home';
import Menu from './component/Menu';
import SigninPopup from './component/SigninPopup';
import Footer from './component/Footer';

function App() {
  return(
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <SigninPopup />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
