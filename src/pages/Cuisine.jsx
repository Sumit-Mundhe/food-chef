import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

function Cuisine() {
    const[cuisine, setCuisine] = useState([])
    let params = useParams()

    const getCuisine = async (name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`); 
        const recipes = await data.json();
        setCuisine(recipes.results)
    }

    useEffect(()=>{
        getCuisine(params.type)
    },[params.type])


  return (
    <Grid
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
        {cuisine.map((item)=>{
            return(
                <Link to={"/recipe/"+item.id}>
                    <Card key={item.id}>
                        <img src={item.image} alt="" />
                        <h4>{item.title}</h4>
                    </Card>
                </Link>
            )
        })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(20rem, 1fr));
    grid-gap: 3rem;
`

const Card = styled.div`
    img{
        box-shadow: 5px 5px 12px #50505063;
        width: 100%;
        border-radius: 2rem;
        border: 0.25rem solid white;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
        text-shadow: 0px 0px 8px rgb(242, 163, 60);
    }
`

export default Cuisine