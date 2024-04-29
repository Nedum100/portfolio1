import React from 'react';
import { Formik } from 'formik'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const sendEmail = (formData) => {
    
    emailjs
      .send(
        'service_1opkho7', // Replace with your actual service ID
        'template_me9c8ue', // Replace with your actual template ID
        formData,
        'WuSjtKhmv6yxY6h1F' // Replace with your actual user ID
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          toast.success('Email sent successfully');
        },
        (error) => {
          console.error('Email could not be sent:', error);
          toast.error('Email could not be sent')
        }
      );
  };

  
  return (
    
    <><ToastContainer /><Formik
      initialValues={{
        firstname: '',
        lastname: '',
        email: '',
        Company: '',
        country: '',
        zip: '',
      }}
      validate={values  => {
        const errors = {};

        if (!values.firstname ) {
          errors.firstname = 'sorry, this is required';
        }
        if (!values.lastname  ) {
          errors.lastname = 'sorry, this is required';
        }
        if (!values.country ) {
          errors.country = 'sorry, this is required';
        }
        if (!values.Company ) {
          errors.Company = 'sorry, this is required';
        }
        if (!values.zip) {
          errors.zip = 'sorry, this is required';
        }
        if (!values.email ) {
          errors.email = 'sorry, this is required';
        } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
          errors.email = 'invalid email';
        }

        return errors;
      } }
      onSubmit={(values, { setSubmitting, resetForm }) => {
        sendEmail(values);
        console.log('submitted');
        setSubmitting(false);
        resetForm();
      } }
    >
      {({
        values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (

        <div className="container mx-auto">
          <div className="col-md-12 mt-5">
            <form onSubmit={handleSubmit}>
              <h4 className="mb-3 text-lg font-semibold">Personal Information</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="c"
                    name="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  {errors.firstname ?
                    <span className=" px-1 flex justify-center mt-1 text-white text-sm bg-red-500 w-full rounded-full">{errors.firstname}</span>
                    : null}
                </div>
                <div className="mb-4">
                  <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  {errors.lastname ?
                    <span className=" px-1 flex justify-center mt-1 text-white text-sm bg-red-500 w-full rounded-full" >{errors.lastname}</span>
                    : null}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={handleChange}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                {errors.email ?
                  <span className=" px-1 flex justify-center mt-1 text-white text-sm bg-red-500 w-full rounded-full" >{errors.email}</span>
                  : null}
              </div>

              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="Company"
                  value={values.Company}
                  onChange={handleChange}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                {errors.Company ?
                  <span className=" px-1 flex justify-center mt-1 text-white text-sm bg-red-500 w-full rounded-full" >{errors.Company}</span>
                  : null}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  {errors.country ?
                    <span className=" px-1 flex justify-center mt-1 text-white text-sm bg-red-500 w-full rounded-full" >{errors.country}</span>
                    : null}
                </div>
                <div className="mb-4">
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                    Zip
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={values.zip}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  {errors.zip ?
                    <span className=" px-1 flex justify-center mt-1 text-white text-sm bg-red-500 w-full rounded-full">{errors.zip}</span>
                    : null}
                </div>
              </div>

              <hr className="my-6" />
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </Formik></>
  );
};

    
    

export default Contact;
