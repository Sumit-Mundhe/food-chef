import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function Search() {
    const[input,setInput] = useState("");
    const navigate = useNavigate();
    
    const submitHandler = (e)=>{
        e.preventDefault();
        navigate('/searched/' + input);
        setInput("")
    };

  return (
    <FormStyle onSubmit={submitHandler} >
        <div>
            <FaSearch></FaSearch>
            <input onChange={(e)=>{setInput(e.target.value)}} type="text" value={input} placeholder="Type a keyword for your recipe..."/>
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;
    div{
        position: relative;
        width: 100%;
    }

    input{
        border: none;
        background: linear-gradient(35deg,#5e5b5b40, #615f5f60);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: 3px solid rgba(247, 242, 242, 0.697);
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    input::placeholder{
        color: #ffffffbc;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`

export default Search