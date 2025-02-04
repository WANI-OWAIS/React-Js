import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Gender from './Gender.jsx'
import Arr from './Arr.jsx'
import Obj from './Obj.jsx'
import Card from './Card.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Gender /> */}
    {/* <Arr /> */}
    {/* <Obj /> */}
    <Card />
  </StrictMode>,
)
