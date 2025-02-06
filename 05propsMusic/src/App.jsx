import React, { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  const data = [
    {image: "https://media.istockphoto.com/id/1398826504/photo/young-male-singer-in-recording-studio-performing-in-neon-lights-use-smartphone.webp?a=1&b=1&s=612x612&w=0&k=20&c=iCsirlO3aZ3r_UuBrYRj1dXyN6gVd01EPnPQQ8T4pkc=", name: "Ishq", artist: "Faheem", added: false},

    {image: "https://images.unsplash.com/photo-1692552950398-c04bb220f716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvbmclMjBhbGJ1bWJzfGVufDB8fDB8fHww", name: "Jhol", artist: "Atif", added: false},

    {image: "https://media.istockphoto.com/id/628909554/photo/turntable-with-lp-vinyl-record-against-burning-fire-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=R9a7f9dlOaNabG73jsucXN7FT5oIg1BJYIv3PWrXwPk=", name: "Dilshad", artist: "Yawer", added: false},

    {image: "https://images.unsplash.com/photo-1621644116633-67a3be261e18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNvbmclMjBhbGJ1bWJzfGVufDB8fDB8fHww", name: "Shiddat", artist: "Arjit", added: false},
  ]
   
 const [songData,setsongData] = useState(data);
 const handleClick = (index)=> {
   setsongData((prev=>{
    return prev.map((item,itemindex)=>{
       if(itemindex === index) return {...item,added: !item.added}
       return item;
    })
   }))
 }

  return (
    <div className='w-full h-screen bg-zinc-300'>
       <Navbar data={songData} />
      <div className='px-20 flex gap-10 mt-10 flex-wrap'>
      {songData.map((obj,index)=>{
       return <Card data={obj} handleClick={handleClick} index={index} key={index} />
      })}
      </div>
    </div>
  )
}

export default App