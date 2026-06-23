import { useState } from "react";
import IITPatna from "../assets/images/IITPatna.webp";
import IITPravartak from "../assets/images/IITPravartak.webp";
import IITMandi from "../assets/images/IITMandi.webp";

function CollegeCoursesSection() {
  const [activeTab, setActiveTab] = useState("Popular");

  const tabs = [
  { name: "Popular", icon: "🔥" },
  { name: "Data Analytics", icon: "📈" },
  { name: "Software Development", icon: "🧱" },
  { name: "Data Structures and Algorithms", icon: "🧬" },
];

  const collegeCourses = {
  Popular: [
    {
      image: IITPatna,
      institute: "Vishlesan i-hub, IIT Patna",
      title:
        "Training and Internship Certification in Data Analytics",
      duration: "6 months",
      enrolled: "Enrolment currently closed",
      tags: ["8+ AI Tools", "IIT Certification"],
      category: "Data Analytics",
    },

    {
      image: IITMandi,
      institute: "iHub, IIT Mandi | Coding Ninjas",
      title:
        "Advanced Certification in Data Analytics with GenAI",
      duration: "6 months",
      enrolled: "10k+ Enrolled",
      tags: ["8+ AI Tools", "IIT Certification"],
      category: "Data Analytics",
    },

    {
      image: IITPravartak,
      institute: "IITM Pravartak, TIH IIT Madras",
      title:
        "Advanced Certification in Software Development",
      duration: "9 months",
      enrolled: "9k+ Enrolled",
      tags: ["9+ AI Tools", "IIT Certification"],
      category: "Software Development",
    },

    {
      image: IITPravartak,
      institute: "IITM Pravartak, TIH IIT Madras",
      title:
        "Advanced Certification in Data Structures and Algorithms",
      duration: "4 months",
      enrolled: "8k+ Enrolled",
      tags: ["5+ AI Tools", "IIT Certification"],
      category: "DSA",
    },
  ],

  "Data Analytics": [
    {
      image: IITPatna,
      institute: "Vishlesan i-hub, IIT Patna",
      title:
        "Training and Internship Certification in Data Analytics",
      duration: "6 months",
      enrolled: "Enrolment currently closed",
      tags: ["8+ AI Tools", "IIT Certification"],
      category: "Data Analytics",
    },

    {
      image: IITPravartak,
      institute: "iHub, IIT Mandi | Coding Ninjas",
      title:
        "Advanced Certification in Data Analytics with GenAI",
      duration: "6 months",
      enrolled: "10k+ Enrolled",
      tags: ["8+ AI Tools", "IIT Certification"],
      category: "Data Analytics",
    },
  ],

  "Software Development": [
    {
      image: IITPravartak,
      institute: "IITM Pravartak, TIH IIT Madras",
      title:
        "Advanced Certification in Software Development",
      duration: "9 months",
      enrolled: "9k+ Enrolled",
      tags: ["9+ AI Tools", "IIT Certification"],
      category: "Software Development",
    },
  ],

  "Data Structures and Algorithms": [
    {
      image: IITPravartak,
      institute: "IITM Pravartak, TIH IIT Madras",
      title:
        "Advanced Certification in Data Structures and Algorithms",
      duration: "4 months",
      enrolled: "8k+ Enrolled",
      tags: ["5+ AI Tools", "IIT Certification"],
      category: "DSA",
    },
  ],
};

  return (
    <section className="bg-black text-white py-20">
      <div className="w-full px-16 lg:px-26 xl:px-34">

        {/* Heading */}
        <h3 className="text-[22px] font-semibold text-white mb-5">
          For college students
        </h3>

        {/* Tabs */}
        <div className="flex gap-7 overflow-x-auto pb-3 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`
                min-w-fit
                px-8
                h-[54px]
                flex
                items-center
                justify-center
                rounded-full
                border
                transition-all
                duration-300
                text-[15px]
                font-medium
                ${
                  activeTab === tab.name
                    ? activeTab === "Popular"
                      ? "border-orange-500 text-white"
                      : activeTab === "Data Analytics"
                      ? "border-cyan-400 text-white"
                      : activeTab === "Software Development"
                      ? "border-red-500 text-white"
                      : "border-purple-500 text-white"
                    : "border-white/10 text-gray-400"
                }
              `}
            >
              <div className="flex items-center gap-3">
  <span>{tab.icon}</span>
  <span>{tab.name}</span>
</div>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="border-b border-white/10 mt-1"></div>

        {/* Cards */}
        <div
  className={
    activeTab === "Popular"
      ? "mt-2 flex gap-5 overflow-x-auto no-scrollbar"
      : "mt-2 grid lg:grid-cols-3 gap-5"
  }
>
  {collegeCourses[activeTab].map((course, index) => (
    <div
      key={index}
      className={`bg-[#111] rounded-[28px] border border-white/10 overflow-hidden ${
        activeTab === "Popular" ? "flex-shrink-0 basis-[31.5%] max-w-[31.5%]" : ""
      }`}
    >
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-[145px] object-cover"
      />

      <div className="p-5">
        <p className="text-orange-400 text-sm mb-3">
          {course.institute}
        </p>

       <h4 className="text-[17px] leading-7 font-semibold">
  {course.title}
</h4>

        <p className="text-gray-400 mb-5">
          {course.duration} | {course.enrolled}
        </p>

        <div className="flex gap-3 flex-wrap">
          {course.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-sm rounded-full bg-[#2a2a2a]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}

export default CollegeCoursesSection;