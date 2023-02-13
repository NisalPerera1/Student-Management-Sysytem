import React from 'react';
import Button from '@mui/material/Button';

function savetodb(){
	alert("saved succesfully")
  }
  
function Feereport(){
return ( 
<div align="center">
	<h1>Class Fee Report</h1>
	<Button style={{ position: 'relative', left:'750px', top: '10px', right: '20px'} } className="btn-Modal" variant="contained" onClick={savetodb} class="btn btn-primary btn-lg"> Add New Student </Button>

	
	
</div>
)
};

export default Feereport;
