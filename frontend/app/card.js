'use client'
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from '@material-ui/core';

const MyCard = ({ index, Name, Description,Code,Credits, image }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '' });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(`Form submitted for card ${index}:`, formData);
    handleClose();
  };

  return (
    <>
      <Card sx={{ maxWidth: 345,marginTop:3,marginLeft:12 }} onClick={handleClickOpen} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={Name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Code}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Credits}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Course</DialogTitle>
      <DialogContent>
        
        <form onSubmit={handleSubmit}>
        <Grid container spacing={4} style={{marginTop:'10px'}}>
                        <Grid item xs={12} >
                            <TextField 
                            label="Full Name*" 
                            variant="outlined"
                             fullWidth 
                             name="name" 
                             value={Name}
                             onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField 
                            label="Course Code*" 
                            variant="outlined"
                             fullWidth 
                             name="Code" 
                             value={Code} 
                             onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField 
                            label="credits*" 
                            variant="outlined"
                             fullWidth 
                             name="Credits" 
                             value={Credits} 
                             onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField 
                            label="Description" 
                            variant="outlined"
                             fullWidth
                              name="Description" 
                             value={Description} 
                             onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField 
                            label="Image Url" 
                            variant="outlined"
                             fullWidth
                              name="Imageurl" 
                             value={image} 
                             onChange={handleChange} />
                        </Grid>
           
                   </Grid>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Update</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default MyCard;
