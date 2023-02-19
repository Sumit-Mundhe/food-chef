import React from 'react'
import Pages from '../pages/Pages'
import Category from './Category'
import { BrowserRouter } from 'react-router-dom'
import Search from './Search'

function App() {
  return (
    <div>
      <BrowserRouter>
        <h1>Foodie</h1>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

export default App