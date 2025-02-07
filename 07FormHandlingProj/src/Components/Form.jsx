import React from 'react'
import { useForm } from 'react-hook-form'
  
function Form({handleFormSubmitData}) {
  const {register, handleSubmit,reset} =  useForm()
  const handleFormSubmit = data => {
    handleFormSubmitData(data);
    reset();
  }
  return (
    <div className='mt-10 flex gap-10 justify-center'>
        <form className='flex gap-10 ' onSubmit={handleSubmit(handleFormSubmit)}>
            <input {...register('name')} className='rounded-md px-2 py-1 text-base font-semibold outline-none bg-zinc-100' type="text" placeholder='name' />
            <input {...register('email')} className='rounded-md px-2 py-1 text-base font-semibold outline-none bg-zinc-100' type="text" placeholder='email' />
            <input {...register('image')} className='rounded-md px-2 py-1 text-base font-semibold outline-none bg-zinc-100' type="text" placeholder='image url' />
            <input className='rounded-md px-5 py-1 bg-blue-600 text-white font-semibold' type="submit" />
        </form>
    </div>
  )
}

export default Form