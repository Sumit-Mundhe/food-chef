import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import {Routes,Route, useLocation} from 'react-router-dom'
import Searched from './Searched'
import Recipe from './Recipe'
import { AnimatePresence } from 'framer-motion'

function Pages() {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />}></Route>
      <Route path='/cuisine/:type' element={<Cuisine />}></Route>
      <Route path='/searched/:search' element={<Searched />}></Route>
      <Route path='/recipe/:key' element={<Recipe />}></Route>
    </Routes>
    </AnimatePresence>
  )
}
export default Pages