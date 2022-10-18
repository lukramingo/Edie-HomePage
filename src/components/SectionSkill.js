import React from 'react'
//pen
import {FaPen} from 'react-icons/fa';
//bracket
import {BsCode} from 'react-icons/bs';
//server
import {FaServer} from 'react-icons/fa';

function SectionSkill() {
  return (
    <section className='w-[1000px] mx-auto lg:py-20 py-16 lg:pl-0 pl-[50px] lg:space-y-10 space-y-6'>
        <h1 className='text-3xl lg:pl-10 pl-0'>We offer high <br/> demand services</h1>
        <div className='flex lg:flex-row flex-col lg:space-x-6 '>
            {/* card-1 */}
            <div className='w-[350px] h-[440px] shadow-xl rounded-lg py-12 px-6 space-y-6'>
                <div className='relative w-20 h-20 rounded-xl text-4xl bg-sky-500 text-white'>
                  <FaPen className='absolute top-6 left-6'/>
                </div>
                <h2 className='text-3xl font-bold'>UI/UX Design</h2>
                <p className='text-lg text-gray-500'>
                  Lorem ipsum dolor sit amet, <br/>
                 consectetur adipiscing elit. <br/>
                  Maecenas mollis eu tellus sed luctus. <br/>
                  Quisque accumsan odio.
                </p>
                <button className='py-2 px-4 bg-gray-300 text-gray-600 text-lg rounded-xl'>Get started</button>
            </div>
            {/* card-2 */}
            <div className='w-[350px] h-[440px] shadow-xl rounded-lg py-12 px-6 space-y-6'>
                <div className='relative w-20 h-20 rounded-xl text-4xl bg-green-500 text-white'>
                  <BsCode className='absolute top-6 left-6'/>
                </div>
                <h2 className='text-3xl font-bold'>UI/UX Design</h2>
                <p className='text-lg text-gray-500'>
                  Lorem ipsum dolor sit amet, <br/>
                 consectetur adipiscing elit. <br/>
                  Maecenas mollis eu tellus sed luctus. <br/>
                  Quisque accumsan odio.
                </p>
                <button className='py-2 px-4 bg-sky-500 text-white text-lg rounded-xl'>Get started</button>
            </div>
            {/* card-3 */}
            <div className='w-[350px] h-[440px] shadow-xl rounded-lg py-12 px-6 space-y-6'>
                <div className='relative w-20 h-20 rounded-xl text-4xl bg-rose-400 text-white'>
                  <FaServer className='absolute top-6 left-6'/>
                </div>
                <h2 className='text-3xl font-bold'>UI/UX Design</h2>
                <p className='text-lg text-gray-500'>
                  Lorem ipsum dolor sit amet, <br/>
                 consectetur adipiscing elit. <br/>
                  Maecenas mollis eu tellus sed luctus. <br/>
                  Quisque accumsan odio.
                </p>
                <button className='py-2 px-4 bg-gray-300 text-gray-600 text-lg rounded-xl'>Get started</button>
            </div>
        </div>
    </section>
  )
}

export default SectionSkill