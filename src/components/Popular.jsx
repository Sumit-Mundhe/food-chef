import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide,SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Popular() {
    const[popular,setPopular]=useState([])

    useEffect(()=>{
        getPopular();
    },[]);

    const getPopular = async() => {
        const check = localStorage.getItem("popular");
        
        if(check){
            setPopular(JSON.parse(check));
        }
        else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json();
            
            localStorage.setItem("popular",JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data.recipes);
        }
    };


  return (
    <Wrapper>
        <h3>Popular Dishes</h3>
        <Splide options={{
            perPage:4,
            arrows:false,
            pagination:false,
            drag:"free",
            gap:"2rem",
        }}>
            {popular.map((recipe)=>{
                return(
                <SplideSlide key={recipe.id}>
                <Card key={recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                </Card>
                </SplideSlide>)
            })}
        </Splide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin : 4rem 0rem
`;

const Card = styled.div`
    min-height : 15rem;
    border-radius : 2rem;
    overflow : hidden;
    position : relative;

    img{
        border-radius : 2rem;
        position : absolute;
        left : 0;
        width : 100%;
        height : 100%;
        object-fit : cover;
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
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.7));
`;

export default Popular