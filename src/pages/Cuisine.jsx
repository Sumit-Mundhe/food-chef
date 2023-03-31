import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

function Cuisine() {
    const[cuisine, setCuisine] = useState([])
    let params = useParams()

    const getCuisine = async (name) =>{
        const data = await fetch(`https://api.edamam.com/search?app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}&q=${name}&from=0&to=9`);
        const recipes = await data.json();
        console.log(recipes);
        setCuisine(recipes.hits)
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
            const id = item.recipe.uri.replace("http://www.edamam.com/ontologies/edamam.owl#recipe_", "");
            console.log(id);
            return(
                <Link to={"/recipe/"+id}>
                    <Card key={id}>
                        <img src={item.recipe.image} alt="" />
                        <h4>{item.recipe.label}</h4>
                    </Card>
                </Link>
            )
        })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(15rem, 1fr));
    grid-gap: 3rem;
    margin : 2.5rem 0rem;
    background-color: #45bf51ac;
    border-radius: 1.5rem;
    padding: 2.5rem;
    backdrop-filter: blur(100px);
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
    }
`

export default Cuisine