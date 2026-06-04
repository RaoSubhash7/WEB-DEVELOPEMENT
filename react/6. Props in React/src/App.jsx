import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
let myarry=[12,56,75,34,89]

  return (
    <Card username='Subhash Kumar' company='ABC Corp' age={30} myarry={myarry}/>
  )
}

export default App
