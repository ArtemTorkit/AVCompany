import { mainBg, mapPin } from "../assets";
import { Link } from "react-router-dom";
import ServicesCards from "../components/ServicesCards";
import Question from "../components/Question";
import Work from "../components/Work";

const Main = () => {
  return (
    <div className="relative top-0 left-0 w-full text-white mt-[14vh]">
      <div className="relative w-full h-[72vh]">
        <img
          src={mainBg}
          alt=""
          className="absolute top-0 left-0 h-full w-full object-cover object-bottom brightness-[60%]"
        />
        <section className="container relative z-10 text-center flex items-center justify-center h-full w-full font-montserrat font-bold">
          <div className="flex flex-col justify-center items-center gap-[18px]">
            <div className="">
              Welcome to Cleaning/Handyman,{" "}
              <img
                src={mapPin}
                alt=""
                className="inline-block relative top-[-2px] left-0"
              />
              Florida
            </div>
            <div className="text-[4em] leading-[1.25em]">
              Your Trusted Cleaning and <br /> Handyman Experts
            </div>
            <div className="font-normal">
              At VA Company Florida, we pride ourselves on delivering top-notch
              cleaning <br /> and handyman services to keep your home and office
              sparkling.
            </div>
            <div className="shadow shadow-white transition hover:shadow-sm">
              <Link to={"/contact"} className="group">
                <button className="hover:bg-black hover:text-white transition flex justify-center items-center gap-[6px]  bg-yellow w-[230px] h-[50px] text-black rounded-[3px]">
                  <p className="block">BOOK NOW</p>
                  <svg
                    className="stroke-current text-black transition group-hover:text-white"
                    width="8"
                    height="11"
                    viewBox="0 0 8 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 1L6 5.5L1 10"
                      className=""
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-gray-100">
        <Work />
        <ServicesCards />
        <Question />
      </div>
    </div>
  );
};

export default Main;
