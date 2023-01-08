import shoes from '../images/shoes2.webp';
import shoesOption1 from '../images/shoes3.webp';
import shoesOption2 from '../images/shoes4.webp';
import shoesOption3 from '../images/shoes5.webp';
import shoesOption4 from '../images/shoes6.webp';

const hoverProduct1 = () => {
    const activeProduct = document.getElementsByClassName('active-product')[0];
    const productOption1 = document.getElementsByClassName('option')[0].getAttribute('src');
    activeProduct.src = productOption1;
}

const hoverProduct2 = () => {
    const activeProduct = document.getElementsByClassName('active-product')[0];
    const productOption1 = document.getElementsByClassName('option')[1].getAttribute('src');
    activeProduct.src = productOption1;
}

const hoverProduct3 = () => {
    const activeProduct = document.getElementsByClassName('active-product')[0];
    const productOption1 = document.getElementsByClassName('option')[2].getAttribute('src');
    activeProduct.src = productOption1;
}

const hoverProduct4 = () => {
    const activeProduct = document.getElementsByClassName('active-product')[0];
    const productOption1 = document.getElementsByClassName('option')[3].getAttribute('src');
    activeProduct.src = productOption1;
}

const Detail = () => {
    return(
        <div className="product-detail-contents">
            <div className="container">
                <div className="left">
                    <img src={shoes} alt="" className="active-product" />
                    <div className='product-option'>
                        <div className='item'>
                            <img src={shoesOption1} alt="" className="option" onMouseMove={hoverProduct1} />
                        </div>
                        <div className='item'>
                            <img src={shoesOption2} alt="" className="option" onMouseMove={hoverProduct2}/>
                        </div>
                        <div className='item'>
                            <img src={shoesOption3} alt="" className="option" onMouseMove={hoverProduct3}/>
                        </div>
                        <div className='item'>
                            <img src={shoesOption4} alt="" className="option" onMouseMove={hoverProduct4}/>
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