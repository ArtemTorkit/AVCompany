import { logo, phone, downArrow } from '../assets'
import { Link } from 'react-router-dom';
// import { useState } from 'react';

const Header = () => {
  const cities = [
    "Lake Worth",
    "Boynton Beach",
    "Boca Raton",
    "West Palm Beach",
    "Deerfield",
    "Pompano Beach",
    "Riviera Beach",
    "Jupiter",
    "Wellington",
    "Delray Beach",
    "Fort Lauderdale",
    "Plantation",
    "Coral Springs",
    "Greenacres",
    "Loxahatchee"
  ];
  return (
    <header className='fixed top-0 left-0 z-[100] bg-white w-full shadow-md'>
      <div className="container font-montserrat flex justify-between items-center h-[14vh]">
        <Link to={'/'}  className="flex items-center gap-[15px]">
          <div className=" ">
            <img src={logo} alt="" className="w-[40px] h-[40px]" />
          </div>
          <div className="">
            <p className="font-bold">VA Company</p>
            <p className="">Profesional cleaning services</p>
          </div>
        </Link>
        <ul className="flex items-center gap-[15px] font-roboto font-bold relative top-[0px] right-[50px] text-[20px]">
          <li>
            <Link to={"/"} className="menu-active menu-option">
              Home
            </Link>
          </li>
          <li className="menu-option">About</li>
          <li className="flex gap-[6px] items-center relative group">
            <p className="menu-option">Services</p>
            <img src={downArrow} alt="" />
            <div
              className={`hidden group-hover:block font-normal max-h-[300px] overflow-auto bg-white absolute z-50 top-[100%] left-0 w-[270px]  rounded-[3px] shadow-lg border border-gray-200`}>
              <div className="px-4 py-2 hover:border-b border-purple cursor-pointer hover:text-purple">
                AirBNB cleaning
              </div>
              <div className="px-4 py-2 hover:border-b border-purple cursor-pointer hover:text-purple">
                Deep cleaning
              </div>
              <div className="px-4 py-2 hover:border-b border-purple cursor-pointer hover:text-purple">
                Home cleaning
              </div>
              <div className="px-4 py-2 hover:border-b border-purple cursor-pointer hover:text-purple">
                Wall refreshing
              </div>
              <div className="px-4 py-2 hover:border-b border-purple cursor-pointer hover:text-purple">
                Painting
              </div>
            </div>
          </li>

          <li className="flex gap-[6px] items-center relative group">
            <p className="menu-option">Areas</p>
            <img src={downArrow} alt="Down Arrow" />
            <div className="hidden group-hover:block font-normal max-h-[300px] overflow-auto bg-white absolute z-50 top-[100%] left-0 w-[270px] rounded-[3px] shadow-lg border border-gray-200">
              {cities.map((city) => (
                <div
                  key={city}
                  className="px-4 py-2 hover:border-b border-purple cursor-pointer hover:text-purple">
                  {city}
                </div>
              ))}
            </div>
          </li>
          <li className="menu-option">
            <Link to={"/contact"}>Contact us</Link>
          </li>
        </ul>
        <div className="">
          <div className="flex items-center gap-[15px]">
            <a href="tel:+1(561)866-9987">
              <img src={phone} alt="" />
            </a>
            <div className="">
              <p className="">Quick contact</p>
              <a className="font-bold" href="tel:+1(561)866-9987">
                +1(561)866-9987
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
