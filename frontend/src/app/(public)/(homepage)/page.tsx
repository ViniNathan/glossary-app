import React from "react";

import FeaturesGrid from "@/app/components/FeaturesGrid";
import HeroSection from "@/app/components/HeroSection";
import Steps from "@/app/components/Steps";

function Homepage() {
  return (
    <div className="">
      <HeroSection />
      <FeaturesGrid />
      <Steps />
    </div>
  );
}

export default Homepage;
