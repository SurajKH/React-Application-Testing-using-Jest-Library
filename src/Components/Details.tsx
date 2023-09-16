import React, { useState } from 'react';
import CardComponent from './CardComponent';
import Button from '@mui/material/Button';
/*
 <p style={{alignItems:"center",alignContent:"center"}}>
          Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly. Jest is well-documented, requires little configuration and can be extended to match your requirements.
          </p>
*/
const Details = () => {

    const [message,setMessage]=useState(false);
    const [toggle,setToogle]=useState(false);

    const buttonClick=()=>
    {
       // event.preventDefault();
        setMessage(true);
        setToogle(!toggle);
    }

  return (
    <React.Fragment>
      <>
      <div>
        <p></p>
      </div>
        {/* <button ></button> */}
        <Button variant="outlined" color="success" onClick={()=>buttonClick()} >Click to Know about Jest.</Button>
        {toggle && message && 
        <div className='cards'>
        <CardComponent/>
        </div>
        
         }
      </>
    </React.Fragment>
  )
}

export default Details;
