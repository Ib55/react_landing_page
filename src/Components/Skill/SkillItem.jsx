import React from 'react'
import {img} from '../../Assets/index'

const SkillItem = () => {
  return (
    <>
     <div className="col-md-3 bg-skill text-center   rounded">
        <img src={img.html} alt="" className='img-fluid w-25'/>
        <p>HTML</p>
        <p>Desenvolvimento de sites completos e fieis aos mais variados designs propostos pelo cliente ou empresa.</p>
     </div>
     

     <div className="col-md-3 bg-skill text-center   rounded">
        <img src={img.css} alt="" className='img-fluid w-25'/>
        <p>CSS</p>
        <p>Desenvolvimento de sites completos e fieis aos mais variados designs propostos pelo cliente ou empresa.</p>
     </div>

     <div className="col-md-3 bg-skill text-center   rounded">
        <img src={img.j} alt="" className='img-fluid w-25'/>
        <p>JAVASCRIPT</p>
        <p>Desenvolvimento de sites completos e fieis aos mais variados designs propostos pelo cliente ou empresa.</p>
     </div>

     <div className="col-md-3 bg-skill text-center   rounded">
        <img src={img.react} alt="" className='img-fluid w-25'/>
        <p>REACT JS</p>
        <p>Desenvolvimento de sites completos e fieis aos mais variados designs propostos pelo cliente ou empresa.</p>
     </div>

     <div className="col-md-3 bg-skill text-center   rounded">
        <img src={img.python} alt="" className='img-fluid w-25' />
        <p>PYTHON</p>
        <p>Desenvolvimento de sites completos e fieis aos mais variados designs propostos pelo cliente ou empresa.</p>
     </div>

     <div className="col-md-3 bg-skill text-center   rounded">
        <img src={img.django} alt="" className='img-fluid w-25'/>
        <p>DJANGO</p>
        <p>Desenvolvimento de sites completos e fieis aos mais variados designs propostos pelo cliente ou empresa.</p>
     </div>

     <div className="col-md-3 bg-skill m-auto text-center    rounded">
        <img src={img.sql} alt="" className='img-fluid w-25'/>
        <p>SQL</p>
        <p>Desenvolvimento de sites completos e fieis aos mais variados designs propostos pelo cliente ou empresa.</p>
     </div>
    </>
  )
}

export default SkillItem