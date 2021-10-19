import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'

 const counter=()=>{
    const dispatch=useDispatch()
    const count=useSelector(selectCount);
} 
export default counter;