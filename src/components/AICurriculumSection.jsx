import AITools from "../assets/images/AITools.png";

function AICurriculumSection() {
  return (
  
      <section className="bg-black pb-28">
  <div className="w-full px-16 lg:px-26 xl:px-34">
    <div className="max-w-[1180px] mx-auto">

        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mt-12">

          {/* Left Side */}
          <div className="w-[500px]">

            {/* Block 1 */}
           <div className="pb-10 border-b border-white/10 max-w-[520px]">

              <h3 className="text-white font-bold text-[24px] mb-5">
                Master key AI tools in your domain
              </h3>

             <p className="text-gray-400 text-[16px] leading-[1.6] max-w-[390px]">
  Learn the tools that matter, integrate them into your workflow.
</p>

            </div>

            {/* Block 2 */}
            <div className="pt-10">

              <h3 className="text-white font-bold text-[24px] mb-5">
                Expert faculty
              </h3>

              <p className="text-gray-400 text-[16px] leading-[1.6] max-w-[390px]">
  Learn the tools that matter, integrate them into your workflow.
</p>

            </div>

          </div>

          {/* Right Side */}
          <div className="w-[540px]">

            <div
              className="
                rounded-[24px]
                border border-white/10
                bg-[#0b0b0b]
                p-3
                overflow-hidden
              "
            >
              <img
                src={AITools}
                alt="AI Tools"
                className="
                  w-full
                  h-[280px]
                  object-cover
                  rounded-[18px]
                "
              />
            </div>

          </div>

        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">

          <button
            className="
              bg-[#FF7A3D]
              hover:bg-[#ff8a55]
              transition-all
              duration-300
              text-white
              font-semibold
              text-[16px]
              px-8
              py-4
              rounded-[14px]
            "
          >
            Explore courses
          </button>

        </div>

      </div>
      </div>
    </section>
  );
}

export default AICurriculumSection;