import React from 'react'
import {img} from '../../Assets/index'

const Contact = () => {
  return (
    <div className='contact-background'>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                  <p className='text-warning fw-bold fs-3'>Contact us</p>
                  <p>We are committed to processing the information in order to contact you and talk about your project.</p>
                  <div className="row">
                    <div className="col-md-1 "><img src={img.Contact1} alt="" /></div>
                    <div className="col-md-11"><p>example@teamwebflow.com</p></div>

                    <div className="col-md-1 "><img src={img.Contact2} alt="" /></div>
                    <div className="col-md-11"><p>4040 Lekki Summit Suite 402 Lake Manchester City</p></div>

                    <div className="col-md-1 "><img src={img.Contact3} alt="" /></div>
                    <div className="col-md-11"><p>+44 123 777 5401</p></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-12 m-2"><input type="text" className='form-control' placeholder='Name' /></div>
                    <div className="col-md-12 m-2"><input type="text" className='form-control' placeholder='Email' /></div>
                    <div className="col-md-12 m-2"><input type="text" className='form-control' placeholder='Websit' /></div>
                    <div className="col-md-12 m-2"><textarea name="" id="" cols="60" rows="10" className='form-control' placeholder='Message'></textarea></div>
                    <button className='btn btn-warning col-md-2 m-2 me-4'>Submit</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact