import { FaGlobe, FaRegLightbulb } from "react-icons/fa6"
import Layout from "../components/Layout"
import { motion } from "framer-motion"
import rhoda from "../assets/images/rhoda.png";
import adekunbi from "../assets/images/adekunbi.png";
import rotimi from "../assets/images/rotimi.png";
import uche from "../assets/images/uche.jpg";
import oguntade from "../assets/images/oguntade.jpg";
import florence from "../assets/images/florence.jpg";
import igho from "../assets/images/igho.jpg";
import maurice from "../assets/images/maurice.jpg";
import cei from "../assets/images/911351021a6135eaacdaab10a333de90c819bdff.png"
import chelis from "../assets/images/3293efe7d14cf6cd2cccb68683defaa9d369693f.png"
import kizazi from "../assets/images/cf1d55210a87c6a38cf325526d3c432324775291.png"
import ltbt from "../assets/images/c181d69dde0ab1b0787cc51670fa9d7e8cae2a9e.jpg"
import rectangle from "../assets/images/Rectangle 73.png"
import polygon from "../assets/images/Polygon 2.png"
import polygon2 from "../assets/images/Polygon 4.png"
import story from "../assets/images/Frame 271.png"


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as any },
})

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as any },
})

const About = () => {
  return (
    <>
    <Layout>
        <div className="relative">
        <div
        className="h-full bg-white relative z-20 w-full py-6 lg:py-10 overflow-hidden -mb-20"
        >
        <img loading="lazy" src={polygon} alt="" className="absolute top-0 left-0 size-40 lg:size-80 object-cover pointer-events-none select-none z-0" />
        <img loading="lazy" src={polygon2} alt="" className="absolute left-1/2 -translate-x-1/2 -top-70 size-120 rotate-90 object-cover pointer-events-none select-none z-0" />
        <img loading="lazy" src={rectangle} alt="" className="absolute -top-10 -right-20 size-60 lg:size-100 rotate-10 object-cover pointer-events-none select-none z-0" />

        <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-16 lg:px-30 gap-5">
            <motion.h1 {...fadeUp(0)} className="font-bold text-[32px] md:text-[48px] lg:text-[60px] text-center md:max-w-full">Empowering African Learners</motion.h1>
            <motion.p {...fadeUp(0.15)} className="flex items-center justify-center [text-align-last:center] text-center text-base lg:text-lg text-gray-600 max-w-[600px]">
            We are an African-based social enterprise dedicated to transforming education through curriculum development, professional training and innovative programs.
            </motion.p>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-center py-10 px-6 md:px-16 lg:px-40 gap-10 lg:gap-30 w-full">
            <motion.div {...fadeUp(0.25)} className="flex flex-col w-full lg:w-1/2 gap-4">
            <div className="flex flex-row gap-8 items-center">
                <div className="bg-[#d5fcee] p-3 rounded-full flex-shrink-0">
                <FaRegLightbulb className="text-[#119B53] size-6" />
                </div>
                <div className="flex flex-col w-full gap-4">
                <h1 className="text-lg md:text-xl font-bold">OUR MISSION</h1>
                <hr className="border-t-2 border-[#119B53] w-full rounded-lg" />
                <p className="leading-relaxed text-xs md:text-md text-black w-full lg:w-[80%]">
                    Empowering African learners, educators, and communities through innovative education solutions, collaborative partnerships, and advocacy, to unlock their full potential and drive sustainable development.
                </p>
                </div>
            </div>
            </motion.div>

            <motion.div {...fadeUp(0.35)} className="flex flex-col w-full lg:w-1/2 gap-4">
            <div className="flex flex-row items-center gap-8">
                <div className="bg-[#d5fcee] p-3 rounded-full flex-shrink-0">
                <FaGlobe className="text-[#119B53] size-6" />
                </div>
                <div className="flex flex-col w-full gap-4">
                <h1 className="text-lg md:text-xl font-bold">OUR VISION</h1>
                <hr className="border-t-2 border-[#119B53] w-full rounded-lg" />
                <p className="leading-relaxed text-xs md:text-md text-black w-full lg:w-[80%]">
                    A future where African learners unlock their potential, driving prosperity, peace, and equity across the continent.
                </p>
                </div>
            </div>
            </motion.div>
        </div>
        </div>

        <div className=" mt-10 z-0 w-full h-full"><img loading="lazy" src={story} alt="" className="w-full object-cover" /></div>
        </div>

        <motion.div {...inView()} className="font-thin text-[28px] lg:text-[40px] w-full py-10 flex items-center justify-center">
            Meet the Team
        </motion.div>
        <hr className="border-t border-gray-200 w-screen relative left-1/2 -translate-x-1/2" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-6 md:px-16 lg:px-30 py-10">
            {[
              { img: rhoda, name: "Rhoda Odigboh", role: "Co-Founder/President" },
              { img: adekunbi, name: "Adekunbi Wuraola", role: "Consultant/Board Member" },
              { img: rotimi, name: "Rotimi Eyitayo", role: "Consultant/Board Member" },
              { img: uche, name: "Uche Chikezie", role: "Project Manager" },
            ].map((m, i) => (
              <motion.div key={m.name} {...inView(i * 0.08)} className="flex flex-col items-center justify-center">
                <img loading="lazy" src={m.img} alt="" className="w-32 h-32 lg:w-50 lg:h-50 rounded-full object-cover mb-5" />
                <p className="font-semibold text-center text-sm lg:text-base">{m.name}</p>
                <p className="text-gray-400 text-center text-xs lg:text-sm">{m.role}</p>
              </motion.div>
            ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-6 md:px-16 lg:px-30 py-10">
            {[
              { img: oguntade, name: "Oguntade Ijeoma", role: "SEL Lead" },
              { img: florence, name: "Florence Ezeonye Chidi", role: "Teacher Dev. Lead" },
              { img: igho, name: "Igho Abisini", role: "Programs Lead" },
              { img: maurice, name: "Maurice Edem", role: "Operations Officer" },
            ].map((m, i) => (
              <motion.div key={m.name} {...inView(i * 0.08)} className="flex flex-col items-center justify-center">
                <img loading="lazy" src={m.img} alt="" className="w-32 h-32 lg:w-50 lg:h-50 rounded-full object-cover mb-5" />
                <p className="font-semibold text-center text-sm lg:text-base">{m.name}</p>
                <p className="text-gray-400 text-center text-xs lg:text-sm">{m.role}</p>
              </motion.div>
            ))}
        </div>
        <hr className="border-t-2 border-gray-200 w-full rounded-lg" />
        <div className="flex flex-col font-thin text-[28px] lg:text-[40px] w-full py-16 lg:py-30 px-6 md:px-16 lg:px-30 items-center justify-center">
           <motion.span {...inView()}>Trusted Industry Partners</motion.span>
        <hr className="border-t-2 border-gray-200 w-full rounded-lg mt-5" />
        <div className="flex flex-wrap items-center justify-center py-10 gap-6 lg:gap-8 w-full">
            {[cei, chelis, kizazi, ltbt].map((src, i) => (
              <motion.img key={i} src={src} alt="" className="h-14 lg:h-20 w-40 lg:w-60 object-contain" {...inView(i * 0.1)} />
            ))}
        </div>
        <hr className="border-t-2 border-gray-200 w-full rounded-lg mt-5" />
        </div>
    </Layout>
    </>
  )
}

export default About