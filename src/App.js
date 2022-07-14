import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Skill from './pages/skills'
import Work from './pages/work'
import Contact from './pages/Contact'
import SkillBar from './pages/skillbar'

const App = () => {
  return (
    <div>
      <Home/>
      <About/>
      <SkillBar/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default App
