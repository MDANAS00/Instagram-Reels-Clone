import zIndex from '@mui/material/styles/zIndex'
import React from 'react'

function Crousel() {
  return (
    <div
    style={{
      backgroundImage:"url('phone.png')",
      height: "420px",
      backgroundSize: "contain",
      backgroundRepeat:"no-repeat",
      position: 'relative',
    }}
    >
      <img src="ss1.png" 
       height="300px"
       alt=''
      style={{
        position:'absolute',
        zIndex:2,
        left:"102px",
        top:"17px",
        height:"366px",
      }}/>
    </div>
  )
}

export default Crousel
