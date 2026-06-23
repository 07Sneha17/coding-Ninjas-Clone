import paymentImage from "../assets/images/payment-row1.png";

function LastSection() {
  return (
    <section className="bg-black pt-8 pb-12 overflow-hidden">
      <div className="max-w-[1080px] mx-auto px-6">

        {/* Links Section */}
        <div className="flex gap-12">

          {/* Left Side */}
          <div className="w-[180px] shrink-0">
            <h3 className="text-white text-[14px] font-semibold">
              For College Students
            </h3>
          </div>

          {/* Right Side */}
          <div className="flex-1 space-y-5">

            <div>
              <h4 className="text-white text-[14px] font-semibold mb-2">
                IIT Certification - Data Analytics
              </h4>

              <a
                href="#"
                className="block text-gray-300 underline text-[13px]"
              >
                Training and Internship Certification in Data Analytics
                with GenAI by Vishlesan i-hub, IIT Patna
              </a>
            </div>

            <div>
              <h4 className="text-white text-[14px] font-semibold mb-2">
                IIT Certification - Data Analytics
              </h4>

              <a
                href="#"
                className="block text-gray-300 underline text-[13px]"
              >
                Advanced Certification in Data Analytics with GenAI
                by iHub, IIT Mandi
              </a>
            </div>

            <div>
              <h4 className="text-white text-[14px] font-semibold mb-2">
                IIT Certification - Software Development
              </h4>

              <a
                href="#"
                className="block text-gray-300 underline text-[13px]"
              >
                Advanced Certification in Software Development
                with GenAI and DSA
              </a>
            </div>

            <div>
              <h4 className="text-white text-[14px] font-semibold mb-2">
                IIT Certification - Data Structures and Algorithms
              </h4>

              <a
                href="#"
                className="block text-gray-300 underline text-[13px]"
              >
                Advanced Certification in Data Structures and Algorithms
              </a>
            </div>

          </div>
        </div>

        {/* Payment Section */}
        <div className="mt-10">
          <img
            src={paymentImage}
            alt="Payments"
            className="w-full"
          />
        </div>

        {/* Huge Background Text */}
        <div className="relative h-[120px] overflow-hidden mt-8">
          <h1
            className="
              absolute
              left-1/2
              -translate-x-1/2
              text-[180px]
              font-bold
              text-white/[0.04]
              whitespace-nowrap
              select-none
              leading-none
            "
          >
            Coding Ninjas
          </h1>
        </div>

      </div>
    </section>
  );
}

export default LastSection;