import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Searched() {
    const[searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams()

    const getSearched = async (name) =>{
        const data = await fetch(`https://api.edamam.com/search?app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}&q=${name}&from=0&to=9`);
 
        const recipes = await data.json();
        setSearchedRecipes(recipes.hits)
    }

    useEffect(()=>{
        getSearched(params.search)
    },[params.search])

  return (
    <Grid
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
        {searchedRecipes.map((item)=>{
            const id = item.recipe.uri.replace("http://www.edamam.com/ontologies/edamam.owl#recipe_", "");
            return(
                <Link to={"/recipe/" + id}>
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
    background-color: #609966b1;
    border-radius: 1.5rem;
    padding: 1.5rem;
    
`

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
        box-shadow: 5px 5px 12px #50505063;
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

export default Searched