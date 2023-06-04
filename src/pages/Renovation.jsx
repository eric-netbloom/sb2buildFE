import React from "react";
import HelmetTag from "../components/HelmetTag.jsx";
import Banner from "../components/Banner.jsx";
import AllBlog from "../components/AllBlog.jsx";
import Ctaform from "../components/CtaForm.jsx";
import Testimonials from "../components/TestimonialsSlider.jsx";
import Gallery from "../components/Gallery.jsx";
import { BsArrowRightShort,BsCheckCircleFill } from "react-icons/bs";
import { RiDoubleQuotesR } from "react-icons/ri";
import bannerBg from "../assets/images/renovation.webp";
import img1 from "../assets/images/bathroom-renovations-otago.webp";
import img2 from "../assets/images/extentions-home-additions-otago.webp";
import img3 from "../assets/images/deck-builder.webp";

const Renovation = () => {
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
            pageTitle="Home Building Extensions Dunedin | Renovations | Otago NZ"
            title="Home Building Extensions Dunedin | Renovations | Otago NZ"
            robots="index"
            description="Home Building Extensions Dunedin | Renovations | Otago NZ: Hire SB2 Build for home building extensions and renovations services in Dunedin NZ. We specialise in home additions, extensions, and alteration services."
            ogTitle="Home Building Extensions Dunedin | Renovations | Otago NZ"
            ogDescription="Home Building Extensions Dunedin | Renovations | Otago NZ: Hire SB2 Build for home building extensions and renovations services in Dunedin NZ. We specialise in home additions, extensions, and alteration services."
            locale="en_NZ"
            type="website"
            site_name="Home Building Extensions Dunedin | Renovations | Otago NZ"
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
            twtitle="Home Building Extensions Dunedin | Renovations | Otago NZ"
            twdescription="Home Building Extensions Dunedin | Renovations | Otago NZ: Hire SB2 Build for home building extensions and renovations services in Dunedin NZ. We specialise in home additions, extensions, and alteration services."
            twimage=""
            twlabel1=""
            twdata1=""
            twlabel2=""
            twdata2=""
            canonical="https://sb2build.co.nz/home-renovations-dunedin"
        
        />
        <Banner
          header = "For stylish but practical home renovations, talk to the team at SB2 Build in Dunedin"
          imgBg = {bannerBg}
          pageName = "Renovations"
          pageLink = "/home-renovations-dunedin"
        />
        <div className="section content">
          <div className="container par align-midcenter">
            <ul className="check">
              <li><BsCheckCircleFill/>Add value with a kitchen or bathroom renovation</li>
              <li><BsCheckCircleFill/>Add space with home additions or an extension</li>
              <li><BsCheckCircleFill/>Our team can project manage the whole process</li>
            </ul>
            <p><span class="opensans">SB2 Build</span> is based in Mosgiel and works throughout Dunedin and the Otago region</p>
            <a href={"/construction-companies-dunedin"} className="redButton btn"> Contact Us Now </a>
          </div>
        </div>
        <div className="section content gray">
          <div className="container par">
            <h3>Home Building Extensions & Renovations Dunedin</h3>
            <p>Whether you need to increase the space at your property or you are looking to remodel a tired kitchen, home additions, extensions and renovations can add value to your property while also improving your current living conditions. </p>
            <p>Many people think a house renovation is easy, but it can actually be just as time-consuming and challenging as a new home build, especially if the renovations are on a large scale. Hiring a professional builder, experienced in renovations, ensures not only that your project runs to time and budget but also that your ideas are developed in a practical way.</p>
            <p>The team of qualified builders at SB2 Build can assist with your planning and carry out your renovations to a high standard.</p>
            <p>If you don't think you have the handyman skills to create the perfect kitchen or outdoor entertainment space, then get in touch to discuss your plans or home renovation costs. Our team works across Dunedin and the wider Otago region.</p>
            <a href={"/construction-companies-dunedin"} className="redButton btn"> Contact Us Now </a>
          </div>
        </div>
        
        <div className="section gallery">
          <div className="container fullwidth no-padd">
            <Gallery/>
          </div>
        </div>
        <div className="section imgContent">
          <div className="container">
            <img src={img1} alt="Cost to build a house" className="left-img"/>
            <h3>Things to consider when planning your new home builds in Dunedin</h3>
            <p>Kitchens and bathrooms are popular rooms to renovate and are some of the easiest spaces to add value to your property.
              <br/>One of the keys to good renovations - especially when it comes to kitchens - is planning. Before you start to think carefully about things like how much storage you need, how much workspace, what sort of lighting you want and how you will use the space. 
              <br/>Kitchen designers often use a technique called the golden triangle which positions the three most used parts of your kitchen - oven, fridge and sink - at the three points of a triangle. This gives you a great starting point for basing the rest of your kitchen remodel design around.
              <br/>Get in touch to discuss the cost of a new kitchen or bathroom renovations. 
             </p>
            <a href={"/"} className="redText btn link">Get in Touch <BsArrowRightShort/></a>
          </div>
        </div>
        <div className="section imgContent gray">
          <div className="container">
          <img src={img2} alt="Cost to build a house" className="right-img"/>
            <h3>House Alterations and Additions Services in Otago</h3>
            <p>If you need a bit of extra space but you don't want to move away from your current location than a home extension or addition could be the answer. Extensions are great for:</p>
            <ul>
              <li>people who have extended family living with them like adult children or elderly relatives</li>
              <li>people looking to run a business from home who need a separate business space or office</li>
              <li>people looking to rent out a space for long-term rental or Airbnb lets as a second income </li>
              <li>people looking to create more space for hobbies like working out, crafting or sewing </li>
             </ul>
             <p>If you are planning on adding a room to your house, think carefully about how it will work with the rest of your home - will you blend the old and new or opt for contrast and complementing styles? If you live in a character home you might want to consider putting your home addition at the rear so as to preserve the original frontage of the property.</p>
          </div>
        </div>
        <div className="section imgContent">
          <div className="container">
            <img src={img3} alt="Cost to build a house" className="left-img"/>
            <h3>Outdoor renovations complete your section</h3>
            <p>Complete your section and improve your indoor/outdoor flow with outdoor renovations. Our team can help you with hard landscaping to give you an outdoor space you will be proud to show your visitors.</p>
            <p>Our team has experience creating fencing, decks, patios and pathways and can work with you to create a plan that works around your planting and other outdoor features.</p>
            <a href={"/"} className="redText btn link">Get in Touch <BsArrowRightShort/></a>
          </div>
        </div>
        <div className="section imgContent gray">
          <div className="container">
            <h3>SB2 Build offers a full design and build service to make your renovations simple</h3>
            <p>Renovations can be just as tricky as a new build project so it is important to get it right with your builders. SB2 Build offers a full service and can project manage your renovations from the design stage to the completed build. Our team will take care of everything for you including managing any sub-contractors required.</p>
            <p>All you need to do is enjoy your extension or newly renovated space. To get started on your renovations get in touch.</p>
            <a href={"/"} className="btn">Get in Touch <BsArrowRightShort/></a>
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

  export default Renovation