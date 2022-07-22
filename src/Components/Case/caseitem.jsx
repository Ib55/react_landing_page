import React from 'react'
import { img } from '../../Assets'

const Caseitem = () => {
  return (
    <>
    <div className="row align-items-center  justify-content-center  mt-5">
    <div className="col-md-6"><img src={img.c1} alt="" /></div>
    <div className="col-md-6"><p className='text-warning fs-3'>01</p><p className='h3'> Bakery Landing Page Design</p><p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> <button className='btn text-warning border-warning'>Details</button></div>
    <div className="col-md-6"><p className='text-warning fs-3'>02</p><p className='h3'> Shoe Store Ecommerce Landing Page</p><p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p><button className='btn text-warning border-warning'>Details</button></div>
    <div className="col-md-6"><img src={img.c2} alt="" /></div>
    <div className="col-md-6"><img src={img.c3} alt="" /></div>

    <div className="col-md-6"><p className='text-warning fs-3'>03</p><p className='h3'> ClearMix Landing page</p><p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p><button className='btn text-warning border-warning'>Details</button></div>

    </div>
    </>
  )
}

export default Caseitem