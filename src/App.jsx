import React, { useState } from "react";
import { useForm } from "./useForm";

const App = () => {
  const [value, handleChange] = useForm({
    name:"",
    email:"",
  });



  console.log(value.name);
  console.log(value.email);
  
  


  return (
    <>

      <input type="text" name="name" value={value.name} onChange={handleChange} />


      <input type="text" name="email" value={value.email} onChange={handleChange} />
      
    </>
  );
};

export default App;
