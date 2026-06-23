import hero from "../assets/images/hero2.png";

import huggingface from "../assets/logos/huggingFace.webp";
import keras from "../assets/logos/Keras.png";
import gemini from "../assets/logos/Gemini.webp";
import nodejs from "../assets/logos/nodejs.webp";
import pytorch from "../assets/logos/pytorch.webp";
import chatgpt from "../assets/logos/chatgpt.webp";

function HeroSection() {
  const logos = [
    { img: chatgpt, name: "ChatGPT" },
    { img: pytorch, name: "PyTorch" },
    { img: huggingface, name: "Hugging Face" },
    { img: keras, name: "Keras" },
    { img: gemini, name: "Gemini" },
    { img: nodejs, name: "Node.js" },
  ];

  return (
    <section className="relative bg-black text-white overflow-hidden">

      {/* Hero */}
      <div className="relative h-[500px]">

        {/* Background */}
        <img
          src={hero}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center pt-14">

          <div className="px-6 py-3 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-300">
            ⚡ Ready to 10X your career!
          </div>

          <h1 className="mt-10 text-4xl md:text-[50px] font-bold leading-[1.1]">
            Give your career an
            <br />
            <span className="bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              unfair AI advantage
            </span>
          </h1>

          <p className="mt-20 text-xl text-gray-200">
            The right AI tools integrated into your curriculum
          </p>
        </div>

        {/* Logo Strip INSIDE FIRST SCREEN */}
        <div className="absolute bottom-8 left-0 w-full overflow-hidden z-20">

          <div className="flex animate-marquee gap-16 whitespace-nowrap">

            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-3"
              >
                <img
                  src={logo.img}
                  alt={logo.name}
                  className="w-12 h-12 object-contain"
                />
                <span className="text-2xl font-semibold text-white">
                  {logo.name}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;