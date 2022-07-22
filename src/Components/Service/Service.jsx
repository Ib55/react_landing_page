import React from 'react'
import Serviceitem from './Serviceitem'


const Service = () => {
  return (
    <div>
        <div className='container'>
           <div className='text-center my-3'>
            <p className='text-warning fw-bold h5'>SERVICE</p>
            <p className='h3'>Check My Services</p>
           </div>
           <div className="row">
            <Serviceitem/>
           </div>
        </div>
    </div>
  )
}

export default Service