import JobBoard from "../assets/images/JobBoard.png";

function CareerSupportSection() {
  return (
    <section className="bg-black pt-6 pb-0">
      <div className="max-w-[1090px] mx-auto px-6">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left Side */}
          <div className="flex-1 max-w-[520px]">

            {/* Block 1 */}
            <div className="pb-12 border-b border-white/10">

              <h3 className="text-white font-bold text-[20px] mb-4">
                Curated Job boards
              </h3>

              <p className="text-gray-400 text-[18px] leading-[1.6]">
                400+ live jobs & new jobs added everyday
              </p>

            </div>

            {/* Block 2 */}
            <div className="pt-12">

              <h3 className="text-white font-bold text-[20px] mb-4">
                Resume, LinkedIn and Github profile building
              </h3>

              <p className="text-gray-400 text-[18px] leading-[1.6]">
                Get tailored feedback on improving all your profile
              </p>

            </div>

          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[700px]">

            <div
              className="
                bg-[#0a0a0a]
                border border-white/10
                rounded-[28px]
                p-3
                overflow-hidden
              "
            >
              <img
                src={JobBoard}
                alt="Job Board"
                className="
                  w-full
                  h-[430px]
                  object-cover
                  rounded-[22px]
                "
              />
            </div>

          </div>

        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">

          <button
            className="
              bg-[#FF7A3D]
              hover:bg-[#ff8a55]
              transition-all
              duration-300
              text-white
              font-semibold
              text-[18px]
              px-6
              py-3
              rounded-2xl
            "
          >
            Explore courses
          </button>

        </div>

      </div>
    </section>
  );
}

export default CareerSupportSection;