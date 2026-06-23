function ImportantLinksSection() {
  return (
    <section className="bg-black py-10">
      <div className="max-w-[1080px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-white text-[20px] font-bold mb-8">
          Important Links
        </h2>

        <div className="flex gap-5">

          {/* Left Side */}
          <div className="w-[165px] flex-shrink-0">
            <h3 className="text-white text-[12px] font-semibold leading-6">
              For working professionals
            </h3>
          </div>

          {/* Right Side */}
          <div className="flex-1">

            {/* Section 1 */}
            <h4 className="text-white text-[13px] font-semibold mb-3">
              IIT Certification - Data Analytics
            </h4>

            <div className="space-y-1 mb-4">
              <a href="#" className="block text-[13px] text-gray-300 underline">
                Professional Certification in Data Analytics with GenAI by Vishlesan i-hub, IIT Patna
              </a>

              <a href="#" className="block text-[13px] text-gray-300 underline">
                PG Certification in Data Analytics with GenAI by E&ICT Academy, IIT Guwahati
              </a>

              <a href="#" className="block text-[13px] text-gray-300 underline">
                Professional Certification in Data Analytics with GenAI by IITM Pravartak, TIH IIT Madras
              </a>
            </div>

            {/* Section 2 */}
            <h4 className="text-white text-[13px] font-semibold mb-3">
              Job bootcamp - Data Analytics
            </h4>

            <div className="space-y-2 mb-5">
              <a href="#" className="block text-[13px] text-gray-300 underline">
                Data Analytics with GenAI Program by Coding Ninjas Job Bootcamp
              </a>

              <a href="#" className="block text-[13px] text-gray-300 underline">
                Data Analytics with GenAI Program by IBM and Microsoft PL-300 Certification
              </a>
            </div>

            {/* Section 3 */}
            <h4 className="text-white text-[13px] font-semibold mb-3">
              Certification - Generative AI
            </h4>

            <div className="space-y-2 mb-5">
              <a href="#" className="block text-[13px] text-gray-300 underline">
                Advanced Certification in GenAI & Multi Agent Systems by IBM
              </a>

              <a href="#" className="block text-[13px] text-gray-300 underline">
                Advanced Certification in GenAI and Multi-Agent Systems Program
              </a>
            </div>

            {/* Section 4 */}
            <h4 className="text-white text-[13px] font-semibold mb-3">
              IIT Certification - Generative AI
            </h4>

            <div className="space-y-2 mb-5">
              <a href="#" className="block text-[13px] text-gray-300 underline">
                Advanced Certification in GenAI for Non-Tech Professionals
              </a>
            </div>

            {/* Section 5 */}
            <h4 className="text-white text-[13px] font-semibold mb-3">
              Job bootcamp - Software Development
            </h4>

            <div className="space-y-2 mb-5">
              <a href="#" className="block text-[13px] text-gray-300 underline">
                Software Development with GenAI Program by Coding Ninjas
              </a>
            </div>

            {/* Section 6 */}
            <h4 className="text-white text-[13px] font-semibold mb-3">
              Job bootcamp - Data Science
            </h4>

            <div className="space-y-2">
              <a href="#" className="block text-[13px] text-gray-300 underline">
                Data Science with GenAI Program by Coding Ninjas
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ImportantLinksSection;