import React from 'react';
import './TopCreators.css';

export default function TopCreators(props) {
    return (
        <div>
            <div class="card rounded-5">
                <div className='m-1 mt-3 mx-3 mb-0 '>
                    <span className='tag-card'>{props.number}</span>
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title">
                        <img src={props.image} alt="" className='img-fluid ' />   
                    </h5>
                    <h4 class="card-subtitle mb-2 mt-2 text-light">{props.name}</h4>
                    <p class="card-text text-white"><span className='total'>Total Sales:</span> 34.53 ETH</p>
                   
                </div>
            </div>

        </div>
    )
}
