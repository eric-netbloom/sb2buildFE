import {React} from 'react';
import HelmetTag from '../components/HelmetTag';
import Banner from '../components/Banner';
import Grid from "@mui/material/Grid";
import bannerBg from "../assets/images/sb2-form-bg.webp";
import Ctaform from '../components/CtaForm';
import sam from "../assets/images/sam.webp";
import simon from "../assets/images/simon.webp";
import icon1 from "../assets/images/icon-lbp-qualified-builders.png";
import icon2 from "../assets/images/icon-positive-building-experience.png";
function AboutPage() {
    document.body.classList.remove(
    "single-blog",
    "blog",
    "main-blog",
    "home",
    "landing",
    "contact",
    "testimonial",
    "enquire",
    "default-page"
    );
    document.body.classList.add('about');
  return (
    <div className="about landing">
         <HelmetTag 
            pageTitle="Home Building Companies Dunedin | Qualified Builders Mosgiel"
            title="Home Building Companies Dunedin | Qualified Builders Mosgiel"
            robots="index"
            description="Home Building Companies Dunedin | Qualified Builders Mosgiel: Looking for home building companies in Dunedin? Work with the company that makes your building experience enjoyable - SB2 Build"
            ogTitle="Home Building Companies Dunedin | Qualified Builders Mosgiel"
            ogDescription="Home Building Companies Dunedin | Qualified Builders Mosgiel: Looking for home building companies in Dunedin? Work with the company that makes your building experience enjoyable - SB2 Build"
            locale="en_NZ"
            type="website"
            site_name="Home Building Companies Dunedin | Qualified Builders Mosgiel"
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
            twtitle="Home Building Companies Dunedin | Qualified Builders Mosgiel"
            twdescription="Home Building Companies Dunedin | Qualified Builders Mosgiel: Looking for home building companies in Dunedin? Work with the company that makes your building experience enjoyable - SB2 Build"
            twimage=""
            twlabel1=""
            twdata1=""
            twlabel2=""
            twdata2=""
            canonical="https://sb2build.co.nz/home-building-companies-dunedin"
        />
        <Banner
          header = "For stylish but practical home renovations, talk to the team at SB2 Build in Dunedin"
          imgBg = {bannerBg}
          pageName = "About"
          pageLink = "/home-building-companies-dunedin"
        />
        <div className="section content">
            <div className="container par">
                <h3>Looking for home building companies in Dunedin? Work with the company that makes your building experience enjoyable - <span>SB2 Build</span></h3>
                <p>Established in 2017 and run by industry professionals Sam Barnett and Simon Bone, SB2Build has continued to provide only the best quality build work in New Zealand. Sam and Simon bring more than 35 years of experience to every project they undertake, and this wealth of experience shows in everything they do.</p>
                <p>SB2 Build aims to make the building process as enjoyable and stress-free as possible whether you are a first-time builder or a seasoned developer. Our services are ideal for:</p>
                <ul>
                    <li>Young couples or families looking for experienced house builders to help build their perfect family home.</li>
                    <li>Anyone looking to build a dream home who needs a builder capable of tackling large or tricky plans.</li>
                    <li>People looking to do home renovations, from upgrading a kitchen or bathroom to adding an extension or conversion or sprucing up the section.</li>
                    <li>Investors or developers looking for a reliable builder who can take on large-scale projects.</li><li>Companies looking for a&nbsp;commercial builder &nbsp;for new shop or office fit-outs or commercial renovations.</li>
                    <li>Business or organisations looking for a builder with experience of seismic strengthening.</li><li>Industrial clients needing warehouse, storage or farming facilities.</li>
                </ul>
                <a href={"/construction-companies-dunedin"} className="redButton btn"> Contact Us Now </a>
            </div>
        </div>
        <div className="section content gray">
            <div className='container'>
                <h2 className='center blueText'>8 total + <span>2 contractors</span></h2>
                <div className="section imgContent padd-top20">
                    <div className="container no-padd">
                        <img src={sam} alt="Cost to build a house" className="left-img"/>
                        <p><strong>Sam Barnett - Licensed Builder</strong> <br/>
                        Sam grew up on a farm in the Hauraki Plains where there was always a hammer within reach. His childhood dream was to become a builder and that dream was realised in 2006. Throughout his apprenticeship Sam worked on a range of building projects including new builds, renovations and - being in a strong farming community - plenty of farms sheds and cowsheds.</p>
                        <p>As he qualified there was a recession in full swing so Sam moved to Auckland for work. There he became involved in commercial building with shop fitouts. This gave Sam experience of running multiple trades in a short timeframe and managing projects. From there a leading foreman role managing large-scale residential renovations and a project managers role leading 24 builders over multiple sites followed.</p>
                        <p>Sam started his own building business when approached by a real estate agent looking to flip some houses and eventually ended up in Dunedin. He met Simon on site at a job and before long the pair were working together.</p>
                    </div>
                </div>
                <div className="section imgContent padd-top20">
                    <div className="container no-padd">
                        <img src={simon} alt="Cost to build a house" className="left-img"/>
                        <p><strong>Simon Bone - Builder</strong> <br/>
                        Simon grew up in Gore and spend school holidays working on building sites with his dad, also a builder. After school Simon enrolled at SIT in Invercargill to study Architectural Technologies but, on graduation, he decided to go into building and got an apprenticeship with an Invercargill builder. Lots of home renovations including plenty of kitchen installations helped Simon hone his attention to detail and develop a new skill building transportable buildings.</p>
                        <p>Two years in Gore followed with projects including new builds, more renovations and commercial work before Simon moved to Dunedin in 2013. Working as a contractor doing renovations, he met Sam and the rest is history.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="section content">
            <div className="container center">
                <h3>Why choose SB2 Build when you are looking for building companies? Qualified builders and full project management are some of the benefits</h3>
                <p>There are lots of building companies to choose from so why choose SB2 Build? Here are three reasons why we are Dunedin's recommended builders.</p>
                <Grid container columnSpacing={{ xs: 4, sm: 4, md: 10 }} className='padd-top50'>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <img src={icon1} alt="icon-lbp-qualified-builders"/>
                        <p><strong>We offer a full service </strong></p>
                        <p>We can organise all the trades needed for your renovation or build including an architect if you need one. From the first quote to the finished build, we'll manage everything for you. One of us is always involved in the job so you know the boss is in the loop.</p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <img src={icon1} alt="icon-lbp-qualified-builders"/>
                        <p><strong>We're qualified and licensed</strong></p>
                        <p>One way to make your building project run smoothly is by employing experienced qualified builders and using apprentices working through the BCITO training programme. SB2 Build is a Licensed Building Practitioner so we can carry out restricted building work.</p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <img src={icon2} alt="icon-positive-building-experience"/>
                        <p><strong>We make it enjoyable</strong></p>
                        <p>We want you to enjoy the process of building or renovating as much as you enjoy the result, so we aim to make everything simple and stress-free. Having our friendly team on site will be a pleasant experience and we'll keep you updated often with our progress.</p>
                    </Grid>
                </Grid>
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

export default AboutPage