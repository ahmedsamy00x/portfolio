"use client";
import React from "react";
import HeroText from "./HeroCta";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="flex flex-col gap-6">
      <HeroText />
      <HeroImage />
    </div>
  );
};

export default Hero;
