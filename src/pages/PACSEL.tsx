import Navbar from "../components/Navbar"
import bg from "../assets/images/Property 1=Frame 286.png"
import { motion } from 'framer-motion';
import { FaGraduationCap } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import pacsel from "../assets/images/1f0208b08eda505eb47e36676948cedea5748a96.jpg"
import mission from "../assets/images/Frame 499.png"
import liyel from "../assets/images/liyel.png"
import andreas from "../assets/images/andreas.jpg"
import aaliyah from "../assets/images/aaliyah.jpg"
import olanrewaju from "../assets/images/olanrewaju.png"
import folashade from "../assets/images/folashade.jpg"
import leonard from "../assets/images/ndubueze.png"
import tina from "../assets/images/tina.png"
import aly from "../assets/images/aly.jpg"
import hakeem from "../assets/images/hakeem.jpg"
import bayo from "../assets/images/bayo.jpg"
import adekunbi from "../assets/images/adekunbi-2.jpg"
import ronke from "../assets/images/ronke.png"
import tonia from "../assets/images/tonia.jpg"
import omobola from "../assets/images/omobola.jpg"
import abimbola from "../assets/images/abimbola.jpg"
import oguntade from "../assets/images/oguntade.jpg"
import rhoda from "../assets/images/rhoda.png"
import frame from "../assets/images/b1f0021147a6f7cfc3a0274ab8e8e28cb4e00774.png"
import Footer from "../components/Footer";
import highlightReel from "../assets/images/Highlight.mp4"
import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"
import img3 from "../assets/images/img3.jpg"
import img4 from "../assets/images/img4.jpg"
import img5 from "../assets/images/img5.jpg"
import { useState, useEffect, useRef } from "react"

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as any },
})

