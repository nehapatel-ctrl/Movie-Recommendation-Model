'use client'
import styles from "./page.module.css";
import {useState} from "react";
import React from "react";
import MyCard from './card';
import DialogForm from "./form";
import Nav from "./navbar";
import Button from '@mui/material/Button';


export default function Home() {
  const [Login,setLogin] = useState(false);
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const [values, setValues] = useState({ 
    name: '', 
    Code: '', 
    Credits: '',
    Description: '',
    Imageurl: '',
  }); 
  
  
    const cards = [ 
      { 
        Name: 'Machine Learning', Description: 'An advanced course on machine learning algorithms',Code:'Code:CS711', Credits:'Credits:9',image: 'https://www.hfsresearch.com/wp-content/uploads/2019/09/5b5f1a8e048a3267059501.png' }, 
      {Name: 'Data Structures and algorithms', Description: 'Learn about arrays,linked lists and more',Code:'Code:ESO207',Credits:'Credits:11', image: 'https://www.seedprogramming.org/wp-content/uploads/2023/02/PicsArt_03-24-07.25.58-1.webp' }, 
      { Name: 'Fluid Mechanics', Description: 'Fundamentals of fluid mechanics and applications',Code:'Code:ME302',Credits:'Credits:9', image: 'https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/dfb3dc65-ad56-4554-a184-b151ef2d70a4_CI.jpg' }, 
      {Name: 'Introduction to electronics', Description: 'An introductory course of electric circuits & applications',Code:'Code:ESC201', credits:'Credits:14',image: 'https://th.bing.com/th/id/OIP.d8WM4VWYPHKx09WEcAD3eAHaE7?rs=1&pid=ImgDetMain'}];



    return (
    <>
       <Nav />
      <div >
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {cards.map((card, index) => (
          <MyCard
            key={index}
            index={index + 1}
            Name={card.Name}
            Description={card.Description}
            Code={card.Code}
            Credits={card.Credits}
            image={card.image}
          />
        ))}  
           
          

      </div>
        
        <React.Fragment>
      <Button style={{marginLeft: 1300,marginTop: -30}} variant="outlined" onClick={handleClickOpen}>
        Add Course
      </Button>
      <DialogForm open={open} handleClose={handleClose} values={values}/>
        
    </React.Fragment>
      </div>

    </>
    
  );
}
