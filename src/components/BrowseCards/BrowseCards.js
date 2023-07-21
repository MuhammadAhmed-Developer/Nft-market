import React from 'react'
import './BrowseCards.css';

export default function BrowseCards(props) {
    return (
        <>
            <div class="card mb-5" >
                <img src={props.img} className="card-img-top card-image" alt="..."  />
                    <div className='overlay'>
                     
                    <img src={props.hoverImg} alt="" className='hover-image' />
                    </div>
                    <h5 class="card-title text-white p-3">{props.name}</h5>
            </div>
        </>
    )
}
