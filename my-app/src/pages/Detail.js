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
                                        <ul className='a-4'>
                                            <li className='place-list'>
                                                <p className='place-option' onClick={() => props.selectPlace()}>Kota Bandung</p>
                                            </li>
                                            <li className='place-list'>
                                                <p className='place-option' onClick={() => props.selectPlace()}>Kota Semarang</p>
                                            </li>
                                            <li className='place-list'>
                                                <p className='place-option' onClick={() => props.selectPlace()}>Kota Medan</p>
                                            </li>
                                            <li className='place-list'>
                                                <p className='place-option' onClick={() => props.selectPlace()}>Kota Yogyakarta</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='a-2'>

                                    </div>
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