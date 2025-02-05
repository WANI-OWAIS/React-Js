import React, { useState } from 'react'
import Card from './Card'

function App() {
  const raw = [
    {name: 'Jhon', profession: 'Developer', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fHww'},
    {name: 'Doe', profession: 'Designer', image: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fHww', friends: false},
    {name: 'Smith', profession: 'Manager', image: 'https://images.unsplash.com/photo-1610088441520-4352457e7095?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D', friends: false},
    {name: 'Alex', profession: 'Developer', image: 'https://images.unsplash.com/photo-1584043720379-b56cd9199c94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnxlbnwwfHwwfHx8MA%3D%3D', friends: false},
  ]

  const [data, setData] = useState(raw)
  const handleClick = (changingIndex)=>{
    setData((prev)=>{
      return prev.map((item,index)=>{
         if(index === changingIndex) return {...item, friends: !item.friends}
          return item
      })
    })
  }

  return (
    <>
    <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
        {data.map((item,index)=>(
          <Card key={index} index={index} handleClick={handleClick} values={item} />
        ))}
    </div>
     
    </>
  )
}

export default App