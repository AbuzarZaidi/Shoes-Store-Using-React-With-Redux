import React from 'react'
import fb_icon from '../../images/fb-icon.png'
import twitter_icon from '../../images/twitter-icon.png'
import in_icon from '../../images/in-icon.png'
import google_icon from '../../images/google-icon.png'
import footer_logo from '../../images/footer-logo.png'
import phone_icon from '../../images/phone-icon.png'
import email_icon from '../../images/email-icon.png'
import map_icon from '../../images/map-icon.png'
const Footer = () => {
  return (
      <>
    <div className="section_footer">
    <div className="container">
        <div className="mail_section">
            <div className="row">
                <div className="col-sm-6 col-lg-2">
                    <div><a href="#"><img src={footer_logo}/></a></div>
                </div>
                <div className="col-sm-6 col-lg-2">
                    <div className="footer-logo"><img src={phone_icon}/><span className="map_text">(71) 1234567890</span></div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="footer-logo"><img src={email_icon}/><span className="map_text">Demo@gmail.com</span></div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="social_icon">
                        <ul>
                            <li><a href="#"><img src={fb_icon}/></a></li>
                            <li><a href="#"><img src={twitter_icon}/></a></li>
                            <li><a href="#"><img src={in_icon}/></a></li>
                            <li><a href="#"><img src={google_icon}/></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div> 
        <div className="footer_section_2">
            <div className="row">
                <div className="col-sm-4 col-lg-2">
                    <p className="dummy_text"> ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur  ipsum dolor sit amet,</p>
                </div>
                <div className="col-sm-4 col-lg-2">
                    <h2 className="shop_text">Address </h2>
                    <div className="image-icon"><img src={map_icon}/><span className="pet_text">No 40 Baria Sreet 15/2 NewYork City, NY, United States.</span></div>
                </div>
                <div className="col-sm-4 col-md-6 col-lg-3">
                    <h2 className="shop_text">Our Company </h2>
                    <div className="delivery_text">
                        <ul>
                            <li>Delivery</li>
                            <li>Legal Notice</li>
                            <li>About us</li>
                            <li>Secure payment</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                </div>
            <div className="col-sm-6 col-lg-3">
                <h2 className="adderess_text">Products</h2>
                <div className="delivery_text">
                        <ul>
                            <li>Prices drop</li>
                            <li>New products</li>
                            <li>Best sales</li>
                            <li>Contact us</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
            </div>
            <div className="col-sm-6 col-lg-2">
                <h2 className="adderess_text">Newsletter</h2>
                <div className="form-group">
                    <input type="text" className="enter_email" placeholder="Enter Your email" name="Name"/>
                </div>
                <button className="subscribr_bt">Subscribe</button>
            </div>
            </div>
            </div> 
        </div>
    </div>
    <div className="copyright">2022 All Rights Reserved.</div>
    </>
  )
}

export default Footer