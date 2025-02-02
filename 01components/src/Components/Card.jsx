import React from 'react'

function Card() {
   const data = [
    {image: 'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww', name: "Amazon Basics", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, mollitia."},

    {image:'https://plus.unsplash.com/premium_photo-1670963025006-3b650025442c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGFpbHklMjBvYmplY3RzfGVufDB8fDB8fHww', name: "Daily Objects", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, delectus?"},

    {image: 'https://images.unsplash.com/photo-1525904097878-94fb15835963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3RzfGVufDB8fDB8fHww', name: "Products", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, reiciendis!"}
   ]

  return (
    <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
      {data.map((elem,index) =>(
        <div key={index} className='w-52 bg-zinc-100 rounded-md overflow-hidden'>
        <div className='w-full h-32 bg-zinc-300 '>
          <img className='w-full h-full object-cover' src={elem.image} />
        </div>
        <div className='w-full px-3 py-4'>
          <h2 className='font-semibold'>{elem.name}</h2>
          <p className='text-xs mt-5'>{elem.description}</p>
         
        </div>
        </div>
      ))}
    </div>
      
  )
}

export default Card