const PACSEL = () => {
  const navigate = useNavigate();
  const highlightReelRef = useRef<HTMLDivElement>(null);

  const allImages = [img1, img2, img3, img4, img5]
const [rotation, setRotation] = useState(0)

useEffect(() => {
  const id = setInterval(() => {
    setRotation((r) => (r + 1) % allImages.length)
  }, 5000)
  return () => clearInterval(id)
}, [])

const imgs = allImages.map((_, i) => allImages[(i + rotation) % allImages.length])

  return (
    <>
    <Navbar />
    <div
      className="w-full h-full pb-12 lg:pb-20 flex items-start justify-center gap-10"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-15 items-center justify-between max-w-full mx-auto px-6 md:px-10">
            <motion.div className="flex flex-col gap-6 lg:gap-9 pt-12 lg:pt-20 max-w-[900px]" initial={{opacity:0,y:36}} animate={{opacity:1,y:0}} transition={{duration:0.8,ease:[0.16,1,0.3,1] as any}}>
              <span className="w-fit text-[12px] font-bold bg-[#F5C518]/10 border border-[#F5C518]/30 text-[#F5C518] rounded-full px-5 py-2 flex items-center justify-center gap-1">
                 <FaGraduationCap className="h-4 w-4 text-[#F5C518]" />FLAGSHIP INITIATIVE
              </span>

              <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold tracking-wide text-white leading-relaxed">
                Pan-African Convening on<br />
                <span className="text-[#F5C518]"> Social & Emotional Learning</span>
              </h1>
              <hr className="border-t-2 border-white w-full rounded-lg" />

              <p className="text-white text-base lg:text-lg tracking-wider leading-relaxed md:max-w-[500px] font-medium">
                PACSEL convenes educators, policymakers, researchers, and practitioners to reimagine education - placing human development at the heart of learning systems across Africa.
              </p>

              <div className="flex gap-4 lg:gap-10">
                <button onClick={() => highlightReelRef.current?.scrollIntoView({ behavior: "smooth" })} className="bg-[#F5C518] text-[#10502F] tracking-wide text-sm lg:text-lg font-medium px-2 lg:px-6 py-3 lg:py-4 rounded-lg">
                  Conference Highlights
                </button>
                <button onClick={() => navigate('/get-involved')} className="text-white border border-white tracking-wide text-sm lg:text-lg font-medium px-2 lg:px-6 py-3 lg:py-4 rounded-lg">
                  Contact Us
                </button>
              </div>
            </motion.div>

            <motion.div className="relative w-full max-w-[450px] h-[220px] lg:h-[320px] flex items-center rounded-3xl overflow-hidden shadow-lg shadow-black/40" 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0 , ease: 'easeOut' }}
              viewport={{ once: true }}>
              <img loading="lazy"
                src={pacsel}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
      </div>
      <motion.div className="bg-[#F5C518] py-10 lg:py-15 grid grid-cols-2 lg:grid-cols-4" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6}}>
        <div className="flex flex-col text-justify items-center justify-center py-4 px-4 lg:pr-8 border-r border-r-[#10502F]">
            <h1 className="font-playfair-display text-[#10502F] text-[32px] lg:text-[40px] font-bold">0000</h1>
            <p className="text-[#10502F] text-[12px] lg:text-[14px] uppercase font-medium tracking-wider text-center">teachers trained</p>
        </div>
        <div className="flex flex-col items-center justify-center py-4 px-4 lg:px-8 lg:border-r border-r-[#10502F]">
            <h1 className="font-playfair-display text-[#10502F] text-[32px] lg:text-[40px] font-bold">0000</h1>
            <p className="text-[#10502F] text-[12px] lg:text-[14px] uppercase font-medium tracking-wider text-center">students impacted</p>
        </div>
        <div className="flex flex-col items-center justify-center py-4 px-4 lg:px-8 border-r border-r-[#10502F]">
            <h1 className="font-playfair-display text-[#10502F] text-[32px] lg:text-[40px] font-bold">00</h1>
            <p className="text-[#10502F] text-[12px] lg:text-[14px] uppercase font-medium tracking-wider text-center">countries reached</p>
        </div>
        <div className="flex flex-col items-center justify-center py-4 px-4 lg:px-12">
            <h1 className="font-playfair-display text-[#10502F] text-[32px] lg:text-[40px] font-bold">00</h1>
            <p className="text-[#10502F] text-[12px] lg:text-[14px] uppercase font-medium tracking-wider text-center">partner schools</p>
        </div>
      </motion.div>
      <div className="bg-[#10502F] h-full w-full p-8 lg:p-20">
        <h1 className="text-[#F5C518] flex items-center justify-center w-full text-[30px] lg:text-[55px] font-bold">Our Mission</h1>
        <div className="flex items-center justify-center h-full w-full">
            <img loading="lazy" className="w-full lg:w-[70%] object-contain" src={mission} alt="" />
        </div>
      </div>
      <div className="px-6 md:px-12 lg:px-20 py-10 lg:py-15 bg-gray-200 h-full">
        <motion.h1 {...inView()} className="font-semibold text-2xl md:text-3xl">Key Objectives</motion.h1>
        <p className="w-full lg:max-w-[50%] text-gray-700 text-sm lg:text-lg py-10 leading-relaxed">Across two intensive days, practitioners and thought leaders surfaced the defining challenges and opportunities shaping SEL across African education systems.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-15 w-full">
            {[
            { num: "01", title: "Showcase African-grown SEL strategies", desc: "We spotlight and curate strategies that support learner development from early years through adulthood." },
            { num: "02", title: "Bridge the gap between schools and homes", desc: "By empowering parents and caregivers as co-educators in social and emotional growth." },
            { num: "03", title: "Align SEL with workplace readiness", desc: "Ensuring learners build the mindsets and skills necessary for future employment, entrepreneurship, and citizenship." },
            { num: "04", title: "Influence policy and practice", desc: "Our goal here is to prioritize the whole child and recognize SEL as foundational to national development." },
            { num: "05", title: "Create cross-sector partnerships", desc: "The goal of these partnerships is to bring education, social services, and economic sectors into one shared vision of child and youth development." },
            { num: "06", title: "Launch an Impact Lab", desc: "The final goal of this initiative is to launch an impact lab on social and emotional learning with a goal to document evidence and scale practice" },
            ].map((item, i) => (
            <motion.div key={item.num} {...inView(i * 0.08)} className="bg-white border border-gray-200 rounded-xl py-4 md:py-7 px-4 border-l-12 border-l-[#1C5035]">
                <p className="text-3xl font-bold text-gray-900 mb-4 md:mb-6">{item.num}</p>
                <p className="text-md font-bold text-gray-900 mb-4 md:mb-6">{item.title}</p>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
            ))}
        </div>
      </div>
      <div ref={highlightReelRef} className="px-6 md:px-12 lg:px-20 py-10 lg:py-15 flex flex-col">
        <div className="flex flex-col items-start gap-3 mb-6">
            <div className="flex flex-row items-center justify-center gap-3">
            <span className="w-6 h-0.5 bg-yellow-500 block" />
            <p className="text-xs font-bold tracking-widest text-[#1C5035] uppercase">Partnership Models</p>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 my-5">PACSEL '25 Highlight Reel</h2>
            <p className="text-gray-400 text-md w-full lg:w-[50%] tracking-wide">Practitioners, researchers, and policymakers who shaped the PACSEL conversation.</p>
            <div className="flex w-full items-center border-none justify-center pt-10 max-w-7xl rounded-[3rem]">
                <video className="rounded-[2rem] border-none overflow-hidden w-full lg:w-auto" width="700" height="500" autoPlay controls loop muted>
                <source src={highlightReel} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
        </div>

      </div>
        <div className="px-6 md:px-12 lg:px-20 py-10 lg:py-15 flex flex-col bg-gray-200">
        <div className="flex flex-col items-start gap-3 mb-6">
            <div className="flex flex-row items-center justify-center gap-3">
            <span className="w-6 h-0.5 bg-yellow-500 block" />
            <p className="text-xs font-bold tracking-widest text-[#1C5035] uppercase">Partnership Models</p>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 my-5">PACSEL '25 Speakers</h2>
            <p className="text-gray-400 text-md w-full lg:w-[50%] tracking-wide">Practitioners, researchers, and policymakers who shaped the PACSEL conversation.</p>
        </div>
        {[
          [rhoda, "Rhoda Odigboh", "Co-Founder/President"],
          [liyel, "Senator Liyel Imoke", "Former Governor, Cross River State & Founder/Chairman, The Bridge Leadership Foundation"],
          [andreas, "Andreas Schleicher", "Director for Education and Skills at the Organisation for Economic Co-operation and Development(OECD)"],
          [aaliyah, "Dr. Aaliyah A. Samuel", "President & CEO, Collaborative for Academic, Social, and Emotional LearningCASEL"],
          [olanrewaju, "Olarewaju Oniyitan", "Founder, SEED Care & Support Foundation."],
          [folashade, "Mrs Folashade Adefisayo", "Former Commissioner of Education, Lagos State & CEO Leading Learning Ltd"],
          [leonard, "Prof. Ndubueze Leonard Mbah", "Commissioner for Education, Enugu State"],
          [tina, "Dr Tina Udoji", "Founder & CEO The Chelis Group"],
          [aly, "Aly Jetha", "Founder & CEO Big Bad Boo Studios"],
          [hakeem, "Dr. Hakeem Babatunde Shittu", "Executive Chairman of the Lagos State Universal Basic Education Board (LASUBEB)"],
          [bayo, "Hon. Bayo Adefuye", "The Chairman, Yaba Local Council Development Area, Lagos State"],
          [adekunbi, "Dr Adekunbi Wuruola", "Director of Policy and Partnerships for Africa, NewGlobe Education, Lagos"],
          [ronke, "Ronke Adeniyi", "Director, Le Poshe School"],
          [tonia, "Tonia Omolopo", "Early Childhood Expert"],
          [omobola, "⁠Omobola Olaribigbe", "Director, Ikija Day School"],
          [abimbola, "Dr Abimbola Banu-Ogundere", "CEO LAIT Foundation & Founder, Kids' Court School"],
        ].reduce((rows: any[][], item, i) => {
          if (i % 4 === 0) rows.push([]);
          rows[rows.length - 1].push(item);
          return rows;
        }, []).map((row, ri) => (
          <motion.div key={ri} {...inView()} className="grid grid-cols-2 md:grid-cols-4 items-start w-full gap-5 py-10">
            {row.map(([img, name, role]: [any, string, string], i: number) => (
              <div key={i} className="flex flex-col text-center items-center justify-center">
                <img loading="lazy" src={img} alt="" className="w-32 h-32 lg:w-50 lg:h-50 rounded-full object-cover mb-5" />
                <p className="font-semibold text-sm lg:text-base">{name}</p>
                <p className="max-w-[80%] text-gray-500 text-xs lg:text-sm">{role}</p>
              </div>
            ))}
          </motion.div>
        ))}
        <motion.div {...inView()} className="grid grid-cols-2 md:grid-cols-4 items-start w-full gap-5 py-10">
            <div className="flex flex-col text-center items-center justify-center">
                <img loading="lazy" src={oguntade} alt="" className="w-32 h-32 lg:w-50 lg:h-50 rounded-full object-cover mb-5" />
                <p className="font-semibold text-sm lg:text-base">Oguntade Ijeoma</p>
                <p className="max-w-[80%] text-gray-500 text-xs lg:text-sm">Programs Lead</p>
            </div>
        </motion.div>
        </div>
        <div className="px-6 md:px-12 lg:px-20 pt-10 lg:pt-15 flex flex-col">
        <div className="flex flex-col items-start gap-3 mb-6">
            <div className="flex flex-row items-center justify-center gap-3">
            <span className="w-6 h-0.5 bg-yellow-500 block" />
            <p className="text-xs font-bold tracking-widest text-[#1C5035] uppercase">moments that mattered</p>
            </div>
            <h2 className="text-3xl font-bold text-black my-5">Photo Gallery</h2>
            <p className="text-gray-400 text-md w-full lg:w-[50%] tracking-wide">A living record of connection, dialogue, and transformation from PACSEL 2026.</p>
          </div>
        </div>
        <div className="px-6 md:px-12 lg:px-20 py-10 lg:py-15 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_16rem_16rem] gap-4 w-full">
            <div className="h-full rounded-2xl">
              <motion.img
                key={imgs[0]}
                layout
                initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:1.5,delay:0.2,ease:[0.16,1,0.3,1]}}
                className="h-full w-full object-cover rounded-2xl"
                src={imgs[0]}
                alt=""
              />
            </div>
            <div className="flex flex-row md:flex-col gap-3 h-full">
              <motion.img
                key={imgs[1]}
                layout
                initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:1.5,delay:0.2,ease:[0.16,1,0.3,1]}}
                className="h-48 md:h-full w-1/2 md:w-full object-cover rounded-2xl"
                src={imgs[1]}
                alt=""
              />
              <motion.img
                key={imgs[2]}
                layout
                initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:1.5,delay:0.2,ease:[0.16,1,0.3,1]}}
                className="h-48 md:h-full w-1/2 md:w-full object-cover rounded-2xl"
                src={imgs[2]}
                alt=""
              />
            </div>
            <div className="flex flex-row md:flex-col gap-3 h-full">
              <motion.img
                key={imgs[3]}
                layout
                initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:1.5,delay:0.2,ease:[0.16,1,0.3,1]}}
                className="h-48 md:h-full w-1/2 md:w-full object-cover rounded-2xl"
                src={imgs[3]}
                alt=""
              />
              <motion.img
                key={imgs[4]}
                layout
                initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:1.5,delay:0.2,ease:[0.16,1,0.3,1]}}
                className="h-48 md:h-full w-1/2 md:w-full object-cover rounded-2xl"
                src={imgs[4]}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="px-6 md:px-12 lg:px-20 py-10 lg:py-15 flex flex-col bg-black">
        <div className="flex flex-col items-start gap-3 mb-6">
            <div className="flex flex-row items-center justify-center gap-3">
            <span className="w-6 h-0.5 bg-yellow-500 block" />
            <p className="text-xs font-bold tracking-widest text-[#FFE78F] uppercase">participant voices</p>
            </div>
            <h2 className="text-3xl text-white font-bold text-gray-900 my-5">What Participants Said</h2>
            <p className="text-white text-md w-full lg:w-[50%] tracking-wide">Reflections from educators, leaders, and practitioners who were part of PACSEL 2026.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
            {[
                {
                quote: "PACSEL gave me language for what I've always believed — that the emotional life of a classroom is inseparable from its academic one. I left ready to act.",
                name: "Sunita Rajan",
                role: "Primary School Lead, Nairobi",
                initial: "S",
                },
                {
                quote: "This wasn't a typical conference. It was a gathering of people who genuinely care about children — and that energy was electric throughout every session.",
                name: "Oluwaseun Bakare",
                role: "Education Policy Advisor, Abuja",
                initial: "O",
                },
                {
                quote: "The working groups are where the real work happens. I joined the SEL in Schools group and we've already started co-creating tools I can use this term.",
                name: "Miriam Tchelko",
                role: "Teacher Trainer, Cameroon",
                initial: "M",
                },
            ].map((t, i) => (
                <motion.div key={t.name} {...inView(i * 0.1)} className="bg-gradient-to-b from-gray-[#111111] to-[#ffffff] rounded-2xl p-8 flex flex-col gap-6"
                style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.1)",
                }}>
                <span className="text-[#F5C518] text-4xl font-black leading-none">"</span>
                <p className="text-white text-sm leading-relaxed tracking-wide italic flex-1">{t.quote}</p>
                <div className="flex items-center gap-3 mt-2">
                    <div className="w-9 h-9 rounded-full bg-[#F5C518] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#10502F] text-sm font-bold">{t.initial}</span>
                    </div>
                    <div>
                    <p className="text-white text-sm tracking-wide font-semibold">{t.name}</p>
                    <p className="text-gray-400 tracking-wide text-xs">{t.role}</p>
                    </div>
                </div>
                </motion.div>
            ))}
            </div>
        </div>
        </div>
        <div className="px-4 md:px-12 lg:px-20">
            <motion.div className="flex flex-col lg:flex-row justify-between min-h-[50vh] lg:min-h-[80vh] w-full rounded-[2rem] bg-[#1C5035] my-20 overflow-hidden drop-shadow-2xl shadow-black/30"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
            viewport={{ once: true }}>
                <div className="flex flex-row gap-6 lg:gap-10 relative">
                <div className="flex flex-col gap-6 lg:gap-8 max-w-full lg:max-w-[700px] px-8 lg:px-15 py-12 lg:py-20 text-white">
                <span className="w-fit text-[24px] lg:text-[32px] font-black text-WHITE">
                PACSEL is a movement, not a moment.                
                </span>

                <h1 className="text-base lg:text-lg text-white tracking-wide">
                    Join our growing network of educators and practitioners shaping the future of SEL in African education.
                </h1>
                <div className="flex gap-3 lg:gap-15 pt-8 lg:pt-20">
                    <button onClick={() => navigate('/resources')} className="bg-white text-black text-sm md:text-md font-medium px-2 lg:px-8 py-3 lg:py-4 rounded-lg shadow-xl shadow-black/10">
                    Our Products
                    </button>
                    <button onClick={() => navigate('/get-involved')} className="text-white border border-white text-sm md:text-md font-medium px-2 lg:px-8 py-3 lg:py-4 rounded-lg shadow-xl shadow-black/10">
                    Partner with Us
                    </button>
                </div>
                </div>
                <div className="hidden lg:block absolute right-0 top-0 bottom-0">
                  <img loading="lazy" className="min-w-[350px] min-h-[300px] rotate-67 absolute -top-28 left-25 w-full h-full object-contain" src={frame} alt="" />
                  <img loading="lazy" className="min-w-[425px] min-h-[400px] rotate-67 absolute top-3 -left-10 w-full h-full object-contain" src={frame} alt="" />
                  <img loading="lazy" className="min-w-[500px] min-h-[500px] rotate-67 absolute top-42 -left-45 w-full h-full object-contain" src={frame} alt="" />
                </div>
                </div>
            </motion.div>
        </div>
    <Footer />
    </>
  )
}

export default PACSEL