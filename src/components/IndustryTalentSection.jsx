import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import card4 from "../assets/images/card4.png";
import card5 from "../assets/images/card5.png";
import card6 from "../assets/images/card6.png";
import card7 from "../assets/images/card7.png";
import card8 from "../assets/images/card8.png";
import card9 from "../assets/images/card9.png";

const cards = [
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
];

const duplicatedCards = [...cards, ...cards];

function IndustryTalentSection() {
  return (
   <section className="bg-black pt-0 pb-6 overflow-hidden">

      <div className="max-w-[1090px] mx-auto px-6">

        <p
          className="
            text-[#8A8A8A]
            uppercase
            tracking-[2px]
            text-sm
            font-semibold
            mb-4
          "
        >
          COMMUNITY EXCLUSIVE
        </p>

        <h2
          className="
            text-white
            text-[32px]
            leading-[1.1]
            font-bold
            mb-10
          "
        >
          Weekly chats with top industry talent
        </h2>

      </div>

      <div className="relative">

        {/* Left Fade */}
        <div className="absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-black to-transparent"></div>

        {/* Right Fade */}
        <div className="absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-black to-transparent"></div>

        <div className="marquee-track">

          {duplicatedCards.map((card, index) => (
            <img
              key={index}
              src={card}
              alt=""
              className="
                w-[280px]
                flex-shrink-0
              "
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default IndustryTalentSection;