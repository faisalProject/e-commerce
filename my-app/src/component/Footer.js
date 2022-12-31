import {Link} from 'react-router-dom';
import playStoreAppStore from '../images/play-store-app-store.png';

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="box">
                    <h5 className="title">E-Commerce</h5>
                    <Link to='/' className='anchor'>Tentang E-Commerce</Link>
                    <Link to='/' className='anchor'>Hak Kekayaan Intelektual</Link>
                    <Link to='/' className='anchor'>Karir</Link>
                    <Link to='/' className='anchor'>Blog</Link>
                    <Link to='/' className='anchor'>Mitra Blog</Link>
                    <Link to='/' className='anchor'>E-Commerce Affiliate Program</Link>
                    <h5 className='title'>Beli</h5>
                    <Link to='/' className='anchor'>Tagihan & Top Up</Link>
                    <Link to='/' className='anchor'>Tukar Tambah Handphone</Link>
                    <Link to='/' className='anchor'>E-Commerce COD</Link>
                </div>
                <div className="box">
                    <h5 className='title'>Jual</h5>
                    <Link to='/' className='anchor'>Pusat Edukasi Seller</Link>
                    <Link to='/' className='anchor'>Mitra Toppers</Link>
                    <Link to='/' className='anchor'>Daftar Official Store</Link>
                    <h5 className='title'>Bantuan dan Panduan</h5>
                    <Link to='/' className='anchor'>E-Commerce</Link>
                    <Link to='/' className='anchor'>Syarat dan Ketentuan</Link>
                    <Link to='/' className='anchor'>Kebijakan Privasi</Link>
                    <Link to='/' className='anchor'>Mitra</Link>
                </div>
                <div className="box">
                    <h5 className='title'>Ikuti Kami</h5>
                    <div className='social-media'>
                        <Link to='/' className='media'>
                            <i className="bi bi-facebook"></i>
                        </Link>
                        <Link to='/' className='media'>
                            <i className="bi bi-twitter"></i>
                        </Link>
                        <Link to='/' className='media'>
                            <i className="bi bi-pinterest"></i>
                        </Link>
                        <Link to='/' className='media'>
                            <i className="bi bi-instagram"></i>
                        </Link>
                    </div>
                </div>
                <div className="box">
                    <h5 className='title'>Download Aplikasi E-Commerce</h5>
                    <img src={playStoreAppStore} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;