import React, { useState } from "react";
import AllBlog from "../components/AllBlog.jsx";
import Banner from "../components/Banner.jsx";
import HelmetTag from "../components/HelmetTag.jsx";
import bannerBg from "../assets/images/blog.webp";
function Blog() {
    document.body.classList.remove(
      "single-blog",
      "home",
      "landing",
      "contact",
      "about",
      "testimonial",
      "enquire",
      "default-page"
    );
    document.body.classList.add('blog', 'main-blog');
    const [categoryFilter] = useState("all");
  return (
    <div className="blog-page landing">
      <HelmetTag 
          pageTitle="SB2 Build Ltd | Builders Mosgiel, Dunedin, Otago"
          title="SB2 Build Ltd | Builders Mosgiel, Dunedin, Otago"
          robots="index" 
          description="SB2 Build Ltd | Builders Mosgiel, Dunedin, Otago: Mosgiel-based builders SB2 Build is your first choice building company in Otago. Licenced Building Practitioners and qualified builders."
          ogTitle="SB2 Build Ltd | Builders Mosgiel, Dunedin, Otago"
          ogDescription="SB2 Build Ltd | Builders Mosgiel, Dunedin, Otago: Mosgiel-based builders SB2 Build is your first choice building company in Otago. Licenced Building Practitioners and qualified builders."
          locale=""
          type=""
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
          canonical="https://sb2build.co.nz/blog"
      />
      <Banner 
        header = 'Blog'
        imgBg = {bannerBg}
        pageName="Blog"
        pageLink="/blog"
      />
      <div className="section latest-blog">
        <div className="container">
          <AllBlog categoryFilter={categoryFilter} showingPost="all" />
        </div>
      </div>
    </div>
  )
}

export default Blog