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

export default function SingleBlog() {

  document.body.classList.remove(
    "main-blog",
    "home",
    "landing",
    "contact",
    "about",
    "testimonial",
    "enquire",
    "default-page"
  );
  document.body.classList.add('blog', 'single-blog');

  const [blogData, setBlogData] = useState(null);
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
          "categories": categories[]->title,
          body,
          seoTitle,
          seoDescription,
          "name": author->name,
          "image": author->image,
          noIndex
       }`,
        { slug }
      )
      .then((data) => setBlogData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!blogData) return <center Style="padding: 100px;font-weight:bold;font-size: 30px;">Loading...</center>;

  let imageUrl = urlFor(blogData.mainImage).url();

  return (
    <div className="singleBlog page-content landing" key={blogData.slug}>
      <HelmetTag 
        pageTitle={blogData.seoTitle ? blogData.seoTitle : blogData.title}
        title={blogData.seoTitle ? blogData.seoTitle : blogData.title}
        robots="index" 
        description={blogData.seoDescription}
        ogTitle={blogData.seoTitle ? blogData.seoTitle : blogData.title}
        ogDescription={blogData.seoDescription}
        ogImage={blogData.mainImage.asset.url}
        locale="en_NZ"
        type="website"
        site_name={blogData.seoTitle ? blogData.seoTitle : blogData.title}
        updated_time=""
        image={blogData.mainImage.asset.url}
        imgsecure_url=""
        imgwidth=""
        imgheight=""
        imgalt=""
        imgtype=""
        artpublished_time=""
        artmodified_time=""
        twcard=""
        twtitle={blogData.seoTitle ? blogData.seoTitle : blogData.title}
        twdescription={blogData.seoDescription}
        twimage={blogData.mainImage.asset.url}
        twlabel1=""
        twdata1=""
        twlabel2=""
        twdata2=""
        canonical={blogData.slug}
      />
      <div className="banner dark" style={{backgroundImage: `url(${imageUrl})`}}>
      <div className="banner-content">
        <div className='container'>
          <div className="main-content left max900">
              <h1>{blogData.title}</h1>
              <Breadcrumbs aria-label="breadcrumb" separator="›" className="breadcrumb">
                <Link underline="hover" color="inherit" to="/">
                  Home
                </Link>
                <Link underline="hover" color="inherit" to="/blog">
                  Blog
                </Link>
                <Link underline="hover" color="inherit" to={blogData.slug}>
                  {blogData.title}
                </Link>
              </Breadcrumbs>
          </div>
        </div>
      </div>
    </div>
      <div className="section blog-content">
        <div className="container">
          {blogData.categories &&(
            <ul className="categories">
              {blogData.categories.map((category, slug,i) => (
                <li key={slug}>
                  <a href={"/blog/" + slug} title={category}>{category}</a>
                </li>
              ))}
            </ul>
          )}
          <div className="main-content">
            <BlockContent
              blocks={blogData.body}
              projectId={sanityClient.clientConfig.projectId}
              dataset={sanityClient.clientConfig.dataset}
            />
          </div>
        </div>
      </div>
    </div>
  );
}