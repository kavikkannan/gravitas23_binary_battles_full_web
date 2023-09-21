'use client';
import Link from 'next/link';
import Image from 'next/image';

import LoginDropdown from './LoginDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { faMagento } from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const logoMain = "/src/app/Components/logo.png";

  return (
    <nav className="bg-[#06081d] bg-opacity-80 p-4 flex items-center justify-between w-screen">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src={logoMain} // Replace with the actual path to your image
          alt="Description of the image"
          width={10} // Specify the width of the image
          height={10} // Specify the height of the image
        />
        <span className="text-white text-lg font-semibold"></span>
      </div>

      {/* Center Buttons */}
      <div className="space-x-6 flex">
        <Link href="round1">
          <div className="px-8 py-2 mr-3 ml-8 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
            <FontAwesomeIcon icon={faPuzzlePiece} className='px-2 h-5 w-5'/> 
            Analytical Arena
          </div>
        </Link>

        <Link href="round2">
          <div className="px-8 py-2 mr-3 ml-3 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
          <FontAwesomeIcon icon={faMagento} className='px-2 h-5 w-5'/>
            Labyrinthine Odessey
          </div>
        </Link>

        <Link href="round3">
          <div className="px-8 py-2 ml-3 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
          <FontAwesomeIcon icon={faLock} className='px-2 h-5 w-5'/>
            The Enigma
          </div>
        </Link>
      </div>

      {/* Right Corner Login Button */}
      {/* <button className="bg-cyan-600 w-[6%] hover:bg-cyan-900 text-sm px-4 py-2 rounded-full transition duration-300 ease-in-out">
        Login
      </button> */}

      <div className="p-4 ml-0">
        <LoginDropdown />
      </div>
    </nav>
  );
}

export default Navbar;
