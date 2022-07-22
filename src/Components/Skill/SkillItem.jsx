import React from 'react'
import {img} from '../../Assets/index'

const SkillItem = () => {
  return (
    <>
     <div className="col-md-4 bg-skill text-center pt-3 ps-5 pe-5  rounded">
        <img src={img.html} alt="" />
        <p>HTML</p>
        <p>Desenvolvimento de sites completos e fieis aos mais variados designs propostos pelo cliente ou empresa.</p>
     </div>
     

     <div className="col-md-3 bg-skill text-center pt-3 ps-5 pe-5  rounded">
        <img src={img.css} alt="" />
        <p>CSS</p>
        <p>Desenvolvimento de sites completos e fieis aos mais variados designs propostos pelo cliente ou empresa.</p>
     </div>

     <div className="col-md-4 bg-skill text-center pt-3 ps-5 pe-5  rounded">
        <img src={img.j} alt="" />
        <p>JAVASCRIPT</p>
        <p>Desenvolvimento de sites completos e fieis aos mais variados designs propostos pelo cliente ou empresa.</p>
     </div>

     <div className="col-md-4 bg-skill text-center pt-3 ps-5 pe-5  rounded">
        <img src={img.react} alt="" />
        <p>REACT JS</p>
        <p>Desenvolvimento de sites completos e fieis aos mais variados designs propostos pelo cliente ou empresa.</p>
     </div>

     <div className="col-md-3 bg-skill text-center pt-3 ps-5 pe-5  rounded">
        <img src={img.python} alt="" />
        <p>PYTHON</p>
        <p>Desenvolvimento de sites completos e fieis aos mais variados designs propostos pelo cliente ou empresa.</p>
     </div>

     <div className="col-md-4 bg-skill text-center pt-3 ps-5 pe-5  rounded">
        <img src={img.django} alt="" />
        <p>DJANGO</p>
        <p>Desenvolvimento de sites completos e fieis aos mais variados designs propostos pelo cliente ou empresa.</p>
     </div>

     <div className="col-md-6 bg-skill m-auto text-center pt-3 ps-5 pe-5   rounded">
        <img src={img.sql} alt="" />
        <p>SQL</p>
        <p>Desenvolvimento de sites completos e fieis aos mais variados designs propostos pelo cliente ou empresa.</p>
     </div>
    </>
  )
}

export default SkillItem