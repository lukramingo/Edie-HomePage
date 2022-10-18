import React from 'react'

function Footer() {
  return (
    <footer className='text-white bg-black pt-10 lg:pl-0 pl-20'>
      <div className='flex lg:flex-row flex-col lg:justify-around lg:space-y-0 space-y-10'>
        {/* nav links */}
        <div>
            <ul className='text-xl space-y-6'>
              <li>Home</li>
              <li>Services</li>
              <li>Our Works</li>
              <li>Clients</li>
              <li>Contact</li>
            </ul>
        </div>
        {/* social media links */}
        <div>
            <h3 className='text-4xl font-bold pb-2'>Edie</h3>
            <div className='flex space-x-4'>
              <img className='h-8 w-8' src='images/instagram.svg'/>
              <img className='h-8 w-8' src='images/linkedin.svg'/>
              <img className='h-8 w-8' src='images/twitter.svg'/>
            </div>
        </div>
        {/* form */}
        <div>
          <form>
            <label className='lg:text-white text-gray-400'>Want us to contact you?</label><br/>
            <input className='py-4 px-8 rounded-xl border-none text-xl text-black mt-2 lg:w-[380px] w-[380px]' type="text" placeholder="Email"/>
            <button className='py-3 px-7 bg-sky-500 text-white rounded-xl ml-[-92px]'>Join</button>
          </form>
        </div>
      </div>
      <p className='text-center lg:py-2 py-9'>created by LukramBoySingh - devChallenges.io</p>
    </footer>
  )
}

export default Footer