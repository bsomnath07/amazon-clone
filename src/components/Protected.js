// import React,{useEffect} from 'react'
// import {useNavigate} from "react-router-dom";
// const Protected = (props) => {
// const {Component}= props    
// const navigate=useNavigate();
// useEffect (()=>{
// let CheckAuth=JSON.parse(localStorage.getItem("auth"));
// if(!CheckAuth){
//     navigate("/login")
// }
// },[])
//   return (
//     <div>
//      <Component/> 
//     </div>
//   )
// }

// export default Protected
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let checkAuth = JSON.parse(localStorage.getItem('auth'));
    if (!checkAuth) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;

