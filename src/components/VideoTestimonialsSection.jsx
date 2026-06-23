import Testimonial1 from "../assets/images/Testimonial1.png";
import Testimonial2 from "../assets/images/Testimonial2.png";

function VideoTestimonialsSection() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-[1090px] mx-auto px-6">

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          <div
            className="
              border border-white/10
              rounded-[28px]
              overflow-hidden
              bg-[#0b0b0b]
            "
          >
            <img
              src={Testimonial1}
              alt="Student testimonial"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="
              border border-white/10
              rounded-[28px]
              overflow-hidden
              bg-[#0b0b0b]
            "
          >
            <img
              src={Testimonial2}
              alt="Student testimonial"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">

          <button
            className="
              bg-white
              text-black
              font-medium
              text-[18px]
              px-6
              py-2
             
                 rounded-2xl
              hover:bg-gray-100
              transition-all
            "
          >
            View more testimonials
          </button>

        </div>

      </div>
    </section>
  );
}

export default VideoTestimonialsSection;