import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import logo from '../assets/logo-no-background.png';

export const Login = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(Data)
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem("token", json.jwtData);
      navigate('/sidebar', { replace: true });
    }
    else {
      alert("Invalid Credentials");
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...Data, [input.name]: input.value });
  };

  return (
    <>
      <div className='bg-[#0c001a] w-full h-20'>
        <div className='pt-5 pl-4'>
          <img src={logo} alt="logo" width={250} height={250} />
        </div>
      </div>

      <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0c001a] w-[750px] h-[780px] rounded-lg'>
        <div className='flex justify-center pt-[100px]'><p className='text-white text-5xl'><strong>Log in to Serenade</strong></p></div>
        <div className='flex justify-center pt-10'><hr className="w-[550px] border-t-0 border-r-0 border-l-0 border-b-2 border-gray-700" /></div>
        <form className='pt-10' onSubmit={handleSubmit}>
          <div className="mb-4 pl-[29%]">
            <label className="block text-white font-bold mb-2">
              Email ID
            </label>
            <input
              className="appearance-none border rounded w-[320px] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline dark:bg-slate-800 dark:focus:bg-slate-950"
              name="email"
              value={Data.email}
              required
              onChange={handleChange}
              type="email"
              placeholder="Enter your Email ID"
            />
          </div>
          <div className="mb-4 pl-[29%]">
            <label className="block text-white font-bold mb-2">
              Password
            </label>
            <input
              className="appearance-none border rounded w-[320px] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline dark:bg-slate-800 dark:focus:bg-slate-950"
              name="password"
              value={Data.password}
              required
              onChange={handleChange}
              type="password"
              placeholder="Enter your Password"
            />
          </div>
          <div className='flex flex-row justify-center mt-[30px]'>
          <button
            className="text-white font-bold py-3 px-[138px] rounded-full focus:outline-none focus:shadow-outline dark:bg-slate-800 hover:bg-slate-900"
            type="submit"
          >
            Log In
          </button>
          </div>
          <div className='flex justify-center pt-10'><hr className="w-[550px] border-t-0 border-r-0 border-l-0 border-b-2 border-gray-700" /></div>
          <div className='flex flex-row justify-center'>
            <strong>
              <p className='text-[#6a6a6a] text-base mt-3'>
                New here?&nbsp;
              </p>
            </strong>
            <p className='text-white text-base cursor-pointer mt-3 hover:underline'>
              <strong><Link to="/">Signup</Link></strong>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
