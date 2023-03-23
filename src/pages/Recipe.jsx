import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipe() {
    const[details, setDetails] = useState({});
    const[activeTab,setActiveTab] = useState("instructions")
    let params = useParams()

    const fetchDetails = async (name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`); 
        const detailData = await data.json();
        setDetails(detailData)
    }

    useEffect(()=>{
        fetchDetails(params.name)
    },[params.name])

  return (
    <DetailWrapper
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
        </div>
        <Info>
            <div className="buttons">
                <Button className={activeTab==="instructions"?'active':''} onClick={()=>{setActiveTab("instructions")}}>Instructions</Button>
                <Button className={activeTab==="ingredients"?'active':''} onClick={()=>{setActiveTab("ingredients")}}>Ingredients</Button>
            </div>
            {activeTab === "instructions" && (
            <div>
                <h3 dangerouslySetInnerHTML={{__html: details.summary}} ></h3>
                <h3 dangerouslySetInnerHTML={{__html: details.instructions}} ></h3>
            </div>
            )}
            {activeTab === "ingredients" && (
            <ul>
                {details.extendedIngredients ? details.extendedIngredients.map(({id,original}) => 
                     (<li key={id}>{original}</li>)
                ): "Loading..."}
            </ul>
            )}
        </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled(motion.div)`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .active{
        background: linear-gradient(35deg,#494949, #313131);
        color: white;
    }
    img{
        border-radius : 2rem;
        left : 0;
        box-shadow: 5px 5px 12px #50505063;
        border: 0.25rem solid white;
        /* width : 100%;
        height : 100%; */
        /* object-fit : cover; */
    }
    h2{
        margin-bottom: 2rem;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
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
    margin-right: 2rem;
    font-weight: 600;
`

const Info = styled.div`
    justify-content: center;
    align-items: center;
    text-align: justify;
`

export default Recipe