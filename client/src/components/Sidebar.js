import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo-no-background.png';
import famusic from '../assets/faMusic.png';
import fahome from '../assets/faHome.png';
import falike from '../assets/faLike.png';
import faplaylist from '../assets/faPlaylist.png';
import fapodcasts from '../assets/faPodcasts.png';
import faartist from '../assets/faArtist.png';
import fasettings from '../assets/faSettings.png';
import falogout from '../assets/faLogout.png'; 


export const Sidebar = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(!localStorage.getItem('token'));
  
  const logout = () => {
  
    if(window.confirm("Are you sure you want to log out?")===true){
      localStorage.removeItem('token');
      setLoggedIn(false);
      navigate('/login');
    }
  };

  return (
    <div className='flex flex-row'>
    <div className='justify-start min-h-screen w-3/20 backdrop-blur-3xl'>
    <div className='pl-8 pt-10'><img src={logo} alt="logo" width={200} height={200} /></div>
    <div>
  <ul className='pl-8 pt-7 font-semibold text-white text-xl flex flex-col gap-5'>
    <li className='flex flex-row gap-5 items-center hover:bg-[#0c001a] cursor-pointer'>
      <img src={fahome} alt="logo" width={29} height={29} />
      <p className='hover:text-red-700 cursor-pointer'>Home</p>
    </li>
    <li className='flex flex-row gap-5 items-center hover:bg-[#0c001a] cursor-pointer'>
      <img src={famusic} alt="logo" />
      <p className='hover:text-red-700 cursor-pointer'>Music</p>
    </li>
    <li className='flex flex-row gap-5 items-center hover:bg-[#0c001a] cursor-pointer'>
      <img src={fapodcasts} alt="logo" width={30} height={30} />
      <p className='hover:text-red-700 cursor-pointer'>Podcasts</p>
    </li>
  </ul>
</div>

    <div className='pt-7 pl-9'>
    <p className='text-gray-500 font-semibold'>Library</p>
    <ul className='pt-7 font-semibold text-white text-xl flex flex-col gap-5'>
    <li className='flex flex-row gap-5 items-center hover:bg-[#0c001a] cursor-pointer'>
      <img src={faplaylist} alt="logo" width={29} height={29} />
      <p className='hover:text-red-700 cursor-pointer'>Your Playlists</p>
    </li>
    <li className='flex flex-row gap-5 items-center hover:bg-[#0c001a] cursor-pointer'>
      <img src={faartist} alt="logo" />
      <p className='hover:text-red-700 cursor-pointer'>Artists</p>
    </li>
    <li className='flex flex-row gap-5 items-center hover:bg-[#0c001a] cursor-pointer'>
      <img src={falike} alt="logo" width={28} height={28} />
      <p className='hover:text-red-700 cursor-pointer'>Liked Songs</p>
    </li>
  </ul>
    </div>
    <div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    <div className='pt-7 pl-9'>
    <p className='text-gray-500 font-semibold'>Account</p>
    <ul className='pt-7 font-semibold text-white text-xl flex flex-col gap-5'>
    <li className='flex flex-row gap-5 items-center hover:bg-[#0c001a] cursor-pointer'>
      <img src={fasettings} alt="logo" width={29} height={29} />
      <p className='hover:text-red-700 cursor-pointer'>Settings</p>
    </li>
    <button onClick={logout}>
    <li className='flex flex-row gap-5 items-center hover:bg-[#0c001a] cursor-pointer'>
      <img src={falogout} alt="logo" />
      <p className='hover:text-red-700 cursor-pointer'>Logout</p>
    </li>
    </button>
  </ul>
    </div>

    </div>
    <div className='border-l-2 min-h-screen left-1/5 border-black'></div>
    </div>
  )
}
