import React from 'react'

const Error = () => {
  return (
    <>
    <div className='flex flex-col gap-0 items-center'>
      <img src="/error.gif" alt="Loading" width={300}/>
      <p className='text-xl text-center mt-4 text-sky-400 font-semibold'>Something went wrong: Couldn't fetch products. Please try again later!</p>
    </div>
    </>
  )
}

export default Error