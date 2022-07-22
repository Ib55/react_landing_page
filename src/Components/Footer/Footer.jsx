import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-md-3"><ul className='list'><li>Logo</li><li>is simply dummy text of the printing and typesetting industry. Lorem Ipsum </li></ul></div>
                <div className="col-md-3">
                    <ul className='list'>
                        <li className='fw-bold'>EXPLORE</li>
                        <li>SUPPORTS</li>
                        <li>ABOUT</li>
                        <li>BLOG</li>
                    </ul>
                </div>

                <div className="col-md-3">
                    <ul className='list'>
                        <li className='fw-bold'>LEGAL</li>
                        <li>TERMS OF USE</li>
                        <li>PRIVACY POLICY</li>
                        
                    </ul>
                </div>

                <div className="col-md-3">
                    <ul className='list'>
                        <li className='fw-bold'>SOCIALS</li>
                        <li>TWITTER</li>
                        <li>LINKEDIN</li>
                        <li>INSTAGRAM</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer