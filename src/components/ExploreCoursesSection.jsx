import { useState } from "react";
import CodingNinjasAnalytics from "../assets/images/CodingNinjasAnalytics.webp";
import CodingNinjasGenAI from "../assets/images/CodingNinjasGenAI.webp";
import DataScience from "../assets/images/DataScience.webp";
import IBMGenAI from "../assets/images/IBMGenAI.webp";
import IITGuwahati from "../assets/images/IITGuwahati.webp";
import IITPatna from "../assets/images/IITPatna.webp";
import IITPravartak from "../assets/images/IITPravartak.webp";
import SoftwareDevelopment from "../assets/images/SoftwareDevelopment.webp";
import IITMGenAI from "../assets/images/IITMGenAI.webp";
import IBMAnalytics from "../assets/images/IBMAnalytics.webp";

function ExploreCoursesSection() {
  const [activeTab, setActiveTab] = useState("Popular");

 const tabs = [
  { name: "Popular", icon: "🔥" },
  { name: "Data Analytics", icon: "📊" },
  { name: "Generative AI", icon: "✨" },
  { name: "Software Development", icon: "💻" },
  { name: "Data Science", icon: "🧠" },
];

  const courses = {
    Popular: [
  {
    institute: "IITM Pravartak, TIH IIT Madras",
    title: "Professional Certification in Data Analytics with GenAI",
    duration: "6 months",
    enrolled: "20K+ Enrolled",
    tag1: "10+ AI Tools",
tag2: "IIT Certification",
    category: "Data Analytics",
    image: IITPravartak,
  },
  {
    institute: "E&ICT Academy, IIT Guwahati",
    title: "PG Certification in Data Analytics with GenAI",
    duration: "6 months",
    enrolled: "Enrolment currently closed",
    tag1: "10+ AI Tools",
tag2: "IIT Certification",
    category: "Data Analytics",
    image: IITGuwahati,
  },
  {
    institute: "Vishlesan i-hub, IIT Patna",
    title: "Professional Certification in Data Analytics with GenAI",
    duration: "6 months",
    enrolled: "Enrolment currently closed",
    tag1: "10+ AI Tools",
tag2: "IIT Certification",
    category: "Data Analytics",
    image: IITPatna,
  },
  {
  institute: "Coding Ninjas",
  title: "Data Analytics with GenAI Program by Coding Ninjas",
  duration: "6 months",
  enrolled: "25K+ Enrolled",
  tag1: "10+ AI Tools",
tag2: "job bootcamp",
  category: "Data Analytics",
  image: CodingNinjasAnalytics,
},
  {
  institute: "IBM and Microsoft PL-300 Certification",
  title: "Data Analytics with GenAI Program by Coding Ninjas",
  duration: "6 months",
  enrolled: "7K+ Enrolled",
  tag1: "10+ AI Tools",
tag2: "job bootcamp",
  category: "Data Analytics",
  image: IBMAnalytics,
},
  {
    institute: "Coding Ninjas",
    title: "Advanced Certification in GenAI and Multi-Agent Systems",
    duration: "6 months",
    enrolled: "12K+ Enrolled",
    tag1: "12+ AI Tools",
tag2: "Certification",
    category: "Generative AI",
    image: CodingNinjasGenAI,
  },
  {
    institute: "IBM Certification",
    title: "Advanced Certification in GenAI & Multi Agent Systems",
    duration: "6 months",
    enrolled: "10K+ Enrolled",
    tag1: "10+ AI Tools",
tag2: "Certification",
    category: "Generative AI",
    image: IBMGenAI,
  },
  {
    institute: "IITM Pravartak, TIH IIT Madras",
    title: "Advanced Certification in GenAI for Non-Tech Professionals",
    duration: "6 months",
    enrolled: "Enrolment currently closed",
    tag1: "5+ AI Tools",
tag2: "IIT Certification",
    category: "Generative AI",
    image: IITMGenAI,
  },
  {
    institute: "Coding Ninjas",
    title: "Software Development with GenAI Program by Coding Ninjas",
    duration: "6 months",
    enrolled: "30K+ Enrolled",
    tag1: "12+ AI Tools",
tag2: "job bootcamp",
    category: "Software Development",
    image: SoftwareDevelopment,
  },
  {
    institute: "Coding Ninjas",
    title: "Data Science with GenAI Program by Coding Ninjas",
    duration: "9 months",
    enrolled: "10K+ Enrolled",
    tag1: "12+ AI Tools",
tag2: "job bootcamp",
    category: "Data Science",
    image: DataScience,
  },
],

    "Data Analytics": [
  {
    institute: "IITM Pravartak, TIH IIT Madras",
    title: "Professional Certification in Data Analytics with GenAI",
    duration: "6 months",
    enrolled: "20K+ Enrolled",
    tag1: "10+ AI Tools",
tag2: "IIT Certification",
    category: "Data Analytics",
    image: IITPravartak,
  },

  {
    institute: "E&ICT Academy, IIT Guwahati",
    title: "PG Certification in Data Analytics with GenAI",
    duration: "6 months",
    enrolled: "Enrolment currently closed",
    tag1: "8+ AI Tools",
tag2: "IIT Certification",
    category: "Data Analytics",
    image: IITGuwahati,
  },

  {
    institute: "Vishlesan i-hub, IIT Patna",
    title: "Professional Certification in Data Analytics with GenAI",
    duration: "6 months",
    enrolled: "Enrolment currently closed",
    tag1: "10+ AI Tools",
tag2: "IIT Certification",
    category: "Data Analytics",
    image: IITPatna,
  },

  {
    institute: "Coding Ninjas",
    title: "Data Analytics with GenAI Program by Coding Ninjas",
    duration: "6 months",
    enrolled: "25K+ Enrolled",
    tag1: "10+ AI Tools",
tag2: "job bootcamp",
    category: "Data Analytics",
    image: CodingNinjasAnalytics,
  },

  {
    institute: "IBM and Microsoft PL-300 Certification",
    title: "Data Analytics with GenAI Program by Coding Ninjas",
    duration: "6 months",
    enrolled: "7K+ Enrolled",
    tag1: "10+ AI Tools",
tag2: "job bootcamp",
    category: "Data Analytics",
    image: IBMAnalytics,
  },
],

    "Generative AI": [
  {
    institute: "Coding Ninjas",
    title: "Advanced Certification in GenAI and Multi-Agent Systems",
    duration: "6 months",
    enrolled: "12k+ Enrolled",
    tag1: "12+ AI Tools",
    tag2: "Certification",
    logo: "codingninjas",
    category: "Generative AI",
    image: CodingNinjasGenAI,
  },
  {
    institute: "IBM Certification",
    title: "Advanced Certification in GenAI & Multi Agent Systems",
    duration: "6 months",
    enrolled: "10k+ Enrolled",
    tag1: "10+ AI Tools",
    tag2: "Certification",
    image: IBMGenAI,
    logo: "ibm",
    category: "Generative AI",
  },
  {
    institute: "IITM Pravartak, TIH IIT Madras",
    title: "Advanced Certification in GenAI for Non-Tech Professionals",
    duration: "6 months",
    enrolled: "",
    status: "Enrolment currently closed",
    tag1: "5+ AI Tools",
    tag2: "IIT Certification",
    image: IITPravartak,
    logo: "iitm",
    category: "Generative AI",
  },
],

    "Software Development": [
  {
    institute: "Coding Ninjas",
    title: "Software Development with GenAI Program by Coding Ninjas",
    duration: "6 months",
    enrolled: "30k+ Enrolled",
    tag1: "12+ AI Tools",
    tag2: "Job bootcamp",
    image: SoftwareDevelopment,
    logo: "codingninjas",
    category: "Software Development",
  },
],

   "Data Science": [
  {
    institute: "Coding Ninjas",
    title: "Data Science with GenAI Program by Coding Ninjas",
    duration: "9 months",
    enrolled: "10k+ Enrolled",
    tag1: "12+ AI Tools",
    tag2: "Job bootcamp",
    image: DataScience,
    logo: "codingninjas",
    category: "Data Science",
  },
],
  };
    return (
   <section className="bg-black text-white py-0">
    <div className="w-full px-16 lg:px-26 xl:px-34">
    <div className="max-w-[1180px] mx-auto">
        {/* Heading */}
        <div className="mb-4">
         <h2 className="text-[40px] font-bold text-white mb-4">
  Explore all our courses
</h2>

          <h3 className="text-[22px] font-semibold text-white mb-5">
            For working professionals
          </h3>
        </div>

        {/* Tabs */}
       <div
  className="
    flex
    gap-4
    overflow-x-auto
    whitespace-nowrap
    scrollbar-hide
    [-ms-overflow-style:none]
    [scrollbar-width:none]
  "
  style={{ WebkitOverflowScrolling: "touch" }}
>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.name)}
              className={`
                ${
  tab.name === "Popular"
    ? "min-w-[140px]"
    : "min-w-[190px]"
}
                px-6
                py-3
                text-[15px]
                font-medium
                rounded-full
                border
                transition-all
                duration-300
                ${
  activeTab === tab.name
    ? tab.name === "Popular"
      ? "border-orange-500 text-white"
      : tab.name === "Data Analytics"
      ? "border-cyan-400 text-white"
      : tab.name === "Generative AI"
      ? "border-yellow-400 text-white"
      : tab.name === "Software Development"
      ? "border-red-500 text-white"
      : "border-green-500 text-white"
    : "border-white/10 text-gray-400 hover:border-white/30"
}
              `}
            >
              <div className="flex items-center gap-2">
  <span>{tab.icon}</span>
  <span>{tab.name}</span>
