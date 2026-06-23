import { Play } from "lucide-react";
import AbhishekVideo from "../assets/images/AbhishekVideo.png";

function SuccessStorySection() {
  return (
    <section className="bg-black pb-20">
      <div className="max-w-[1080px] mx-auto px-6">

        {/* Testimonial Card */}
        <div className="relative rounded-[32px] border border-purple-500/40 bg-[#0b0b0b] overflow-hidden">

          {/* Purple glow */}
          <div
            className="
              absolute top-0 left-1/2 -translate-x-1/2
              w-[350px] h-[120px]
              bg-purple-600/20 blur-[80px]
            "
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 p-5 lg:p-5">

            {/* Left Side */}
            <div className="relative w-full lg:w-[550px] flex-shrink-0">

              <img
                src={AbhishekVideo}
                alt="Abhishek"
                className="
                  w-full
                  h-[250px]
                  lg:h-[340px]
                  object-cover
                  rounded-[28px]
                "
              />

              {/* Watch Video */}
              <div className="absolute top-6 left-6 flex items-center gap-3 text-white">

                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Play
                    className="w-5 h-5 fill-white text-white ml-0.5"
                  />
                </div>

                <span className="font-semibold text-[18px]">
                  Watch video
                </span>
              </div>

              {/* Bottom Left */}
              <div className="absolute bottom-6 left-6">

                <p className="text-white text-[16px] font-semibold">
                  Abhishek
                </p>

                <h3 className="text-orange-500 text-[30px] font-bold leading-none">
                  Optum
                </h3>

              </div>
            </div>

            {/* Right Side */}
            <div className="flex-1">

              <h2
                className="
                  text-white
                  font-semibold
                  text-[26px]
                  leading-[1.35]
                  max-w-[360px]
                "
              >
                Abhishek believes mastering fundamental is key in becoming a good AI/ML Engineer
              </h2>

            </div>

          </div>
        </div>

        {/* Next Section Heading */}
        <h4
          className="
            text-white
            font-bold
            text-[24px]
            mt-20
          "
        >
          AI infused curriculum curated by experts
        </h4>

      </div>
    </section>
  );
}

export default SuccessStorySection;