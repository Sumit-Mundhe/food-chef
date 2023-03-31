import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


function Recipe() {
    const[details, setDetails] = useState({});
    const[activeTab,setActiveTab] = useState("details")
    let params = useParams()

    const fetchDetails = async (key) =>{
        const data = await fetch(`https://api.edamam.com/api/recipes/v2/${key}?type=public&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}`);
          
        const detailData = await data.json();
        console.log("detaildata",detailData);
        setDetails(detailData)
    }
 
    useEffect(()=>{
        fetchDetails(params.key)
    },[params.key])

  return (
    <DetailWrapper
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
        {details.recipe && (
        <div>
            <h2>{details.recipe.label}</h2>
            <img src={details.recipe.image} alt="" />
        </div>
        )}
        <Info>
            <div className="buttons">
                <Button className={activeTab==="details"?'active':''} onClick={()=>{setActiveTab("details")}}>Details</Button>
                <Button className={activeTab==="ingredients"?'active':''} onClick={()=>{setActiveTab("ingredients")}}>Ingredients</Button>
            </div>
            {activeTab === "details" && (
            <div style={myStyle}>
                <h3>It is an {details.recipe?.cuisineType[0]}</h3>
                <h3>Dish type : {details.recipe?.dishType[0]}</h3>
                <ul>
                    <h2>Nutrients : </h2>
                    <li>{details.recipe?.totalNutrients.ENERC_KCAL.label} : {Math.floor(details.recipe?.totalNutrients.ENERC_KCAL.quantity)} {details.recipe?.totalNutrients.ENERC_KCAL.unit}</li>
                    <li>{details.recipe?.totalNutrients.FAT.label} : {Math.floor(details.recipe?.totalNutrients.FAT.quantity)} {details.recipe?.totalNutrients.FAT.unit}</li>
                    <li>{details.recipe?.totalNutrients.PROCNT.label} : {Math.floor(details.recipe?.totalNutrients.PROCNT.quantity)} {details.recipe?.totalNutrients.PROCNT.unit}</li>
                    <li>{details.recipe?.totalNutrients.CHOCDF.label} : {Math.floor(details.recipe?.totalNutrients.CHOCDF.quantity)} {details.recipe?.totalNutrients.CHOCDF.unit}</li>
                </ul>
                <a href={details.recipe?.url} target="_blank" rel="noopener noreferrer">Diretions</a>
            </div>
            )}
            {activeTab === "ingredients" && (
            <ul style={myStyle}>
                {details.recipe?.ingredients ? details.recipe?.ingredients.map((ingredient,id) => {
                        console.log(id,ingredient);
                     return (
                        <li className='ingredient-li' key={id}>
                            <img className='ingredient-img' src={ingredient.image} alt="" />
                            <h3>{ingredient.text}</h3>
                        </li>
                     )
                    
                }): "Loading..."}
            </ul>
            )}
        </Info>
          </DetailWrapper>
  )
}

const myStyle = {
    backgroundColor : "#5c8f43a0",
    marginLeft : "2rem",
    padding : "1rem",
    borderRadius : "1rem",
}

const DetailWrapper = styled(motion.div)`
    margin-top: 1rem;
    margin-bottom: 5rem;
    display: flex;
    background-color: #63cb6daf;
    border-radius: 1.5rem;
    padding: 1.5rem;
    .active{
        background: linear-gradient(35deg,#494949, #313131);
        color: white;
    }
    img{
        border-radius : 2rem;
        left : 0;
        box-shadow: 5px 5px 12px #50505063;
        border: 0.25rem solid white;
    }
    h2{
        margin-bottom: 2rem;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
        list-style: none;
    }
    ul{
        
        margin-top: 2rem;
    }
    .buttons{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3rem;
    }
`

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin: 2rem;
    font-weight: 600;
`

const Info = styled.div`
    justify-content: center;
    align-items: center;
    text-align: justify;
    margin-left: 5rem;
`

export default Recipe