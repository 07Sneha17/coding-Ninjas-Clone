import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TestimonialSection from "../components/TestimonialSection";
import CommunitySection from "../components/CommunitySection";
import IndustryExperts from "../components/IndustryExperts";
import CTASection from "../components/CTASection";
import NewsSection from "../components/NewsSection";
import AccreditationSection from "../components/AccreditationSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TestimonialSection />
      <CommunitySection />
      <IndustryExperts />
      <CTASection />
      <NewsSection />
      <AccreditationSection />
      <Footer />
    </>
  );
}

export default Home;