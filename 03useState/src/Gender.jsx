import React, { useState } from 'react'

function Gender() {
   const [val,setVal] = useState({name:"John", age: 20})
  return (
    <div>
        <button onClick={()=>{
            setVal({...val, gender: "male"})
            console.log(val)

        }}>Click</button>
    </div>
  )
}

export default Gender