import React from 'react'
import MissionBanner from '../assets/SingleProductBanner.png'
import '../assets/css/Howitworks.css'
import Story1 from '../assets/story1.png'
import Story2 from '../assets/story2.png'
import Story3 from '../assets/story3.png'

const Howitworks = () => {
  return (
    <div class='missionPage'>
      <div class='missionTitle'>OUR STORY</div>
      <div className='story1'>
        <div class='story1section row'>
          <div class='col'>
            <p class='storyText' >Fashion can be daunting when we’re trying to find/redefine our own sense of style. We at TAILOR/THRIFT aim to assist our customers in their style journey with our ABC (Affordable Bespoke Clothing) approach.  </p>
          </div>
          <div class='col '>
            <img src={Story2} alt='' className='storyPhoto' />
          </div>
        </div>
      </div>
      <div className='story1'>
        <div class='story1section row'>
          <div class='col '>
            <img src={Story1} alt='' className='storyPhoto' />
          </div>
          <div class='col'>
            <p class='storyText' >The feeling of a perfect fitting shirt helps bring a sense of confidence and assurance to where ever you go, but typically with perfect fitting shirt comes a hefty price tag. This shouldn't be the case.  </p>
          </div>
        </div>
      </div>
      <div className='story1'>
        <div class='story1section row'>
          <div class='col'>
            <p class='storyText' >By combining the practices of tailoring and up-cycling we’re able meet both of our customers’ needs of the right fit and the right price. Combining these two practice Our customers can not only feel confident in what they wear but feel confident in the shopping experience as well.  </p>
          </div>
          <div class='col '>
            <img src={Story3} alt='' className='storyPhoto' />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Howitworks