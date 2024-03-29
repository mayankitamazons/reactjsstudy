import React from "react";
import { useParams } from "react-router-dom";
const Category = () => {
    const { slug } = useParams(); 
  return <>
   <div style={{marginTop:300,textAlign:"center"}}>
   <h1>Category Page: {slug}</h1>
    </div>
  
  </>;
};

export default Category;
