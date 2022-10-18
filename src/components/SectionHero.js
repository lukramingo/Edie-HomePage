import React from 'react'

function SectionHero() {
  return (
    <section className='space-y-6'>
        <div className='lg:pl-72 md:pl-20 pl-10 space-y-4'>
            <h5 className='text-sky-500 text-xl'>Unhappy with your website?</h5>
            <h1 className='text-4xl font-[sans-serif] leading-[48px]'>We create beautiful <br/> and fast web services</h1>
        </div>
        <img className='w-full h-full rounded-xl' src='images/heroImage.jpg' alt='hero' />
        <div className='lg:pl-72 md:pl-20 pl-10 space-y-4'>
            <h2 className='text-4xl font-[sans-serif] leading-[48px]'>Story, emotion <br/> and purpose</h2>
            <p className='text-lg text-gray-500'>We help transform your ideas into real <br/>
                world applications that will outperform <br/>
                your toughest competition and help you <br/>
                achieve your strategic goals in short <br/>
                period of time.
            </p>
            <form className='pt-6 space-y-2'>
                <label className='text-gray-400 text-sm'>What us to contact you?</label> <br/>
                <input className='border-none bg-gray-200 p-3 rounded-lg' type="email" placeholder="Email"/>
            <   button className='border-none bg-sky-500 py-3 px-4 text-white rounded-lg'>Join</button>
            </form>
        </div>
    </section>
  )
}

export default SectionHero