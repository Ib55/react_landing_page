import React from 'react'
import Header from '../Components/Header/Header'
import Skill from '../Components/Skill/Skill'
import Service from '../Components/Service/Service'
import Case from '../Components/Case/Case'
import Protfolio from '../Components/Protfolio/Protfolio'
import Testimonial from '../Components/Testimonial/Testimonial'
import Client from '../Components/Client/Client'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'


const Home = () => {
 
  return (
    <div>
      <div className='bg-color'>
        <Header/>
        <Skill/>
        </div>
        <Service/>
        <Case title={'CASE STUDY'} describ={'My Case Studies'}/>
        {/* <Case title={'PORTFOLIO'} describ={'People Lie Work Don’t'}/> */}
        <Protfolio title={'PORTFOLIO'} describ={'People Lie Work Don’t'}/>
        <Testimonial title={'TESTIMONIALS'} describ={'What People Says'}/>
        <Client title={'OUR CLIENTS'} describ={'Who Makes Me Proud'}/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home