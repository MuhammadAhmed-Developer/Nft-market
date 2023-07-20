import React from 'react'

export default function Button(props) {
  return (
    <>
        <button className='signUp-btn fw-bold '><i className={props.class}></i>{props.title}</button>
    </>
  )
}
