'use client'
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from '@material-ui/core';



const Viewcard = ({ open,course,onUpdate,onDelete,handleClose }) => {
  
  const [values, setValues] = useState({ 
    name: '', 
    Code: '', 
    Credits: '',
    Description: '',
    Imageurl: '',
  }); 
  useEffect(() => {
    if (course) {
      setValues({
        name: course.name,
        code: course.code,
        Credits: course.Credits,
        Description: course.Description,
        Imageurl: course.Imageurl,
      });
    }
  }, [course]);
  const handleChange = (e) => { const { name, value } = e.target; setValues({ ...values, [name]: value, }); };
 
  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const response = await axios.put(
        `http://localhost:5000/courses/${course.id}`,
        courseDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Course updated successfully");
      console.log("Course updated:", response.data);
      onUpdate(course.id, response.data);
      onClose();
    } catch (error) {
      alert("Failed to update course.\nLogin if you haven't already.");
      console.error("Error updating course:", error.response ? error.response.data : error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      await axios.delete(`http://localhost:5000/courses/${course.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Course deleted successfully");
      console.log("Course deleted");
      onDelete(course.id);
      onClose();
    } catch (error) {
      alert("Failed to delete course.\nLogin if you haven't already.");
      console.error("Error deleting course:", error.response ? error.response.data : error.message);
    }
  };

  
   
  

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
            <Button onClick={handleUpdate} color="primary" variant="contained">Update</Button>
            <Button  onClick={handleDelete} color="secondary" variant="contained" >Delete</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Viewcard;