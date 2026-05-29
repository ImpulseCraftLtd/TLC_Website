import { useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { FaFilter, FaGraduationCap } from "react-icons/fa6";
import rocket from "../assets/images/814bf50b0adcc7b27ec7bab18515925e250488bb.png"
import insideSelToolkitImg from "../assets/images/inside.png"
import nduStudentResourcesImg from "../assets/images/nd social.png"
import curriculumPlannerExplainerImg from "../assets/images/curriculum.png"

interface Tag { label: string }

interface Card {
  id: string;
  category: string;
  audience?: string;
  title: string;
  description: string;
  tags: Tag[];
  actionType: "download" | "enroll" | "watch" | "purchase" | "learn-more" | "contact" | "watch-now";
  actionLabel: string;
  hasGlobe?: boolean;
  hasImage?: boolean;
  image?: string;
  tabs: TabKey[];
  path: string;
}

type TabKey = "all" | "teacher-dev" | "ebooks" | "toolkits" | "videos" | "curriculum";

type ColorScheme = {
  borderTop: string;
  badgeBg: string;
  badgeText: string;
  tagBg: string;
  tagBorder: string;
  tagText: string;
  btnBorder: string;
  btnText: string;
  btnHoverBg: string;
};

const CATEGORY_COLORS: Record<string, ColorScheme> = {
  TOOLKIT:       { borderTop: "border-t-[#1a5c2e]", badgeBg: "bg-[#e8f5ec]", badgeText: "text-[#1a5c2e]", tagBg: "bg-[#e8f5ec]", tagBorder: "border-[#c3e6cc]", tagText: "text-[#1a5c2e]", btnBorder: "border-[#1a5c2e]", btnText: "text-[#1a5c2e]", btnHoverBg: "hover:bg-[#1a5c2e]" },
  "LESSON PLANS":{ borderTop: "border-t-[#1a5c2e]", badgeBg: "bg-[#e8f5ec]", badgeText: "text-[#1a5c2e]", tagBg: "bg-[#e8f5ec]", tagBorder: "border-[#c3e6cc]", tagText: "text-[#1a5c2e]", btnBorder: "border-[#1a5c2e]", btnText: "text-[#1a5c2e]", btnHoverBg: "hover:bg-[#1a5c2e]" },
  REPORT:        { borderTop: "border-t-[#1a5c2e]", badgeBg: "bg-[#e8f5ec]", badgeText: "text-[#1a5c2e]", tagBg: "bg-[#e8f5ec]", tagBorder: "border-[#c3e6cc]", tagText: "text-[#1a5c2e]", btnBorder: "border-[#1a5c2e]", btnText: "text-[#1a5c2e]", btnHoverBg: "hover:bg-[#1a5c2e]" },
  CURRICULUM:    { borderTop: "border-t-[#1a5c2e]", badgeBg: "bg-[#e8f5ec]", badgeText: "text-[#1a5c2e]", tagBg: "bg-[#e8f5ec]", tagBorder: "border-[#c3e6cc]", tagText: "text-[#1a5c2e]", btnBorder: "border-[#1a5c2e]", btnText: "text-[#1a5c2e]", btnHoverBg: "hover:bg-[#1a5c2e]" },
  TOOLKITS:      { borderTop: "border-t-[#1a5c2e]", badgeBg: "bg-[#e8f5ec]", badgeText: "text-[#1a5c2e]", tagBg: "bg-[#e8f5ec]", tagBorder: "border-[#c3e6cc]", tagText: "text-[#1a5c2e]", btnBorder: "border-[#1a5c2e]", btnText: "text-[#1a5c2e]", btnHoverBg: "hover:bg-[#1a5c2e]" },
  GUIDE:         { borderTop: "border-t-[#F5C518]", badgeBg: "bg-[#F5C518]/20", badgeText: "text-[#F5C518]", tagBg: "bg-[#F5C518]/20", tagBorder: "border-[#F5C518]", tagText: "text-[#92400e]", btnBorder: "border-[#F5C518]", btnText: "text-[#92400e]", btnHoverBg: "hover:bg-[#F5C518]" },
  TRAINING:      { borderTop: "border-t-[#950606]", badgeBg: "bg-[#950606]/20", badgeText: "text-[#950606]", tagBg: "bg-[#950606]/20", tagBorder: "border-[#fca5a5]", tagText: "text-[#950606]", btnBorder: "border-[#950606]", btnText: "text-[#950606]", btnHoverBg: "hover:bg-[#950606]" },
  PLATFORM:      { borderTop: "border-t-[#950606]", badgeBg: "bg-[#950606]/20", badgeText: "text-[#950606]", tagBg: "bg-[#950606]/20", tagBorder: "border-[#fca5a5]", tagText: "text-[#950606]", btnBorder: "border-[#950606]", btnText: "text-[#950606]", btnHoverBg: "hover:bg-[#950606]" },
};

const DEFAULT_COLORS: ColorScheme = CATEGORY_COLORS["TOOLKIT"];

const getColors = (category: string): ColorScheme =>
  CATEGORY_COLORS[category] ?? DEFAULT_COLORS;

const ALL_CARDS: Card[] = [
  {
    id: "sel-in-schools",
    category: "TOOLKIT",
    audience: "For Teachers",
    title: "SEL in Schools",
    description: "Designing and testing SEL implementation frameworks within diverse school contexts across the continent, with a focus on teacher-led practice.",
    tags: [{ label: "Primary" }, { label: "Self-Assessment" }],
    actionType: "download",
    actionLabel: "Download",
    tabs: ["all", "ebooks"],
    path: "/resources/sel-in-schools",
  },
  {
    id: "how-to-teach-dyslexia",
    category: "GUIDE",
    audience: "For Teachers",
    title: "How to Teach Learners with Dyslexia",
    description: "A practical, evidence-based guide for classroom teachers and school leaders on identifying dyslexia, designing inclusive lessons, and supporting affected learners.",
    tags: [{ label: "Inclusive" }, { label: "All Grades" }, { label: "For Teachers" }],
    actionType: "purchase",
    actionLabel: "Purchase",
    tabs: ["all", "ebooks"],
    path: "/resources/how-to-teach-dyslexics",
  },
  {
    id: "teta",
    category: "TRAINING",
    audience: "For Teachers",
    title: "The Exceptional Teachers Academy (TETA)",
    description: "TETA is a comprehensive year-long teacher training solution that aims to cultivate a new generation of educators. This programme focuses on upskilling teachers, elevating their status, and increasing their value, all to foster excellence in teaching.",
    tags: [{ label: "Academy" }, { label: "Teachers" }],
    actionType: "enroll",
    actionLabel: "Enroll",
    tabs: ["all", "teacher-dev"],
    path: "/resources/exceptional-teachers-academy",
  },
  {
    id: "cca",
    category: "TRAINING",
    audience: "For Organization",
    title: "Curriculum Coordinator's Academy (CCA)",
    description: "CCA is a comprehensive year-long teacher training solution that aims to cultivate a new generation of educators. This programme focuses on upskilling teachers, elevating their status, and increasing their value, all to foster excellence in teaching.",
    tags: [{ label: "Organization" }, { label: "Academy" }],
    actionType: "enroll",
    actionLabel: "Enroll",
    tabs: ["all", "teacher-dev"],
    path: "/resources/curriculum-coordinator-academy",
  },
  {
    id: "30-day-lesson-plan",
    category: "LESSON PLANS",
    audience: "For Teachers",
    title: "30-Day SEL Lesson Plan Bundle",
    description: "A complete month of daily SEL lesson activities for primary classrooms, inspired by the five core competency areas with clear learning outcomes and facilitation guidance.",
    tags: [{ label: "Primary" }, { label: "Daily Use" }],
    actionType: "download",
    actionLabel: "Download",
    tabs: ["all", "ebooks"],
    path: "/resources/30-day-lesson-plan",
  },
  {
    id: "sel-african-schools-report",
    category: "REPORT",
    title: "SEL in African Schools: State of Practice Report",
    description: "A synthesis of evidence from TLC's work across 10 African states, mapping the current landscape of SEL integration, its impact thus far, and identifying critical implementation gaps.",
    tags: [{ label: "Research" }, { label: "Africa" }],
    actionType: "download",
    actionLabel: "Download",
    hasGlobe: true,
    tabs: ["all", "ebooks"],
    path: "/resources/sel-african-schools-report",
  },
  {
    id: "integrated-curriculum-planner",
    category: "CURRICULUM",
    title: "Integrated Curriculum Planner for Schools",
    description: "A structured planning tool that helps curriculum leads integrate SEL competencies across subject areas seamlessly without adding to teacher workload.",
    tags: [{ label: "Curriculum" }, { label: "Integration" }],
    actionType: "download",
    actionLabel: "Download",
    tabs: ["all", "curriculum"],
    path: "/resources/curriculum-planner",
  },
  {
    id: "pacsel-webinar",
    category: "WEBINAR",
    audience: "For All Coordinators",
    title: "PACSEL Webinar: SEL & Teacher Wellbeing",
    description: "Recording from TLC's post-PACSEL webinar series, exploring how schools can implement and support teacher wellbeing as a foundation for student outcomes.",
    tags: [{ label: "Wellbeing" }, { label: "Video" }],
    actionType: "watch",
    actionLabel: "Watch",
    tabs: ["all", "videos"],
    path: "/resources/pacsel-webinar",
  },
  {
    id: "ndu-sel-toolkit",
    category: "TOOLKITS",
    title: "NDU® SEL Toolkit",
    description: "A structured 30-day school programme that helps teachers integrate social-emotional learning into daily classroom life through lesson plans, activities, and recognition tools.",
    tags: [{ label: "Social-Emotional Learning" }, { label: "More" }],
    actionType: "learn-more",
    actionLabel: "Learn More",
    tabs: ["all", "toolkits"],
    path: "/resources/ndu-sel-toolkit",
  },
  {
    id: "school-coherence-toolkit",
    category: "TOOLKITS",
    title: "School Coherence Toolkit",
    description: "A practical leadership toolkit that helps school leaders identify and fix the structural misalignments causing low-trust and incoherent learning outcomes.",
    tags: [{ label: "Coherence" }, { label: "Leadership" }],
    actionType: "learn-more",
    actionLabel: "Learn More",
    tabs: ["all", "toolkits"],
    path: "/resources/school-coherence-toolkit",
  },
  {
    id: "inside-sel-toolkit-video",
    category: "VIDEO",
    title: "Inside Our Social and Emotional Learning Toolkit Resource",
    description: "All you need to know about our SEL Toolkit. Click the link below, like, comment, and subscribe.",
    tags: [],
    actionType: "watch-now",
    actionLabel: "Watch Now",
    hasImage: true,
    image: insideSelToolkitImg,
    tabs: ["all", "videos"],
    path: "/resources/inside-sel-toolkit-video",
  },
  {
    id: "ndu-student-resources-video",
    category: "VIDEO",
    title: "Introducing NDU Social and Emotional Learning Student Resources",
    description: "All you need to know about our SEL Student Resources. Click the link below, like, comment, and subscribe.",
    tags: [],
    actionType: "watch-now",
    actionLabel: "Watch Now",
    hasImage: true,
    image: nduStudentResourcesImg,
    tabs: ["all", "videos"],
    path: "/resources/ndu-student-resources-video",
  },
  {
    id: "curriculum-planner-explainer",
    category: "VIDEO",
    title: "The Learning Craft Curriculum Planner Explainer",
    description: "All you need to know about our Curriculum Planner. Click the link below, like, comment, and subscribe.",
    tags: [],
    actionType: "watch-now",
    actionLabel: "Watch Now",
    hasImage: true,
    image: curriculumPlannerExplainerImg,
    tabs: ["all", "videos"],
    path: "/resources/curriculum-planner-explainer",
  },
  {
    id: "all-inclusive-curriculum-planner",
    category: "CURRICULUM",
    title: "All-Inclusive Curriculum Planner for Schools",
    description: "A comprehensive skills-based curriculum planner that guides educators in designing structured learning experiences across Mathematics, Language Arts, Social Studies, and Science.",
    tags: [{ label: "Planner" }, { label: "Skill-based" }],
    actionType: "learn-more",
    actionLabel: "Learn More",
    tabs: ["all", "curriculum"],
    path: "/resources/all-inclusive-curriculum-planner",
  },
  {
    id: "custom-curriculum-planner",
    category: "CURRICULUM",
    title: "Custom Curriculum Planner",
    description: "A bespoke curriculum design service where The Learning Craft works directly with schools and organisations to build tailored, skills-based learning experiences aligned to their unique goals and context.",
    tags: [{ label: "Bespoke" }, { label: "Curriculum" }],
    actionType: "learn-more",
    actionLabel: "Learn More",
    tabs: ["all", "curriculum"],
    path: "/resources/custom-curriculum-planner",
  },
  {
    id: "teachart",
    category: "PLATFORM",
    audience: "For Teachers",
    title: "TeachArt",
    description: "A dynamic peer-led platform where teachers share ideas, insights, and innovations in education — inspiring and equipping one another to elevate their practice.",
    tags: [{ label: "Peer Led" }, { label: "Innovation" }],
    actionType: "learn-more",
    actionLabel: "Learn More",
    tabs: ["all", "teacher-dev"],
    path: "/resources/teachart",
  },
];

const TABS: { key: TabKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "teacher-dev", label: "Teacher Development Programs" },
  { key: "ebooks", label: "E-books" },
  { key: "toolkits", label: "SEL Toolkits" },
  { key: "videos", label: "Videos & Webinars" },
  { key: "curriculum", label: "Curriculum" },
];

