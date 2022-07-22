import React from 'react'
import {img} from '../../Assets'

const Testimonial = ({title,describ}) => {
  return (
    <div>
<div className='text-center mt-5'>
        <p className='text-warning fw-bold h5'>{title}</p>
        <p className='h3'>{describ}</p>
        </div>


      <div className='d-flex mt-5 position-relative'>
        <div><img src={img.t1} alt="" /></div>
        <div className='position-absolute top-0 t_p'><img src={img.t2} alt="" /></div>
        <div className='position-absolute t_c border rounded-3 bg-light text-center p-2'>
          <img src={img.t3} alt="" />
          <p className='w-50 m-auto text-secondary'> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <p className='fw-bold'>Karmani</p>
          <p className='text-secondary'>FOUNDER AND CEO OF KARMANI</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial