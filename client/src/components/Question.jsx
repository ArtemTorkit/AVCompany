import { questionTwo, questionOne } from "../assets";
import { Link } from "react-router-dom";

const Question = () => {
  return (
    <section className="container text-black mt-[100px]">
      <div className="flex justify-between items-center relative top-0 left-0">
        {/* Image on the left */}
        <div className="hidden sm:block">
          <img loading="lazy" src={questionOne} alt="" className="rounded-[3px]" />
        </div>
        {/* Content in the center with absolute positioning */}
        <div className="sm:absolute w-full h-full flex justify-center items-center">
          <div className="top-0 left-0 sm:max-w-[490px] bg-yellow p-[40px] flex flex-col gap-[38px] rounded-[3px] shadow-lg shadow-[#6c6c6c]">
            <h3 className="text-black text-[24px] font-bold">
              Do you have questions?
            </h3>
            <div className="">
              <p className="font-semibold">Cleaning services</p>
              <p>
                Let us handle the cleaning, giving you more time to enjoy a
                spotless and secure environment for you and your loved ones.
              </p>
            </div>
            <div className="">
              <p className="font-semibold">Handyman services</p>
              <p>
                Let us take care of your home repairs and improvements, so you
                can enjoy a well-maintained and safe space for you and your
                family.
              </p>
            </div>
            <div className="w-full flex justify-center mt-[50px]">
              <Link
                to={"/contact"}
                className="group hover:shadow-sm transition shadow-lg shadow-[#333]">
                <button className="transition flex justify-center items-center gap-[6px] bg-black w-[230px] h-[50px] text-white rounded-[3px]">
                  <p className="block">BOOK NOW</p>
                  <svg
                    className="stroke-current"
                    width="8"
                    height="11"
                    viewBox="0 0 8 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 1L6 5.5L1 10"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Image on the right */}
        <div className="hidden sm:block">
          <img loading="lazy" src={questionTwo} alt="" className="rounded-[3px]" />
        </div>
      </div>
    </section>
  );
};

export default Question;
