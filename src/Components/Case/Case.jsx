import React from 'react'
import Caseitem from './caseitem'

const Case = ({title,describ}) => {
  return (
    <div className='container'>
        <div className='text-center mt-5'>
        <p className='text-warning fw-bold h5'>{title}</p>
        <p className='h3'>{describ}</p>
        </div>
        <Caseitem/>
    </div>
  )
}

export default Case