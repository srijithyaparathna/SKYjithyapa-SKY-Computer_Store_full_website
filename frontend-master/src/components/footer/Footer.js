import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className="footer">
<div className='comnames'>
    <div className='companyname'> Designed & developed by www.SrijithYaparathna.com </div>
    <div className='companyname1'> <text> SKY COMPUTERS </text>  </div> </div>
        <div className="row"></div>

    <div className="container">

        <div className="row">
            
            <div className="footer-col">
                
                <h4>company</h4>
                <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">our services</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">affiliate program</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>get help</h4>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">shipping</a></li>
                    <li><a href="#">returns</a></li>
                    <li><a href="#">order status</a></li>
                    <li><a href="#">payment options</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>online shop</h4>
                <ul>
                    <li><a href="#">APPLE</a></li>
                    <li><a href="#">AMD</a></li>
                    <li><a href="#">ASUS</a></li>
                    <li><a href="#">INTEL</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>follow us</h4>
                <div className="social-links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Footer