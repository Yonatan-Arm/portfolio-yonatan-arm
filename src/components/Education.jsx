import React from 'react'
import graduateImg from '../assets/imgs/graduate-hat.svg'
import codingImg from '../assets/imgs/coding.jpg'

export default function Education() {
  return (
    <section className='education-section' id="Education">
        <h2 className='flex align-center justify-center'><img src={graduateImg} alt="hat-img" />My <span>Education </span></h2>
        <span className='inspiration flex align-center justify-center'>Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.</span>
    <div className='flex row education-card'> 
    <div className='img-box'> <img src={codingImg} alt="school-img" /></div>
    <div className='info flex column'>
    <h3>Coding Academy Bootcamp</h3>
    <span>Full-stack developer</span>
    </div>
    </div>
    </section>
  )
}
