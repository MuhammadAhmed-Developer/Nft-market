import React from 'react'
import card from '../../accets/images/card-home.png'

export default function Card() {
  return (
    <>
      <div className="card">
  <img src={card} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Space Walking</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </>
  )
}
