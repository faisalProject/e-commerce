import shoes from '../images/shoes2.webp';
import shoesOption1 from '../images/shoes4.webp';
import shoesOption2 from '../images/shoes3.webp';
import shoesOption3 from '../images/shoes5.webp';

const Detail = (props) => {
    return(
        <div className="product-detail-contents">
            <div className="container">
                <div className="left a-1" onClick={() => props.activeOption()}>
                    <img src={shoes} alt="" className="active-product" />
                    <div className='product-option'>
                        <div className='item'>
                            <img src={shoes} alt="" className="option" />
                        </div>
                        <div className='item'>
                            <img src={shoesOption1} alt="" className="option" />
                        </div>
                        <div className='item'>
                            <img src={shoesOption2} alt="" className="option" />
                        </div>
                        <div className='item'>
                            <img src={shoesOption3} alt="" className="option" />
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
                                    <div className='a-2'>
                                        <p>Pengiriman ke</p>
                                    </div>
                                    <div className='a-2'>
                                        <p>Ongkos kirim</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className='a-2'>
                                        <div className='a-3 show-place' onClick={() => props.showPlaces()}>
                                            <p className='selected'>Kota Jakarta Pusat</p> 
                                            <i className="bi bi-chevron-down"></i>
                                        </div>
                                        <ul className='a-4' onClick={() => props.selectPlace()}>
                                            <li className='place-list'>Kota Jakarta Pusat</li>
                                            <li className='place-list'>Kota Bandung</li>
                                            <li className='place-list'>Kota Yogyakarta</li>
                                            <li className='place-list'>Kota Semarang</li>
                                        </ul>
                                    </div>
                                    <div className='a-2'>
                                        <p>Rp 15.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='colors-container'>
                            <div className='item'>
                                <div className='box'>
                                    <p>Warna</p>
                                </div>
                            </div>
                            <div className='item'>
                                {/* <div className='color'></div>
                                <div className='color'></div>
                                <div className='color'></div>
                                <div className='color'></div>
                                <div className='color'></div>
                                <div className='color'></div>
                                <div className='color'></div>
                                <div className='color'></div>
                                <div className='color'></div>
                                <div className='color'></div> */}
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