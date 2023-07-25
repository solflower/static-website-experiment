import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Card from './components/Card'
import Paragraph from './components/Paragraph'
import Footer from './components/Footer'
import Counter from './components/Counter'
import rat from './assets/rat.png'


function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className='section'>
        <Card className="article-image"></Card>
      </div>
      <Paragraph
        content ="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin et risus eu velit commodo pretium sed auctor purus.
                ">
      </Paragraph>
      <div className='image-section'></div>
      <Paragraph content ="Cras at orci magna. Ut hendrerit nibh sit amet magna mattis, nec efficitur mi suscipit.">
      </Paragraph>
      <Counter/>
      <img src={rat}></img>
      <Footer/>
      
    </>
  )
}

export default App
