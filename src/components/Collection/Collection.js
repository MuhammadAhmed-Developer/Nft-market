import React from 'react';
import './Collection.css'


export default function Collection(props) {
  return (
    <>

      <div className="card mt-3 bg-transparent card-collection border-0 text-white">
        <img src={props.mainImg} className="card-img-top" alt="..."/>
          <div class="card-body">
           <div className="row smallpic">
            <div className="col-4">
             <img src={props.small1} alt=""  className='img-fluid'/>
            </div>
            <div className="col-4">
             <img src={props.small2} alt=""  className='img-fluid' />
            </div>
            <div className="col-4">
             <img src={props.small3} alt=""  className='img-fluid' />
            </div>
           </div>
            <h5 className='mt-4'>{props.name}</h5>
            <div className="row ">
              <div className="col-2">
            <img src={props.minImg} alt="" className='img-fluid me-2 mb-2' width={50} height={50}/>
               
              </div>
              <div className="col-6 text-start mt-1">
              <p className=''>{props.imgname}</p>               
              </div>
            </div>
         
          </div>
      </div>

    </>
  )
}
