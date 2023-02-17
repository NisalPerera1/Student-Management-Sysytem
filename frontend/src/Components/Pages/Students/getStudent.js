import Button from '@mui/material/Button';
import axios from 'axios';
import React, { useState } from 'react';


export default function getStudent(){
    const [ShowStudent, setShowStudent] = useState(false);

    const getStu = () => {
        setShowStudent(!ShowStudent);
      };
    
    return(
        <div>
            <Button style={{right:"20px",left:"1523px"} } variant="contained" onClick={getStu} class="btn btn-primary btn-lg"> Show Students </Button>
            <div>
            {ShowStudent &&(
            <h1>Here is your Current Students </h1>
                            )}
            </div>
        </div>
    )}