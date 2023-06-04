import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Homepage.jsx";
import AboutUs from "./pages/AboutPage.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Service from "./pages/Services.jsx";
import GrandDesign from "./pages/GrandDesign.jsx";
import Renovation from "./pages/Renovation.jsx";
import Commercial from "./pages/Commercial.jsx";
import NewBuilds from "./pages/NewBuilds.jsx";
import Enquire from "./pages/Enquire.jsx";
import Contact from "./pages/ContactPage.jsx";
import Blog from "./pages/Blog.jsx";
import SingleBlog from "./pages/SingleBlog.jsx";
import Page from "./pages/Page.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/css/normalize.css";
import "./assets/css/global.scss";
import "./assets/js/common.js";

const App = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0)
  }, []);

  document.body.classList.add("page");

  return (
    <div className="App">
      <Helmet>
        <meta name="robots" content="index" />
        <link rel="canonical" href={window.location.href} />
        <title>SB2 Build Ltd | Builders Mosgiel, Dunedin, Otago</title>
      </Helmet>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes forceRefresh={true}>
          <Route element={<Home />} path="/" />
          <Route element={<Service />} path="/:slug" />
          <Route element={<Page />} path="/:slug" />
          <Route element={<AboutUs />} path="/home-building-companies-dunedin" />
          <Route element={<Testimonials />} path="/recommended-builder-dunedin" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<SingleBlog />} path="/blog/:slug" />
          <Route element={<GrandDesign />} path="/build-grand-designs" />
          <Route element={<NewBuilds />} path="/house-builders-dunedin" />
          <Route element={<Renovation />} path="/home-renovations-dunedin" />
          <Route element={<Commercial />} path="/commercial-builder-dunedin" />
          <Route element={<Enquire />} path="/bathroom-renovations-dunedin"/>
          <Route element={<Contact />} path="/contact-us"/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
