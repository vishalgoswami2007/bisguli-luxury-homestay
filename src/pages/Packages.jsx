import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import PackageHero from "../components/packages/PackageHero";
import StayPackages from "../components/packages/StayPackages";
import ExperienceAddons from "../components/packages/ExperienceAddons";
import NearbyTours from "../components/packages/NearbyTours";
import StayIncluded from "../components/packages/StayIncluded";
import BookingSteps from "../components/packages/BookingSteps";
import PackageCTA from "../components/packages/PackageCTA";

function Packages() {
  return (
    <>
      <Navbar />

      <PackageHero />
      <StayPackages />
      <ExperienceAddons />
      <NearbyTours />
      <StayIncluded />
      <BookingSteps />
      <PackageCTA />

      <Footer />
    </>
  );
}

export default Packages;