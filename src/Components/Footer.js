import React from 'react';
import { Container,Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
const Footer = () => {
  return (
    <React.Fragment>
       <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="">
            TestUsingJest.com
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
        <Typography>
            <h4>Disclaimer: All Resources are used from Sources on Internet for Education Purposes.</h4>
        </Typography>
      </Container>
      </Box>
    </React.Fragment>
  )
}

export default Footer;
