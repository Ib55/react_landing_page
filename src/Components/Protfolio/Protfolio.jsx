import React from 'react'
import { img } from '../../Assets'

const Protfolio = ({title,describ}) => {
  return (
    <div className='container'>
        <div>
           
        <div className='text-center mt-5'>
        <p className='text-warning fw-bold h5'>{title}</p>
        <p className='h3'>{describ}</p>
        </div>


            <div className="row mt-5 skill-gap align-items-center justify-content-center">
                <div className="col-md-5"><img src={img.p1} alt="" /></div>
                <div className="col-md-5"><img src={img.p2} alt="" /></div>
                <div className="col-md-5"><img src={img.p3} alt="" /></div>
                <div className="col-md-5"><img src={img.p4} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default Protfolio