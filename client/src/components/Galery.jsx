import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import {
  portfolioOne,
  portfolioTwo,
  portfolioFour,
  portfolioFive,
  portfolioSix,
  portfolioSeven,
  portfolioEight,
  portfolioNine,
  portfolioTen,
  portfolioEleven,
} from "../assets/portfolio";
const images = [
  portfolioOne,
  portfolioTwo,
  portfolioFour,
  portfolioFive,
  portfolioSix,
  portfolioSeven,
  portfolioEight,
  portfolioNine,
  portfolioTen,
  portfolioEleven,
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
            <div style={{ backgroundImage: `url(${images[3]})` }}>
              
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[4]})` }}>
              
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[5]})` }}>
              
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[6]})` }}>
              
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[7]})` }}>
              
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[8]})` }}>
              
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[9]})` }}>
              
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[10]})` }}>
              
            </div>
          </div>

        </Slide>
      </div>
    );
};

export default Galery;
