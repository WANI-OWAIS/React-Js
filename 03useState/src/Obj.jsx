import React, { useState } from 'react'

function Obj() {
  const [val,setVal] = useState([
    {name: 'owais', age: 20},
    {name: 'wasim', age: 23},
    {name: 'ali', age: 25}
  ])
  return (
    <div className='p-5'>
      {val.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <h2>{item.age}</h2>
        </div>
      ))}
      <button onClick={()=> setVal(()=>val.map(item => item.name === 'ali' ? ({name: 'ali', age: 26}) : item))} className='px-3 py-1 text-xs text-white bg-blue-400 rounded-full'>Click</button>
    </div>
  )
}

export default Obj