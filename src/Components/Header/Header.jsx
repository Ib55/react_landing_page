import React from 'react'
import {img} from '../../Assets/index'
import Left from './left'

const Header = () => {
  return (
    <div className='bg-success bg-color h-100'>
        <div className="container">
        <div className="row align-items-center justify-content-center header">
            <div className="col-md-6">
                <Left/>
            </div>
            <div className="col-md-6"><img src={img.p} className='img-fluid  ' alt="" /></div>
        </div>
        </div>
        
    </div>
  )
}

export default Header