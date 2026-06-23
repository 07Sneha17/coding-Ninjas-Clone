import Student from "../assets/images/student-placement.png";

import Google from "../assets/logos/Google.webp";
import Swiggy from "../assets/logos/Swiggy.webp";
import Amazon from "../assets/logos/Amazon.webp";
import Netflix from "../assets/logos/Netflix.webp";
import Microsoft from "../assets/logos/Microsoft.webp";
import Zomato from "../assets/logos/Zomato.webp";
import Goldman from "../assets/logos/GoldmanSachs.webp";
import Flipkart from "../assets/logos/Flipkart.webp";
import Paypal from "../assets/logos/PayPal.webp";

function CareerTransformationSection() {
  const row1 = [
    Google,
    Swiggy,
    Amazon,
    Netflix,
    Microsoft,
  ];

  const row2 = [
    Netflix,
    Zomato,
    Goldman,
    Flipkart,
    Paypal,
  ];

  return (
   <section className="bg-black pt-0 pb-6 ">
      <div className="max-w-[1090px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-white text-[32px] font-bold mb-16">
          9+ years of transforming careers
        </h2>

        {/* Logos Row 1 */}
        <div className="grid grid-cols-5 items-center">
          {row1.map((logo, index) => (
            <div
              key={index}
              className="
                flex justify-center items-center
                py-7
                border-r border-white/15
                last:border-r-0
              "
            >
              <img
                src={logo}
                alt=""
                className="h-9 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Logos Row 2 */}
        <div className="grid grid-cols-5 items-center mb-14">
          {row2.map((logo, index) => (
            <div
              key={index}
              className="
                flex justify-center items-center
                py-7
                border-r border-white/15
                last:border-r-0
              "
            >
              <img
                src={logo}
                alt=""
                className="h-16 object-contain"
              />
            </div>
          ))}
        </div>

       {/* Placement Card Image */}
<div className="mt-12">
  <img
    src={Student}
    alt="Placement Stats"
    className="
      w-full
      rounded-[30px]
      border border-white/10
    "
  />
</div>

      </div>
    </section>
  );
}

export default CareerTransformationSection;