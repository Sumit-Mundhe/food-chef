import React from 'react'
import Pages from '../pages/Pages'
import Category from './Category'
import { BrowserRouter, Link } from 'react-router-dom'
import Search from './Search'
import styled from 'styled-components'
import { GiKnifeFork} from 'react-icons/gi'
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
        </Nav>
        <Search />
      </div>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

const mystyle = {
  background:"linear-gradient(35deg,#58d5795d,rgba(242, 240, 244, 0.389)",
  margin: "2rem 0rem 1rem 0rem",
  padding:"0rem 1rem 2rem 0rem",
  borderRadius:"2.5rem",
  boxShadow: "3px 5px 18px #00000064",
  backdropFilter: "blur(4px)",
  borderBottom: "3px solid rgba(248, 244, 244, 0.7)",
  borderRight: "3px solid rgba(248, 244, 244, 0.7)"
  // backgroundImage: 'url("food.jpg")'
}

const Logo = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  font-size: 3rem;
  font-weight: 800;

  .chef{
    font-size: 10rem;
    color: #3e6f0d;
    filter: drop-shadow(0px 0px 8px rgb(73, 251, 150));
  }
  h4{
    color: #3e6f0d;
    font-size:3rem;
    font-weight: 900;
    text-shadow: 0px 0px 8px rgb(73, 251, 150);
  }
`

const Nav = styled.div`
  padding: 4rem 0rem 2rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`

export default App