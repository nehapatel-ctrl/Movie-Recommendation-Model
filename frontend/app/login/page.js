'use client'
import React from "react";
import { Grid, TextField } from "@material-ui/core";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useState } from "react";
export default function Login(){
    
       
        const images = [
          "url('https://images6.alphacoders.com/480/480421.jpg')",
          "url('https://miro.medium.com/v2/resize:fit:1200/1*WWTBjFs6gqqsXGAsfg9nsQ.jpeg')",
          "url('https://www.thebalancemoney.com/thmb/cfLSIpcpwiluW-kJDTu16bXNhjo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/school-books-on-desk--education-concept-871454068-5b548900c9e77c005b04fc8c.jpg')",
        ];
        const [currentImage, setCurrentImage] = useState(0);
        const changeBackground = () => {
          setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        };
    

    return(
        <div className="boxx" style={{width:'100%',height:'735px',border:'1px solid black',display:'grid',placeItems:'center',backgroundImage: images[currentImage],color:'white'}} onClick={changeBackground}>
        
        <div className="box" style={{zIndex:"1000",border:'1px solid black',width:'450px',height:'500px',display:'grid',placeItems:'center',backgroundColor:'white'}} onClick={(e) => e.stopPropagation()}>
            <h1 style={{marginBottom:'20px',display:'flex',justifyContent:'center',marginTop:'40px',color:'black'}}>Login</h1>
            <form style={{width:'400px',height:'500px',color:'black'}}>
                <Grid container spacing={6}>
                   <Grid  item xs={12}>
                    <TextField 
                     label="Username*"
                     variant="outlined"
                     fullWidth
                     color="white"
                    />
                   </Grid>
                   <Grid item xs={12}>
                    <TextField 
                     label="Password*" 
                     variant="outlined"
                     fullWidth
                     type="password"
                    />
                   </Grid>
                </Grid>
                <FormControlLabel  control={<Checkbox />} label="Remember me" style={{marginLeft:'2px'}}/>
                <Button type="submit" style={{marginTop:'100px',backgroundColor:' #4F86F7',color:'white'}}>Login</Button>
            </form>
        </div>
        
    </div>
    );
}

