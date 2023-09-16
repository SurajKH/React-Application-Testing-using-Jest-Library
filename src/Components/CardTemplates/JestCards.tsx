import React,{useState} from 'react';
import {Grid} from "@material-ui/core";
import {Card,CardContent,CardHeader, Typography,CardMedia,CardActionArea } from '@mui/material';
const JestCards = () => {

    const [jestLearnings,setJestLearnings]=useState([
        {
       "id":1,
       "heading":"Easy to Setup",
       "data":"The jest framework is pretty simple to install on any system. You can directly install it by using the library named npm ( Node Package Manager ) or yarn. ",
       "image":"https://miro.medium.com/v2/resize:fit:796/0*i-fz2L0IW3Tb2s6F.png"
    },{
        "id":2,
        "heading":"Performance and Speed.",
        "data":"The jest framework is very fast. It quickly executes all your test cases, efficiently and quickly without any delay, if your system performance is also good. ",
        "image":"https://miro.medium.com/v2/resize:fit:796/0*i-fz2L0IW3Tb2s6F.png"
    },{
        "id":3,
        "heading":"Isolated working of all tests",
        "data":"Each jest test runs in its sandbox, which ensures that no two tests can interfere in between the working of another test or that it will not impact the execution of another test.",
        "image":"https://miro.medium.com/v2/resize:fit:796/0*i-fz2L0IW3Tb2s6F.png"
    }]);

  return (
    <React.Fragment>
        <h2 style={{marginBottom:"40px"}}>Features of Jest (React Testing Library)</h2>
      <Grid
       container
       spacing={2}
       direction="row"
       justify="flex-start"
       alignItems="flex-start"
      >
       {jestLearnings.map(dataEntry=>(
        <Grid item xs={12} sm={6} md={6} key={dataEntry.id} 
        >
            <Card style={{marginLeft:"50px",marginBottom:"20px"}}>
                <CardHeader
                style={{border:"1px solid black",margin:"10px"}}
                  title={dataEntry.heading}></CardHeader>
                <CardContent>
                <CardActionArea>
          <CardMedia
    component="img"
    image={dataEntry.image}
    alt="CardMedia Image Example"
    height="200"
    title="CardMedia Image Example"
  />
</CardActionArea>

                    <Typography padding={"10px"} variant='h6' gutterBottom>
                      {dataEntry.data}
                    </Typography>
                </CardContent>
            </Card>
            </Grid>
       ))}
      </Grid>
    </React.Fragment>
  )
}

export default JestCards;
