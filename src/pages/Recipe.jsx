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

    // const renderList = (name) => {
    //     return name.map(name => <li>{name.original}</li>)
    // }

  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
        </div>
        <Info>
            <Button className={activeTab==="instructions"?'active':''} onClick={()=>{setActiveTab("instructions")}}>Instructions</Button>
            <Button className={activeTab==="ingredients"?'active':''} onClick={()=>{setActiveTab("ingredients")}}>Ingredients</Button>
            <div>
                <h3 dangerouslySetInnerHTML={{__html: details.summary}} ></h3>
                <h3 dangerouslySetInnerHTML={{__html: details.instructions}} ></h3>
                {/* <h1>{
                details.extendedIngredients[1].original
               
                }</h1> */}
            </div>
            <ul>
                {details.extendedIngredients ? details.extendedIngredients.map(({id,original}) => 
                     (<li key={id}>{original}</li>)
                ): "Loading..."}
            </ul>
            {/* {console.log(Object.keys(details.extendedIngredients).length)}
            <ul>
                {renderList(details.extendedIngredients)}
            </ul> */}
            
        </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: linear-gradient(35deg,#494949, #313131);
        color: white;
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
    margin-left: 10rem;
`

export default Recipe