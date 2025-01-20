'use client'
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import axios from 'axios';

const DialogForm = ({ open, onClose, onSuccess }) => {
  const [values, setValues] = useState({
    name:"",
    code:"",
    credits:"",
    description:"",
    imageUrl:"",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

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
      onClose(); 
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
      <DialogTitle>Add New Course</DialogTitle>
      <DialogContent>
        <TextField
          name="name"
          label="Course Name"
          type="text"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={values.name}
        />
        <TextField
          name="code"
          label="Course Code"
          type="text"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={values.code}
        />
        <TextField
          name="credits"
          label="Credits"
          type="number"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={values.credits}
        />
        <TextField
          name="description"
          label="Description"
          type="text"
          fullWidth
          multiline
          rows={3}
          margin="normal"
          onChange={handleChange}
          value={values.description}
        />
        <TextField
          name="imageUrl"
          label="Image URL"
          type="text"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={values.imageUrl}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ marginTop: "16px" }}
        >
          Submit
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
