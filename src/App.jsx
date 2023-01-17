import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import data from './data'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals

function App() {

  const cardElements = data.map(cards => {
    return (
      <Card
        key = {cards.id} 
        {...cards}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardElements}
      </section>
  
    </div>
  )
}

export default App
