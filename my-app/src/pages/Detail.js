import shoes from '../images/shoes2.webp';
import shoesOption1 from '../images/shoes4.webp';
import shoesOption2 from '../images/shoes3.webp';
import shoesOption3 from '../images/shoes5.webp';

const Detail = (props) => {
    return(
        <div className="product-detail-contents">
            <div className='container'>
                <div className='product selected-product' onClick={() => props.eventProductOption()}>
                    <img className='selected' src={shoes} alt="" />
                    <div className="products-option">
                        <img className="product-image" src={shoes} alt="" />
                        <img className="product-image" src={shoesOption1} alt="" />
                        <img className="product-image" src={shoesOption2} alt="" />
                        <img className="product-image" src={shoesOption3} alt="" />
                        <img className="product-image" src={shoesOption3} alt="" />
                        <button className="btn-prev">
                            <i className="bi bi-chevron-left"></i>
                        </button>
                        <button className="btn-next">
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
                <div className='product-detail'>
                    <h5>Sepatu Pria Casual Kulit Original Premium</h5>
                    <div className='evaluation'>
                        <div className='star-container'>
                            <i className="bi bi-star-fill"></i>
                            <p>4.7</p>
                        </div>
                        <div className='vr'></div>
                        <div className='sold-container'>
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
                </div>
            </div>
        </div>

    )
}

export default Detail;