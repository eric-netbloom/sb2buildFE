import {React, useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import sanityClient from "../client.js";
import Moment from 'moment';
import { BsArrowRightShort } from "react-icons/bs";
import '../assets/css/blog.scss';

export default function AllBlog({ categoryFilter, showingPost = "all" }) {
  const [allBlogData, setAllBlog] = useState(null);
  useEffect(() => {
    sanityClient
    .fetch(
      `*[_type == "blog" ${categoryFilter === "all"
          ? ""
          : `&&  "${categoryFilter}" in categories[]->title`
        }]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
        },
        publishedAt,
        "name": author->name,
        "image": author->image,
        "categories": categories[]->title,
      }`
      ).then((data) => setAllBlog(data)
    ).catch(console.error);
  }, [categoryFilter]);

  // "related": *[_type == "post" && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..5] {
  //   title,
  //   slug
  // }

  return (
    <div className="component">
      <Grid
        container
        rowSpacing={{ xs: 4, sm: 4, md: 6 }}
        columnSpacing={{ xs: 2, sm: 4, md: 6 }}
        className="content-top blogs"
      >
        {allBlogData &&
          allBlogData.slice(0, showingPost === "limited" ? 2 : allBlogData.length + 1).map((blog, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              key={blog.slug.current}
              className="stretch blog-item"
            >
              <div key={blog.slug} className="blog-wrap">
                <Link
                  to={"/blog/" + blog.slug.current}
                  key={blog.slug.current}
                  title={blog.title}
                  className='link-wrap'
                >
                  <img src={blog.mainImage.asset.url} alt="" />
                </Link>
                <div className="blog-content">
                {blog.categories && (
                    <ul className="categories" style={{ listStyle: "none" }}>
                      {blog.categories.map((category, slug, i) => (
                        <li key={slug}>
                          <a href={"/blog/" + slug} title={category}>
                            {category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link
                  to={"/blog/" + blog.slug.current}
                  key={blog.slug.current}
                  title={blog.title}
                  className='link-wrap'
                  >
                    <h1>{blog.title}</h1>
                  </Link>
                  <p className="grid-bot space-between">
                    <span className="date">
                      {Moment(blog.publishedAt).format('MMMM D, YYYY')}
                    </span>
                    <Link
                      to={"/blog/" + blog.slug.current}
                      key={blog.slug.current}
                      title={blog.title}
                      className='redText btn link'
                    >
                      Read more <BsArrowRightShort/>
                    </Link>
                  </p>
                </div>
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}