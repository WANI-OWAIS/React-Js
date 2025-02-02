import React from 'react'
  const data = [
    {name: "Ishq", description: "Mai aa likhu tu aajaye,Mai baith likhu tu aa baithe"},
    {name: "Jhol", description: "Kyun tainu main dikhawan? Dilon rus gayi aan chhawaan."},
  ]

function Card() {
  const handleClickDownload = () => {alert("Chal Raha Hai")}
  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-10 justify-center items-center'>
    {data.map((elem,index) => (
             <div className='w-90 px-3 py-2 bg-zinc-100 rounded'>
             <h3 className='font-semibold text-xl'>{elem.name}</h3>
             <p className=' mt-2'>{elem.description}</p>
             <button onClick={handleClickDownload} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded-md mt-3'>Download Now</button>
             </div> 
    ))}
    </div>
  )
}

export default Card