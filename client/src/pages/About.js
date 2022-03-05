import React from 'react'
import FeatureCards from '../components/FeatureCard/FeatureCards.js';
import Headshot1 from '../assets/brown.jpg'
import Headshot2 from '../assets/black-6.jpg'
import Headshot3 from '../assets/black-6.jpg'
import Headshot4 from '../assets/black-6.jpg'

const About = () => {
  return (
    <div class="row">
      <h1>About</h1>
      <div class='featureCard col feature1'><FeatureCards />

        <img src={Headshot1} alt='' class='feature' />
        <div>
          <h1>Matt W</h1>
          <p>My name is Dave</p>
        </div>

      </div>
      <div class='featureCard col feature1'><FeatureCards />

        <img src={Headshot1} alt='' class='feature' />
        <div>
          <h1>Marc P</h1>
          <p>My name is Dave</p>
        </div>

      </div>
      <div class='featureCard col feature1'><FeatureCards />

        <img src={Headshot1} alt='' class='feature' />
        <div>
          <h1>Oscar P</h1>
          <p>My name is Dave</p>
        </div>

      </div>
      <div class='featureCard col feature1'><FeatureCards />

        <img src={Headshot1} alt='' class='feature' />
        <div>
          <h1>Steven E</h1>
          <p>My name is Dave</p>
        </div>

      </div>
      <div class='featureCard col feature1'><FeatureCards />

        <img src={Headshot1} alt='' class='feature' />
        <div>
          <h1>Jeff Dub</h1>
          <p>My name is Dave</p>
        </div>

      </div>
    </div>
  )
}

export default About