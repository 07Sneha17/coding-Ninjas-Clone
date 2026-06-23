import { Mail, Phone, MapPin } from "lucide-react";

import Logo from "../assets/images/footer-logo.png";
import BootcampLogo from "../assets/images/job-bootcamp.png";
import Code360Logo from "../assets/images/code360.png";

function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10">
      <div className="max-w-[1080px] mx-auto px-6">

        <div className="grid grid-cols-4 gap-14">

          {/* Left Column */}
          <div>

            <img
              src={Logo}
              alt=""
              className="w-[170px] mb-10"
            />

            <h3 className="text-white text-[16px] font-semibold mb-5">
              Contact us
            </h3>

            <div className="space-y-5 text-gray-300">

              <div className="flex gap-3">
                <Phone className="w-5 h-5 mt-1 text-gray-400" />
                <span className="text-[15px]">
                  1800-123-3598
                </span>
              </div>

              <div className="flex gap-3">
                <Mail className="w-5 h-5 mt-1 text-gray-400" />
                <span className="text-[15px]">
                  contact@codingninjas.com
                </span>
              </div>

              <div className="flex gap-3">
                <MapPin className="w-5 h-5 mt-1 text-gray-400" />
                <span className="text-[15px] leading-7">
                  Tower-C Unitech Cyber Park,
                  Sector 39,
                  Gurugram, Haryana
                </span>
              </div>

            </div>

            <h3 className="text-white text-[16px] font-semibold mt-12 mb-5">
              Our offerings
            </h3>

            <div className="space-y-5">
              <img
                src={BootcampLogo}
                alt=""
                className="w-[145px]"
              />

              <img
                src={Code360Logo}
                alt=""
                className="w-[130px]"
              />
            </div>

          </div>

          {/* Coding Ninjas */}
          <div>
            <h3 className="text-white text-[16px] font-semibold mb-6">
              Coding Ninjas
            </h3>

            <ul className="space-y-5 text-[15px] text-gray-300">
              <li>Careers</li>
              <li>Privacy policy</li>
              <li>Terms & conditions</li>
              <li>Pricing & refund policy</li>
              <li>Bug bounty</li>
              <li>Review</li>
              <li>Press release</li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-[16px] font-semibold mb-6">
              Products
            </h3>

            <ul className="space-y-5 text-[15px] text-gray-300">
              <li>Job Bootcamp</li>
              <li>Code 360</li>
              <li>Professional Certifications</li>
              <li>Student Certifications</li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white text-[16px] font-semibold mb-6">
              Community
            </h3>

            <ul className="space-y-5 text-[15px] text-gray-300">
              <li>10X Club</li>
              <li>Student Chapters</li>
              <li>Hire from us</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-14"></div>

      </div>
    </footer>
  );
}

export default Footer;