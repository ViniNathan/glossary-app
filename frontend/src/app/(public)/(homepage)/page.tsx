import React from "react";

import FeaturesGrid from "@/app/components/FeaturesGrid";
import HeroSection from "@/app/components/HeroSection";
import HomepageCard from "@/app/components/HomepageCard";
import Steps from "@/app/components/Steps";

function Homepage() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <FeaturesGrid />
      <Steps />
      <HomepageCard />
    </div>
  );
}

export default Homepage;
