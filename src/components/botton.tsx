import React from "react";
import { useState } from "react";

interface button1 {
    name:{
        name:string
    },
    onClick: () => void
}

interface book{
    "name":string,
    "author":string
  }

// type button1  ={
//     name:string
// }

const Button:React.FC<button1>= (props)=>{
    // const [value,setValue] = useState<book>({"author":"chayan","name":"book"})
    const [value,setValue] = useState<string>("b")

    return (
        <>
        
        <h3>{value}</h3>
        <button onClick={()=>setValue("a")} >{props.name.name}</button>
        </>
    )
}

export default Button;