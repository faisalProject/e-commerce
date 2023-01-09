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
                <div className="right"></div>
            </div>
            <div className="container">
                <div className="box"></div>
            </div>
        </div>

    )
}

export default Detail;