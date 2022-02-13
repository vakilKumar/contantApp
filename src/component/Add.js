import React, { useState } from 'react';
import './style/Add.css';


export default function Add({ name, setName, lname, setLname, mobile, setMobile, data,setData}) {
  
  function namefun(e){
      setName(e.target.value)
  }

  function lnamefun(e){
      setLname(e.target.value)
  }

  function mobilefun (e){
     setMobile(e.target.value)
  }
  
  function add_user(){
      if(name=="" || lname=="" || mobile=="") {
        alert("Some Data are missing!!");
          return;
      }
   let obj = {"name" : name, "lname" : lname, "mobile" : mobile};
   let arr = [...data];
   arr.push(obj);
    
    setData(arr);
    
  }


  return (
  <div className='main-cont'>
      <div><label>First Name</label></div>
      <div><input type="text" onChange={namefun}></input></div>
      <div><label>Last Name</label></div>
     <div> <input type="text" onChange={lnamefun}></input></div>
      <div><label>Mobile number</label></div>
      <div><input type="number" onChange={mobilefun}></input></div>
      <button className='add-user' onClick={ add_user }>add user</button>
  </div>
     
    );
}
