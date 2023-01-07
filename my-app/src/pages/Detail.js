import shoes from '../images/shoes2.webp';

const Detail = () => {
    return(
        <div className="product-detail-contents">
            <div className="container">
                <div className="left">
                    <img src={shoes} alt="" />
                    <div className='product-option'>
                        <div className='item'>
                            <img src={shoes} alt="" />
                        </div>
                        <div className='item'>
                            <img src={shoes} alt="" />
                        </div>
                        <div className='item'>
                            <img src={shoes} alt="" />
                        </div>
                        <div className='item'>
                            <img src={shoes} alt="" />
                        </div>
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