import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import grandImg from "../assets/images/scp-img-granddesign.webp";
import newImg from "../assets/images/New_build.webp";
import renovationImg from "../assets/images/Extension.webp";
import commercialImg from "../assets/images/scp-img-commercial.jpg";
import Ctaform from "../components/CtaForm.jsx";
import TestimonialsSlider from "../components/TestimonialsSlider.jsx";
import Gallery from "../components/Gallery.jsx";
import HelmetTag from "../components/HelmetTag.jsx";
import AllBlog from "../components/AllBlog.jsx";
import bannerBg from "../assets/images/ourservices.webp";
import { BsArrowRightShort } from "react-icons/bs";
import { RiDoubleQuotesR } from "react-icons/ri";
import Banner from "../components/Banner.jsx";

export default function Services() {
    document.body.classList.remove(
      "blog",
      "main-blog",
      "single-blog",
      "landing",
      "contact",
      "about",
      "testimonial",
      "enquire",
      "default-page",
      "home"
    );
    document.body.classList.add("services");
  
    return (
      <div className="homepage-content">
        <HelmetTag 
            pageTitle="SB2 Build Ltd | Builders Mosgiel, Dunedin, Otago"
            title="SB2 Build Ltd | Builders Mosgiel, Dunedin, Otago"
            robots="index"
            description="SB2 Build Ltd | Builders Mosgiel, Dunedin, Otago: Mosgiel-based builders SB2 Build is your first choice building company in Otago. Licenced Building Practitioners and qualified builders."
            ogTitle="SB2 Build Ltd | Builders Mosgiel, Dunedin, Otago"
            ogDescription="SB2 Build Ltd | Builders Mosgiel, Dunedin, Otago: Mosgiel-based builders SB2 Build is your first choice building company in Otago. Licenced Building Practitioners and qualified builders."
            locale="en_NZ"
            type="website"
            site_name="SB2 Build Ltd | Builders Mosgiel, Dunedin, Otago"
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
            twtitle="SB2 Build Ltd | Builders Mosgiel, Dunedin, Otago"
            twdescription="SB2 Build Ltd | Builders Mosgiel, Dunedin, Otago: Mosgiel-based builders SB2 Build is your first choice building company in Otago. Licenced Building Practitioners and qualified builders."
            twimage=""
            twlabel1=""
            twdata1=""
            twlabel2=""
            twdata2=""
            canonical="https://sb2build.co.nz/"
        
        />
      <Banner
          header = "Services"
          imgBg = {bannerBg}
          pageName="Services"
          pageLink="/services"
        />

        
        <div className="section builds gray">
          <div className="container">
            <h2 className="center">Our <span>Services</span></h2>
            <Grid container rowSpacing={3} columnSpacing={3} className="builds-wrap" data-aos="fade">
              <Grid item xs={12} sm={6} md={3} className="build">
                <Link to="/build-grand-designs" className="link-wrap">
                  <h3>Grand Designs</h3>
                  <p>Build your own Grand Design! See the details of an amazing and unique renovation and build SB2 were engaged for, and which recently featured on Grand Designs NZ.</p>
                  <img src={grandImg} alt="Grand designs" />
                  <a href={"/build-grand-designs"} className="redButton btn link">Learn more <BsArrowRightShort/></a>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={3} className="build">
                <Link to="/house-builders-dunedin" className="link-wrap">
                  <h3>New Build</h3>
                  <p>Whether it is your first home, your family home or your forever home, the house builders at SB2 Build will deliver you exactly what you are looking for - on time and on budget.</p>
                  <img src={newImg} alt="New build" />
                  <a href={"/house-builders-dunedin"} className="redButton btn link">Learn more <BsArrowRightShort/></a>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={3} className="build">
                <Link to="/home-renovations-dunedin" className="link-wrap">
                  <h3>Renovation/ <br /> Extension</h3>
                  <p>Make your property match your lifestyle with home renovations from SB2 Build. Upgrade key rooms with a kitchen remodel or bathroom renovation or add space with an extension.</p>
                  <img src={renovationImg} alt="Renovation build" />
                  <a href={"/home-renovations-dunedin"} className="redButton btn link">Learn more <BsArrowRightShort/></a>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={3} className="build">
                <Link to="/commercial-builder-dunedin" className="link-wrap">
                  <h3>Commercial</h3>
                  <p>Looking for a trusted commercial builder to work on your projects in Otago? SB2 Build has experience in urban and rural builds and specialist projects including earthquake strengthening.</p>
                  <img src={commercialImg} alt="Commercial build" />
                  <a href={"/commercial-builder-dunedin"} className="redButton btn link">Learn more <BsArrowRightShort/></a>
                </Link>
              </Grid>
            </Grid>
            <a href={"/bathroom-renovations-dunedin"} className="redButton btn center"> Enquire Now </a>
          </div>
        </div>
        <div className="section gallery">
          <div className="container fullwidth no-padd">
            <Gallery/>
          </div>
        </div>
        <div className="section latest-blog">
          <div className="container">
            <h2 className="center blueText">Latest <span>Blog</span></h2>
            <AllBlog categoryFilter="all" showingPost={"limited"}  />
          </div>
        </div>
        <div className="section testimonial darkblue">
          <div className="container center">
            <h2 className="center">Testimonials</h2>
            <RiDoubleQuotesR />
            <TestimonialsSlider showingPost={"limited"} />
          </div>
        </div>
        <div className="section cta">
          <div className="container max1000">
            <h2 className="blueText">Make an <span>Enquiry</span></h2>
            <p>Please fill in the form and we will be in contact with you within the same business day.</p>
            <Ctaform />
          </div>
        </div>
      </div>
    );
  }