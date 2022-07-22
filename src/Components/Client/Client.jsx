import React from 'react'
import { img } from '../../Assets'

const Client = ({title,describ}) => {
  return (
    <div className='client_m'>
        <div className="container">
            <div className="text mb-5">
            <div className='text-center mt-5'>
        <p className='text-warning fw-bold h5'>{title}</p>
        <p className='h3'>{describ}</p>
        </div>
            </div>
            <div className="row align-items-center justify-content-center text-center skill-gap">
                <div className="col-md-3">
                    <img src={img.Client1} alt="" />
                </div>
                <div className="col-md-3">
                    <img src={img.Client2} alt="" />
                </div>
                <div className="col-md-3">
                    <img src={img.Client3} alt="" />
                </div>
                <div className="col-md-2">
                    <img src={img.Client4} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Client