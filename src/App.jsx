import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Judges from './components/Judges'
import Sponsors from './components/Sponsors'
import Faq from './components/Faq'
import Recap from './components/Recap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Judges />
      <Sponsors />
      <Faq />
      <Recap />
    </>
  )
}

export default App