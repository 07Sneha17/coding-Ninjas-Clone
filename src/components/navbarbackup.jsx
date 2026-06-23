import { useRef, useState } from "react";

function Navbar() {
  const [showWorking, setShowWorking] = useState(false);
  const [showCollege, setShowCollege] = useState(false);
  const [activeDomain, setActiveDomain] = useState("Data Analytics");

  const closeTimer = useRef(null);

  return (
    <nav className="bg-[#111111] text-white flex justify-between items-center px-14 py-5 relative">
      {/* Logo */}
      <h1 className="text-4xl font-bold">
        coding<span className="text-gray-400">ninjas</span>
      </h1>

      {/* Menu */}
      <div className="flex gap-20 text-xl font-medium">
        {/* Working Professionals */}
        <div
          className="relative"
          onMouseEnter={() => {
            clearTimeout(closeTimer.current);
            setShowWorking(true);
          }}
          onMouseLeave={() => {
            closeTimer.current = setTimeout(() => {
              setShowWorking(false);
            }, 300);
          }}
        >
          <button className="cursor-pointer">
            For working professionals ▼
          </button>

          {showWorking && (
            <div
              className="absolute top-[100%] mt-2 left-1/2 -translate-x-1/2
              w-[1000px] max-w-[95vw]
              bg-[#111111]
              rounded-b-[28px]
              shadow-2xl
              z-50 overflow-hidden
              border border-white/10"
            >
              <div className="grid grid-cols-[240px_1fr_1fr] min-h-[450px]">
                {/* Left Column */}
                <div className="bg-[#171717] p-7 border-r border-white/10">
                  <h3 className="text-white text-[22px] font-semibold mb-6">
                    Domain
                  </h3>

                  <div className="space-y-3">
                    {[
                      "Data Analytics",
                      "Generative AI",
                      "Software Development",
                      "Data Science",
                    ].map((item, index) => (
                      <div
                        key={index}
                        onClick={() => setActiveDomain(item)}
                       className={`px-5 py-4 rounded-2xl flex justify-between items-center cursor-pointer ${
                         activeDomain === item
                         ? "bg-[#2b2b2b]"
                        : "hover:bg-[#2b2b2b]"
                        }`}
                      >
                        <span className="text-white text-[16px]">
                          {item}
                        </span>

                        <span className="text-white text-xl">›</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Middle Column */}
               <div className="p-7 border-r border-white/10">

  {activeDomain === "Data Analytics" && (
    <>
      <h3 className="text-white text-[22px] font-semibold mb-6">
        IIT Certification
      </h3>

      <div className="space-y-1">

        <div className="flex gap-4 py-5 border-b border-white/10 cursor-pointer">
          <div className="w-11 h-11 rounded-xl bg-[#2a2a2a]" />

          <div>
            <p className="text-[#ff7b45] text-[15px] font-semibold">
              E&ICT Academy, IIT Guwahati
            </p>

            <h4 className="text-white text-[17px] mt-2 leading-snug">
              PG Certification in Data Analytics with GenAI
            </h4>

            <span className="inline-block mt-3 px-3 py-1 rounded-full bg-[#2a2a2a] text-white text-xs">
              Enrolment closed
            </span>
          </div>
        </div>

        <div className="flex gap-4 py-5 cursor-pointer">
          <div className="w-11 h-11 rounded-xl bg-[#2a2a2a]" />

          <div>
            <p className="text-[#ff7b45] text-[15px] font-semibold">
              IITM Pravartak, TIH IIT Madras
            </p>

            <h4 className="text-white text-[17px] mt-2 leading-snug">
              Professional Certification in Data Analytics
            </h4>

            <span className="inline-block mt-3 px-3 py-1 rounded-full bg-[#2a2a2a] text-white text-xs">
              Enrolment closed
            </span>
          </div>
        </div>

      </div>
    </>
  )}

  {activeDomain === "Generative AI" && (
    <>
      <h3 className="text-white text-[22px] font-semibold mb-6">
        Certification
      </h3>

      <div className="space-y-6">

        <div>
          <p className="text-[#ff7b45] text-[15px] font-semibold">
            Coding Ninjas
          </p>

          <h4 className="text-white text-[17px] mt-2">
            Advanced Certification in GenAI and Multi-Agent Systems Program
          </h4>
        </div>

        <div>
          <p className="text-[#ff7b45] text-[15px] font-semibold">
            IBM Certification
          </p>

          <h4 className="text-white text-[17px] mt-2">
            Advanced Certification in GenAI & Multi Agent Systems
          </h4>
        </div>

      </div>
    </>
  )}
  {activeDomain === "Software Development" && (
  <>
    <h3 className="text-white text-[22px] font-semibold mb-6">
      Job Bootcamp
    </h3>

    <div>
      <p className="text-[#ff7b45] text-[15px] font-semibold">
        Coding Ninjas
      </p>

      <h4 className="text-white text-[17px] mt-2 leading-snug">
        Software Development with GenAI Program by Coding Ninjas Job Bootcamp
      </h4>
    </div>
  </>
)}
{activeDomain === "Data Science" && (
  <>
    <h3 className="text-white text-[22px] font-semibold mb-6">
      Job Bootcamp
    </h3>

    <div>
      <p className="text-[#ff7b45] text-[15px] font-semibold">
        Coding Ninjas
      </p>

      <h4 className="text-white text-[17px] mt-2 leading-snug">
        Data Science with GenAI Program by Coding Ninjas Job Bootcamp
      </h4>
    </div>
  </>
)}

</div>

                {/* Right Column */}
               <div className="p-7">
  {activeDomain === "Data Analytics" && (
    <>
                  <h3 className="text-white text-[22px] font-semibold mb-6">
                    Job Bootcamp
                  </h3>

                  <div className="space-y-1">
                    {/* Card 1 */}
                    <div className="flex gap-4 py-5 border-b border-white/10 cursor-pointer">
                      <div className="w-11 h-11 rounded-xl bg-[#2a2a2a]" />

                      <div>
                        <p className="text-[#ff7b45] text-[15px] font-semibold">
                          Coding Ninjas
                        </p>

                        <h4 className="text-white text-[17px] mt-2 leading-snug">
                          Data Analytics with GenAI Program by Coding Ninjas
                          Job Bootcamp
                        </h4>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex gap-4 py-5 cursor-pointer">
                      <div className="w-11 h-11 rounded-xl bg-[#2a2a2a]" />

                      <div>
                        <p className="text-[#ff7b45] text-[15px] font-semibold">
                          IBM and Microsoft PL-300 Certification
                        </p>

                        <h4 className="text-white text-[17px] mt-2 leading-snug">
                          Industry Ready Program
                        </h4>
                      </div>
                    </div>
                  </div>
                      </>
  )}
    {activeDomain === "Generative AI" && (
    <>
      <h3 className="text-white text-[22px] font-semibold mb-6">
        IIT Certification
      </h3>

      <div>
        <p className="text-[#ff7b45] text-[15px] font-semibold">
          IITM Pravartak, TIH IIT Madras
        </p>

        <h4 className="text-white text-[17px] mt-2 leading-snug">
          Advanced Certification in GenAI for Non-Tech Professionals
        </h4>

        <span className="inline-block mt-3 px-3 py-1 rounded-full bg-[#2a2a2a] text-white text-xs">
          Enrolment closed
        </span>
      </div>
    </>
  )}
    {activeDomain === "Software Development" && <></>}

  {activeDomain === "Data Science" && <></>}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* College Students */}
        <div
          className="relative"
          onMouseEnter={() => setShowCollege(true)}
          onMouseLeave={() => {
            setTimeout(() => {
              setShowCollege(false);
            }, 150);
          }}
        >
          <button className="cursor-pointer">
            For College Students ▼
          </button>

          {showCollege && (
            <div className="absolute top-12 left-0 bg-white text-black p-6 rounded-xl shadow-2xl w-[300px] z-50">
              College Students Menu
            </div>
          )}
        </div>
      </div>

      {/* Login */}
      <button className="bg-orange-500 px-8 py-3 rounded-xl font-semibold text-lg">
        Login
      </button>
    </nav>
  );
}

export default Navbar;