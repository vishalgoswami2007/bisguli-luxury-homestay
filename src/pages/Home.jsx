import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import ExploreBisguli from "../components/home/ExploreBisguli";
import SeasonCalendar from "../components/home/SeasonCalendar";
import FounderSection from "../components/home/FounderSection";
import OurJourney from "../components/home/OurJourney";
import ExperienceGallery from "../components/home/ExperienceGallery";
import VillageMap from "../components/home/VillageMap";
import PlanStayQuiz from "../components/home/PlanStayQuiz";
import AvailabilityCalendar from "../components/home/AvailabilityCalendar";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import Footer from "../components/layout/Footer";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import SEO from "../components/common/SEO";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sectionId = params.get("section");

    if (!sectionId) {
      return;
    }

    const timer = setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [location.search]);

  return (
    <>

  <SEO
    title="Bisguli Homestay | Luxury Himalayan Village Stay"
    description="Experience authentic Kumaoni hospitality with luxury village stays, Himalayan views, local food and unforgettable mountain experiences."
    url="https://bisguli-luxury-homestay.vercel.app/"
  />

   
      <Navbar />

      <main className="bg-[#03150D]">
        <section id="home">
          <Hero />
        </section>

        <section id="explore">
          <ExploreBisguli />
        </section>

        <section id="seasons">
          <SeasonCalendar />
        </section>

        <section id="our-story">
          <FounderSection />
        </section>

        <OurJourney />
        <ExperienceGallery />
        <VillageMap />

        <section id="planner">
          <PlanStayQuiz />
        </section>

        <section id="availability">
          <AvailabilityCalendar />
        </section>

        <Testimonials />
        <FAQ />
      </main>

      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default Home;