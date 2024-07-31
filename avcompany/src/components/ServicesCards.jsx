import { cleaning, stars,  } from "../assets";
import { Link } from "react-router-dom";
import { clean1, clean2, clean3, clean4, clean5 } from "../assets/cleaningServices";

const ServicesCards = () => {
  return (
    <section className="container mt-[100px] text-center text-black font-montserrat relative top-0 left-0">
      <h2 className="text-[28px] font-bold max-w-[600px] mx-auto ">
        <span>
          <img loading="lazy"src={stars} alt="" className="inline-block mr-2" />
        </span>
        Professional Cleaning Services
        <span>
          <img loading="lazy"src={stars} alt="" className="inline-block ml-2 " />
        </span>
      </h2>
      <img
        src={cleaning}
        alt=""
        className="absolute top-0 left-0 object-fit w-full h-full "
      />

      <div className="mt-[50px] flex justify-center gap-[10px] flex-wrap mx-auto relative top-0 left-0 z-[5]">
        <div className="flex flex-col p-2 rounded-[3px] shadow-lg shadow-[#333] max-w-[360px] bg-white">
          <div className="card-photo">
            <img loading="lazy"src={clean1} alt="" className="card-item-photo" />
          </div>
          <div className="">
            <p className="font-bold mt-[10px]">Deep Cleaning Services</p>
            <p className="mt-[10px] text-[#5b5b5b]">
              Thorough and detailed cleaning for every nook and cranny of your
              home.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-2 rounded-[3px] shadow-lg shadow-[#333] max-w-[360px] bg-white">
          <div className="card-photo">
            <img loading="lazy"src={clean2} alt="" className="card-item-photo" />
          </div>
          <div className="">
            <p className="font-bold mt-[10px]">Regular House Cleaning</p>
            <p className="mt-[10px] text-[#5b5b5b] ">
              Keep your home consistently clean with our reliable house cleaning
              services.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-2 rounded-[3px] shadow-lg shadow-[#333] max-w-[360px] bg-white">
          <div className="card-photo">
            <img loading="lazy"src={clean3} alt="" className="card-item-photo" />
          </div>
          <div className="">
            <p className="font-bold mt-[10px]">Vacation Home Cleaning</p>
            <p className="mt-[10px] text-[#5b5b5b]">
              Ensure your vacation home is spotless and ready for your next stay
              or guest.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-2 rounded-[3px] shadow-lg shadow-[#333] max-w-[360px] bg-white">
          <div className="card-photo">
            <img loading="lazy"src={clean4} alt="" className="card-item-photo" />
          </div>
          <div className="">
            <p className="font-bold mt-[10px]">Move-In/Move-Out Cleaning</p>
            <p className="mt-[10px] text-[#5b5b5b]">
              Make your moving experience smoother with our detailed move-in and
              move-out cleaning services.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-2 rounded-[3px] shadow-lg shadow-[#333] max-w-[360px] bg-white">
          <div className="card-photo">
            <img loading="lazy"src={clean5} alt="" className="card-item-photo" />
          </div>
          <div className="">
            <p className="font-bold mt-[10px]">Post-Construction Cleaning</p>
            <p className="mt-[10px] text-[#5b5b5b]">
              Remove dust and debris after renovations with our specialized
              post-construction cleaning services.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-[50px] relative z-10">
        <Link to={"/contact"} className="group shadow-lg shadow-[#333]">
          <button className="hover:bg-yellow hover:text-black transition flex justify-center items-center gap-[6px]  bg-black w-[300px] h-[50px] text-white rounded-[3px]">
            <p className="block">Book Your Cleaning Now</p>
            <svg
              className="stroke-current text-white transition group-hover:text-black"
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
    </section>
  );
}

export default ServicesCards
