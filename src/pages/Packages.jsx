import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import PackageHero from "../components/packages/PackageHero";
import StayPackages from "../components/packages/StayPackages";
import ExperienceAddons from "../components/packages/ExperienceAddons";
import NearbyTours from "../components/packages/NearbyTours";
import StayIncluded from "../components/packages/StayIncluded";
import BookingSteps from "../components/packages/BookingSteps";
import PackageCTA from "../components/packages/PackageCTA";
import SEO from "../components/SEO";

function Packages() {
  return (
    <>

        <SEO
    title="Stay Packages | Bisguli Homestay"
    description="Choose handcrafted stay packages including village walks, local food, seasonal experiences and Himalayan adventures."
    url="https://bisguli-luxury-homestay.vercel.app/packages"
        />

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