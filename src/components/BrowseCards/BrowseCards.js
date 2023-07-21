import React from 'react'
import './BrowseCards.css';

export default function BrowseCards(props) {
    return (
        <>
            <div class="card mb-5" >
                <img src={props.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title text-white">{props.name}</h5>
                </div>
            </div>
        </>
    )
}