const TAB_TITLES: Record<TabKey, string> = {
  all: "Resource Hub",
  "teacher-dev": "Teacher Development Programs",
  ebooks: "E-books",
  toolkits: "SEL Toolkits",
  videos: "Videos & Webinars",
  curriculum: "Curriculums",
};

const CARDS_PER_PAGE = 8;

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,3 19,12 5,21" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

function ActionButton({ card, onClick }: { card: Card; onClick: () => void }) {
  const c = getColors(card.category);
  const base = `inline-flex items-center gap-1.5 text-[13px] font-semibold rounded-md px-3.5 py-1.5 transition-colors cursor-pointer border whitespace-nowrap ${c.btnBorder} ${c.btnText} bg-white ${c.btnHoverBg} hover:text-white`;

  const { actionType: type, actionLabel: label, hasGlobe } = card;

  if (type === "download") return (
    <button onClick={onClick} className={base}>
      {hasGlobe && <GlobeIcon />}
      <DownloadIcon />
      {label}
    </button>
  );
  if (type === "purchase") return (
    <button onClick={onClick} className={base}>
      <DownloadIcon />
      {label}
    </button>
  );
  if (type === "enroll" || type === "learn-more") return (
    <button onClick={onClick} className={base}>
      {label}
      <ArrowRightIcon />
    </button>
  );
  if (type === "watch" || type === "watch-now") return (
    <button onClick={onClick} className={base}>
      <PlayIcon />
      {label}
    </button>
  );
  return <button onClick={onClick} className={base}>{label}</button>;
}

