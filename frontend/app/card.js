'use client'
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


const MyCard = ({ values,onClick }) => {
  

  return (
    <>
      <Card sx={{ maxWidth: 345,marginTop:3,marginLeft:12 }} onClick={onClick} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={values.image}
            alt={Name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {values.Name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Course code: {values.Code}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Credits: {values.Credits}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {values.Description}
            </Typography>
            

          </CardContent>
        </CardActionArea>
      </Card>
      
        
    </>
  );
};

export default MyCard;
