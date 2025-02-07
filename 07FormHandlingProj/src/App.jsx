import React from 'react'
import Cards from './Components/Cards'
import Form from './Components/Form'

function App() {
  return (
    <div className='w-full h-screen bg-zinc-200 flex justify-center items-center'>
      <div className='container mx-auto'>
        <Cards />
        <Form />
      </div>
    </div>
  )
}

export default App