</div>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="border-b border-white/10 mt-3"></div>

        {/* Cards */}
        <div
  className="
    mt-8
    flex
    gap-5
    overflow-x-auto
    pb-4
    no-scrollbar
  "
>
          {courses[activeTab].map((course, index) => (
            <div
              key={index}
              className="
  flex-shrink-0
  w-[31.8%]
  min-w-[31.8%]
  bg-[#111111]
  rounded-[28px]
  overflow-hidden
  border border-white/10
  hover:border-white/20
  transition-all
  duration-300
  hover:-translate-y-1
  cursor-pointer
"
            >
              {/* Banner */}
             <div className="relative h-[145px] overflow-hidden rounded-t-[28px]">
  <img
    src={course.image}
    alt={course.title}
    className="w-full h-full object-cover"
  />

  {/* Category Label */}
  <div
    className={`
      absolute top-4 left-4
      px-3 py-1 rounded-full
      text-sm font-semibold
      bg-black/60 backdrop-blur-sm
      ${
        course.category === "Data Analytics"
          ? "text-cyan-400"
          : course.category === "Generative AI"
          ? "text-yellow-400"
          : course.category === "Software Development"
          ? "text-red-400"
          : "text-green-400"
      }
    `}
  >
    {course.category}
  </div>
</div>
              {/* Card Content */}
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-orange-400 text-sm font-semibold">
                    {course.institute}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs">
                    {course.badge}
                  </span>
                </div>

                <h4 className="text-[17px] font-semibold leading-8 mb-5">
                  {course.title}
                </h4>

               {/* Duration + Enrollment */}
<div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
  <span>{course.duration}</span>

  {course.enrolled && (
    <>
      <span>|</span>
      <span>{course.enrolled}</span>
    </>
  )}

  {course.status && (
    <span className="ml-3 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs">
      {course.status}
    </span>
  )}
</div>

{/* Bottom Tags */}
<div className="flex flex-wrap gap-3">
  <span className="px-3 py-1.5 rounded-full bg-white/10 text-[13px]">
    {course.tag1}
  </span>

  <span className="px-3 py-1.5 rounded-full bg-white/10 text-[13px]">
    {course.tag2}
  </span>
</div>
              </div>
            </div>
          ))}
        </div>
              </div>
              </div>
    </section>
  );
}

export default ExploreCoursesSection;