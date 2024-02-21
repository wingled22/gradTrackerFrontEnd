import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import reactLogo from './assets/react.svg'
import './App.css'
import Searchc from './Search-create';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Searchc/>
      
    </>
  )
}

export default App
