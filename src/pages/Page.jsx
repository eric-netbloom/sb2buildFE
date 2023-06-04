import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HelmetTag from "../components/HelmetTag.jsx";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Page() {

  document.body.classList.remove(
    "main-blog",
    "blog",
    "single-blog",
    "home",
    "landing",
    "contact",
    "about",
    "testimonial",
    "enquire"
  );
  document.body.classList.add('default-page');

  const [pageData, setPageData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
          body,
          seoTitle,
          seoDescription,
          "name": author->name,
          "image": author->image,
          noIndex
       }`,
        { slug }
      )
      .then((data) => setPageData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!pageData) return <center Style="padding: 100px;font-weight:bold;font-size: 30px;">Loading...</center>;

  let imageUrl = urlFor(pageData.mainImage).url();

  return (
    <div className="singlepage page-content landing" key={pageData.slug}>
      <HelmetTag 
        pageTitle={pageData.seoTitle ? pageData.seoTitle : pageData.title}
        title={pageData.seoTitle ? pageData.seoTitle : pageData.title}
        robots="index" 
        description={pageData.seoDescription}
        ogTitle={pageData.seoTitle ? pageData.seoTitle : pageData.title}
        ogDescription={pageData.seoDescription}
        ogImage={pageData.mainImage.asset.url}
        locale="en_NZ"
        type="website"
        site_name={pageData.seoTitle ? pageData.seoTitle : pageData.title}
        updated_time=""
        image={pageData.mainImage.asset.url}
        imgsecure_url=""
        imgwidth=""
        imgheight=""
        imgalt=""
        imgtype=""
        artpublished_time=""
        artmodified_time=""
        twcard=""
        twtitle={pageData.seoTitle ? pageData.seoTitle : pageData.title}
        twdescription={pageData.seoDescription}
        twimage={pageData.mainImage.asset.url}
        twlabel1=""
        twdata1=""
        twlabel2=""
        twdata2=""
        canonical={pageData.slug}
      />
      <div className="banner dark" style={{backgroundImage: `url(${imageUrl})`}}>
      <div className="banner-content">
        <div className='container'>
          <div className="main-content left max900">
              <h1>{pageData.title}</h1>
              <Breadcrumbs aria-label="breadcrumb" separator="›" className="breadcrumb">
                <Link underline="hover" color="inherit" to="/">
                  Home
                </Link>
                <Link underline="hover" color="inherit" to={pageData.slug}>
                  {pageData.title}
                </Link>
              </Breadcrumbs>
          </div>
        </div>
      </div>
    </div>
      <div className="section page-content">
        <div className="container padd-top20">
          {pageData.categories &&(
            <ul className="categories">
              {pageData.categories.map((category, slug,i) => (
                <li key={slug}>
                  <a href={"/page/" + slug} title={category}>{category}</a>
                </li>
              ))}
            </ul>
          )}
          <div className="main-content">
            <BlockContent
              blocks={pageData.body}
              projectId={sanityClient.clientConfig.projectId}
              dataset={sanityClient.clientConfig.dataset}
            />
          </div>
        </div>
      </div>
    </div>
  );
}