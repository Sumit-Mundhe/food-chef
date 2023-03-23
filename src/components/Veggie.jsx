import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide,SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

function Veggie() {
    const[veggie,setVeggie]=useState([])

    useEffect(()=>{
        getVeggie();
    },[]);

    const getVeggie = async() => {
        const check = localStorage.getItem("veggie");
        
        if(check){
            setVeggie(JSON.parse(check));
        }
        else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data = await api.json();
            
            localStorage.setItem("veggie",JSON.stringify(data.recipes));
            setVeggie(data.recipes);
            // console.log(data.recipes);
        }
    };


  return (
    <Wrapper>
        <h3>Vegetarian Dishes</h3>
        <Splide className='splide' options={{
            perPage:3,
            arrows:false,
            pagination:false,
            drag:"free",
            gap:"0rem",
        }}>
            {veggie.map((recipe)=>{
                return(
                <SplideSlide  key={recipe.id}>
                <Link to={"/recipe/"+recipe.id}>
                <Card key={recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                </Card>
                </Link>
                </SplideSlide>)
            })}
        </Splide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin : 1rem 0rem;
    .splide{
        padding: 1rem;
        background: linear-gradient(to right, #0e3a0002, #1b6c2e6f, #023a1e02);
        border-radius: 2rem;
    }
    h3{
        font-size: 2rem;
        color: #036303;
        text-shadow: 
        0 0 15px rgba(11, 180, 67, 0.626),
        2px 2px 1px rgba(255, 255, 255, 0.79);
    }
`;

const Card = styled.div`
    min-height : 15rem;
    border-radius : 2rem;
    overflow : hidden;
    position : relative;
    margin: 1rem;
    box-shadow: 5px 5px 18px #1e1e1ead;


    img{
        border-radius : 2rem;
        position : absolute;
        left : 0;
        width : 100%;
        height : 100%;
        object-fit : cover;
        border: 0.25rem solid white;
    }

    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%,0%);
        color: white;
        width: 100%;
        height: 40%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.4));
`;

export default Veggie