function ResourceCard({ card, onNavigate }: { card: Card; onNavigate: (path: string) => void }) {
  const c = getColors(card.category);

  return (
    <div className={`bg-white rounded-xl border border-gray-200 border-t-12 ${c.borderTop} p-5 flex flex-col gap-3 hover:shadow-md transition-shadow`}>
      <div className="flex items-center gap-2 flex-wrap">
        <span className={`text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-2xl ${c.badgeBg} ${c.badgeText}`}>
          {card.category}
        </span>
        {card.audience && (
          <span className="text-[13px] font-medium text-gray-500 px-2 py-0.5 rounded">
            {card.audience}
          </span>
        )}
      </div>

      {card.hasImage && (
        <div className="w-full h-32 rounded-lg bg-gray-100 overflow-hidden">
          {card.image ? (
            <img loading="lazy" src={card.image} alt={card.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
              Video Thumbnail
            </div>
          )}
        </div>
      )}

      <h3 className="text-gray-900 font-bold text-[15px] lg:text-[17px] pt-3 leading-snug">{card.title}</h3>
      <p className="text-gray-500 text-xs md:text-[13px] tracking-wide py-4 leading-relaxed flex-1">{card.description}</p>
      <div className="flex items-center justify-between mt-auto pt-1 gap-2 flex-wrap">
        <div className="flex flex-wrap gap-1.5">
          {card.tags.map((t) => (
            <span
              key={t.label}
              className={`text-[12px] tracking-wider font-medium px-3 py-1.5 rounded-md border ${c.tagBg} ${c.tagBorder} ${c.tagText}`}
            >
              {t.label}
            </span>
          ))}
        </div>
        <ActionButton card={card} onClick={() => onNavigate(card.path)} />
      </div>
    </div>
  );
}

function Pagination({ page, total, perPage, onChange }: {
  page: number; total: number; perPage: number; onChange: (p: number) => void;
}) {
  const totalPages = Math.ceil(total / perPage);

  return (
    <div className="flex items-center justify-between mt-8 text-sm text-gray-500">
      <span>Page {page} of {Math.max(1, totalPages)}</span>
      <div className="flex items-center gap-1">
        <button onClick={() => onChange(1)} disabled={page === 1} className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 disabled:opacity-30">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/></svg>
        </button>
        <button onClick={() => onChange(page - 1)} disabled={page === 1} className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 disabled:opacity-30">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        {Array.from({ length: Math.max(1, totalPages) }, (_, i) => i + 1).map((p) => (
          <button key={p} onClick={() => onChange(p)} className={`w-7 h-7 flex items-center justify-center rounded text-sm font-medium transition-colors ${p === page ? "bg-[#1a5c2e] text-white" : "hover:bg-gray-100 text-gray-600"}`}>{p}</button>
        ))}
        <button onClick={() => onChange(page + 1)} disabled={page === totalPages || totalPages <= 1} className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 disabled:opacity-30">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
        <button onClick={() => onChange(totalPages)} disabled={page === totalPages || totalPages <= 1} className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 disabled:opacity-30">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>
        </button>
      </div>
    </div>
  );
}


