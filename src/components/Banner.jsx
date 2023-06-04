import React from 'react'
import { Link } from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';

function Banner(props) {
  return (
    <div className="banner dark" style={{backgroundImage: `url(${props.imgBg})`}}>
      <div className="banner-content">
        <div className='container'>
          <div className="main-content left max900">
              <h1>{props.header}</h1>
              <Breadcrumbs aria-label="breadcrumb" separator="›" className="breadcrumb">
                <Link underline="hover" color="inherit" to="/">
                  Home
                </Link>
                <Link underline="hover" color="inherit" to={props.pageLink}>
                  {props.pageName}
                </Link>
              </Breadcrumbs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner