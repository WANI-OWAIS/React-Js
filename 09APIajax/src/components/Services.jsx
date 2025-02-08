import React, { useEffect } from 'react'

function Services() {
    useEffect(()=>{
        console.log('Services component mounted')

        return () => {
            console.log('Services component unmounted') 
        }
    })
  return (
    <div>Services</div>
  )
}

export default Services