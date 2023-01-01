import ecommerce from '../images/e-commerce.png';
import {Link} from 'react-router-dom';

const menuActive = () => {
    document.getElementsByClassName('menu-contents')[0].classList.toggle('active')
}

const signinPopupActive = () => {
    document.getElementsByClassName('signin-page-contents')[0].classList.add('active');
    document.querySelector('body').classList.add('active');
}

const Header = () => {
    return(
        <nav>
            <div className="container">
                <Link to='/' className='anchor'>
                    <img src={ecommerce} alt="" />
                </Link>
                <div className="right">
                    <div className='search'>
                        <input type="text" className='form-control' placeholder='Cari di E-Commerce'/>
                        <button type='submit' className='btn btn-primary'>
                            <i className='bi bi-search'></i>
                        </button>
                    </div>
                    <Link className='anchor' to='/'>Kategori</Link>
                    <Link className='anchor' to='/'>
                        <i className="bi bi-cart-fill"></i>
                    </Link>
                    <div className="button-container">
                        <button type="submit" className="btn btn-primary" onClick={signinPopupActive}>Masuk</button>
                        <Link to='/register' className='btn btn-primary'>Daftar</Link>
                    </div>
                    <div className="hamburger" onClick={menuActive}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;