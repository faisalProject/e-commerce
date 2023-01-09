import shoes from '../images/shoes2.webp';
import shoesOption1 from '../images/shoes4.webp';
import shoesOption2 from '../images/shoes3.webp';
import shoesOption3 from '../images/shoes5.webp';

const Detail = (props) => {
    return(
        <div className="product-detail-contents">
            <div className="container">
                <div className="left a-1">
                    <img src={shoes} alt="" className="active-product" />
                    <div className='product-option'>
                        <div className='item'>
                            <img src={shoes} alt="" className="option" onClick={() => props.activeOption()} />
                        </div>
                        <div className='item'>
                            <img src={shoesOption1} alt="" className="option" onClick={() => props.activeOption()} />
                        </div>
                        <div className='item'>
                            <img src={shoesOption2} alt="" className="option" onClick={() => props.activeOption()} />
                        </div>
                        <div className='item'>
                            <img src={shoesOption3} alt="" className="option" onClick={() => props.activeOption()} />
                        </div>
                        <button className="prev-button">
                            <i className="bi bi-chevron-left"></i>
                        </button>
                        <button className="next-button">
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
                <div className="right">
                    <div className='box'>
                        <h5>Sepatu Pria Causal Kulit Original Premium</h5>
                        <div className='rating'>
                            <div className='stars'>
                                <i className="bi bi-star-fill"></i>
                                <p>4.7</p>
                            </div>
                            <div className='vr'></div>
                            <div className='sold'>
                                <p>Terjual 100+</p>
                            </div>
                        </div>
                        <p>Rp 425.000</p>
                        <div className='discount-container'>
                            <div className='discount'>
                                <p>73%</p>
                            </div>
                            <p>Rp 150.000</p>
                        </div>
                        <div className='delivery-container'>
                            <div className='item'>
                                <div className="box">
                                    <p>Pengiriman</p>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="box">
                                    <p>Pengiriman ke</p>
                                </div>
                                <div className="box">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Kota Jakarta Pusat</option>
                                    <option value="1">Kota Bandung</option>
                                    <option value="2">Kota Surabaya</option>
                                    <option value="3">Kota Semarang</option>
                                </select>
                                </div>
                                <div className="box">
                                    <p>Ongkos kirim</p>
                                </div>
                                <div className="box">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Rp 0</option>
                                    <option value="1">Rp 5.000</option>
                                    <option value="2">Rp 10.000</option>
                                    <option value="3">Rp 15.000</option>
                                </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="box"></div>
            </div>
        </div>

    )
}

export default Detail;