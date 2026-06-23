import { useEffect, useState } from "react";
import {
  Cross,
  CreditCard,
  Soup,
  Users,
  Store,
} from "lucide-react";

const cards = [
  {
    icon: Cross,
    title: "US health care",
    description:
      "Analyze US hospital demographics & admissions to understand costs & outcomes",
  },
  {
    icon: CreditCard,
    title: "Credit risk analysis",
    description:
      "GenAI-driven credit risk analysis to predict defaults & improve lending decisions",
  },
  {
    icon: Soup,
    title: "Meal plan analysis",
    description:
      "Data-driven optimization of meal plans for nutrition, cost, & consumption",
  },
  {
    icon: Users,
    title: "Pro kabaddi analysis",
    description:
      "Using match & player data to assess Pro Kabaddi performance and strategies",
  },
  {
    icon: Store,
    title:
      "Retail analysis",
    description:
      "Using SQL-based retail analytics to drive sales growth and retention",
  },
];

function Card({ card, large }) {
  const Icon = card.icon;

  return (
    <div className="text-center text-white">
      <div
        className={`
          relative
          ${
           large
  ? "w-[320px] h-[400px]"
  : "w-[280px] h-[320px]"
          }
          rounded-[32px]
          bg-[#090909]
          border border-white/10
          overflow-hidden
          flex items-center justify-center
        `}
      >
        {/* Purple Glow */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle,rgba(168,85,247,.45),transparent_65%)]
          "
        />

        {/* Dotted Overlay */}
        <div
          className="
            absolute inset-0 opacity-20
            [background-image:radial-gradient(rgba(168,85,247,0.6)_1px,transparent_1px)]
            [background-size:8px_8px]
          "
        />

        <Icon
          className={`
            relative z-10 text-white
           ${large ? "w-28 h-28" : "w-20 h-20"}
          `}
          strokeWidth={1.5}
        />
      </div>

      <h3
        className={`
          font-bold mt-6
          ${large ? "text-[18px]" : "text-[16px]"}
        `}
      >
        {card.title}
      </h3>

      <p
        className={`
          text-gray-300 mt-3 mx-auto leading-relaxed
          ${
           large
  ? "max-w-[260px] text-[14px]"
  : "max-w-[210px] text-[13px]"
          }
        `}
      >
        {card.description}
      </p>
    </div>
  );
}

function BuildWithAISection() {
    const [activeIndex, setActiveIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);

const leftIndex =
  (activeIndex - 1 + cards.length) % cards.length;

const centerIndex = activeIndex;

const rightIndex =
  (activeIndex + 1) % cards.length;
  return (
    <section className="relative bg-black overflow-hidden py-24">
      {/* Purple Glow */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35),transparent_60%)]
        "
      />

      {/* Grid Background */}
      <div
        className="
          absolute inset-0 opacity-20
          [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <h4
          className="
            text-center
            text-white
            font-bold
            text-[34px]
            leading-tight
            mb-20
          "
        >
          Build with AI like never before
        </h4>

        {/* Cards */}
      <div className="flex justify-center items-end gap-10">
  {/* Left */}
  <div className="transition-all duration-700 scale-90 opacity-80">
    <Card card={cards[leftIndex]} large={false} />
  </div>

  {/* Center */}
  <div className="transition-all duration-700">
    <Card card={cards[centerIndex]} large />
  </div>

  {/* Right */}
  <div className="transition-all duration-700 scale-90 opacity-80">
    <Card card={cards[rightIndex]} large={false} />
  </div>
</div>
      </div>
    </section>
  );
}

export default BuildWithAISection;