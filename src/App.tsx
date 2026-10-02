import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import TextBox from './TextBox.tsx'
import ExperienceBlock from './ExperienceBlock.tsx'

import photoImg from './assets/photo.jpg' 

function App() {
  const [count, setCount] = useState(0)

  let x = 10;
  let y = 20;

  let f = ()=>{
    console.log("hello");
  }

  return (
    <>
      <h1>Резюме</h1>
      <img src={photoImg}  />
      <p>Меня зовут Владислав</p>
      <ExperienceBlock>
      <TextBox name="React" years="5" onClick={f} />
      <TextBox name="C++" years="15" onClick={f} />
      </ExperienceBlock>
    </>
  )
}

export default App
