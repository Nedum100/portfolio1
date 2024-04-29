import React,{useState, useEffect} from 'react';
import Nedum from '../../Images/Nedum.jpeg';
import Photo from '../../Images/Photo 1.jpg';
import HashLoader from "react-spinners/HashLoader";

const Home = () => {
 const [Loading, SetLoading] = useState(true);

 useEffect(() => {
  setTimeout(() => {
    SetLoading(false);
  }, 5000); 
}, []);

  return (
    <div className='relative flex flex-col md:flex-row items-center justify-center h-1/2 w-screen px-6 mx-auto mt-10 space-y-6 md:space-y-0'>
     {
       Loading?
       <HashLoader
       color={'black'}
       loading={Loading}
       size={150}
     />
     :
     <>
      <div className='w-full h-full absolute inset-0'>
            <img src={Photo} alt='' className='w-full h-full object-cover blur-xl' />
          </div><div className='w-full md:w-1/2 p-8 bg-blue-100 flex flex-col items-start justify-center space-x-6 relative z-10 mt-4 md:mt-0'>
              <div className='bg-black bg-opacity-90 rounded-lg p-4 shadow-md mb-6'>
                <div className='flex items-center hover:scale-105 duration-300'>
                  <img src={Nedum} alt='' className='w-16 h-16 rounded-full object-cover' />
                  <p className='ml-4 text-lg font-semibold text-white'>Chinedum Bright</p>
                </div>
                <p className='mt-4 text-center text-white hover:scale-105 duration-300'>
                  In today's multi-device world, your website needs to shine on every screen. I{' '}
                  <b className='text-red hover:bg-yellow-100'>chinedum bright</b> as a front-end engineer specialize in
                  responsive design, ensuring your site looks and performs flawlessly on desktops, tablets, and smartphones. Say
                  goodbye to frustrating pinch-and-zoom experiences we create intuitive interfaces that adapt to your users' needs.
                </p>
              </div>
             </div>
            </>
     }
    </div>
  );
};

export default Home;
