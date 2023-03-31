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
    margin: 0rem 0rem;
    
`
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 0rem;
    text-decoration: none;
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(1.1);

    h4{
        color: #40513B;
        font-size: 0.8rem;
    }
    svg{
        color: #40513B;
        font-size: 1.5rem;
    }
    &.active{
        transform: translate(0.5rem);

        svg{
            color: white;
            font-size: 3rem;
        }
        h4{
            color: white;
        }
    }
`

export default Category