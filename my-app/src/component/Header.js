import ecommerce from '../images/e-commerce.png';
import {Link} from 'react-router-dom';

const menuActive = () => {
    document.getElementsByClassName('menu-contents')[0].classList.toggle('active')
}

const Header = () => {
    return(
        <nav>
            <div className="container">
                <img src={ecommerce} alt="" />
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
                        <button type="submit" className="btn btn-primary">Masuk</button>
                        <button type="submit" className="btn btn-primary">Daftar</button>
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