import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide,SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

function Popular() {
    const[popular,setPopular]=useState([])

    const getPopular = async() => {
            const api = await fetch(`https://api.edamam.com/search?q=random&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}&from=0&to=9&random=true`);
            const data = await api.json();
            
            
            setPopular(data.hits);
            // console.log(popular);
            // console.log(data.hits);
            // console.log(data.recipes);
    };
    
    useEffect(()=>{
        getPopular();
    },[]);



  return (
    <Wrapper>
        <h3>Popular Dishes</h3>
        <Splide className='splide' options={{
            perPage:4,
            arrows:false,
            pagination:false,
            drag:"free",
            gap:"0rem",
        }} >
            {popular.map((recipe)=>{
                const id = recipe.recipe.uri.replace("http://www.edamam.com/ontologies/edamam.owl#recipe_", "");
                return(
                <SplideSlide key={id}>
                <Link to={"/recipe/"+id}>
                <Card key={id}>
                    <p>{recipe.recipe.label}</p>
                    <img src={recipe.recipe.image} alt={recipe.recipe.label} />
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
    margin : 4rem 0rem;
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
    background-color: rgba(0,0,0,0.3);
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
        padding: 0.3rem;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.4));
`;

export default Popular