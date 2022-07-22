import React from 'react'
import {img} from '../../Assets/index'

const Serviceitem = () => {
  return (
    <>
     <div className="col-md-4">
        <img src={img.f8} alt="" />
        <p>Landing Page Design</p>
        <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
     </div>

     <div className="col-md-4">
        <img src={img.f9} alt="" />
        <p>Mobile App Design</p>
        <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
     </div>

     <div className="col-md-4">
        <img src={img.f10} alt="" />
        <p>Branding</p>
        <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
     </div>
    </>
  )
}

export default Serviceitem