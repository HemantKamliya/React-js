import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement=React.createElement('a',
  {href:'//www.youtube.com',target :'_blank'},
 " Visit google"
)
ReactDOM.createRoot(document.getElementById('root')).render(

     anotherElement
  
)
