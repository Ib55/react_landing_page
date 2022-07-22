import React from 'react'
import SkillText from './SkillText'
import SkillItem from './SkillItem'

const Skill = () => {
  return (
    <div>
        <div className="container">
            <SkillText/>
            <div className="row text-white skill-gap justify-content-center align-items-center">
                <SkillItem/>
            </div>
        </div>
    </div>
  )
}

export default Skill