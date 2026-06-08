import hero from "../assets/hero.png";

import huggingface from "../assets/logos/huggingFace.webp";
import keras from "../assets/logos/Keras.png";
import gemini from "../assets/logos/Gemini.webp";
import nodejs from "../assets/logos/nodejs.webp";
import pytorch from "../assets/logos/pytorch.webp";
import chatgpt from "../assets/logos/chatgpt.webp";
import crewai from "../assets/logos/crewai.webp";
import llm from "../assets/logos/LLM.webp";

function HeroSection() {
  return (
    <section className="bg-black text-white min-h-screen overflow-hidden">

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-10 py-20 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Left */}
        <div className="max-w-3xl">

          <div className="inline-flex items-center px-6 py-3 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-300 mb-8">
            ⚡ Ready to 10X your career!
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
            Give your career an
            <br />
            <span className="bg-gradient-to-r from-blue-200 to-blue-500 bg-clip-text text-transparent">
              unfair AI advantage
            </span>
          </h1>

          <p className="text-xl text-gray-400 mt-8 max-w-2xl">
            The right AI tools integrated into your curriculum to help
            you become industry ready.
          </p>

          <button className="mt-10 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl text-lg font-semibold transition">
            Explore Courses
          </button>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={hero}
            alt="AI Hero"
            className="w-[700px] max-w-full"
          />
        </div>
      </div>

      {/* AI Tools Strip */}
      <div className="border-t border-white/10 py-8 overflow-hidden">

        <div className="flex animate-marquee gap-16 whitespace-nowrap">

          <div className="flex items-center gap-3">
            <img src={huggingface} className="w-20 h-20 object-contain" />
            <span className="text-4xl font-semibold">HuggingFace</span>
          </div>

          <div className="flex items-center gap-3">
            <img src={keras} className="w-20 h-20 object-contain" />
            <span className="text-4xl font-semibold">Keras</span>
          </div>

          <div className="flex items-center gap-3">
            <img src={gemini} className="w-20 h-20 object-contain" />
            <span className="text-4xl font-semibold">Gemini</span>
          </div>

          <div className="flex items-center gap-3">
            <img src={llm} className="w-20 h-20 object-contain" />
            <span className="text-4xl font-semibold">LLM</span>
          </div>

          <div className="flex items-center gap-3">
            <img src={nodejs} className="w-20 h-20 object-contain" />
            <span className="text-4xl font-semibold">Node.js</span>
          </div>

          <div className="flex items-center gap-3">
            <img src={chatgpt} className="w-20 h-20 object-contain" />
            <span className="text-4xl font-semibold">ChatGPT</span>
          </div>

          <div className="flex items-center gap-3">
            <img src={crewai} className="w-20 h-20 object-contain" />
            <span className="text-4xl font-semibold">CrewAI</span>
          </div>

          <div className="flex items-center gap-3">
            <img src={pytorch} className="w-20 h-20 object-contain" />
            <span className="text-4xl font-semibold">PyTorch</span>
          </div>

          {/* Duplicate for smooth loop */}

          <div className="flex items-center gap-3">
            <img src={huggingface} className="w-20 h-20 object-contain" />
            <span className="text-4xl font-semibold">HuggingFace</span>
          </div>

          <div className="flex items-center gap-3">
            <img src={keras} className="w-20 h-20 object-contain" />
            <span className="text-4xl font-semibold">Keras</span>
          </div>

          <div className="flex items-center gap-3">
            <img src={gemini} className="w-20 h-20 object-contain" />
            <span className="text-4xl font-semibold">Gemini</span>
          </div>

           <div className="flex items-center gap-3">
            <img src={chatgpt} className="w-20 h-20 object-contain" />
            <span className="text-4xl font-semibold">ChatGPT</span>
          </div>

          <div className="flex items-center gap-3">
            <img src={crewai} className="w-20 h-20 object-contain" />
            <span className="text-4xl font-semibold">CrewAI</span>
          </div>

          <div className="flex items-center gap-3">
            <img src={pytorch} className="w-20 h-20 object-contain" />
            <span className="text-4xl font-semibold">PyTorch</span>
          </div>

        </div>
      </div>

    </section>
  );
}

export default HeroSection;