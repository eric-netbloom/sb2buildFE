import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import Grid from "@mui/material/Grid";
import { RiDoubleQuotesR } from "react-icons/ri";

export default function AllTestimonials() {
  const [allTestimonialsData, setAllTestimonials] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "testimonial"]{
            title,
            clientTestimonial,
            position,
        }`
      )
      .then((data) => setAllTestimonials(data))
      .catch(console.error);
  }, []);

  return (
    <div className="component">
      <Grid
        container
        rowSpacing={{ xs: 4, sm: 4, md: 6 }}
        columnSpacing={{ xs: 2, sm: 4, md: 6 }}
        className="testimonial-grid"
      >
          {allTestimonialsData &&
            allTestimonialsData.map((testimonial, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} className="testimonial-item">
                <RiDoubleQuotesR />
                <p>{testimonial.clientTestimonial}</p>
                <p><strong>{testimonial.title}</strong> <span><i>{testimonial.position}</i></span></p>
              </Grid>
          ))}
      </Grid>
    </div>
  );
}