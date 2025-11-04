import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

function MYapp(){
  return (
    <div>
      <h1>custom App</h1>
    </div>
  )
}

const reactelements=React.createElement(
  'a',
  {
    href:"https://google.com",
    target:'_blank'
  },
   'click me to visit google'
  
)

const anotherelement=(
  <a href="https://google.com" target='_blank'>visit google </a>
)

createRoot(document.getElementById('root')).render(
  <App/>
)
