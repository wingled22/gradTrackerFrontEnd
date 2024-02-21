import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AccordionList from './AccordionList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AccordionList/>
    </>
  )
}

export default App
