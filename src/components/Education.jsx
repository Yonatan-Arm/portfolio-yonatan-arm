import React from 'react';
import graduateImg from '../assets/imgs/graduate-hat.svg';
import codingImg from '../assets/imgs/coding.jpg';
import { Fade } from "react-reveal";

export default function Education() {
  return (
    <section className='education-section' id="education">
        <h2 className='flex align-center justify-center'><img src={graduateImg} alt="hat-img" />My <span>Education </span></h2>
        <span className='inspiration flex align-center justify-center'>Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.</span>
        <Fade top big>
    <div className='flex row education-card'> 
    <div className='img-box'> <img src={codingImg} alt="school-img" /></div>
    <div className='info flex column'>
    <h3>Coding Academy Bootcamp</h3>
    <span>Full-stack developer</span>
    </div>
    </div>
    </Fade>
    </section>
  )
}
