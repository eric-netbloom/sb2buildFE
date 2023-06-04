import React from "react";
import HelmetTag from "../components/HelmetTag.jsx";
import Banner from "../components/Banner.jsx";
import AllBlog from "../components/AllBlog.jsx";
import Ctaform from "../components/CtaForm.jsx";
import { BsArrowRightShort,BsCheckCircleFill } from "react-icons/bs";
import bannerBg from "../assets/images/commercial.webp";
import img1 from "../assets/images/empire-hotel.webp"
import img2 from "../assets/images/seismic-strengthening.webp"
import img3 from "../assets/images/commercial-builder.webp"

const Commercial = () => {
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
            pageTitle="Commercial Builder Dunedin - Commercial Office Fitouts"
            title="Commercial Builder Dunedin - Commercial Office Fitouts"
            robots="index"
            description="Commercial Builder Dunedin - Commercial Office Fitouts: For a commercial builder you can trust, from office fit outs to seismic strengthening, choose the trusted builders at SB2 Build in Dunedin, Otago. Call today!"
            ogTitle="Commercial Builder Dunedin - Commercial Office Fitouts"
            ogDescription="Commercial Builder Dunedin - Commercial Office Fitouts: For a commercial builder you can trust, from office fit outs to seismic strengthening, choose the trusted builders at SB2 Build in Dunedin, Otago. Call today!"
            locale="en_NZ"
            type="website"
            site_name="Commercial Builder Dunedin - Commercial Office Fitouts"
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
            twtitle="Commercial Builder Dunedin - Commercial Office Fitouts"
            twdescription="Commercial Builder Dunedin - Commercial Office Fitouts: For a commercial builder you can trust, from office fit outs to seismic strengthening, choose the trusted builders at SB2 Build in Dunedin, Otago. Call today!"
            twimage=""
            twlabel1=""
            twdata1=""
            twlabel2=""
            twdata2=""
            canonical="https://sb2build.co.nz/commercial-builder-dunedin"
        
        />
        <Banner
          header = "For a commercial builder you can trust whatever the scale of your project choose SB2 Build"
          imgBg = {bannerBg}
          pageName = "Commercial"
          pageLink = "/commercial-builder-dunedin"
        />
        <div className="section content">
          <div className="container par align-midcenter">
            <ul className="check">
              <li><BsCheckCircleFill/>Commercial office fit outs, building and renovations</li>
              <li><BsCheckCircleFill/>Rural and industrial builds</li>
              <li><BsCheckCircleFill/>Seismic strengthening for existing buildings</li>
            </ul>
            <p>SB2 Build is based in Mosgiel and works throughout Dunedin and the Otago region</p>
            <a href="#cta" className="redButton btn"> Contact Us Now </a>
          </div>
        </div>
        <div className="section imgContent gray">
          <div className="container">
            <img src={img1} alt="Cost to build a house" className="right-img"/>
            <h3>High-end commercial fitouts and building in Dunedin and across Otago</h3>
            <p>From high-end apartments to shop and office fitouts, SB2 Build is the commercial builder you can trust for work in Dunedin and across Otago.</p>
            <p>Our team works on a wide range of new build and commercial renovation projects large and small throughout the Otago region, and can also take on specialist jobs including installing firewalls and acoustic sound proofing.</p>
            <p>Whether you are looking for office fitout contractors or a reliable building company you can count on to build your latest commercial or residential development, the team at SB2 Build are your first choice. To discuss your project, get in touch.</p>
            <a href="#cta" className="redText btn link">Get in Touch <BsArrowRightShort/></a>
          </div>
        </div>
        <div className="section imgContent">
          <div className="container ">
            <img src={img2} alt="Cost to build a house" className="left-img"/>
            <h3>Seismic strengthening of existing buildings in Dunedin</h3>
            <p>Following the recent large earthquakes in the South Island, it has become even more important to ensure that your building is safe for staff, visitors and members of the public.</p>
            <p>The Building (Earthquake-prone Buildings) Amendment Act 2016 contains details of the new building standards (NBS) which is how a newly built building should perform in an earthquake. Existing buildings are assessed against the standards that would have applied to a new building in July 2017 which is when the regulations came into force. </p>
            <p>If you are unsure whether your building is safe, you can book a building inspection with one of SB2 Build's structural engineers. Once you know which areas of your building need work, we can discuss arranging earthquake strengthening. There are a number of different ways to strengthen a building including adding steel framing or securing facades. Our team will work closely with you and our engineers to work out the best course of action.</p>
            <a href="#cta" className="redText btn link">Get in Touch <BsArrowRightShort/></a>
          </div>
        </div>
        <div className="section imgContent gray">
          <div className="container ">
            <img src={img3} alt="Cost to build a house" className="right-img"/>
            <h3>Strong and practical heavy commercial buildings</h3>
            <p>Industrial buildings don't have to be ugly or uncomfortable. SB2 Build has experience in building heavy commercial buildings including woolsheds and warehouse storage units for fertiliser, machinery and company stock.</p>
            <p>As well as creating storage space, our team can also help design and build your building with facilities such as kitchen areas for staff if required. </p>
            <a href="#cta" className="redText btn link">Get in Touch <BsArrowRightShort/></a>
          </div>
        </div>
        <div className="section">
          <div className="container ">
            <h3>Why choose SB2 Build over other commercial building companies?</h3>
            <p>When you are embarking on a large-scale commercial building project you need to know that you can trust the builder you are working with. Working with SB2 Build gives you:</p>
            <p><strong>A team that works with your vision</strong> - With more than 35 years combined experienced in the building trade, we've worked on lots of different projects and bring that experience to realising your vision. We'll be in close communication with you throughout the project to ensure we are meeting your requirements.</p>
            <p><strong>A team that is qualified and licensed</strong> - SB2 Build is a Licensed Building Practitioner with a team of qualified builders and apprentices working through approved training schemes. We are also Hazardco accredited and will adhere to all health and safety regulations while on site.</p>
            <p><strong>A team that is flexible</strong> - We understand that when working on commercial projects time is often of the essence, and in the case of renovations work cannot always be completed during usual work hours. Our team is flexible enough to work with you to ensure your project is completed on time and with minimum disruption to any staff or customers in existing buildings.</p>
            <p>Add to that competitive pricing with transparent quotes and you'll soon see why we have a reputation as Dunedin's recommended builders.</p>
            <a href="#cta" className="redText btn link">Get in Touch <BsArrowRightShort/></a>
          </div>
        </div>
        <div className="section latest-blog gray">
          <div className="container">
            <h2 className="center blueText">Latest <span>Blog</span></h2>
            <AllBlog categoryFilter="all" showingPost="all" />
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

  export default Commercial