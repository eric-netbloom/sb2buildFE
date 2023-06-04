import {React} from 'react';
import HelmetTag from '../components/HelmetTag';
import Banner from '../components/Banner';
import AllTestimonials from "../components/AllTestimonials.jsx";
import bannerBg from "../assets/images/sb2-form-bg.webp";
import Ctaform from '../components/CtaForm';
function TestimonialPage() {
    document.body.classList.remove(
    "single-blog",
    "blog",
    "main-blog",
    "home",
    "landing",
    "contact",
    "about",
    "enquire",
    "default-page"
    );
    document.body.classList.add('testimonial');
  return (
    <div className="testimonial landing">
         <HelmetTag 
            pageTitle="Recommended Builder Dunedin | Best Building Company Mosgiel"
            title="Recommended Builder Dunedin | Best Building Company Mosgiel"
            robots="index"
            description="Recommended Builder Dunedin | Best Building Company Mosgiel: 'Very professional, in every way. They completed the work in good time and to a high standard, really highly recommend SB 2 Build Ltd.'"
            ogTitle="Recommended Builder Dunedin | Best Building Company Mosgiel"
            ogDescription="Recommended Builder Dunedin | Best Building Company Mosgiel: 'Very professional, in every way. They completed the work in good time and to a high standard, really highly recommend SB 2 Build Ltd.'"
            locale=""
            type=""
            site_name="Recommended Builder Dunedin | Best Building Company Mosgiel"
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
            twtitle="Recommended Builder Dunedin | Best Building Company Mosgiel"
            twdescription="Recommended Builder Dunedin | Best Building Company Mosgiel: 'Very professional, in every way. They completed the work in good time and to a high standard, really highly recommend SB 2 Build Ltd.'"
            twimage=""
            twlabel1=""
            twdata1=""
            twlabel2=""
            twdata2=""
            canonical=""
        />
        <Banner
          header = "Testimonials"
          imgBg = {bannerBg}
          pageName = "testimonials"
          pageLink = "/recommended-builder-dunedin"
        />
        <div className="section content">
            <div className="container">
                <AllTestimonials />
            </div>
        </div>
        <div className="section cta gray">
          <div className="container max1000">
            <h2 className="blueText">Make an <span>Enquiry</span></h2>
            <p>Please fill in the form and we will be in contact with you within the same business day.</p>
            <Ctaform />
          </div>
        </div>
    </div>
  )
}

export default TestimonialPage