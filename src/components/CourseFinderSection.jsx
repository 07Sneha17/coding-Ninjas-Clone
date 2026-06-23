
import { useRef, useState, useEffect } from "react";

function CourseFinderSection() {
  const [experience, setExperience] = useState("");
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [errors, setErrors] = useState({});

  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState("Select your options/choices");
  const [openUpward, setOpenUpward] = useState(false);
  useEffect(() => {
  const savedData = localStorage.getItem("courseFinderData");

  if (savedData) {
    const data = JSON.parse(savedData);

    setExperience(data.experience || "");
    setTopic(data.topic || "Select your options/choices");
    setName(data.name || "");
    setPhone(data.phone || "");
    setEmail(data.email || "");
  }
}, []);

  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    if (!dropdownRef.current) return;

    const rect = dropdownRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const estimatedDropdownHeight = 220;

    setOpenUpward(spaceBelow < estimatedDropdownHeight);
    setOpen((prev) => !prev);
  };
const handleSubmit = () => {
  const newErrors = {};

  if (!experience) newErrors.experience = "Please select experience";
  if (topic === "Select your options/choices")
    newErrors.topic = "Please select topic";
  if (!name.trim()) newErrors.name = "Name is required";
  if (!phone.trim()) {
  newErrors.phone = "Phone number is required";
}
  if (!email.trim())
    newErrors.email = "Email is required";

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
  const formData = {
    experience,
    topic,
    name,
    phone,
    email,
  };

  localStorage.setItem(
    "courseFinderData",
    JSON.stringify(formData)
  );
 setExperience("");
  setTopic("Select your options/choices");
  setName("");
  setPhone("");
  setEmail("");
  setErrors({});


}
};

  return (
    
    <section className="bg-black text-white pt-10 pb-0">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-50 items-start">

        {/* Left Side */}
        <div className="pt-8">
          <h2 className="text-3xl font-bold leading-tight mb-32 max-w-[400px]">
            Ready to become a top talent in today's job market
          </h2>

          <div className="space-y-8 mt-12">

            <div className="bg-gradient-to-r from-[#1a1a1a] to-[#612300] border border-white/10 rounded-3xl px-6 py-5 rotate-[-5deg] w-[430px]">
              <h3 className="text-2xl font-semibold">
                Data Scientist
              </h3>
            </div>

            <div className="bg-gradient-to-r from-[#0f0f0f] to-[#7a4a14] border border-white/10 rounded-3xl px-6 py-5 rotate-[4deg] w-[430px]">
              <h3 className="text-2xl font-semibold">
                Front End Dev
              </h3>
            </div>

            <div className="bg-gradient-to-r from-[#320000] to-[#700000] border border-white/10 rounded-3xl px-6 py-5 rotate-[-3deg] w-[430px]">
              <h3 className="text-2xl font-semibold">
                Full Stack Developer
              </h3>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-[40px]"></div>

          {/* Form Card */}
          <div
            className="relative
                       max-w-[470px]
                       ml-auto
                       bg-gradient-to-br
                       from-[#2b2323]
                       via-[#7a4a2a]
                       to-[#242424]
                       rounded-[28px]
                       p-6
                       border border-white/10"
          >
            <h3 className="text-[18px] font-bold mb-6">
              Let's find the right course for you
            </h3>

            <p className="text-sm text-white mb-3">
              Experience
            </p>

            <div className="space-y-3 mb-6">

              <label className="flex items-center gap-4">
                <input
  type="radio"
  name="exp"
  value="Working Professional - Technical Roles"
  checked={experience === "Working Professional - Technical Roles"}
  onChange={(e) =>
    setExperience(e.target.value)
  }
/>
                <span className="font-normal">
                  Working Professional - Technical Roles
                </span>
              </label>

              <label className="flex items-center gap-4">
              <input
  type="radio"
  name="exp"
  value="Working Professional - Non Technical"
  checked={experience === "Working Professional - Non Technical"}
  onChange={(e) => setExperience(e.target.value)}
/>
                <span className="font-normal">
                  Working Professional - Non Technical
                </span>
              </label>

              <label className="flex items-center gap-4">
                <input
  type="radio"
  name="exp"
  value="College Student - Final Year"
  checked={experience === "College Student - Final Year"}
  onChange={(e) => setExperience(e.target.value)}
/>
                <span className="font-normal">
                  College Student - Final Year
                </span>
              </label>

              <label className="flex items-center gap-4">
               <input
  type="radio"
  name="exp"
  value="College Student - 1st to Pre-final Year"
  checked={experience === "College Student - 1st to Pre-final Year"}
  onChange={(e) => setExperience(e.target.value)}
/>
                <span className="font-normal">
                  College Student - 1st to Pre-final Year
                </span>
              </label>

              <label className="flex items-center gap-4">
                <input
  type="radio"
  name="exp"
  value="Others"
  checked={experience === "Others"}
  onChange={(e) => setExperience(e.target.value)}
/>
                <span className="font-normal">
                  Others
                </span>
              </label>
{errors.experience && (
  <p className="text-red-500 text-sm mt-2">
    {errors.experience}
  </p>
)}
            </div>

            {/* Custom Dropdown */}
            <div className="relative mb-6" ref={dropdownRef}>

              <label className="block text-sm text-white mb-2">
                Select topic of interest
              </label>

              <button
                type="button"
                onClick={handleDropdownToggle}
                className="w-full bg-[#1a1a1a]
                           border border-white/10
                           rounded-xl px-4 py-3
                           flex justify-between items-center"
              >
                <span className="text-gray-300">
                  {topic}
                </span>

                <span
                  className={`transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {open && (
                <div
                  className={`absolute left-0 w-full z-50
                              bg-[#111111]
                              border border-white/10
                              rounded-xl overflow-hidden shadow-2xl
                              ${
                                openUpward
                                  ? "bottom-full mb-2"
                                  : "top-full mt-2"
                              }`}
                >
                  {[
                    "Software Development",
                    "Data Analytics",
                    "Data Structures and Algorithms",
                  ].map((item) => (
                    <div
                      key={item}
                      onClick={() => {
                        setTopic(item);
                        setOpen(false);
                      }}
                      className="px-5 py-5 text-white
                                 cursor-pointer
                                 hover:bg-[#2a2a2a]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
              {errors.topic && (
  <p className="text-red-500 text-sm mt-1">
    {errors.topic}
  </p>
)}
            </div>

            <label className="text-sm text-white">
              Name
            </label>
{errors.name && (
  <p className="text-red-500 text-sm mt-1">
    {errors.name}
  </p>
)}
           <input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Enter name"
  className={`w-full mt-1 mb-3 bg-[#1a1a1a]
              border ${
                errors.name
                  ? "border-red-500"
                  : "border-white/10"
              }
              rounded-xl px-4 py-3`}
/>

            <label className="text-sm text-white">
              Phone Number
            </label>

            <input
  type="text"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  placeholder="Enter phone number"
  className={`w-full mt-1 mb-3 bg-[#1a1a1a]
    border ${
      errors.phone ? "border-red-500" : "border-white/10"
    }
    rounded-xl px-4 py-3`}
/>
            {errors.phone && (
  <p className="text-red-500 text-sm mt-1">
    {errors.phone}
  </p>
)}

            <label className="text-sm text-white">
              Email
            </label>

            <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Enter email"
              className={`w-full mt-1 mb-3 bg-[#1a1a1a]
            border ${
              errors.email
                ? "border-red-500"
                : "border-white/10"
            }
            rounded-xl px-4 py-3`}
            />
            {errors.email && (
  <p className="text-red-500 text-sm mt-1">
    {errors.email}
  </p>
)}

           <button
  type="button"
  onClick={handleSubmit}
  className="w-full bg-[#f9733d]
             hover:bg-[#ff7b45]
             py-4 rounded-xl
             text-xl font-semibold"
>
  Find your course
</button>

            <p className="mt-4 text-[11px] text-gray-400 leading-relaxed">
              I authorise Coding Ninjas to contact me with course updates &
              offers via Email/SMS/Whatsapp/Call. I have read and agree to{" "}
              <span className="underline cursor-pointer">
                Privacy Policy
              </span>{" "}
              &{" "}
              <span className="underline cursor-pointer">
                Terms of use
              </span>
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CourseFinderSection;