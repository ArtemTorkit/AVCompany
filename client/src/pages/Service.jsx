import { Link, useParams } from 'react-router-dom';
import { services } from '../constants';
import '../services.css'
import { clean3,  } from '../assets/cleaningServices';
import { mapPinYellow } from '../assets';

const Service = () => {
  const { service } = useParams();

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
    "Loxahatchee",
  ];
  return (
    <section className="container mt-[10vh]">
      <div className="flex flex-col md:flex-row gap-[15px]">
        <div className="">
          <div dangerouslySetInnerHTML={{ __html: services[service] }} />
          <div className="">
            <div className="bg-purple my-[30px] py-[20px] px-[10px] text-white">
              <p className="text-center text-[26px] font-bold mb-4">
                Areas where we work
              </p>
              <div className="flex flex-wrap gap-[5px]">
                {cities.map((city, index) => (
                  <div className="" key={index}>
                    <img loading="lazy"
                      src={mapPinYellow}
                      className="inline-block mr-[3px] relative top-[-2px] left-0"
                    />
                    {city}
                  </div>
                ))}
              </div>
            </div>
              <div className="flex justify-center">
                <Link to={"/contact"} className="group">
                  <button className="hover:bg-black hover:text-white transition flex justify-center items-center gap-[6px]  bg-yellow w-full sm:w-[230px] h-[50px] text-black rounded-[3px]">
                    <p className="block">Fill Out The Contact Form</p>
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
            <div className=""></div>
          </div>
        </div>
        <div className="flex flex-col  mt-[70px] gap-[50px]">
          <Link
            className=" block w-full md:w-[300px] shadow-md shadow-[#7b7b7b] transition hover:shadow-sm"
            to={"/service/Deep Cleaning Service"}>
            <div className="w-full h-[250px]">
              <img loading="lazy"
                src={clean3}
                alt=""
                className="w-full h-full object-cover object-center brightness-90 transition hover:brightness-100"
              />
            </div>
            <div className={"w-full bg-yellow p-4 font-bold text-[17px]"}>
              Commercial cleaning
            </div>
          </Link>
          <Link
            className="w-full md:w-[300px] shadow-md shadow-[#7b7b7b] transition hover:shadow-sm"
            to={"/service/Deep Cleaning Service"}>
            <div className="w-full h-[250px] ]">
              <img loading="lazy"
                src="https://www.tastingtable.com/img/gallery/heres-why-you-shouldnt-clean-your-fridge-with-bleach/introduction-1650660627.jpg"
                alt=""
                className="w-full h-full object-cover object-center brightness-90 transition hover:brightness-100"
              />
            </div>
            <div className={"w-full bg-yellow p-4 font-bold text-[17px]"}>
              Deep Cleaning Of Fridge
            </div>
          </Link>
          <Link
            className="w-full md:w-[300px] shadow-md shadow-[#7b7b7b] transition hover:shadow-sm"
            to={"/service/Vacation Home Cleaning"}>
            <div className="w-full h-[250px] ">
              <img loading="lazy"
                src="https://ecoglowcleaning.com/wp-content/uploads/2022/11/Cleaning-service-employees-wit.jpg"
                alt=""
                className="w-full h-full object-cover object-center brightness-90 transition hover:brightness-100 "
              />
            </div>
            <div className={"w-full bg-yellow p-4 font-bold text-[17px]"}>
              Cleaning vacation rentals houses
            </div>
          </Link>
          <Link
            className="w-full md:w-[300px] shadow-md shadow-[#7b7b7b] transition hover:shadow-sm"
            to={"/service/House Remodeling Services"}>
            <div className="w-full h-[250px] ">
              <img loading="lazy"
                src="https://newcreationsaustin.com/wp-content/uploads/2022/04/Austin-home-remodel-img-3.png"
                alt=""
                className="w-full h-full object-cover object-center brightness-90 transition hover:brightness-100 "
              />
            </div>
            <div className={"w-full bg-yellow p-4 font-bold text-[17px]"}>
              House Remodeling Services
            </div>
          </Link>
          <Link
            className="w-full md:w-[300px] shadow-md shadow-[#7b7b7b] transition hover:shadow-sm"
            to={"/service/Bathroom Remodeling"}>
            <div className="w-full h-[250px] ">
              <img loading="lazy"
                src="https://www.schatz-construction.com/wp-content/uploads/Schatz-Construction-Small-Bathroom-Remodeling.webp"
                alt=""
                className="w-full h-full object-cover object-center brightness-90 transition hover:brightness-100 "
              />
            </div>
            <div className={"w-full bg-yellow p-4 font-bold text-[17px]"}>
              Bathroom remodeling
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Service
