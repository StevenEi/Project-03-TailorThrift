import React, { useEffect } from 'react'
import '../FeatureCard/FeatureCard.css'
import Feature1 from '../../assets/Feature1.png'
import Feature2 from '../../assets/Feature2.png'
import Feature3 from '../../assets/Feature3.png'
import Feature4 from '../../assets/Feature4.png'

// const featurePhotos = [Feature1, Feature2, Feature3, Feature4]


const FeatureCards = () => {
const featurePhotos = [Feature1, Feature2, Feature3, Feature4]

const Photo = featurePhotos.map(featurePhotos => (
  <div className='photoOfOrder' key={featurePhotos.img} src={featurePhotos.img} wrapped ui={false} />
))

  return (
    <div>
     <div class='featureCard'>
      {/* <img src={featurePhotos.map} /> */}
     </div>
    </div>
  )

}

export default FeatureCards