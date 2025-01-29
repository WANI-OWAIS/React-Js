import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-4'>React Cards</h1>
     
    <Card image="https://media.istockphoto.com/id/1609156993/photo/relaxed-person-at-home-watching-tv-video-streaming-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=0dNIM5WjIlYBWqLXYCGxIYuzZ1I39epXSEZTDAhLAOs=" uname="Stylish Footwear" para="Experience timeless elegance and everyday comfort with our premium footwear collection."/ >
    <Card image="https://media.istockphoto.com/id/1817152494/photo/czech-changing-channels-and-looking-for-a-movie-to-watch-shotliststream.jpg?s=612x612&w=0&k=20&c=cY945_vuPfR3LJ84fs3CRGzB5qkp7lIFwiENYiU471c=" pname="Modern Footwear" para="Step into style and comfort with our expertly crafted footwear, designed for all-day elegance and durability"/>
    </>
  )
}

export default App
