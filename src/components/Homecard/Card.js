import React from 'react'
import card from '../../accets/images/card-home.png'
import animated from '../../accets/images/space-walking-card.png'
import './card.css'

export default function Card() {
  return (
    <>
      <div className="card-home card text-light">
  <img src={card} className="card-img-top img-fluid w-100" alt=""/>
  <div className="card-body">
    <h5 className="card-title">Space Walking</h5>
    <p className="card-text"><img src={animated} alt="" className='img-fluid' /> &nbsp; Animakid</p>
  </div>
</div>
    </>
  )
}
