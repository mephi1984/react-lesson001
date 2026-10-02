import './App.css'
import TextBox from './TextBox.tsx'
import ExperienceBlock from './ExperienceBlock.tsx'

import photoImg from './assets/photo.jpg' 

function App() {
  let f = ()=>{
    console.log("hello");
  }

  return (
    <>
      <h1>Резюме</h1>
      <img src={photoImg}  />
      <p>Меня зовут Владислав</p>
      <ExperienceBlock>
      <TextBox name="React" years={5} onClick={f} />
      <TextBox name="C++" years={15} onClick={f} />
      </ExperienceBlock>
    </>
  )
}

export default App
