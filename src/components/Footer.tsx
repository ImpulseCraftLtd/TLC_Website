import { useNavigate } from "react-router-dom"
import logo from "../assets/images/the-learning-craft-logo.png"
import { FaXTwitter, FaInstagram, FaLinkedinIn, FaFacebook, FaPaperPlane } from "react-icons/fa6"
import bg from "../assets/images/Frame 238.png"

const Footer = () => {
  const navigate = useNavigate();

  const resourceLinks: { label: string; path: string }[] = [
    { label: "TLC Curriculum", path: "/resources/curriculum-planner" },
    { label: "Conference Talks", path: "/foundation/pacsel" },
    { label: "Curriculum Coordinator's Academy", path: "/resources/curriculum-coordinator-academy" },
    { label: "TETA", path: "/resources/exceptional-teachers-academy" },
    { label: "Decoding Dyslexia", path: "/resources/how-to-teach-dyslexics" },
    { label: "Digital Literacy Curriculum", path: "/programs" },
    { label: "SEL Toolkit", path: "/resources/ndu-sel-toolkit" },
    { label: "Curriculum Training Manual", path: "/resources" },
  ];

  const involvedLinks: { label: string; path: string }[] = [
    { label: "Donate", path: "/foundation/payment" },
    { label: "Partner with Us", path: "/get-involved" }
  ];

  const generalLinks: { label: string; path: string }[] = [
    { label: "About Us", path: "/about" },
    { label: "Our Services", path: "/programs" },
    { label: "Contact Us", path: "/get-involved" },
    { label: "Our Team", path: "/about" },
    { label: "Child Policy", path: "/child-policy" },
  ];

  return (
    <div
      className="w-full rounded-t-[3rem] lg:rounded-t-[8rem] px-6 md:px-12 lg:px-20 py-10"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 -8px 3px rgba(0,0,0,0.2)",
      }}
    >
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 items-start">
        <div className="flex flex-col justify-start min-w-[120px]">
          <img
            src={logo}
            alt=""
            className="w-28 h-28 lg:w-36 lg:h-36 object-contain cursor-pointer"
            onClick={() => navigate('/')}
          />
          <div className="flex items-center gap-5 mt-2">
            <FaFacebook className="text-gray-600 w-5 h-5 cursor-pointer hover:text-[#119B53] transition-colors" />
            <FaXTwitter className="text-gray-600 w-5 h-5 cursor-pointer hover:text-[#119B53] transition-colors" />
            <FaInstagram className="text-gray-600 w-5 h-5 cursor-pointer hover:text-[#119B53] transition-colors" />
            <FaLinkedinIn className="text-gray-600 w-5 h-5 cursor-pointer hover:text-[#119B53] transition-colors" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-20 flex-1 w-full">
          <div className="flex flex-col gap-2">
            <p className="text-[13px] font-bold text-gray-700 uppercase tracking-wider mb-1">Resources</p>
            {resourceLinks.map(({ label, path }) => (
              <a
                key={label}
                onClick={() => navigate(path)}
                className="text-sm text-black/90 hover:text-green-700 tracking-wider cursor-pointer"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[13px] font-bold text-gray-700 uppercase tracking-wider mb-1">Get Involved</p>
            {involvedLinks.map(({ label, path }) => (
              <a
                key={label}
                onClick={() => navigate(path)}
                className="text-sm text-black/90 hover:text-green-700 tracking-wider cursor-pointer"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[13px] font-bold text-gray-700 uppercase tracking-wider mb-1">General</p>
            {generalLinks.map(({ label, path }) => (
              <a
                key={label}
                onClick={() => navigate(path)}
                className="text-sm text-black/90 font-medium hover:text-green-700 tracking-wider cursor-pointer"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
            <p className="text-[13px] font-bold text-gray-700 uppercase tracking-wider mb-1">Stay Connected</p>
            <p className="text-sm text-black/90 leading-snug tracking-wider">
              Get our monthly newsletter on educational innovation.
            </p>
            <div className="flex flex-row items-center gap-3 mt-1">
              <div className="flex items-stretch border border-gray-300 rounded-md overflow-hidden bg-white flex-1">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-3 py-2 text-xs tracking-widest outline-none bg-transparent text-gray-700 placeholder-gray-400"
                />
              </div>
              <button
                className="w-10 flex px-3 py-2 items-center justify-center flex-shrink-0 rounded-md"
                style={{ background: "#08552D" }}
              >
                <FaPaperPlane className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-gray-400 mt-10">
        <p className="text-center text-xs text-gray-700 pt-10 tracking-wider">
          © 2014 The Learning Craft. All rights reserved. Empowering Educators worldwide.
        </p>
      </div>
    </div>
  )
}

export default Footer