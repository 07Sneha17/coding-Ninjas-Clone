import InfoEdgeNews from "../assets/images/info-edge.png";
import CXOLogo from "../assets/images/cxo1-logo.png";
import TOILogo from "../assets/images/toi1-logo.png";
import ETLogo from "../assets/images/ect1-logo.png";

function InTheNewsSection() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-[1080px] mx-auto px-6">

        {/* Heading */}
        <h2
          className="
            text-white
            text-[36px]
            font-bold
            mb-8
          "
        >
          In The News
        </h2>

        {/* Layout */}
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-6">

          {/* Left Side */}
          <div>
            <img
              src={InfoEdgeNews}
              alt="InfoEdge News"
              className="
                w-full
                rounded-[24px]
                object-cover
              "
            />
          </div>

          {/* Right Side Cards */}
          <div className="flex flex-col gap-5">

            {/* Card 1 */}
            <div
              className="
                bg-[#111]
                border border-white/10
                rounded-[24px]
                p-5
              "
            >
              <img
                src={CXOLogo}
                alt="CXO Today"
                className="h-8 mb-4"
              />

              <p
                className="
                  text-white
                  text-[15px]
                  leading-[1.5]
                "
              >
                Coding Ninjas Unconventional Approach Upskills
                1L Students, Yields 2.2x Salary Increase
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="
                bg-[#111]
                border border-white/10
                rounded-[24px]
                p-5
              "
            >
              <img
                src={TOILogo}
                alt="Times of India"
                className="h-8 mb-4"
              />

              <p
                className="
                  text-white
                  text-[15px]
                  leading-[1.5]
                "
              >
                Young professionals must embrace continuous
                upskilling in the age of AI
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="
                bg-[#111]
                border border-white/10
                rounded-[24px]
                p-5
              "
            >
              <img
                src={ETLogo}
                alt="Economic Times"
                className="h-8 mb-4"
              />

              <p
                className="
                  text-white
                  text-[15px]
                  leading-[1.5]
                "
              >
                Tech grads sign up for 'bootcamps' to be more
                employable
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default InTheNewsSection;