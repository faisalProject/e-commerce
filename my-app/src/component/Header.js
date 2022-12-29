import ecommerce from '../images/e-commerce.png'

const Header = () => {
    return(
        <nav>
            <div className="container">
                <img src={ecommerce} alt="" />
                <div className="right">
                    <div className="button-container">
                        <button type="submit" className="btn btn-primary">Masuk</button>
                        <button type="submit" className="btn btn-primary">Daftar</button>
                    </div>
                    <div className="hamburger">
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