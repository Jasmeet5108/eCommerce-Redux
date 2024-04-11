import React from 'react'

const Home = () => {
  return (
    <section id='Home' className='max-w-screen-xl mx-auto px-1 sm:px-4 mt-4 font-semibold'>
      <h3 className='text-xl'>Welcome to
        <span className='text-sky-600 underline underline-offset-4'> EasyMart</span>
        <span> - Your Simplified Shopping Destination!</span>
      </h3>
      <p className='mt-10 text-lg'>At EasyMart, we believe that shopping should be, well, easy.</p>
      <p className='mt-5 text-lg'>That's why we've curated a seamless online marketplace where you can find everything you need with just a few clicks. Say goodbye to long queues, crowded aisles, and complicated checkout processes. </p>
      <p className='mt-5 text-lg'>With EasyMart, shopping becomes a breeze.</p>
    </section>
  )
}

export default Home