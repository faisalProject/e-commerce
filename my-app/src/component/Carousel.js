import carouselImage from '../images/carousel-image2.jpg'

const Carousel = () => {
    return(
        <div className="container carousel-contents">
            <ul className="slider">
                <li className="slide">
                    <img src={carouselImage} alt="" />
                </li>
                <li className="slide">
                    <img src={carouselImage} alt="" />
                </li>
                <li className="slide">
                    <img src={carouselImage} alt="" />
                </li>
            </ul>
        </div>
    )
}

export default Carousel;