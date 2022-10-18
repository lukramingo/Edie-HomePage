import React, {useState} from 'react'
import {FiMenu} from 'react-icons/fi';
import {GrClose} from 'react-icons/gr';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='flex lg:flex-row lg:justify-between lg:items-center h-20 w-full  lg:p-4 bg-white'>
        <div className='lg:w-0 w-full justify-between flex items-center'>
          <h1 className='text-4xl font-semibold'>Edie</h1>
          <div className='text-4xl lg:hidden block px-8 transition-all duration-300' onClick={() => setIsOpen(!isOpen)}>
            {isOpen? <GrClose/> : <FiMenu/>}
          </div>
        </div>
        <nav>
            <ul className={`flex lg:flex-row flex-col lg:space-x-10 lg:static absolute text-2xl 
             w-full h-full ${isOpen? 'top-[80px] right-0 lg:pt-0 pt-[160px] bg-white z-50 lg:space-y-0 space-y-16 text-center text-3xl':'top-[-100%]'}`}>
                <li>Home</li>
                <li>Services</li>
                <li>Our Works</li>
                <li>Clients</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header