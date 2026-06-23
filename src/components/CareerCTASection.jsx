import CareerTransform from "../assets/images/career-transform.png";

function CareerCTASection() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-[1440px] mx-auto">

        <div className="relative overflow-hidden rounded-[8px]">

          <img
            src={CareerTransform}
            alt="Career Transform"
            className="w-full object-cover"
          />

       

        </div>

      </div>
    </section>
  );
}

export default CareerCTASection;