import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TestimonialSection from "../components/TestimonialSection";
import CommunitySection from "../components/CommunitySection";
import IndustryExperts from "../components/IndustryExperts";
import CTASection from "../components/CTASection";
import NewsSection from "../components/NewsSection";
import AccreditationSection from "../components/AccreditationSection";
import Footer from "../components/Footer";
import CourseFinderSection from "../components/CourseFinderSection.jsx";
import ExploreCoursesSection from "../components/ExploreCoursesSection";
import CollegeCoursesSection from "../components/CollegeCoursesSection";
import BuildWithAISection from "../components/BuildWithAISection";
import SuccessStorySection from "../components/SuccessStorySection";
import AICurriculumSection from "../components/AICurriculumSection";
import AIFeaturesSection from "../components/AIFeaturesSection";
import CareerTransformationSection from "../components/CareerTransformationSection";
import CareerSupportSection from "../components/CareerSupportSection";
import TestimonialsSection from "../components/TestimonialsSection";
import VideoTestimonialsSection from "../components/VideoTestimonialsSection";
import CommunitySections from "../components/CommunitySections";
import IndustryTalentSection from "../components/IndustryTalentSection";
import CareerCTASection from "../components/CareerCTASection";
import InTheNewsSection from "../components/InTheNewsSection";
import RecognitionSection from "../components/RecognitionSection";
import Footers from "../components/Footers";
import ImportantLinksSection from "../components/ImportantLinksSection";
import LastSection from "../components/LastSection";

function Home() {
  return (
<>
  <Navbar />
  <HeroSection />
  <CourseFinderSection />
  <div className="mt-0">
  <ExploreCoursesSection />
  </div>
  <CollegeCoursesSection />
  <BuildWithAISection />
  <SuccessStorySection />
  <AICurriculumSection />
  <AIFeaturesSection />
  <CareerTransformationSection />
  <CareerSupportSection />
  <TestimonialsSection />
  <VideoTestimonialsSection />
  <CommunitySections />
  <IndustryTalentSection />
  <CareerCTASection />
  <InTheNewsSection />
  <RecognitionSection />
  <Footers />
  <ImportantLinksSection />
  <LastSection />
</>
   
  );
}

export default Home;