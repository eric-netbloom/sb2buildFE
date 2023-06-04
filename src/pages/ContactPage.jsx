import React from "react";
import HelmetTag from "../components/HelmetTag.jsx";
import Ctaform from "../components/CtaForm.jsx";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebook } from "react-icons/fa";

const ContactPage = () => {
    document.body.classList.remove(
      "blog",
      "main-blog",
      "single-blog",
      "home",
      "landing",
      "about",
      "testimonial",
      "enquire",
      "default-page"
    );
    document.body.classList.add("contact");

    return (
      <div className="contact landing">
        <HelmetTag 
            pageTitle="Construction Companies Dunedin, Mosgiel, Otago"
            title="Construction Companies Dunedin, Mosgiel, Otago"
            robots="index"
            description="Construction Companies Dunedin, Mosgiel, Otago: Contact SB2 Build, Mosgiel-based builders SB2 Build is your first choice in construction companies in Otago. Licenced Building Practitioners."
            ogTitle="Construction Companies Dunedin, Mosgiel, Otago"
            ogDescription="Construction Companies Dunedin, Mosgiel, Otago: Contact SB2 Build, Mosgiel-based builders SB2 Build is your first choice in construction companies in Otago. Licenced Building Practitioners."
            locale="en_NZ"
            type="website"
            site_name="Construction Companies Dunedin, Mosgiel, Otago"
            updated_time=""
            image=""
            imgsecure_url=""
            imgwidth=""
            imgheight=""
            imgalt=""
            imgtype=""
            artpublished_time=""
            artmodified_time=""
            twcard=""
            twtitle="Construction Companies Dunedin, Mosgiel, Otago"
            twdescription="Construction Companies Dunedin, Mosgiel, Otago: Contact SB2 Build, Mosgiel-based builders SB2 Build is your first choice in construction companies in Otago. Licenced Building Practitioners."
            twimage=""
            twlabel1=""
            twdata1=""
            twlabel2=""
            twdata2=""
            canonical="https://sb2build.co.nz/contact-us"
        
        />
        <div className="section cta">
          <div className="container max1100">
            <Grid container columnSpacing={4}>
              <Grid item xs={12} sm={12} md={6}>
                <h1 className="blueText">Contact <span>SB2 Build</span></h1>
                <Breadcrumbs aria-label="breadcrumb" separator="›" className="breadcrumb">
                  <Link underline="hover" color="inherit" to="/">Home</Link>
                  <Link underline="hover" color="inherit" to="">Enquire</Link>
                </Breadcrumbs>
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
              <Grid item xs={12} sm={12} md={6}>
                <p className="smallText">Please fill in the form and we will be in contact with you within the same business day.</p>
                <Ctaform />
                <Link underline="hover" color="inherit" to="/privacy-policy" className="smallText">Privacy Policy</Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }

  export default ContactPage