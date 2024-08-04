import { Link } from "react-router-dom";
import { blackPhone, calendar, line, stars } from "../assets";

const Work = () => {
  return (
    <section className="bg-purple py-[30px] mt-[100px] ">
      <div className="text-center">
        <h2 className="text-[30px] md:text-[38px] font-bold mt-[30px]">
          How do we work?
        </h2>
      </div>
      <div className="mt-[50px] flex flex-col md:flex-row gap-[30px] md:gap-0 justify-between items-center container">
        <div className="flex flex-col items-center gap-[10px] max-w-[280px] text-center">
          <div className="flex justify-center items-center bg-yellow rounded-full shadow-md shadow-[#333] h-[100px] w-[100px]">
            <img loading="lazy" src={blackPhone} alt="" />
          </div>
          <div className="font-bold">01</div>
          <div className="font-bold">Easy online Contact</div>
          <div className="">
            Choose everything that needs to be done in your property
          </div>
        </div>
        <div className="hidden md:block">
          <img loading="lazy" src={line} alt="" />
        </div>
        <div className="flex flex-col items-center gap-[10px] max-w-[280px] text-center">
          <div className="flex justify-center items-center bg-yellow rounded-full shadow-md shadow-[#333] h-[100px] w-[100px]">
            <img loading="lazy" src={calendar} alt="" />
          </div>
          <div className="font-bold">02</div>
          <div className="font-bold">Choose Date & Time</div>
          <div className="">Schedule the service at your convenience</div>
        </div>
        <div className="hidden md:block">
          <img loading="lazy" src={line} alt="" />
        </div>
        <div className="flex flex-col items-center gap-[10px] max-w-[280px] text-center">
          <div className="flex justify-center items-center bg-yellow rounded-full shadow-md shadow-[#333] h-[100px] w-[100px]">
            <img loading="lazy" src={stars} alt="" />
          </div>
          <div className="font-bold">03</div>
          <div className="font-bold">Enjoy the Result</div>
          <div className="">
            Sit back and relax while we take care of your needs
          </div>
        </div>
      </div>
      <div className="">
        <div className="shadow shadow-white transition hover:shadow-sm w-[230px] h-[50px] mx-auto mt-[50px]">
          <Link to={"/contact"} className="group">
            <button className="hover:bg-black hover:text-white transition flex justify-center items-center gap-[6px]  bg-yellow w-[230px] h-[50px] text-black rounded-[3px]">
              <p className="block font-bold">CONTACT US</p>
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
  );
};

export default Work;
