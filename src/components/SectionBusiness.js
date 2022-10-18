import React from 'react'

function SectionBusiness() {
  return (
    <section className='lg:w-[1000px] mx-auto lg:pl-0 pl-2'>
        <h1 className='text-2xl lg:pb-4 pb-6'>Good design means <br/> good business</h1>
        <div className='relative lg:grid lg:grid-cols-2 lg:gap-x-6 flex flex-col mx-auto lg:space-y-0 space-y-[40px]'>
            {/* card-1 */}
            <div className='lg:h-[800px] lg:pt-[140px] space-y-2'>
                <img className='w-[500px] h-[540px] rounded-xl' src='images/smarthome.jpg'/>
                <p className='text-sm text-gray-500'>Full stack application</p>
                <p className='text-xl'>Smart home dashboard</p>
            </div>
            {/* card-2 */}
            <div className='space-y-2'>
                <img className='w-[500px] h-[540px]  rounded-xl' src='images/onboard.png' />
                <p className='text-sm text-gray-500'>UX/UI design</p>
                <p className='text-xl'>Onboard application</p>
            </div>
            {/* card-3 */}
            <div className='lg:h-[800px] lg:pt-[140px] space-y-2'>
                <img className='w-[500px] h-[540px]  rounded-xl' src='images/booking.png' />
                <p className='text-sm text-gray-500'>Mobile application</p>
                <p className='text-xl'>Booking system</p>
            </div>
            {/* card-4 */}
            <div className='space-y-2'>
                <img className='w-[500px] h-[540px]  rounded-xl' src='images/juice-product.png' />
                <p className='text-sm text-gray-500'>Front End application</p>
                <p className='text-xl'>Juice product homepage</p>
            </div>
            <span className='absolute lg:bottom-12 bottom-[-30px] lg:right-5 text-sky-700'>
                <a href='#'>read more &rarr;</a>
            </span>
        </div>
        
    </section>
  )
}

export default SectionBusiness