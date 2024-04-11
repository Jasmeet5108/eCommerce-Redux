import React from 'react'

const Loading = () => {
  return (
    <div className='flex flex-col gap-0 items-center'>
      <img src="/dribbble-loader-green.gif" alt="Loading" width={300}/>
      <p className='text-xl text-center mt-[-70px] text-sky-500 font-semibold'>Fetching Products...</p>
    </div>
  )
}

export default Loading