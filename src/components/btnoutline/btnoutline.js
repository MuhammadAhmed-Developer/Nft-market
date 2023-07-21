import React from 'react';
import './outlinebtn.css'

export default function Outlinebtn(props) {
  return (
    <>
        <button className='outline-btn fw-bold '><i className={props.class}></i>{props.title}</button>
    </>
  )
}