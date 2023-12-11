import React from "react";

const Avatar=({children ,backgroundColor, px,py, color,borderRadius,fontSize,cursor})=>{
   const style={
    backgroundColor,
    padding:`${py} ${px}`,
    color: color || 'black',
    borderRadius,
    fontSize,
    textAlign:'center',
    width:"20px",
    height:"20px"
   }
    return(
        <div style={style}>
            {children}
        </div>
    );
}
export default Avatar;