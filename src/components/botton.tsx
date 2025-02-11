import React from "react";


interface button1 {
    name:{
        name:string
    },
    onClick: () => void
}

// type button1  ={
//     name:string
// }

const Button:React.FC<button1>= (props)=>{

    return (
        <><button onClick={props.onClick} >{props.name.name}</button></>
    )
}

export default Button;