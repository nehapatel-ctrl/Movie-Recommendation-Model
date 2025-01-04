// src/DialogForm.js
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from '@material-ui/core';



const DialogForm = ({ open, handleClose,values}) => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { name });
    handleClose();
  };
   
  const handleChange = (e) => { const { name, value } = e.target; setValues({ ...values, [name]: value, }); };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Course</DialogTitle>
      <DialogContent>
        
        <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
                        <Grid item xs={12} >
                            <TextField 
                            label="Full Name*" 
                            variant="outlined"
                             fullWidth 
                             name="name" 
                             value={values.name} 
                             onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField 
                            label="Course Code*" 
                            variant="outlined"
                             fullWidth 
                             name="Code" 
                             value={values.Code} 
                             onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField 
                            label="credits*" 
                            variant="outlined"
                             fullWidth 
                             name="Credits" 
                             value={values.Credits} 
                             onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField 
                            label="Description" 
                            variant="outlined"
                             fullWidth
                              name="Description" 
                             value={values.Description} 
                             onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField 
                            label="Image Url" 
                            variant="outlined"
                             fullWidth
                              name="Imageurl" 
                             value={values.Imageurl} 
                             onChange={handleChange} />
                        </Grid>
           
                   </Grid>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
