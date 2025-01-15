// src/DialogForm.js
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from '@material-ui/core';



const DialogForm = ({ open, handleClose}) => {
  const [name, setName] = useState('');
  
 
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      console.log("Token:", token);
      console.log("Course Details:", values);

      const response = await axios.post(
        "https://localhost:5000/courses",
        courseDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Course added successfully");
      console.log("Course added:", response.data);
      onSuccess(response.data);
      onClose();
    } catch (error) {
      alert("Failed to add course.\nLogin if you haven't already.");
      if (error.response) {
       
        console.error("Error adding course:", error.response.data);
      } else if (error.request) {
        
        console.error("Error adding course: No response received", error.request);
      } else {
        
        console.error("Error adding course:", error.message);
      }
    }
  };

  
   
  const [values, setValues] = useState({ 
    name: '', 
    Code: '', 
    Credits: '',
    Description: '',
    Imageurl: '',
  }); 
  const handleChange = (e) => { const { name, value } = e.target; setValues({ ...values, [name]: value, }); };

  return (
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
                             type="text" 
                             value={values.name} 
                             onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField 
                            label="Course Code*" 
                            variant="outlined"
                             fullWidth 
                             name="Code"
                             type="text"  
                             value={values.Code} 
                             onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField 
                            label="credits*" 
                            variant="outlined"
                             fullWidth 
                             type="number" 
                             name="Credits" 
                             value={values.Credits} 
                             onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField 
                            label="Description" 
                            variant="outlined"
                             fullWidth
                             multiline
                             rows={3}
                             type="text" 
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
                             type="text" 
                             onChange={handleChange} />
                        </Grid>
           
                   </Grid>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
