/*'use client'
import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from '@material-ui/core'; 
import axios from 'axios';

const DialogForm = ({ open, course, onClose, onSuccess }) => {
  const [values, setValues] = useState({
    name: '',
    code: '',
    credits: '',
    description: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (course) {
      setValues({
        name: course.coursename,
        code: course.coursecode,
        credits: course.credits,
        description: course.description,
        imageUrl: course.image,
      });
    }
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      const token = localStorage.getItem("jwtToken");
      console.log("Token:", token);
      console.log("Course Details:", values);

      const response = await axios.post(
        " http://localhost:5000/courses",
        values,
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

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Course</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4} style={{ marginTop: '10px' }}>
            <Grid item xs={12}>
              <TextField
                label="Full Name*"
                variant="outlined"
                fullWidth
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Course Code*"
                variant="outlined"
                fullWidth
                name="code"
                type="text"
                value={values.code}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Credits*"
                variant="outlined"
                fullWidth
                type="number"
                name="credits"
                value={values.credits}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Image URL"
                variant="outlined"
                fullWidth
                name="imageUrl"
                value={values.imageUrl}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <DialogActions>
            
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;           */
/*'use client'
import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from '@material-ui/core'; 
import axios from 'axios';

const DialogForm = ({ open, onClose, onSuccess }) => {
  const [values, setValues] = useState({
    name: '',
    code: '',
    credits: '',
    description: '',
    imageUrl: '',
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
     
    if (!values.name || !values.code || !values.credits) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      
      const token = localStorage.getItem("jwtToken");
      const response = await axios.post(
        `http://localhost:5000/courses`,
        values, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Course added successfully");
      console.log("Course added:", response.data);
      onSuccess(response.data);
      onClose(); // Use handleClose instead of onClose
    } catch (error) {
      alert("Failed to add course. Please check your input and try again.");
      if (error.response) {
        console.error("Error adding course:", error.response.data);
      } else if (error.request) {
        console.error("Error adding course: No response received", error.request);
      } else {
        console.error("Error adding course:", error.message);
      }
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Course</DialogTitle>
      <DialogContent>
        
          <Grid container spacing={4} style={{ marginTop: '10px' }}>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Course Code"
                variant="outlined"
                fullWidth
                name="code"
                type="text"
                value={values.code}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Credits"
                variant="outlined"
                fullWidth
                type="number"
                name="credits"
                value={values.credits}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Image URL"
                variant="outlined"
                fullWidth
                name="imageUrl"
                value={values.imageUrl}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
          
       
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;*/
'use client'
import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from '@material-ui/core';
import axios from 'axios';

const DialogForm = ({ open, course, onClose, onSuccess }) => {
    const [values, setValues] = useState({
        name: '',
        code: '',
        credits: '',
        description: '',
        imageUrl: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
        console.log("Submitting values:", values); // Log the values before sending

        try {
            const token = localStorage.getItem("jwtToken");
            console.log("Token:", token);

            const response = await axios.post(
                "http://localhost:5000/courses",
                values,
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

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Course</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={4} style={{ marginTop: '10px' }}>
                        <Grid item xs={12}>
                            <TextField
                                label="Full Name*"
                                variant="outlined"
                                fullWidth
                                name="name"
                                type="text"
                                value={values.name}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Course Code*"
                                variant="outlined"
                                fullWidth
                                name="code"
                                type="text"
                                value={values.code}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Credits*"
                                variant="outlined"
                                fullWidth
                                type="number"
                                name="credits"
                                value={values.credits}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Description"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={3}
                                type="text"
                                name="description"
                                value={values.description}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Image URL"
                                variant="outlined"
                                fullWidth
                                name="imageUrl"
                                value={values.imageUrl}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <DialogActions>
                        <Button type="submit">Submit</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default DialogForm;