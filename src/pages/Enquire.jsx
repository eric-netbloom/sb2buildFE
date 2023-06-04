import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HelmetTag from "../components/HelmetTag.jsx";
import EnquireForm from "../components/EnquireForm.jsx";

const EnquirePage = () => {
    document.body.classList.remove(
      "blog",
      "main-blog",
      "single-blog",
      "home",
      "landing",
      "about",
      "testimonial",
      "contact",
      "default-page"
    );
    document.body.classList.add("enquire");

    return (
      <div className="grand-content landing">
        <HelmetTag 
            pageTitle="Bathroom Renovations & New Kitchen/Renovation Cost Dunedin"
            title="Bathroom Renovations & New Kitchen/Renovation Cost Dunedin"
            robots="index"
            description="Bathroom Renovations & New Kitchen/Renovation Cost Dunedin: Get in touch to discuss the cost of your bathroom renovation or new kitchen or to build a deck for your Dunedin property with SB2 Build. Call us today!"
            ogTitle="Bathroom Renovations & New Kitchen/Renovation Cost Dunedin"
            ogDescription="Bathroom Renovations & New Kitchen/Renovation Cost Dunedin: Get in touch to discuss the cost of your bathroom renovation or new kitchen or to build a deck for your Dunedin property with SB2 Build. Call us today!"
            locale="en_NZ"
            type="website"
            site_name="Bathroom Renovations & New Kitchen/Renovation Cost Dunedin"
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
            twtitle="Bathroom Renovations & New Kitchen/Renovation Cost Dunedin"
            twdescription="Bathroom Renovations & New Kitchen/Renovation Cost Dunedin: Get in touch to discuss the cost of your bathroom renovation or new kitchen or to build a deck for your Dunedin property with SB2 Build. Call us today!"
            twimage=""
            twlabel1=""
            twdata1=""
            twlabel2=""
            twdata2=""
            canonical="https://sb2build.co.nz/bathroom-renovations-dunedin"
        
        />
        <div className="banner blue">
          <div className="banner-content">
            <div className='container'>
              <Grid container columnSpacing={6}>
                <Grid item xs={12} sm={12} md={7} style={{ display: "flex", flexDirection: "column" }}>
                  <h1>Enquire about your <span className="redText">New Build, Extension or Renovation</span> in Dunedin</h1>
                  <Breadcrumbs aria-label="breadcrumb" separator="›" className="breadcrumb">
                    <Link underline="hover" color="inherit" to="/">Home</Link>
                    <Link underline="hover" color="inherit" to="">Enquire</Link>
                  </Breadcrumbs>
                </Grid>
                <Grid item xs={12} sm={12} md={5} style={{ position: "relative" }}>
                  <div className="form-right">
                    <p>Please fill in the form and we will be in contact with you within the same business day.</p>
                    <EnquireForm />
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className="section cta-info">
          <div className="container padd-top50">
          <Grid container columnSpacing={6}>
            <Grid item xs={12} sm={12} md={7}>
              <p>When you are planning a new build or renovation project, accurate budgeting is key. Get in touch to discuss the cost of your bathroom renovation or new kitchen or to build a deck, or for an estimate on the costs of house extensions or a new home build. If you have plans already, we are able to give you a detailed full fixed price.</p>
              <Link underline="hover" color="inherit" to="/privacy-policy" className="smallText">Privacy Policy</Link>
            </Grid>
          </Grid>
          </div>
        </div>
      </div>
    );
  }

  export default EnquirePage