import { useEffect } from 'react'
import Data from './Data'

function App() {

  const API_KEY:string = "e3ac13fbaa006479963a4554ea37705b";

  return (
    <>
      <Data API_KEY={API_KEY}/>
    </>
  )
}

export default App
