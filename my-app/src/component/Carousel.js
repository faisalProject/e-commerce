import carouselImage from '../images/carousel-image2.jpg'

const first = document.getElementsByClassName('first')[0];

let count = 1;
const slideshow = setInterval(() => {
    count++;
    if (count > 3) {
        count = 1;
    }

    switch (count) {
        case 1:
            first.style.marginLeft = '0%';
            break;
        case 2:
            first.style.marginLeft = '-100%';
            break;
        default:
            first.style.marginLeft = '-200%';
            break;
    }
}, 5000)

const Carousel = () => {
    return(
        <div className="container carousel-contents" slideshow={slideshow}>
            <ul className="slider">
                <li className="slide first">
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