// const inView = (delay = 0) => ({
//   initial: { opacity: 0, y: 28 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, margin: "-60px" },
//   transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
// })

// Derive unique categories from ALL_CARDS for the filter modal
const ALL_CATEGORIES = Array.from(new Set(ALL_CARDS.map((c) => c.category)));

// Map a card category to the closest TabKey, falling back to "all"
const CATEGORY_TO_TAB: Record<string, TabKey> = {
  TOOLKIT:        "toolkits",
  TOOLKITS:       "toolkits",
  GUIDE:          "ebooks",
  REPORT:         "ebooks",
  "LESSON PLANS": "ebooks",
  CURRICULUM:     "curriculum",
  TRAINING:       "teacher-dev",
  PLATFORM:       "teacher-dev",
  WEBINAR:        "videos",
  VIDEO:          "videos",
};

export default function ResourceHub() {
  const navigate = useNavigate();

  // ── Tab & pagination state ──────────────────────────────────────────────────
  const [activeTab, setActiveTab]       = useState<TabKey>("all");
  const [page, setPage]                 = useState(1);

  // ── Search state ────────────────────────────────────────────────────────────
  const [searchQuery, setSearchQuery]   = useState<string>("");
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

  // ── Filter modal state ──────────────────────────────────────────────────────
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);

  // ── Ref for smooth-scrolling to the resource grid ──────────────────────────
  const resourceSectionRef = useRef<HTMLDivElement>(null);

  // ── Handlers ────────────────────────────────────────────────────────────────
  const handleTabChange = (key: TabKey) => {
    setActiveTab(key);
    setPage(1);
    setIsSearchActive(false);
    setSearchQuery("");
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setIsSearchActive(false);
    setActiveTab("all");
    setPage(1);
  };

  const handleExploreClick = () => {
    setIsSearchActive(true);
    setPage(1);
    resourceSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFilterByCategory = (category: string) => {
    const tab: TabKey = CATEGORY_TO_TAB[category] ?? "all";
    setActiveTab(tab);
    setPage(1);
    setIsSearchActive(false);
    setSearchQuery("");
    setShowFilterModal(false);
    resourceSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // ── Derived data ─────────────────────────────────────────────────────────────
  /**
   * When a search is active, filter ALL_CARDS across every field.
   * When no search is active, filter by the active tab as before.
   */
  const filtered = useMemo<Card[]>(() => {
    if (isSearchActive && searchQuery.trim() !== "") {
      const q = searchQuery.trim().toLowerCase();
      return ALL_CARDS.filter((card) => {
        const inTitle       = card.title.toLowerCase().includes(q);
        const inCategory    = card.category.toLowerCase().includes(q);
        const inDescription = card.description.toLowerCase().includes(q);
        const inTags        = card.tags.some((tag) =>
          tag.label.toLowerCase().includes(q)
        );
        return inTitle || inCategory || inDescription || inTags;
      });
    }
    return ALL_CARDS.filter((c) => c.tabs.includes(activeTab));
  }, [searchQuery, isSearchActive, activeTab]);

  const paginated = filtered.slice((page - 1) * CARDS_PER_PAGE, page * CARDS_PER_PAGE);
  const countForTab = (key: TabKey) => ALL_CARDS.filter((c) => c.tabs.includes(key)).length;

  return (
    <>
    <Layout>
        <div className="bg-grid relative min-h-[80vh] px-6 md:px-10 lg:px-15 py-12 lg:py-20">
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage: 'radial-gradient(ellipse 80% 80% at 0% 0%, #fefddcea 0%, transparent 70%)',
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b via-transparent to-white pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between sm:px-4 mx-auto gap-8 lg:gap-0">
            <motion.div className="flex flex-col gap-6 lg:gap-9 md:justify-center px-3 md:px-0 max-w-screen md:max-w-8xl" initial={{opacity:0,y:36}} animate={{opacity:1,y:0}} transition={{duration:0.8,ease:[0.16,1,0.3,1]}}>
              <span className="w-fit md:w-[60%] text-[12px] font-bold bg-[#d5fcee]/30 border border-[#119B53] text-[#119B53] rounded-full px-3 md:px-5 py-2 flex items-center justify-center gap-1 self-start">
                 <FaGraduationCap className="h-4 w-4 text-[#119B53]" />REVOLUTIONIZING AFRICAN EDUCATION
              </span>

              <h1 className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-tight">
                SEL Resources & <br />
                <span className="text-[#119B53]">Designed for Success.</span>
              </h1>

              <p className="text-gray-500 text-md leading-relaxed md:max-w-[500px] font-medium">
                Practical toolkits, lesson plans, research, and learning resources grounded in African education contexts — designed for teachers, leaders, practitioners, and even learnershrough innovative teacher training
                and evidence-based SEL practices.
              </p>

                <div className="w-full flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center rounded-xl gap-4 lg:gap-30 shadow-xl shadow-black/50 overflow-hidden flex-1">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchInput}
                      onKeyDown={(e) => e.key === "Enter" && handleExploreClick()}
                      placeholder="Search resources, toolkits, guides..."
                      className="flex-1 text-gray-700 text-md pl-4 lg:pl-6 py-3 md:py-5 outline-none bg-white placeholder-gray-400 min-w-0"
                    />
                    <button
                      onClick={handleExploreClick}
                      className="bg-[#119B53] text-white text-md font-semibold px-4 lg:px-6 py-3 md:py-6 whitespace-nowrap hover:bg-[#0e8a48] transition-colors"
                    >
                      Explore Programs
                    </button>
                  </div>                
                  <div className="relative">
                    <button
                      onClick={() => setShowFilterModal((prev) => !prev)}
                      className="flex flex-row gap-2 bg-black text-white text-md font-medium h-full items-center px-6 lg:px-10 py-3 md:py-6 rounded-xl shadow-xl shadow-black/10 justify-center"
                    >
                      Filter <FaFilter className="size-5 flex items-center justify-center h-full" />
                    </button>

                    {showFilterModal && (
                      <div className="absolute right-0 top-full mt-4 w-90 bg-white border border-gray-200 rounded-2xl shadow-2xl p-4 z-50">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xs text-gray-800">Filter by Category</h3>
                          <button
                            onClick={() => setShowFilterModal(false)}
                            className="text-gray-400 hover:text-gray-600 text-lg font-bold transition-colors leading-none"
                            aria-label="Close filter"
                          >
                            ✕
                          </button>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <div className="grid grid-cols-3 justify-between gap-3">
                            <button
                              onClick={() => handleFilterByCategory("")}
                              className={`text-left text-[10px] font-medium p-2 rounded-lg transition-colors border ${
                                activeTab === "all" && !isSearchActive
                                  ? "bg-[#1a5c2e] text-white border-[#1a5c2e]"
                                  : "text-gray-700 border-gray-100 hover:bg-gray-50"
                              }`}
                            >
                              All Categories
                            </button>
                            {ALL_CATEGORIES.map((cat) => {
                              const mappedTab = CATEGORY_TO_TAB[cat] ?? "all";
                              const isSelected = !isSearchActive && activeTab === mappedTab;
                              return (
                                <button
                                  key={cat}
                                  onClick={() => handleFilterByCategory(cat)}
                                  className={`text-left text-[10px] font-medium p-2 rounded-lg transition-colors border ${
                                    isSelected
                                      ? "bg-[#1a5c2e] text-white border-[#1a5c2e]"
                                      : "text-gray-700 border-gray-100 hover:bg-gray-50"
                                  }`}
                                >
                                  {cat}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
              <motion.div className="hidden lg:block pr-15" initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:0.9,delay:0.2,ease:[0.16,1,0.3,1]}}>
                <img loading="lazy" className="h-120 w-120 object-contain -rotate-45" src={rocket} alt="" />
              </motion.div> 
              </div>
            </div>
   
        <div ref={resourceSectionRef} className="w-full px-6 md:px-12 lg:px-20 py-10 lg:py-15 bg-gradient-to-b from-gray-100 to-white">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          {isSearchActive && searchQuery.trim() !== ""
            ? `Search results for "${searchQuery.trim()}" (${filtered.length})`
            : TAB_TITLES[activeTab]}
        </h1>

        {!isSearchActive && (
        <div className="flex overflow-x-auto gap-x-0 gap-y-0 border-b border-gray-200 mb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {TABS.map((tab) => {
            const count = countForTab(tab.key);
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 pb-3 pt-1 text-sm font-medium border-b-2 -mb-px transition-colors ${
                  isActive
                    ? "border-[#1a5c2e] text-[#1a5c2e]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
                <span className={`text-[11px] font-semibold px-1.5 py-0.5 rounded-full ${isActive ? "bg-[#1a5c2e] text-white" : "bg-gray-100 text-gray-500"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
        )}

        {isSearchActive && <div className="mb-6" />}

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400 gap-3">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <p className="text-lg font-medium text-gray-500">No results found</p>
            <p className="text-sm">Try a different search term or <button onClick={handleClearSearch} className="text-[#1a5c2e] underline font-medium">clear the search</button>.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paginated.map((card, i) => (
              <motion.div key={card.id} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-40px"}} transition={{duration:0.55,delay:i*0.06,ease:[0.16,1,0.3,1]}}>
                <ResourceCard card={card} onNavigate={(path) => navigate(path)} />
              </motion.div>
            ))}
          </div>
        )}

        <Pagination page={page} total={filtered.length} perPage={CARDS_PER_PAGE} onChange={setPage} />
      </div>
    </Layout>
    </>
  );
}