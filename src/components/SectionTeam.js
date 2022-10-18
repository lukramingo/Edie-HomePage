import React from 'react'

function SectionTeam() {
  return (
    <section className='lg:w-[1000px] mx-auto lg:py-[40px] py-[60px] lg:pl-0 pl-4'>
      <div className='flex lg:flex-row flex-col'>
        <div className='space-y-2 lg:w-[30%]'>
          <h4 className='text-red-500'>Meet the team</h4>
          <h3 className='text-3xl leading-10'>We are chilled <br/> and a laidback <br/> team</h3>
          <p className='text-gray-500'>Lorem Ipsum dolor sit amet <br/> consectetur adipiscing elit.</p>
        </div>
        {/* photos grid */}
        <div className='grid grid-cols-2 gap-6 relative lg:w-[70%] pt-10'>
          <img className='rounded-xl col-start-2 row-start-1' src='images/person1.png'/>
          <img className='rounded-xl col-start-2 row-start-2'  src='images/person2.png'/>
          <img className='absolute lg:left-3 left-[-60px] inset-y-[100px] rounded-xl col-start-1 row-start-1' src='images/person3.png'/>
        </div>
      </div>
      <div className='my-20'>
      <p className='text-3xl text-slate-800'>
        "Fast and outstanding results. Edie understands <br/>
        their customer's needs. They have a young and <br/>
        talented team."
      </p>
      <div className='flex my-[40px] space-x-5'>
        <img className='w-20 h-20 rounded-xl' src='images/person4.png'/>
        <div>
          <p className='text-xl py-3'>Carlos Tran</p>
          <span className='text-gray-400'>The Decorate Gatsby</span>
        </div>
      </div>
      </div>
    </section>
  )
}

export default SectionTeam