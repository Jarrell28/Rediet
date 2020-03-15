import React from 'react'
const Greet = (props) =>{
console.log(props)
return <h1>Welcome {props.name}</h1>
}
// this is an auto function 
// this means 
//function Greeting 
//{
 //  return <h1> helow World </h1>
//}
export default Greet