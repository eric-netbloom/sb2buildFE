import React from "react";
import HelmetTag from "../components/HelmetTag.jsx";
import Banner from "../components/Banner.jsx";
import Ctaform from "../components/CtaForm.jsx";
import Testimonials from "../components/TestimonialsSlider.jsx";
import Gallery from "../components/Gallery.jsx";
import AllBlog from "../components/AllBlog.jsx";
import { BsArrowRightShort, BsCheckCircleFill } from "react-icons/bs";
import { RiDoubleQuotesR } from "react-icons/ri";
import bannerBg from "../assets/images/newbuild.webp";
import img1 from "../assets/images/cost-to-build-a-house.jpg";
import img2 from "../assets/images/new-home-project-management.jpg";

const NewBuilds = () => {
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
      <div className="newbuilds-content landing">
       <HelmetTag 
            pageTitle="Dunedin New Builds | House Builders | Home Builds Otago NZ"
            title="Dunedin New Builds | House Builders | Home Builds Otago NZ"
            robots="index"
            description="Dunedin New Builds | House Builders | Home Builds Otago NZ: SB2 Build is a certified firm for new home builds in Dunedin New Zealand. We have an experienced team of home builders in Mosgiel, Otago. Call us: +64274797532."
            ogTitle="Dunedin New Builds | House Builders | Home Builds Otago NZ"
            ogDescription="Dunedin New Builds | House Builders | Home Builds Otago NZ: SB2 Build is a certified firm for new home builds in Dunedin New Zealand. We have an experienced team of home builders in Mosgiel, Otago. Call us: +64274797532."
            locale="en_NZ"
            type="website"
            site_name="Dunedin New Builds | House Builders | Home Builds Otago NZ"
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
            twtitle="Dunedin New Builds | House Builders | Home Builds Otago NZ"
            twdescription="Dunedin New Builds | House Builders | Home Builds Otago NZ: SB2 Build is a certified firm for new home builds in Dunedin New Zealand. We have an experienced team of home builders in Mosgiel, Otago. Call us: +64274797532."
            twimage=""
            twlabel1=""
            twdata1=""
            twlabel2=""
            twdata2=""
            canonical="https://sb2build.co.nz/house-builders-dunedin"
        
        />
        <Banner
          header = "Build the stress-free way with SB2 Build in Dunedin"
          imgBg = {bannerBg}
          pageName = "New Builds"
          pageLink = "/home-builders-dunedin"
        />
        <div className="section content">
          <div className="container par align-midcenter">
            <ul className="check">
              <li><BsCheckCircleFill/>New home builds for houses and apartments</li>
              <li><BsCheckCircleFill/>Experienced builders will bring your project in on time and on budget</li>
              <li><BsCheckCircleFill/>Full project management makes building stress-free</li>
            </ul>
            <p>SB2 Build is based in Mosgiel and works throughout Dunedin and the Otago region</p>
            <a href={"/construction-companies-dunedin"} className="redButton btn"> Contact Us Now </a>
          </div>
        </div>
        <div className="section content gray">
          <div className="container">
            <h2 className="lightTxt blueText">Get in your new property on time and on budget with the house builders at SB2 Build</h2>
            <p>The success of your new property rests a lot on the builders that you choose. SB2 Build is one of Dunedin's leading home building companies, working on a range of projects including:</p>
            <ul>
              <li><strong>New homes</strong> - Our team works on house builds across the Otago region either working from plans you already have or connecting you with an architect.</li>
              <li><strong>Apartments</strong> - We work on individual apartment builds and work with developers on larger-scale projects including converting existing buildings to apartments.</li>
              <li><strong>Flat pack homes and panel homes</strong> - For builders on a budget, flat pack homes can be a more affordable way of getting on the property ladder.</li>
            </ul>
            <p>Our qualified builders deliver high-quality end results, giving you a property you can feel proud to live in or sell as part of your development. To discuss your plans, get in touch.</p>
            <a href={"/"} className="redText btn link">Get in Touch <BsArrowRightShort/></a>
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
            <p>If you are planning to build your own home then you need to ensure you have budgeted enough money to carry out your plans.
              <br/>The cost of your build will obviously be affected by the size of the house you are planning. However, much of the average cost to build a house is influenced by your choices of fixtures and fittings. 
              <br/>When you are drawing up your ideas think about your must-haves and the things you could live without. For example, if you do a lot of cooking you might want to spend more on the kitchen than on other rooms. Talking to a builder during the planning stages can also help as they can often suggest alternative materials or fittings that would look similar but be more cost-effective.
              <br/>You will also need to fund the paperwork associated with building a house such as council consents and any legal fees. 
              <br/>Don't forget to factor a contingency into your budget. Sometimes unforeseen things happen during building projects and things end up costing more. By factoring in a contingency amount at the beginning you will be less affected should anything happen. If everything goes to plan you can always spend your contingency on furnishings or something completely different.
              <br/>If you already have your plans drawn up we can quote from your plans. If you are at the very beginning of your planning we can provide realistic pricing fit for budgeting or preapproval purposes.</p>
            <a href={"/"} className="redText btn link">Get in Touch <BsArrowRightShort/></a>
          </div>
        </div>
        <div className="section imgContent gray">
          <div className="container">
            <img src={img2} alt="New home project management" className="right-img"/>
            <h3>Full project management makes your new home build simple</h3>
            <p>Creating your new home from scratch should be an enjoyable experience, but for many, especially first-time home builders, it turns out to be a stressful one.
              <br/>To help make your new home build stress-free SB2 Build offers full project management from start to completion. 
              <br/>Turn key - full new home project management
              <br/>Our team can help you with design concepts and getting your plans ready at the beginning if you need it. Then, during the build, we'll manage all the sub-contractors required as well as making sure the project is running to time. Either Sam or Simon is always on site overseeing your job, so you are getting project management right from the top. We'll keep in touch with you throughout the build so there are no nasty surprises and you can see exactly how your home is progressing.
              <br/>For a stress-free, enjoyable build, work with one of Dunedin's leading construction companies. If you are looking to make alterations to your existing property, we do home renovations too. Get in touch today to arrange a quote.</p>
            <a href={"/"} className="redText btn link">Get in Touch <BsArrowRightShort/></a>
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

  export default NewBuilds