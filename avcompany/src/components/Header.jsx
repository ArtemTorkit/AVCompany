import { logo, phone, downArrow } from '../assets'
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cleaningServicesNames, handymanServicesNames } from '../constants/index';

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

  const [isActive, setIsActive] = useState(false)
  const [isServicesActive, setIsServicesActive] = useState(false)
  const [isAreasActive, setIsAreasActive] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const location = useLocation();

  useEffect(() => {
         const pathname = location.pathname;
         let extractedString = "";

         if (pathname === "/") {
           extractedString = "home";
         } else {
           const firstSlashIndex = pathname.indexOf("/");

           if (firstSlashIndex !== -1) {
             const secondSlashIndex = pathname.indexOf(
               "/",
               firstSlashIndex + 1
             );

             if (secondSlashIndex !== -1) {
               // Case: Extract between first set of slashes
               extractedString = pathname.substring(
                 firstSlashIndex + 1,
                 secondSlashIndex
               );
             } else {
               // Case: No second slash, extract after first slash
               extractedString = pathname.substring(firstSlashIndex + 1);
             }
           }
         }
        setActiveLink(extractedString)

  },[location])
  return (
    <header className=" bg-white w-full shadow-md fixed top-0 left-0 z-[999]">
      <div className="container">
        <div className="  bg-white w-full  top-0 left-0 z-[100]  font-montserrat flex justify-between items-center h-[10vh]">
          <Link
            to={"/"}
            className="flex items-center gap-[15px] text-[12px] md:text-[15px]">
            <div className=" ">
              <img src={logo} alt="" className="w-[40px] h-[40px]" />
            </div>
            <div className="">
              <p className="font-bold text-[19px] sm:text-[15px]">VA Company</p>
              <p className="hidden lg:block">Handyman&Cleaning Services</p>
            </div>
          </Link>
          <ul className=" hidden md:flex items-center gap-[15px] font-roboto font-bold relative top-[0px]  right-0 lg:right-[50px] text-[15px] lg:text-[20px]  ">
            <li>
              <Link
                to={"/"}
                className={`${
                  "home" == activeLink ? "" : "menu-active"
                }menu-active menu-option`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className={`${
                  "about" == activeLink ? "" : "menu-active"
                }menu-active menu-option`}>
                About
              </Link>
            </li>
            <li className="flex gap-[6px] items-center group">
              <p
                className={`${
                  "service" == activeLink ? "" : "menu-active"
                }menu-active menu-option`}>
                Services
              </p>
              <img src={downArrow} alt="" />
              <div
                className={`hidden group-hover:block font-normal max-h-[300px] overflow-auto bg-white absolute z-50 top-[100%] right-[30px] w-[270px]  rounded-[3px] shadow-lg border border-gray-200`}>
                <p className="font-bold p-2">Handyman Services</p>
                {handymanServicesNames.map((name, index) => (
                  <Link
                    to={`/service/${encodeURIComponent(name)}`}
                    key={index}
                    className="block px-4 py-2 hover:border-b border-purple cursor-pointer hover:text-purple">
                    {name}
                  </Link>
                ))}
                <p className="font-bold p-2">Cleaning Services</p>
                {cleaningServicesNames.map((name, index) => (
                  <Link
                    to={`/service/${encodeURIComponent(name)}`}
                    key={index}
                    className="block px-4 py-2 hover:border-b border-purple cursor-pointer hover:text-purple">
                    {name}
                  </Link>
                ))}
              </div>
            </li>

            <li className="flex gap-[6px] items-center relative group">
              <p className="menu-option">Areas</p>
              <img src={downArrow} alt="Down Arrow" />
              <div className="hidden group-hover:block font-normal max-h-[300px] overflow-auto bg-white absolute z-50 top-[100%] left-0 w-[270px] rounded-[3px] shadow-lg border border-gray-200">
                {cities.map((city) => (
                  <Link
                    key={city}
                    to={`/contact/${city}`}
                    className=" block px-4 py-2 hover:border-b border-purple cursor-pointer hover:text-purple">
                    {city}
                  </Link>
                ))}
              </div>
            </li>
            <li className="menu-option">
              <Link
                to={"/contact"}
                className={`${
                  "contact" == activeLink ? "" : "menu-active"
                }menu-active menu-option`}>
                Contact us
              </Link>
            </li>
          </ul>
          <div className="hidden md:block">
            <div className="flex items-center gap-[15px]">
              <a href="tel:+1(561)866-9987">
                <img src={phone} alt="" />
              </a>
              <div className=" text-[13px] lg:text-[20px]">
                <p className="">Quick contact</p>
                <a className="font-bold" href="tel:+1(561)866-9987">
                  +1(561)866-9987
                </a>
              </div>
            </div>
          </div>
          <div className="md:hidden" onClick={() => setIsActive(!isActive)}>
            <div className="relative top-0 left-0 z-[99999]">
              <div
                className={`${
                  isActive ? "rotate-45 translate-y-[11px]" : ""
                } bar1`}></div>
              <div className={`${isActive ? "opacity-0" : ""} bar2`}></div>
              <div
                className={`${
                  isActive ? "rotate-[-45deg] translate-y-[-11px]" : ""
                } bar3`}></div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isActive ? "block absolute top-0 right-0 h-[100vh] z-[100]" : "hidden"
        } h-[100vh]  shadow-md shadow-[#333]  bg-white`}>
        <div className="md:hidden" onClick={() => setIsActive(!isActive)}>
          
        </div>
        <div className="flex ">
          <ul className="flex flex-col items-start px-[2rem]  w-[300px] gap-[15px] font-roboto font-bold text-[20px]  ">
            <div
              className="md:hidden self-end h-[5vh]"
              onClick={() => setIsActive(!isActive)}></div>
            <li>
              <Link
                to={"/"}
                className={`${
                  "home" == activeLink ? "" : "menu-active"
                }menu-active menu-option`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className={`${
                  "about" == activeLink ? "" : "menu-active"
                }menu-active menu-option`}>
                About
              </Link>
            </li>
            <li
              className="flex gap-[6px] items-center "
              onClick={() => setIsServicesActive(!isServicesActive)}>
              <p
                className={`${
                  "service" == activeLink ? "" : "menu-active"
                }menu-active menu-option`}>
                Services
              </p>
              <img src={downArrow} alt="" />
            </li>
            {isServicesActive && (
              <div className="max-h-[20vh] overflow-auto font-normal">
                <p className="font-bold p-2">Handyman Services</p>
                {handymanServicesNames.map((name, index) => (
                  <Link
                    to={`/service/${encodeURIComponent(name)}`}
                    key={index}
                    className="block px-4 py-2 hover:border-b border-purple cursor-pointer hover:text-purple">
                    {name}
                  </Link>
                ))}
                <p className="font-bold p-2">Cleaning Services</p>
                {cleaningServicesNames.map((name, index) => (
                  <Link
                    to={`/service/${encodeURIComponent(name)}`}
                    key={index}
                    className="block px-4 py-2 hover:border-b border-purple cursor-pointer hover:text-purple">
                    {name}
                  </Link>
                ))}
              </div>
            )}

            <li
              className="flex gap-[6px] items-center"
              onClick={() => setIsAreasActive(!isAreasActive)}>
              <p
                className={`${
                  "home" == activeLink ? "" : "menu-active"
                }menu-active menu-option`}>
                Areas
              </p>
              <img src={downArrow} alt="Down Arrow" />
            </li>
            {isAreasActive && (
              <div className=" font-normal max-h-[20vh] overflow-auto w-full  rounded-[3px]">
                {cities.map((city) => (
                  <Link
                    to={`/contact/${city}`}
                    key={city}
                    className="block px-4 py-2 hover:border-b border-purple cursor-pointer hover:text-purple">
                    {city}
                  </Link>
                ))}
              </div>
            )}

            <li className="menu-option">
              <Link
                to={"/contact"}
                className={`${
                  "contact" == activeLink ? "" : "menu-active"
                }menu-active menu-option`}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header
