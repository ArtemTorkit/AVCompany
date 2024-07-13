import { mainBg } from "../assets";
import { Link } from "react-router-dom";
     
const ServicesCards = () => {
  return (
    <section className="container mt-[100px] text-center text-black font-montserrat">
      <h2 className="text-[28px] font-bold max-w-[600px] mx-auto">
        We Deliver Cleaning & Handyman Services Tailored to Your Needs
      </h2>
      <div className="mt-[50px] flex justify-arround gap-[10px] flex-wrap w-full">
        <div className="flex flex-col p-2 rounded-[3px] shadow-lg shadow-[#333] max-w-[360px]">
          <div className="">
            <img
              src={mainBg}
              alt=""
              className="object-center object-cover h-[300px]"
            />
          </div>
          <div className="">
            <p className="font-bold mt-[10px]">Regular cleaning</p>
            <p className="mt-[10px] text-[#5b5b5b]">
              Lorem ipsum dolor amet handihoh hitler campot. Pes patron krutyj
              krutyj nacze pokemon.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-2 rounded-[3px] shadow-lg shadow-[#333] max-w-[360px]">
          <div className="">
            <img
              src={mainBg}
              alt=""
              className="object-center object-cover h-[300px]"
            />
          </div>
          <div className="">
            <p className="font-bold mt-[10px]">Regular cleaning</p>
            <p className="mt-[10px] text-[#5b5b5b]">
              Lorem ipsum dolor amet handihoh hitler campot. Pes patron krutyj
              krutyj nacze pokemon.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-2 rounded-[3px] shadow-lg shadow-[#333] max-w-[360px]">
          <div className="">
            <img
              src={mainBg}
              alt=""
              className="object-center object-cover h-[300px]"
            />
          </div>
          <div className="">
            <p className="font-bold mt-[10px]">Regular cleaning</p>
            <p className="mt-[10px] text-[#5b5b5b]">
              Lorem ipsum dolor amet handihoh hitler campot. Pes patron krutyj
              krutyj nacze pokemon.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-2 rounded-[3px] shadow-lg shadow-[#333] max-w-[360px]">
          <div className="">
            <img
              src={mainBg}
              alt=""
              className="object-center object-cover h-[300px]"
            />
          </div>
          <div className="">
            <p className="font-bold mt-[10px]">Regular cleaning</p>
            <p className="mt-[10px] text-[#5b5b5b]">
              Lorem ipsum dolor amet handihoh hitler campot. Pes patron krutyj
              krutyj nacze pokemon.
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-full flex justify-center mt-[50px]">
        <Link to={"/contact"} className="group shadow-lg shadow-[#333]">
          <button className="hover:bg-yellow hover:text-black transition flex justify-center items-center gap-[6px]  bg-black w-[230px] h-[50px] text-white rounded-[3px]">
            <p className="block">BOOK NOW</p>
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
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default ServicesCards
