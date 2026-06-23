import CommunityImage from "../assets/images/CommunitySection.webp";

function CommunitySection() {
  return (
    <section className="bg-black pt-14 py-20">
      <div className="max-w-[1090px] mx-auto px-6">

        {/* Heading */}
        <h2
          className="
            text-white
            text-[38px]
            font-bold
            leading-[1.25]
            mb-16
            max-w-[620px]
          "
        >
          Access CN's premium Student community the 10X Club
        </h2>

        {/* Large Image */}
        <div
          className="
            rounded-[30px]
            border border-white/10
            overflow-hidden
            mb-10
          "
        >
          <img
            src={CommunityImage}
            alt="10X Club"
            className="w-full object-cover"
          />
        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-6">

          {/* Card 1 */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              border border-white/10
              bg-[#090909]
              p-6
            "
          >
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-purple-800/15
                via-transparent
                to-transparent
              "
            />

            <div className="relative z-10">

              <div className="text-white text-2xl mb-4">
                ⬡
              </div>

              <h3 className="text-white text-[18px] font-semibold mb-4">
                Weekly talks with CXO's
              </h3>

              <p className="text-gray-400 text-[16px] leading-relaxed">
                Learn from the best in the industry by interacting
                with top talent
              </p>

            </div>
          </div>

          {/* Card 2 */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border border-white/10
              bg-[#090909]
              p-6
            "
          >
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-orange-700/15
                via-transparent
                to-transparent
              "
            />

            <div className="relative z-10">

              <div className="text-white text-2xl mb-6">
                ⬡
              </div>

              <h3 className="text-white text-[20px] font-semibold mb-4">
                Workshops, Hackathons and more
              </h3>

              <p className="text-gray-400 text-[18px] leading-relaxed">
                Get a chance to network with peers and constantly
                improve your skillset
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CommunitySection;