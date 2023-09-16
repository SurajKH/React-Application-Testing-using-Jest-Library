import { CardContent, Typography } from '@mui/material';
import React from 'react';

const CardComponent = () => {
  return (
    <React.Fragment>
    <CardContent className='cards'>
      <Typography variant="h5" component="div">
       Jest Library
      </Typography>
      <Typography className="textcontent" sx={{ mb: 1.5 }} color="text.secondary" style={{border:"1px solid black",marginTop:"20px"}}>
      Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly. Jest is well-documented, requires little configuration and can be extended to match your requirements.
      </Typography>
      </CardContent>
  </React.Fragment>
  )
}

export default CardComponent;
