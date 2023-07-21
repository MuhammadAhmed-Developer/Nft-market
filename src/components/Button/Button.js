import React from 'react'
import './button.css'

export default function Button(props) {
  return (
    <>
        <button className='signUp-btn fw-bold '><i className={props.class}></i>{props.title}</button>
    </>
  )
}
