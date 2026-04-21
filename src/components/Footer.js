import React from 'react'
import "./Footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
export default function Footer() {
  return (
    <div className='footer-section'>
<div className='container'>
    <div className='row'>
        <div className='col-12 col-md-3'>
            <p className='foot'>Legal</p>
            <ul className='foot-ul'>
                <li className='foot-li'>Terms & Conditions</li>
                <li className='foot-li'>Privacy center</li>
                <li className='foot-li'>Disclaimer</li>
                <li className='foot-li'>Caution Notice</li>
            </ul>
        </div>
        <div className='col-12 col-md-3'>
             <p className='foot'>About</p>
            <ul className='foot-ul'>
                <li className='foot-li'>Careers</li>
                <li className='foot-li'>Our Golden Past</li>
                <li className='foot-li'>Responsible</li>
                <li className='foot-li'>Disclosure</li>
            </ul>
        </div>
        <div className='col-12 col-md-3'>
             <p className='foot'>Support</p>
            <ul className='foot-ul'>
                <li className='foot-li'>Get Help</li>
                <li className='foot-li'>Contact</li>
                <li className='foot-li'>Feedback</li>
                <li className='foot-li'>Privacy Center</li>
            </ul>
        </div>
        <div className='col-12 col-md-3'>
            <p className='foot'>Contact-us</p>
            <div className='icons'>
                <FaInstagram className='icon'/>
            <FaTelegramPlane className='icon'/>
            <FaWhatsapp className='icon'/>
            <FaFacebookF className='icon'/>
            </div>
            <div className='contact'>
                <p className='phone-num'><FaPhoneAlt /> +123 456 789</p>
            </div>
            <div className='address'>
                <p className='phone-num'><FaMapMarkerAlt />5th Street,Anna Nagar,Chennai.</p>

            </div>

        </div>
    </div>
    
    <div>
        <footer className='copyright'>Copyright- 2026 All rights reserved.</footer>
    </div>
</div>

    </div>
    
  )
}
