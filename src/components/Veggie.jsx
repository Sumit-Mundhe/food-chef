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
            const api = await fetch(`https://api.edamam.com/search?q=vegetarian&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}&from=0&to=9`);
            const data = await api.json();
            setVeggie(data.hits);
    };


  return (
    <Wrapper>
        <h3>Vegetarian Dishes</h3>
        <Splide className='splide' options={{
            perPage:3,
            arrows:true,
            interval:2000,
            pagination:false,
            drag:"free",
            gap:"0rem",
        }}>
            {veggie.map((recipe)=>{
                const id = recipe.recipe.uri.replace("http://www.edamam.com/ontologies/edamam.owl#recipe_", "");
                return(
                <SplideSlide  key={id}>
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
    margin : 2.5rem 0rem;
    background-color: #3bda48ac;  
    border-radius: 1.5rem;
    padding: 1.5rem;
    box-shadow: 5px 10px 18px #1e1e1e21;
    border-right: 8px solid #eaffec;
    border-bottom: 8px solid #eaffec;
    .splide{
        padding: 1rem;
        border-radius: 2rem;
    }
    h3{
        font-size: 2rem;
        color: #ffffff;
        text-shadow: 0 0 15px #3740058e;
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