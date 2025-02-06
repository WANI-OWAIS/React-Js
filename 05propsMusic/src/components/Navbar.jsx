import React from 'react'
import style from './style.module.css'

function Navbar({data}) {
  return (
    <div className='w-full px-20 py-3 flex justify-between items-center'>
        <h3 className={style.a}>MuSic App</h3>
        <div className='flex p-2  bg-orange-600 text-white
        rounded-md text-sm gap-3'>
            <h3>Favourites</h3>
            <h2>{data.filter(item => item.added).length}</h2>
        </div>
    </div>
  )
}

export default Navbar