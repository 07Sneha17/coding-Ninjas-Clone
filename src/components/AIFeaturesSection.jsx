import { Box } from "lucide-react";
import NinjaAI from "../assets/images/NinjaAI.png";

function AIFeaturesSection() {
  return (
    <section className="bg-black pt-12 pb-16">
      <div className="max-w-[1090px] mx-auto px-6">

        {/* Heading */}
        <h2
          className="
            text-white
            text-[32px]
            font-bold
            leading-tight
            mb-6
          "
        >
          Step into the next generation of learning
        </h2>

        {/* Main Image */}
        <div
          className="
            relative
            rounded-[32px]
            overflow-hidden
            border border-white/10
            mb-10
          "
        >
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_center,rgba(255,106,0,.25),transparent_70%)]
            "
          />

          <img
            src={NinjaAI}
            alt="Ninja AI"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div
            className="
              h-[180px]
              rounded-[28px]
              border border-white/10
              bg-gradient-to-r
              from-[#2a0a00]
              via-[#0d0d0d]
              to-[#0d0d0d]
              p-5
            "
          >
            <Box
              className="text-white mb-5"
              size={22}
            />

           <h3 className="text-white text-[20px] font-bold mb-3">
              Get instant Doubt Support
            </h3>

            <p className="text-gray-400 text-[14px] leading-7">
              24/7 support with our Teaching assistants &
              Ninja AI
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="
              h-[180px]
              rounded-[28px]
              border border-white/10
              bg-gradient-to-r
              from-[#2a0a00]
              via-[#0d0d0d]
              to-[#0d0d0d]
              p-5
            "
          >
            <Box
              className="text-white mb-5"
              size={22}
            />

            <h3 className="text-white text-[20px] font-bold mb-3">
              Interview prep like a pro with AI
            </h3>

            <p className="text-gray-400 text-[14px] leading-7">
              Practice interviews, refine your resume,
              and improve with AI-powered feedback.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AIFeaturesSection;