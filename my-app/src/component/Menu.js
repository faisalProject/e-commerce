import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <div className="menu-contents">
            <ul className="container">
                <li>
                    <Link to='/signin' className="btn btn-primary">Masuk</Link>
                    <Link to='/register' className="btn btn-primary">Daftar</Link>
                </li>
                <li className="title">Aktivitas Saya</li>
                <li>
                    <Link to='/' className="anchor">
                        <i className="bi bi-journal-text"></i>
                        Daftar Transaksi
                    </Link>
                </li>
                <li>
                    <Link to='/' className="anchor">
                        <i className="bi bi-heart"></i>
                        Wishlist
                    </Link>
                </li>
                <li>
                    <Link to='/' className="anchor">
                        <i className="bi bi-star"></i>
                        Ulasan
                    </Link>
                </li>
                <li>
                    <Link to='/' className="anchor">
                        <i className="bi bi-shop"></i>
                        Toko Favorit
                    </Link>
                </li>
                <li>
                    <Link to='/' className="anchor">
                        <i className="bi bi-bag-dash"></i>
                        Kategori
                    </Link>
                </li>
                <li>
                    <Link to='/' className="anchor">
                        <i className="bi bi-cart"></i>
                        Keranjang Belanja
                    </Link>
                </li>
                <li className="title">Pusat Bantuan</li>
                <li>
                    <Link to='/' className="anchor">
                        <i className="bi bi-person-x"></i>
                        Pesanan Dikomplain
                    </Link>
                </li>
                <li>
                    <Link to='/' className="anchor">
                        <i className="bi bi-question-circle"></i>
                        Bantuan E-Commerce
                    </Link>
                </li>
                <li>
                    <Link to='/' className="anchor">
                        <i className="bi bi-qr-code-scan"></i>
                        Scan Kode QR
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;