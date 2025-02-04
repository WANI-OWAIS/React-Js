import React, { useState } from 'react'

function Arr() {
   const [val,setVal]  = useState([1, 2, 3, 4, 5,6])
  return (
    <div className='p-5'>
        {val.map(item=><h1>{item}</h1>)}
            {/* <button onClick={()=>setVal(()=>val.filter((item,index)=> index != val.length - 1))} className='px-2 py-1 rounded-full bg-blue-400 text-white'>Click</button> */}

            {/* <button onClick={()=>setVal(()=>val.filter((item,index)=> index != 2))} className='px-2 py-1 rounded-full bg-blue-400 text-white'>Click</button> */}

            {/* <button onClick={()=> setVal(()=>val.filter(item => item%2 != 0))} className='px-2 py-1 rounded-full bg-blue-400 text-white'>Click</button> */}

            <button onClick={()=> setVal([...val,7])} className='px-2 py-1 rounded-full bg-blue-400 text-white'>Click</button>

    </div>
  )
}

export default Arr