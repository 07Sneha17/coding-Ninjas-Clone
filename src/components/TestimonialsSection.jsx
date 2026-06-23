import StudentReview from "../assets/images/Student-review.webp";
import SalesforceLogo from "../assets/logos/salesforce-logo.webp";

function TestimonialSection() {
  return (
    <section className="bg-black pt-16 pb-12">
      <div className="max-w-[1090px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-white text-[32px] font-bold mb-12">
          Our students loved an AI first certification
        </h2>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

          {/* Left Image */}
          <div className="lg:w-[45%] flex justify-center">
            <img
              src={StudentReview}
              alt="Student"
              className="w-full max-w-[380px] object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-[55%]">

            <p
              className="
                text-white
                text-[18px]
                leading-[1.55]
                font-normal
                max-w-[480px]
              "
            >
              I am immensely gratified by the GenAI program at Coding Ninjas,
              which elevated my understanding from fundamentals to advanced
              mastery. They don't merely teach technology; they instil a lasting
              passion and intellectual confidence.
            </p>

            <div className="mt-8">
              <h5 className="text-white text-[20px] font-bold">
                Vaibhav Dubey
              </h5>

              <p className="text-white/80 text-[16px] mt-2">
                SMTS at Salesforce
              </p>

              <img
                src={SalesforceLogo}
                alt="Salesforce"
                className="h-12 mt-4"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default TestimonialSection;