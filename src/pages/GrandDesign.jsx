import React from "react";
import HelmetTag from "../components/HelmetTag.jsx";
import Banner from "../components/Banner.jsx";
import AllBlog from "../components/AllBlog.jsx";
import Ctaform from "../components/CtaForm.jsx";
import Testimonials from "../components/TestimonialsSlider.jsx";
import Gallery from "../components/Gallery.jsx";
import { RiDoubleQuotesR } from "react-icons/ri";
import bannerBg from "../assets/images/design.webp";

const GrandDesign = () => {
    document.body.classList.remove(
      "blog",
      "main-blog",
      "single-blog",
      "home",
      "contact",
      "about",
      "testimonial",
      "enquire",
      "default-page"
    );
    document.body.classList.add("landing");

    return (
      <div className="grand-content landing">
        <HelmetTag 
            pageTitle="Build grand designs in Dunedin"
            title="Build grand designs in Dunedin"
            robots="index"
            description="Build grand designs in Dunedin"
            ogTitle="Build grand designs in Dunedin"
            ogDescription="Build grand designs in Dunedin"
            locale="en_NZ"
            type="website"
            site_name="Build grand designs in Dunedin"
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
            twtitle="Build grand designs in Dunedin"
            twdescription="Build grand designs in Dunedin"
            twimage=""
            twlabel1=""
            twdata1=""
            twlabel2=""
            twdata2=""
            canonical="https://sb2build.co.nz/build-grand-designs"
        
        />
        <Banner
          header = "Build your own Grand Design in Dunedin"
          imgBg = {bannerBg}
          pageName="Grand Designs"
          pageLink="/build-grand-designs"
        />

        <div className="section content">
          <div className="container par">
            <p>Recently we have had the opportunity to work on a one-of-a-kind house project. The house has a magnificent outlook right in the heart of Dunedin. This project was also showcased on Grand Designs NZ which aired in November 2020.</p>
            <p>Works undertaken for this project include earthquake strengthening of the existing building to support the structure, as well as sound rated and fire rated systems for multi-storied tenancies.</p>
            <p>The fitout was complex with a lot of the work involved being at height, and multiple angles.  Overall it was a great experience to be a part of and we thank Ted and Ita Daniels for allowing us to be a part of building their dream home.</p>
            <p>If you'd like us to work on your own grand design, or have any questions please don't hesitate to fill in our contact form.</p>
            <a href={"/construction-companies-dunedin"} className="redButton btn"> Contact Us Now </a>
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
            <AllBlog categoryFilter="all" showingPost="all" />
          </div>
        </div>
        <div className="section testimonial darkblue">
          <div className="container center">
            <h2 className="center">Testimonials</h2>
            <RiDoubleQuotesR />
            <Testimonials/>
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

  export default GrandDesign