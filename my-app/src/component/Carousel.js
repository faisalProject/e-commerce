import carouselImage from '../images/carousel-image2.jpg'

const firstSlide = document.getElementsByClassName('first');
const circles = document.getElementsByClassName('circle');
let count = 1;
const slideshow = setInterval(() => {
    count++;
    if (count > 5) {
        count = 1;
    }
    
    switch (count) {
        case 1:
            firstSlide[0].style.marginLeft = '0%';
            circles[0].style.backgroundColor = '#fff';
            circles[1].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            circles[2].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            circles[3].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            circles[4].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            break;
        case 2:
            firstSlide[0].style.marginLeft = '-100%';
            circles[0].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            circles[1].style.backgroundColor = '#fff';
            circles[2].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            circles[3].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            circles[4].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            break;
        case 3:
            firstSlide[0].style.marginLeft = '-200%';
            circles[0].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            circles[1].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            circles[2].style.backgroundColor = '#fff';
            circles[3].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            circles[4].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            break;
        case 4:
            firstSlide[0].style.marginLeft = '-300%';
            circles[0].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            circles[1].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            circles[2].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            circles[3].style.backgroundColor = '#fff';
            circles[4].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            break;
        default:
            firstSlide[0].style.marginLeft = '-400%';
            circles[0].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            circles[1].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            circles[2].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            circles[3].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            circles[4].style.backgroundColor = '#fff';
            break;
    }
}, 7000);

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
                <li className="slide">
                    <img src={carouselImage} alt="" />
                </li>
                <li className="slide">
                    <img src={carouselImage} alt="" />
                </li>
            </ul>
            <div className="pagination">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    )
}

export default Carousel;