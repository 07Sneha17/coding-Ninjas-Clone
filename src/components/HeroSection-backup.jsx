import hero from "../assets/images/hero3.png";

function HeroSection() {
  return (
    <section className="bg-black text-white overflow-hidden">

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 pt-12 text-center">

        {/* Badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-300">
          ⚡ Ready to 10X your career!
        </div>

        {/* Heading */}
        <h1 className="mt-10 text-5xl md:text-[88px] font-bold leading-[1.05]">
          Give your career an
          <br />
          <span className="bg-gradient-to-r from-blue-200 to-blue-600 bg-clip-text text-transparent">
            unfair AI advantage
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-xl text-gray-400">
          The right AI tools integrated into your curriculum
        </p>

        {/* Hero Image */}
        <div className="mt-12 flex justify-center">
          <img
            src={hero}
            alt="AI Hero"
            className="w-full max-w-[1400px] object-contain"
          />
        </div>
      </div>

      {/* Logos Strip */}
      <div className="border-t border-white/10 mt-10 py-6">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-flex gap-16 animate-marquee text-2xl font-semibold">

            <span>🤗 HuggingFace</span>
            <span>⚡ Gemini</span>
            <span>🚀 FastAPI</span>
            <span>📘 LLM</span>
            <span>🔗 LangChain</span>
            <span>✨ Sage Copilot</span>
            <span>🟢 Node.js</span>
            <span>🤖 ChatGPT</span>
            <span>👥 CrewAI</span>
            <span>🔥 PyTorch</span>

            <span>🤗 HuggingFace</span>
            <span>⚡ Gemini</span>
            <span>🚀 FastAPI</span>
            <span>📘 LLM</span>
            <span>🔗 LangChain</span>
            <span>✨ Sage Copilot</span>
            <span>🟢 Node.js</span>
            <span>🤖 ChatGPT</span>
            <span>👥 CrewAI</span>
            <span>🔥 PyTorch</span>

          </div>
        </div>
      </div>

    </section>
  );
}

export default HeroSection;