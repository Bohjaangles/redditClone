import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
const el = document.getElementById('root')
if (el === null) throw new Error('Root container missing in index.html')

const root = ReactDOM.createRoot(el)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
