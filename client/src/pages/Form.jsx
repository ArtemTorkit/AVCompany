import { clock, formBg, mapPinYellow, message } from "../assets"

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { sendMailSchema } from '../shemas';
import { useParams } from "react-router-dom";
import { loading } from "../assets";
import { useState } from "react";
import { useEffect } from "react";

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false)
  const [responseGood, setResponseGood] = useState(false)
  const [responseBad, setResponseBad] = useState(false)
  const { city } = useParams();
  
  useEffect(() => {
    
  }, [])
  
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
    <section className="relative mt-[15vh]">
      <div className="container">
        <div className=" flex-col-reverse md:flex-row flex justify-center">
          <div className="relative top-0 left-0 text-white p-[30px] ">
            <img loading="lazy"
              src={formBg}
              alt=""
              className="absolute z-1 top-0 left-0 brightness-[70%] h-[100%] w-full md:w-auto object-cover object-center"
            />
            <div className="relative flex flex-col justify-between h-[800px]">
              <div className="flex flex-col items-center">
                <h2 className="font-bold text-[28px]">Service areas</h2>
                <ul>
                  {cities.map((city) => (
                    <li key={city} className="flex items-center gap-[10px]">
                      <img loading="lazy" src={mapPinYellow} alt="" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full flex flex-col  items-center">
                <p className="font-bold">Email</p>
                <div className="flex items-center gap-[10px]">
                  <img loading="lazy" src={message} alt="" />
                  <p>avcompany45@gmail.com</p>
                </div>
                <p className="font-bold mt-[30px]">Work Hours</p>
                <div className="flex items-center gap-[10px]">
                  <img loading="lazy" src={clock} alt="" />
                  <p>7 AM - 8 PM : Monday - Saturday</p>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#333] p-[30px] ">
            <h1 className="font-bold text-[40px] text-center">ContactForm</h1>
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                phonenumber: "",
                address: "",
                city: city || "",
                message: "",
              }}
              validationSchema={sendMailSchema}
              onSubmit={(values, { setSubmitting }) => {
                setIsSending(true);
                fetch("https://avcompany.onrender.com/send-email", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                })
                  .then((response) => {
                    if (!response.ok) {
                      setResponseGood(false);
                      setResponseBad(true);
                      throw new Error("Network response was not ok");
                    } else {
                      setResponseGood(true);
                      setResponseBad(false);
                    }
                    return response.json(); // Assuming the response is JSON
                  })
                  .finally(() => {
                    setIsSending(false);
                  });

                setSubmitting(false);
              }}>
              {({ isSubmitting }) => (
                <Form className="flex flex-col text-left w-full md:w-[400px] gap-[13px] mt-[30px]">
                  <div className="flex flex-col gap-[10px]">
                    <label htmlFor="firstname ">
                      First Name <span className="text-red">*</span>
                    </label>
                    <Field
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                    />
                    <ErrorMessage
                      name="firstname"
                      component="div"
                      className="text-red-600"
                    />
                  </div>

                  <div className="flex flex-col gap-[10px]">
                    <label htmlFor="lastname">Last Name</label>
                    <Field
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                    />
                    <ErrorMessage
                      name="firstname"
                      component="div"
                      className="text-red-600"
                    />
                  </div>

                  <div className="flex flex-col gap-[10px]">
                    <label htmlFor="email">
                      Email <span className="text-red">*</span>
                    </label>
                    <Field type="email" name="email" placeholder="Email" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600"
                    />
                  </div>

                  <div className="flex flex-col gap-[10px]">
                    <label htmlFor="phonenumber">
                      Phone Number <span className="text-red">*</span>
                    </label>
                    <Field
                      type="text"
                      name="phonenumber"
                      placeholder="Phone Number"
                    />
                    <ErrorMessage
                      name="phonenumber"
                      component="div"
                      className="text-red-600"
                    />
                  </div>

                  <div className="flex flex-col gap-[10px]">
                    <label htmlFor="address">
                      Address <span className="text-red">*</span>
                    </label>
                    <Field type="text" name="address" placeholder="Address" />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-600"
                    />
                  </div>

                  <div className="flex flex-col ">
                    <label htmlFor="city">
                      City <span className="text-red">*</span>
                    </label>
                    <Field
                      as="select"
                      name="city"
                      placeholder="City"
                      className="px-4 py-2 border-[1px] border-black rounded-[3px]">
                      <option value="">Select a city</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="text-red-600"
                    />
                  </div>

                  <div className="flex flex-col gap-[10px]">
                    <label htmlFor="message">
                      Message <span className="text-red">*</span>
                    </label>
                    <Field
                      as="textarea"
                      type="text"
                      name="message"
                      placeholder="Message"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-600"
                    />
                  </div>

                  <div className="shadow shadow-white transition hover:shadow-sm">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`hover:bg-black group hover:text-white transition flex justify-center items-center gap-[6px]  bg-yellow w-full h-[50px] text-black rounded-[3px]`}>
                      {isSending ? (
                        <>
                          <img loading="lazy"
                            src={loading}
                            alt=""
                            className="w-[40px] h-[40px]"
                          />
                        </>
                      ) : (
                        <>
                          <p className="block">GET IN TOUCH</p>
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
                        </>
                      )}
                    </button>
                  </div>
                  {responseGood && (
                    <p className="text-green-500">
                      Thank you for contacting us. We will get in touch with you
                      as soon as possible.
                    </p>
                  )}
                  {responseBad && (
                    <p className="text-green-500">
                      Something went wrong. Please contact us by phone.
                    </p>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm 
