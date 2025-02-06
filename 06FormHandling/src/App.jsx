// //useRef 
// import React, { useRef } from 'react'

// function App() {
//   const name = useRef(null);
//   const age = useRef(null);
//   const email = useRef(null);
//   const handleSubmit = (details)=>{
//     details.preventDefault();
//     console.log(name.current.value, age.current.value, email.current.value);
    
//   }
//   return (
//     <form action="" onSubmit={handleSubmit}>
//       <input ref={name} type="text" placeholder='name'/>
//       <input ref={age} type="text" placeholder='age' />
//       <input ref={email} type="text" placeholder='email' />
//       <input type="submit" />
//     </form>
//   )
// }

// export default App

//controlled components
// import React, { useState } from 'react'

// function App() {
//   const [val,setVal] = useState({name: ''});
//   const handleSubmit = (event)=>{
//     event.preventDefault();
//     console.log(val);
//   }
//   return (
//     <form action="" onSubmit={handleSubmit}>
//       <input onChange={(event)=>setVal({...val,name: event.target.value})} type="text" placeholder='name' />
//       <input onChange={(event)=>setVal({...val, age: event.target.value})} type="text" placeholder='age' />
//       <input type="submit" />
//     </form>
//   )
// }

// export default App

//react hooks form
import React from 'react'
import { useForm} from "react-hook-form"

function App() {
const {register,handleSubmit} = useForm();
  return (
    <form action="" onSubmit={handleSubmit(data => console.log(data))}>
      <input {...register('name')} type="text" placeholder='name' />
      <input {...register('email')} type="email" placeholder='email'/>
      <input type="submit" />
    </form>
  )
}

export default App