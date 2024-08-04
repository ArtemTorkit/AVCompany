import { handyman, mainBg } from "../assets";
import { Link } from "react-router-dom";
import {
  handyman1,
  handyman2,
  handyman3,
  handyman4,
  handyman5,
  handyman6,
  handyman7,
  handyman8,
  handyman9,
  handyman10,
} from "../assets/handymanServices";

const HandymanServices = () => {
  return (
    <section className="container mt-[100px] text-center text-black font-montserrat relative top-0 left-0">
      <h2 className="text-[28px] font-bold max-w-[600px] mx-auto">
        Handyman Services You Can Trust
      </h2>
      <img
        src={handyman}
        alt=""
        className="absolute top-0 left-0 object-fit w-full h-full "
      />
      <div className="mt-[50px] flex justify-center gap-[10px] flex-wrap mx-auto relative top-0 left-0 z-[5]">
        <div className="flex flex-col p-2 rounded-[3px] shadow-lg shadow-[#333] max-w-[360px] bg-white">
          <div className="card-photo ">
            <img loading="lazy"src={handyman1} alt="" className="card-item-photo" />
          </div>
          <div className="">
            <p className="font-bold mt-[10px]">Expert Wall Painting</p>
            <p className="mt-[10px] text-[#5b5b5b]">
              Transform your space with our professional interior and exterior
              painting services.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-2 rounded-[3px] shadow-lg shadow-[#333] max-w-[360px] bg-white">
          <div className="card-photo ">
            <img loading="lazy"src={handyman2} alt="" className="card-item-photo" />
          </div>
          <div className="">
            <p className="font-bold mt-[10px]">House Remodeling Services</p>
            <p className="mt-[10px] text-[#5b5b5b]">
              Comprehensive remodeling services including plasterboard, tile
              work, and putty applications to modernize your home.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-2 rounded-[3px] shadow-lg shadow-[#333] max-w-[360px] bg-white">
          <div className="card-photo ">
            <img loading="lazy"src={handyman3} alt="" className="card-item-photo" />
          </div>
          <div className="">
            <p className="font-bold mt-[10px]">Bathroom Remodeling</p>
            <p className="mt-[10px] text-[#5b5b5b]">
              Upgrade your bathroom with our expert remodeling services for a
              fresh and modern look.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-2 rounded-[3px] shadow-lg shadow-[#333] max-w-[360px] bg-white">
          <div className="card-photo ">
            <img loading="lazy"src={handyman4} alt="" className="card-item-photo" />
          </div>
          <div className="">
            <p className="font-bold mt-[10px]">Drywall Repair</p>
            <p className="mt-[10px] text-[#5b5b5b]">
              Efficient and seamless drywall repair services to restore your
              walls to perfection.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-2 rounded-[3px] shadow-lg shadow-[#333] max-w-[360px] bg-white">
          <div className="card-photo ">
            <img loading="lazy"src={handyman5} alt="" className="card-item-photo" />
          </div>
          <div className="">
            <p className="font-bold mt-[10px]">Tile Installation</p>
            <p className="mt-[10px] text-[#5b5b5b]">
              Professional tile installation for floors, walls, and backsplashes
              to enhance your home's aesthetic.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-2 rounded-[3px] shadow-lg shadow-[#333] max-w-[360px] bg-white">
          <div className="card-photo ">
            <img loading="lazy"src={handyman6} alt="" className="card-item-photo" />
          </div>
          <div className="">
            <p className="font-bold mt-[10px]">Flooring Installation</p>
            <p className="mt-[10px] text-[#5b5b5b]">
              High-quality flooring installation services for a durable and
              beautiful finish.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-2 rounded-[3px] shadow-lg shadow-[#333] max-w-[360px] bg-white">
          <div className="card-photo ">
            <img loading="lazy"src={handyman7} alt="" className="card-item-photo" />
          </div>
          <div className="">
            <p className="font-bold mt-[10px]">Plumbing Repairs</p>
            <p className="mt-[10px] text-[#5b5b5b]">
              Reliable plumbing services for leaks, clogs, and other issues to
              keep your home running smoothly.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-2 rounded-[3px] shadow-lg shadow-[#333] max-w-[360px] bg-white">
          <div className="card-photo ">
            <img loading="lazy"src={handyman8} alt="" className="card-item-photo" />
          </div>
          <div className="">
            <p className="font-bold mt-[10px]">
              Electrical Fixes & Installations
            </p>
            <p className="mt-[10px] text-[#5b5b5b]">
              Ensure safety and functionality with our trusted electrical repair
              and installation services.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-2 rounded-[3px] shadow-lg shadow-[#333] max-w-[360px] bg-white">
          <div className="card-photo ">
            <img loading="lazy"src={handyman9} alt="" className="card-item-photo" />
          </div>
          <div className="">
            <p className="font-bold mt-[10px]">General Home Maintenance</p>
            <p className="mt-[10px] text-[#5b5b5b]">
              Comprehensive maintenance services for all your home repair needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-2 rounded-[3px] shadow-lg shadow-[#333] max-w-[360px] bg-white">
          <div className="card-photo ">
            <img loading="lazy"src={handyman10} alt="" className="card-item-photo" />
          </div>
          <div className="">
            <p className="font-bold mt-[10px]">Contact Us for More Services</p>
            <p className="mt-[10px] text-[#5b5b5b]">
              We offer a variety of additional services. Contact us to discuss
              your specific needs.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-[50px] relative z-10">
        <Link to={"/contact"} className="group shadow-lg shadow-[#333]">
          <button className="hover:bg-yellow hover:text-black transition flex justify-center items-center gap-[6px]  bg-black w-[300px] h-[50px] text-white rounded-[3px]">
            <p className="block">Schedule a Handyman Visit</p>
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
};

export default HandymanServices;
