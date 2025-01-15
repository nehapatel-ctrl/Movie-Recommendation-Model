'use client'
import React from "react";
import { Grid, TextField } from "@material-ui/core";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login(){
    
       
        const images = [
          "url('https://c.wallhere.com/photos/18/38/background_solid_bright-1073142.jpg!d')",
          
          "url('https://wallpapercave.com/wp/wp2424412.jpg')",
        ];
        const [currentImage, setCurrentImage] = useState(0);
        const changeBackground = () => {
          setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        };
        const router = useRouter();

        const handleSubmit = async (event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
      
          const loginDetails = {
            username: data.get("username"),
            password: data.get("password"),
          };
      
          try {
            // Make an API call to the login endpoint
            const response = await axios.post("https://course-helper-two.vercel.app/auth/login", loginDetails);
      
            if (response.status === 200) {
              const { token } = response.data;
              // Save JWT token to localStorage
              localStorage.setItem("jwtToken", token);
      
              alert("Login successful! Redirecting...");
              router.push("/"); // Redirect to homepage
            }
          } catch (error) {
            console.error("Error during login:", error.response?.data || error.message);
            alert("Login failed. Please check your credentials and try again.");
          }
        };
      
    

    return(
        <div className="boxx" style={{width:'100%',height:'735px',border:'1px solid black',display:'grid',placeItems:'center',backgroundImage: images[currentImage],color:'white'}} onClick={changeBackground}>
        
        <div className="box" style={{zIndex:"1000",border:'1px solid black',width:'450px',height:'500px',display:'grid',placeItems:'center',backgroundColor:'white'}} onClick={(e) => e.stopPropagation()}>
            <h1 style={{marginBottom:'20px',display:'flex',justifyContent:'center',marginTop:'40px',color:'black'}}>Sign Up</h1>
            <form style={{width:'400px',height:'500px',color:'black'}} onSubmit={handleSubmit}>
                <Grid container spacing={5}>
                   <Grid  item xs={12}>
                    <TextField 
                     label="Username"
                     variant="outlined"
                     required
                     fullWidth
                     color="white"
                     id="username"
                     name="username"
                     autoComplete="username"
                     autoFocus
                    />
                   </Grid>
                   <Grid item xs={12}>
                    <TextField 
                     label="Password" 
                     variant="outlined"
                     fullWidth
                     type="password"
                     required
                     id="password"
                     autoComplete="current-password"
                     name="password"
                    />
                   </Grid>
                </Grid>
                <FormControlLabel  control={<Checkbox />} label="Remember me" style={{marginLeft:'2px'}}/>
                <Button type="submit" style={{marginTop:'90px',backgroundColor:' #4F86F7',color:'white'}}>Sign up</Button>
            <Grid container style={{marginTop:'20px'}}>
              <Grid item xs >
                
                <Link href="/login" variant="body2" style={{color:' #4F86F7',marginTop:'-2',textDecoration: 'none'}}>
                 {"Already have an account? Sign In"}
                </Link>
                
              </Grid>
            </Grid>
            </form>
        </div>
        
    </div>
    );
}

