import React from 'react'

export default function HowWork(props) {
    return (
        <>
        <div className='col-lg-4 col-md-12 my-5'>

            <div class="card text-center text-white">
                <div class="card-body">
                    <h5 class="card-title ">
                        <img src={props.picture} alt="" />
                    </h5>
                    <h6 class="card-subtitle mb-2  text-white mt-3">{props.title}</h6>
                    <p class="card-text m-3">{props.detail}</p>
                    
                </div>
            </div>
        </div>
        </>
    )
}
