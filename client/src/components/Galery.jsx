import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import {
    portfolioOne,
    portfolioTwo,
    portfolioThree,
    portfolioFour,
    portfolioFive,
    portfolioSix,
    portfolioSeven,
} from '../assets/portfolio'
const images = [
  portfolioOne,
  portfolioTwo,
  portfolioThree,
  portfolioFour,
  portfolioFive,
  portfolioSix,
  portfolioSeven,
];

const Galery = () => {
    return (
      <div className="container mt-[100px]">
        <Slide >
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[0]})` }}>
              
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[1]})` }}>
              
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[2]})` }}>
              
            </div>
          </div>
        </Slide>
      </div>
    );
};

export default Galery;
