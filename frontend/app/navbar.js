'use client'
import Link from "next/link";
import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



export default function Nav(){
   
    
    
    return(
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Course Helper
            </Typography>
            <Link color="inherit"  href="\login" >
             Login</Link>
          </Toolbar>
        </AppBar>
      </Box>
    );
}