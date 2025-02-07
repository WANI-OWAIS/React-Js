import React from 'react'
  
function Form() {
  return (
    <div className='mt-10 flex gap-10 justify-center'>
        <form className='flex gap-10 ' action="">
            <input className='rounded-md px-2 py-1 text-base font-semibold outline-none bg-zinc-100' type="text" placeholder='name' />
            <input className='rounded-md px-2 py-1 text-base font-semibold outline-none bg-zinc-100' type="text" placeholder='email' />
            <input className='rounded-md px-2 py-1 text-base font-semibold outline-none bg-zinc-100' type="text" placeholder='image url' />
            <input className='rounded-md px-5 py-1 bg-blue-600 text-white font-semibold' type="submit" />
        </form>
    </div>
  )
}

export default Form