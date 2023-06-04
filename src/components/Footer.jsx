import React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import footerImg1 from '../assets/images/lbp-logo-removebg-preview.png';
import footerImg2 from '../assets/images/hazardco-logo.png';
import footerImg3 from '../assets/images/bcito-logo-removebg-preview.png';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebook } from "react-icons/fa";

export default function Footer() {

  return (
    <footer>
      <div className="section footer blue">
        <div>
          <Grid container>
            <Grid item xs={12} sm={12} md={8} className="wrap1">
              <Grid container>
                <Grid item xs={12} sm={5} md={5} lg={5}className="footer-menu column1">
                  <div className="contact-details">
                    <h4>Contact Details</h4>
                    <ul>
                      <li>
                        <Link to="tel:+64274797532" className="flex">
                          <div className="left">
                            <FaPhoneAlt/>
                          </div>
                          <div className="right">
                            <p><strong>Sam Barnett</strong> <span>- Licensed Builder</span> </p>
                            <p>+64274797532</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="tel:+64277659584" className="flex">
                          <div className="left">
                            <FaPhoneAlt/>
                          </div>
                          <div className="right">
                            <p><strong>Simon Bone</strong> <span>- Builder</span> </p>
                            <p>+64277659584</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.google.com/maps/place/SB2+Build+54+Argyle+Street,+Mosgiel+9024,+New+Zealand/@-45.881679,170.347544,15z/data=!4m6!3m5!1s0xa82c03794ad6130d:0x4863f586634707f!8m2!3d-45.8816791!4d170.3475439!16s%2Fg%2F11gvx_f2pp?hl=en&gl=PH" target="_blank" className="flex">
                          <div className="left">
                            <FaMapMarkerAlt/>
                          </div>
                          <div className="right">
                            <p><strong>Address</strong> <span>54 Argyle St</span> </p>
                            <p>Mosgiel 9024, Dunedin</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="flex">
                          <div className="left">
                            <FaClock/>
                          </div>
                          <div className="right">
                            <p><strong>Operating Hours</strong></p>
                            <p>24/7</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="https://web.facebook.com/sb2build" target="_blank" className="flex">
                          <div className="left">
                            <FaFacebook/>
                          </div>
                          <div className="right">
                            <p><strong>sb2build</strong></p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Grid>
                <Grid item xs={6} sm={3.5} md={3.5} lg={3.5}className="footer-menu column2">
                  <h4>Our Services</h4>
                  <ul>
                    <li><Link to="/build-grand-designs">Grand Designs</Link></li>
                    <li><Link to="/house-builders-dunedin">New Builds</Link></li>
                    <li><Link to="/home-renovations-dunedin">Renovations</Link></li>
                    <li><Link to="/commercial-builder-dunedin">Commercial</Link></li>
                  </ul>
                </Grid>
                <Grid item xs={6} sm={3.5} md={3.5} lg={3.5}className="footer-menu column3">
                  <h4>Quick Links</h4>
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/home-building-companies-dunedin">About</Link></li>
                      <li><Link to="/recommended-builder-dunedin">Testimonials</Link></li>
                      <li><Link to="/blog">Blog</Link></li>
                      <li><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                </Grid>
              </Grid>
              <Grid container>
                <div className="licenses">
                  <img src={footerImg1} alt="License"/>
                  <img src={footerImg2} alt="License"/>
                  <img src={footerImg3} alt="License"/>
                </div>
                <div className="center locations">
                  <p>Mosgiel | Dunedin | Otago</p>
                  <p>Pine Hill, Dalmore, Liberton, Dunedin North, North East Valley, The Gardens, Normanby, Mount Mera, Opoho, Ravensbourne, Shiel Hill, Waverley, Vauxhall, Ocean Grove, Andersons Bay, Tahuna, Tainui, Musselburgh, South Dunedin, Kensington, St Kilda, St Clair, Forbury, Corstorphine, Kew, Calton Hil, Caversham, Lookout Point, Mornington, Maryhill, Balaclava, Roslyn, Belleknowes, Maori Hill, Prospect Park, Woodhaugh, Glenleith, Leith Valley</p>
                  <p className="netbloom-txt"><a title="Web design by Netbloom" href="https://www.netbloom.co.nz/web-design-nz/" target="_blank" rel="noreferrer">Web design</a> by <a className="netbloom" title="Digital Marketing Company Netbloom" href="https://www.netbloom.co.nz" target="_blank" rel="noreferrer">Netbloom</a></p>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4} className="map wrap2">
              <iframe title="Sb2Build Map" width="400" height="300" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11109.92663032106!2d170.3475439!3d-45.8816791!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa82c03794ad6130d%3A0x4863f586634707f!2sSB2%20Build!5e0!3m2!1sen!2sph!4v1683705402957!5m2!1sen!2sph" frameBorder="0" scrolling="no"></iframe>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="footer-bottom center darkblue">© 2023 SB2 Build</div>
    </footer>
  );
}


