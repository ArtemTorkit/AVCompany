import { clock, logo, mapPinYellow, message, phoneYellow } from "../assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="mt-[150px] bg-[#282828] text-white py-[30px]">
      <div className="flex flex-col gap-[25px] items-center  lg:flex-row lg:justify-between lg:items-start container lg:h-[220px]">
        <div className="max-w-[300px] flex flex-col gap-[15px] justify-between">
          <div className="flex items-center gap-[15px]">
            <div className=" ">
              <img src={logo} alt="" className="w-[40px] h-[40px]" />
            </div>
            <div className="">
              <p className="font-bold">VA Company</p>
              <p className="">Profesional cleaning services</p>
            </div>
          </div>
          <p>
            We take the headache out of maintaining your home or workplace,
            saving you time and nerves with our comprehensive cleaning and
            repair services.
          </p>
          <div className="shadow shadow-white transition hover:shadow-sm w-[230px]">
            <Link to={"/contact"} className="group">
              <button className="hover:bg-black hover:text-white transition flex justify-center items-center gap-[6px]  bg-yellow w-[230px] h-[50px] text-black rounded-[3px]">
                <p className="block">CONTACT US</p>
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
        <div className="max-w-[300px] flex flex-col justify-between h-full gap-[10px]">
          <p className="font-bold">Get in touch</p>
          <div className="flex items-center gap-[10px]">
            <img src={phoneYellow} alt="" />
            <p>+1(561)866-9987</p>
          </div>
          <div className="flex items-center gap-[10px]">
            <img src={message} alt="" />
            <p>avcompany45@gmail.com</p>
          </div>
          <p className="font-bold">Work Hours</p>
          <div className="flex items-center gap-[10px]">
            <img src={clock} alt="" />
            <p>7 AM - 8 PM : Monday - Saturday</p>
          </div>
        </div>
        <div className="max-w-[300px] flex flex-col  gap-[15px] justify-between">
          <p className="font-bold">Service areas</p>
          <div className="flex gap-[10px]">
            <ul>
              <li className="flex items-ceneter gap-[10px]">
                <img src={mapPinYellow} alt="" />
                <p>Lake Worth</p>
              </li>
              <li className="flex items-ceneter gap-[10px]">
                <img src={mapPinYellow} alt="" />
                <p>Boynton Beach</p>
              </li>
              <li className="flex items-ceneter gap-[10px]">
                <img src={mapPinYellow} alt="" />
                <p>Boca Raton</p>
              </li>
              <li className="flex items-ceneter gap-[10px]">
                <img src={mapPinYellow} alt="" />
                <p>West Palm Beach</p>
              </li>
              <li className="flex items-ceneter gap-[10px]">
                <img src={mapPinYellow} alt="" />
                <p>Deerfield</p>
              </li>
              <li className="flex items-ceneter gap-[10px]">
                <img src={mapPinYellow} alt="" />
                <p>Pompano Beach</p>
              </li>
              <li className="flex items-ceneter gap-[10px]">
                <img src={mapPinYellow} alt="" />
                <p>Riviera Beach</p>
              </li>
              <li className="flex items-ceneter gap-[10px]">
                <img src={mapPinYellow} alt="" />
                <p>Jupiter</p>
              </li>
            </ul>
            <ul>
              <li className="flex items-ceneter gap-[10px]">
                <img src={mapPinYellow} alt="" />
                <p>Wellington</p>
              </li>
              <li className="flex items-ceneter gap-[10px]">
                <img src={mapPinYellow} alt="" />
                <p>Delray Beach</p>
              </li>
              <li className="flex items-ceneter gap-[10px]">
                <img src={mapPinYellow} alt="" />
                <p>Fort Lauderdale</p>
              </li>
              <li className="flex items-ceneter gap-[10px]">
                <img src={mapPinYellow} alt="" />
                <p>Plantation</p>
              </li>
              <li className="flex items-ceneter gap-[10px]">
                <img src={mapPinYellow} alt="" />
                <p>Coral Springs</p>
              </li>
              <li className="flex items-ceneter gap-[10px]">
                <img src={mapPinYellow} alt="" />
                <p>Greenacres</p>
              </li>
              <li className="flex items-ceneter gap-[10px]">
                <img src={mapPinYellow} alt="" />
                <p>Loxahatchee</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-[30px] text-center text-[#777]">
        Copyright © 2024 AV Company - Professional Cleaning&Handyman Services |
        Website and marketing by Artem Torkit
      </div>
    </footer>
  );
}

export default Footer
