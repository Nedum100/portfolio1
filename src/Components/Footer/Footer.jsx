import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faInstagram,faWhatsapp,
faLinkedin,faGithub,faTwitter} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
  <div className='bg-gray-500 mt-6 flex justify-center'>
     <div className="">
     <div className='bg-gray-500 mt-6 flex flex-col items-center justify-center'>
  <div className="flex flex-col space-y-2">
    <Link to="/Home" className="hover:bg-blue-100 rounded-full flex items-center justify-center">
      Home
    </Link>
    <Link to="/Profile" className="hover:bg-blue-100 rounded-full flex items-center justify-center">
      Profile
    </Link>
    <Link to="/About" className="hover:bg-red-100 rounded-full flex items-center justify-center">
      About
    </Link>
    <div className='mt-4 mb-4'>
    <Link to="/Contact">
      <button className=" bg-blue-800 text-white hover:bg-yellow-100 rounded-full flex items-center justify-center">
        Contact
      </button>
    </Link>
    </div>
  </div>
  <div className='flex flex-row space-x-2 justify-center'>
    <Link to='/facebook' className='hover:scale-105 duration-300'>
      <FontAwesomeIcon icon={faFacebook} className='h-8' />
    </Link>
    <Link to='/instagram' className='hover:scale-105 duration-300'>
      <FontAwesomeIcon icon={faInstagram} className='h-8' />
    </Link>
    <Link to='/whatsapp' className='hover:scale-105 duration-300'>
      <FontAwesomeIcon icon={faWhatsapp} className='h-8' />
    </Link>
    <Link to='/linkedin' className='hover:scale-105 duration-300'>
      <FontAwesomeIcon icon={faLinkedin} className='h-8' />
    </Link>
    <Link to='/github' className='hover:scale-105 duration-300'>
      <FontAwesomeIcon icon={faGithub} className='h-8' />
    </Link>
    <Link to='/twitter' className='hover:scale-105 duration-300'>
      <FontAwesomeIcon icon={faTwitter} className='h-8' />
    </Link>
  </div>
  <p className='text-white mt-2'>
    Nedum &copy; All rights reserved @2023
  </p>
</div>
</div>
</div>  
  )
}

export default Footer
