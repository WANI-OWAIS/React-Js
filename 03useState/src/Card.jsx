import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

function Card() {
    const [val,setVal] = useState(false);
return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
            <div className='w-60 h-32 bg-zinc-500 rounded overflow-hidden relative flex'>
                    <img className={`shrink-0 transition-transform duration-700 ease-in-out  ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1547731034-4c72e102212c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvd25sb2Fkc3xlbnwwfHwwfHx8MA%3D%3D" />

                    <img className={`shrink-0 transition-transform duration-700 ease-in-out ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1549927681-0b673b8243ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8" />

                    <span onClick={()=>setVal(()=>!val)} className='w-8 h-8 flex justify-center items-center rounded-full bg-[#dadada7b] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <FaArrowRight size={".7em"} />
                    </span>
            </div>
    </div>
)
}

export default Card