import React,{useState} from 'react';

import logo from '../assets/logo-no-background.png';
export const Registration = () => {

  const [Data, setData] = useState({
    userName:"",
    email:"",
    password:""
  })

  const handleChange=({currentTarget:input})=>{
    setData({...Data,[input.name]:input.value})
  }
  return (
    <>
      <div className='bg-[#0c001a] w-full h-20'>
        <div className='pt-5 pl-4'>
          <img src={logo} alt="logo" width={250} height={250} />
        </div>
      </div>
      
      <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0c001a] w-[750px] h-[780px] rounded-lg'> 

        <form className='grid justify-center'>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
            Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="userName"
              type="text"
              value={Data.userName}
              required
              onChange={handleChange}
              placeholder="Enter your Username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
            Email ID
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              value={Data.email}
              required
              onChange={handleChange}
              type="email"
              placeholder="Enter your Email ID"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              value={Data.password}
              required
              onChange={handleChange}
              type="password"
              placeholder="Enter your Password"
            />
          </div>
            <button
              className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit" 
            >
              Sign Up
            </button>
            <p className='hover:text-gray-600 cursor-pointer mt-3'>
              <strong>Already have an account? Login</strong> 
              </p>
        </form>
        </div>
    </>
  );
};
