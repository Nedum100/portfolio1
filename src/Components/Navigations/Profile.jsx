import React from 'react'
import { Link } from 'react-router-dom'
import Nedum from '../../Images/Nedum.jpeg';

const Profile = () => {
  return (
    <div className="bg-gray-100 py-12">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white shadow-xl sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <img
          src={Nedum}
          alt=" Chinedum Bright Ogbuabia"
          className="h-16 w-16 rounded-full mx-auto"
        />
        <h1 className="text-center text-2xl font-semibold mt-2">
          Chinedum Bright Ogbuabia
        </h1>
        <p className="text-center text-gray-600">Front-End Engineer</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              kaduna state
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Barnawa, Nigeria
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Email 
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <a href="mailto:youremail@example.com" className="text-blue-500 hover:underline">
               chinedumbrightogbuabia@gmail.com
              </a>
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Portfolio
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <Link to="/portfolio" className="text-blue-500 hover:underline">
              Nedum.com
              </Link>
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              LinkedIn
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <Link to="/linkedin" className="text-blue-500 hover:underline">
              linkedin.com/in/chinedum-bright-300522231
            </Link>
          </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Github
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <Link to="/linkedin" className="text-blue-500 hover:underline">
            https://github.com/Nedum100/Nedum100
            </Link>
          </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              phone number
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <Link to="/linkedin" className="text-blue-500 hover:underline">
              09064090615
            </Link>
           </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</div>

  )
}

export default Profile
