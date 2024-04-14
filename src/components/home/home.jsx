
import React, { useState } from "react";
import NavBar from "../reusable/navbar";
import { Element } from "react-scroll";
import HeroSection from "./components/heroSection";

import OurWorks from "../services/works";
import Works from "../works/ourworks";
import AboutUs from "../about/about";
import HeroCta from '../reusable/HeroCTA'


function HomePage() {

  return (
    <div className="min-h-screen">
      <NavBar />
      <Element
        name="landing" // unique name for each section
        className="element"

      >
        <section className="">


          <HeroSection />
        </section>
      </Element>

      <Element
        name="works"
        className="element"

      >
        <section className="">

          <Works />
        </section>
      </Element>

      <Element
        name="services"
        className="element"

      >
        <section className="">

          <OurWorks />

        </section>
      </Element>
      <Element
        name="about"
        className="element"

      >
        <section className="">
          <AboutUs />

        </section>
      </Element>
      <HeroCta />
    </div>
  );
}

export default HomePage;
