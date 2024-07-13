import { clock, formBg, mapPinYellow, message } from "../assets"

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { sendMailSchema } from '../shemas';

const ContactForm = () => {

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
    <section className="relative mt-[17vh]">
      <div className="container">
        <div className="flex justify-center">
          <div className="relative top-0 left-0 text-white p-[30px]">
            <img
              src={formBg}
              alt=""
              className="absolute z-1 top-0 left-0 brightness-[70%] h-[100%] object-cover object-center"
            />
            <div className="relative flex flex-col justify-between h-[800px]">
              <div className="flex flex-col items-center">
                <h2 className="font-bold text-[28px]">Service areas</h2>
                <ul>
                  {cities.map((city) => (
                    <li key={city} className="flex items-center gap-[10px]">
                      <img src={mapPinYellow} alt="" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full flex flex-col  items-center">
                <p className="font-bold">Email</p>
                <div className="flex items-center gap-[10px]">
                  <img src={message} alt="" />
                  <p>avcompany45@gmail.com</p>
                </div>
                <p className="font-bold mt-[30px]">Work Hours</p>
                <div className="flex items-center gap-[10px]">
                  <img src={clock} alt="" />
                  <p>7 AM - 8 PM : Monday - Saturday</p>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#333] p-[30px]">
            <h1 className="font-bold text-[40px] text-center">ContactForm</h1>
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                phonenumber: "",
                address: "",
                city: "",
                message: "",
              }}
              validationSchema={sendMailSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);

                fetch("http://localhost:3000/send-email", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                });

                setSubmitting(false);
              }}>
              {({ isSubmitting }) => (
                <Form className="flex flex-col text-left w-[400px] gap-[13px] mt-[30px]">
                  <div className="flex flex-col gap-[10px]">
                    <label htmlFor="firstname ">
                      First Name <span className="text-red">*</span>
                    </label>
                    <Field
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                    />
                    <ErrorMessage name="firstname" component="div" />
                  </div>

                  <div className="flex flex-col gap-[10px]">
                    <label htmlFor="lastname">Last Name</label>
                    <Field
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                    />
                    <ErrorMessage name="lastname" component="div" />
                  </div>

                  <div className="flex flex-col gap-[10px]">
                    <label htmlFor="email">
                      Email <span className="text-red">*</span>
                    </label>
                    <Field type="email" name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="div" />
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
                    <ErrorMessage name="phonenumber" component="div" />
                  </div>

                  <div className="flex flex-col gap-[10px]">
                    <label htmlFor="address">
                      Address <span className="text-red">*</span>
                    </label>
                    <Field type="text" name="address" placeholder="Address" />
                    <ErrorMessage name="address" component="div" />
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
                    <ErrorMessage name="city" component="div" />
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
                    <ErrorMessage name="message" component="div" />
                  </div>

                  <div className="shadow shadow-white transition hover:shadow-sm">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="hover:bg-black group hover:text-white transition flex justify-center items-center gap-[6px]  bg-yellow w-full h-[50px] text-black rounded-[3px]">
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
                    </button>
                  </div>
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
