import React from 'react'
import { Link } from "react-router-dom";

// import Posts from '../components/Posts/Posts.js'

const Footer = () => {
  return (
    <div>
      <h4>Company Statement: </h4>
        <h5>Troubleshooting</h5>
        <ul>
          <li>Contact Us: Developer Team</li>
          <ul>
          <li>
          <a href="mailto:yardboy2401@gmail.com?cc=mpacampara@gmail.com; matthewwalkermw64@gmail.com; seiselts@gmail.com; Bigop76.op@gmail.com&Subject=Tailor%20Swift%20Customer%20Feedback">Jeff Wymore</a>
          </li>
          <li>
          <a href="mailto:mpacampara@gmail.com?cc=seiselts@gmail.com; matthewwalkermw64@gmail.com; yardboy2401@gmail.com; Bigop76.op@gmail.com&Subject=Tailor%20Swift%20Customer%20Feedback">Marc Pacampara</a>
          </li>
          <li>
          <a href="mailto:matthewwalkermw64@gmail.com?cc=yardboy2401@gmail.com; mpacampara@gmail.com; seiselts@gmail.com; Bigop76.op@gmail.com&Subject=Tailor%20Swift%20Customer%20Feedback">Matthew Walker</a>
          </li>
          <li>
          <a href="mailto:seiselts@gmail.com?cc=yardboy2401@gmail.com; mpacampara@gmail.com; matthewwalkermw64@gmail.com; Bigop76.op@gmail.com&Subject=Tailor%20Swift%20Customer%20Feedback">Steven Eiselt</a>
          </li>
          <li>
          <a href="mailto:Bigop76.op@gmail.com?cc=yardboy2401@gmail.com; mpacampara@gmail.com; matthewwalkermw64@gmail.com; seiselts@gmail.com&Subject=Tailor%20Swift%20Customer%20Feedback">Oscar Plumridge</a>
          </li>
          </ul>
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
        </ul>
        <h5>Tailor Thrift Media</h5>
        <ul>
          <img src="https://img.icons8.com/office/30/000000/facebook.png"/>
          <img src="https://img.icons8.com/office/30/000000/twitter.png"/>
          <img src="https://img.icons8.com/office/30/000000/tiktok.png"/>
          <img src="https://img.icons8.com/office/30/000000/instagram-new.png"/>
          <img src="https://img.icons8.com/office/30/000000/youtube-play.png"/>
        </ul>
        {/* <a href="https://pluralsight.com">Visit Pluralsight</a> */}
    </div>
  )
}

export default Footer