import React from 'react'
import { Link } from "react-router-dom";
import './style.css'
import Logo from '../../assets/Logo.png'

const Footer = () => {
  return (
    <div class='footerSection'>

      <div className='row'>


        <div className='contactSection col-sm'>

          <ul class='listContainer contactTeam'>
            <li>
            <p class="contactTitle1"> Problem with the site? </p>
              <p class="contactTitle2"> Contact the WebDev Team</p>
            </li>
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
              <a href="Bigop76.op@gmail.com?cc=yardboy2401@gmail.com; mpacampara@gmail.com; matthewwalkermw64@gmail.com; seiselts@gmail.com&Subject=Tailor%20Swift%20Customer%20Feedback">Oscar Plumridge</a>
            </li>
            <li>
              <a href="mailto:seiselts@gmail.com?cc=yardboy2401@gmail.com; mpacampara@gmail.com; matthewwalkermw64@gmail.com; Bigop76.op@gmail.com&Subject=Tailor%20Swift%20Customer%20Feedback">Steven Eiselt</a>
            </li>

          </ul>
        </div>
        <div className='col-sm'>

          <ul className='listContainer  contactTeam'>
            <li>
              <p class='contactTitle1'>Site Links </p>
            </li>
            <li className="mx-1">
              <Link to="/ourteam">
                Our Team
              </Link>
            </li>

            <li className="mx-1">
              <Link to="/mission">
                Our Mission
              </Link>
            </li>
            <li className="mx-1">
              <Link to="/reviews">
                Testimonials
              </Link>
            </li>
            <li className="mx-1">
              <Link to="/donate">
                Donate
              </Link>
            </li>
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

        </div>
        <div className='col-sm mediaContainer'>
        <div>
            <img src={Logo} alt='' class='footerLogo' />
          </div>
          <ul className='listContainer'>
          <i class="fa fa-facebook-f"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-github"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-linkedin"></i>
          </ul>

        </div>
        <div className='col-sm'>

        </div>

      </div>
    </div>
  )
}

export default Footer