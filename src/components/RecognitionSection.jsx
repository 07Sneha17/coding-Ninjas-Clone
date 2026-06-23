import RecognitionCard from "../assets/images/recognition-card.png";

function RecognitionSection() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-[1080px] mx-auto px-6">

        {/* Heading */}
        <h2
          className="
            text-white
            text-[36px]
            font-bold
            mb-10
          "
        >
          We are recognised, trusted, accredited!
        </h2>

        {/* Full Cropped Card Image */}
        <img
          src={RecognitionCard}
          alt="Recognition"
          className="
            w-full
            rounded-[28px]
            object-cover
          "
        />

      </div>
    </section>
  );
}

export default RecognitionSection;