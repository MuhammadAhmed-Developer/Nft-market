import React from 'react'

import './discover.css'

export default function DiscoverNft(props) {
    return (
        <>
         <div className='col-lg-4 col-md-12 my-5'>

            <div className="card-home card text-light">
                <img src={props.image} className="card-img-top img-fluid w-100" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text"><img src={props.dp} alt="" className='img-fluid' /> &nbsp; MoonDancer</p>
                    <div className="row">
                        <div className="col-6 mt-2">
                            <p className='price fs-6'>price</p>
                            <p className='fs-5'>{props.price} ETH</p>
                        </div>
                        <div className="col-6 mt-2 text-end">
                            <p className='price fs-6'>Highest Bid</p>
                            <p className='fs-5'>{props.bid} wETH</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}
