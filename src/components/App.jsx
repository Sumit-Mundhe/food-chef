import React from 'react'
import Pages from '../pages/Pages'
import Category from './Category'
import { BrowserRouter, Link } from 'react-router-dom'
import Search from './Search'
import styled from 'styled-components'
import { SiCodechef } from 'react-icons/si'

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className="head" style={mystyle}>
        <Nav>
          <Logo to={"/"}>
            <SiCodechef className='chef' />
            <h4 >FoodChef</h4>
          </Logo>
        <Category />
        <Search />
        </Nav>
      </div>
        <Pages />
      </BrowserRouter>
    </div>
  )
}

const mystyle = {
  margin: "0rem -7.5rem",
  paddingBottom:"3rem",
  borderRadius:"0rem",
  
}

const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 800;
  padding: 0 1rem;

  .chef{
    font-size: 4rem;
    color: #40513B;
    filter: drop-shadow(3px 0px 1px rgb(73, 251, 150));
  }
  h4{
    color: #40513B;
    font-size:2.5rem;
    font-weight: 900;
    text-shadow: 0.3rem 0px 4px rgb(73, 251, 150);
  }
`

const Nav = styled.div`
  background-color: #55bc55;
  border-bottom: 7px solid #f1f7f1c1;
  box-shadow: 0px 15px 18px #0b4d0b2d;
  backdrop-filter: blur(100px);
  padding: 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  svg{
    font-size: 2rem;
  }
`

export default App