import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import data from './data'

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

function App() {

  const cardElements = data.map(cards => {
    return (
      <Card
        key = {cards.id} 
        cards = {cards}
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
