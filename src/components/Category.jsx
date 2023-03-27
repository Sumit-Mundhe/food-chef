import {FaPizzaSlice, FaHamburger, FaMugHot} from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React from 'react'

function Category() {
  return (
    <List>
        <SLink to={'/cuisine/Indian'}>
            <FaMugHot />
            <h4>Indian</h4>
        </SLink>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink >
        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(55deg, #dad6d619, #008000b3, #045516d2);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    box-shadow: 3px 5px 10px rgba(48, 47, 47, 0.5);
    backdrop-filter: blur(3px);
    border-bottom: 3px solid rgba(254, 252, 252, 0.892);
    border-right: 3px solid rgba(254, 252, 252, 0.892);

    h4{
        color: white;
        font-size: 0.8rem;
    }
    svg{
        color: white;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(to right,#21f244,#03590347);
        box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.385);
        transform: translate(0.5rem);

        svg{
            color: white;
        }
        h4{
            color: white;
        }
    }
`

export default Category