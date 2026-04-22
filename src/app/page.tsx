"use client";
import Script from "next/script";
import { useMemo, useState, type ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Linkedin, Languages, ChevronRight,
  Globe, Calendar, Download,
} from "lucide-react";
import { Prompt as PromptFont } from "next/font/google";



// =========================================
// CHIBI • PORTFOLIO (TH/EN)
// Eye‑friendly, portfolio layout • Navy/White • Prompt font • Soft animations
// Updates per request: more navy accents, top hero portrait, remove vCard,
// simplify experience bullets, split family companies, restore missing info,
// remove Education Focus + duplicate lines.
// =========================================
const prompt = PromptFont({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

// ---------- Types ----------

type Lang = "th" | "en";

type LearningGroup = { h: string; items: string[] };

type SkillsBucket = { h: string; line: string };

type Role = {
  company: string;
  role: string;
  period: string;
  bullets?: string[];
  /** Featured project link (e.g. Chibi Haven) */
  projectUrl?: string;
};

/** Compact one- or two-line entries */
type AdditionalExpEntry = {
  headline: string;
  subline?: string;
};

type Education = {
  title: string; degree: string; school: string; year: string;
  gpa: number; honors?: string;
};

type Contact = {
  title: string;
  cta: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  birthday: string;
};

type LocaleContent = {
  langLabel: string;
  head: { title: string; tagline: string };
  hero: {
    name_primary: string; name_alt: string; role: string; sub: string; summary: string;
  };
  highlights: { title: string; items: { k: string; v: string }[] };
  about: { title: string; paragraphs: string[] };
  whatIDo: { title: string; bullets: string[] };
  howIWork: { title: string; bullets: string[] };
  workStyle: { title: string; bullets: string[] };
  toolAdaptability: { title: string; bullets: string[] };
  experience: { title: string; liveProductPrefix: string; roles: Role[] };
  additionalExperience: { title: string; entries: AdditionalExpEntry[] };
  education: Education;
  skills: { title: string; buckets: SkillsBucket[] };
  learning: { title: string; groups: LearningGroup[] };
  personalDev: { title: string; sentence: string };
  mindfulness: { title: string; bullets: string[] };
  lookingFor: { title: string; bullets: string[] };
  interests: { title: string; bullets: string[]; treasure: string };
  contact: Contact;
  nav: {
    about: string; whatIDo: string; howIWork: string; workStyle: string; toolAdaptability: string;
    experience: string; additionalExperience: string;
    education: string; skills: string; learning: string;
    personalDev: string; mindfulness: string; lookingFor: string;
    interests: string; contact: string;
  };
  footer: string;
};

type ContentDict = Record<Lang, LocaleContent>;

// ---------- Copy (refined TH/EN) ----------

const content: ContentDict = {
  th: {
    langLabel: "ไทย",
    head: { title: "Chibi • Portfolio", tagline: "AI • Business • Systems" },
    hero: {
      name_primary: "แก้ม (กัญญาภัค ใชยทิพย์)",
      name_alt: "Gam (Kanyapak Chaitip)",
      role: "AI • Business • Systems",
      sub: "",
      summary: "ผู้สร้างและผู้ปฏิบัติการ — ส่งมอบระบบด้วย AI แก้ปัญหาจริง และรักษามาตรฐานในงานที่วัดผลด้วย KPI ระดับโลก",
    },
    highlights: {
      title: "ข้อมูลย่อ",
      items: [
        { k: "โทนสี", v: "White • Navy" },
        { k: "ที่อยู่", v: "Songkhla, TH" },
      ],
    },
    about: {
      title: "เกี่ยวกับฉัน",
      paragraphs: [
        "บัณฑิตสาขาธุรกิจที่ขับเคลื่อนด้วย AI โฟกัสที่การสร้างระบบและแก้ปัญหาในโลกจริง",
        "ประสบการณ์ในองค์กรระดับโลกสนับสนุนการทำงานภายใต้แรงกดดันและ KPI การคิดแบบมีโครงสร้าง และการปรับตัวให้เข้ากับบริบทใหม่",
      ],
    },
    whatIDo: {
      title: "สิ่งที่ทำ",
      bullets: [
        "สร้างระบบโดยใช้ AI และระบบอัตโนมัติ",
        "แก้ปัญหาธุรกิจและปฏิบัติการ",
        "นำเทคโนโลยีไปใช้กับเคสจริงในโลกธุรกิจ",
      ],
    },
    howIWork: {
      title: "วิธีการทำงาน",
      bullets: [
        "โฟกัสที่การแก้ปัญหาจริง ไม่ใช่แค่สร้างฟีเจอร์",
        "ใช้เครื่องมือ AI เพื่อเร่งการคิดและการลงมือทำ",
        "ชอบเวิร์กโฟลว์ที่เป็นระบบ มีประสิทธิภาพ และจับผลลัพธ์ได้ชัด",
      ],
    },
    workStyle: {
      title: "สไตล์การทำงาน",
      bullets: [
        "ทำงานได้ดีในสภาพแวดล้อมแรงกดดันสูงที่วัดผลด้วย KPI",
        "รักษาความสม่ำเสมอและความแม่นยำภายใต้ปริมาณงานที่สูง",
      ],
    },
    toolAdaptability: {
      title: "การปรับใช้เครื่องมือ",
      bullets: [
        "เรียนรู้และนำเทคโนโลยีใหม่ๆ ไปใช้ในงานจริงได้อย่างรวดเร็ว",
        "ผสาน AI เข้ากับเวิร์กโฟลว์เพื่อให้ได้ผลลัพธ์ที่วัดผลได้",
      ],
    },
    experience: {
      title: "ประสบการณ์",
      liveProductPrefix: "ผลิตภัณฑ์จริง:",
      roles: [
        {
          company: "Chibi Haven (แพลตฟอร์มที่ขับเคลื่อนด้วย AI)",
          role: "ผู้ก่อตั้ง",
          period: "2568 – ปัจจุบัน",
          projectUrl: "https://chibihaven.com",
          bullets: [
            "ออกแบบและพัฒนาแพลตฟอร์มที่ขับเคลื่อนด้วย AI สำหรับชุมชนคนเลี้ยงสัตว์",
            "พัฒนาระบบด้วย Flutter และ Firebase พร้อมฟีเจอร์แบบเรียลไทม์",
            "ใช้เครื่องมือ AI เพื่อเพิ่มความเร็วในการพัฒนาและประสิทธิภาพของระบบ",
            "สร้างและปรับปรุงระบบด้วยตนเองโดยใช้เครื่องมือพัฒนาที่มี AI ช่วย",
          ],
        },
        {
          company: "TDCX (Global Operations)",
          role: "Content Moderator",
          period: "10 ตุลาคม 2568 – 29 พฤษภาคม 2569",
          bullets: [
            "ได้รับการยอมรับในฐานะผู้ทำผลงานระดับแนวหน้าในสภาพแวดล้อมปริมาณงานสูงที่วัดผลด้วย KPI ระดับโลก",
            "ประมวลผลและวิเคราะห์ชุดข้อมูลคอนเทนต์ขนาดใหญ่ด้วยความแม่นยำสูง",
            "รักษามาตรฐานการปฏิบัติตามนโยบายแพลตฟอร์มที่ซับซ้อนในสถานการณ์ที่รวดเร็ว",
            "รักษาความแม่นยำสูงภายใต้เกณฑ์ KPI ที่เข้มงวด",
          ],
        },
        {
          company: "Lalizas (Thailand) Co., Ltd.",
          role: "ฝึกงานด้านการตลาดและการขาย",
          period: "ม.ค. 2567 – พ.ค. 2567",
          bullets: [
            "สนับสนุนแคมเปญการตลาดและการสื่อสารกับลูกค้า",
            "ช่วยจัดทำรายงาน นำเสนอ และงานปฏิบัติการทางธุรกิจ",
          ],
        },
        {
          company: "ธุรกิจครอบครัว (ค้าปลีก โลจิสติกส์ ซัพพลาย)",
          role: "กรรมการ",
          period: "ต่อเนื่อง",
          bullets: [
            "มีส่วนร่วมในการตัดสินใจเชิงกลยุทธ์ข้ามหลายหน่วยธุรกิจ",
            "สำรวจการเปลี่ยนผ่านสู่ดิจิทัลและการปรับปรุงกระบวนการ",
          ],
        },
      ],
    },
    additionalExperience: {
      title: "ประสบการณ์เพิ่มเติม",
      entries: [
        {
          headline: "X-Culture (ทีมเสมือนจริงระดับนานาชาติ) — 2565",
          subline: "ร่วมงานในทีมข้ามพรมแดนเพื่อพัฒนาโซลูชันธุรกิจ",
        },
        {
          headline: "โครงการ Top 500 ระดับประเทศ — Gen Z to be CEO (พ.ศ. 2564–2565)",
        },
      ],
    },
    education: {
      title: "การศึกษา",
      degree: "ปริญญาตรีบริหารธุรกิจ (บธ.บ.)",
      school: "มหาวิทยาลัยแม่ฟ้าหลวง",
      year: "สำเร็จการศึกษา พ.ศ. 2566",
      gpa: 3.95,
      honors: "เกียรตินิยมอันดับหนึ่ง เหรียญทอง (GPA 3.95 / 4.00)",
    },
    skills: {
      title: "ทักษะ",
      buckets: [
        { h: "Productivity & Collaboration", line: "Google Workspace • Microsoft Office" },
        { h: "AI & Automation", line: "ChatGPT • Cursor AI • API Integration" },
        { h: "Tech & Development", line: "Firebase • Flutter • Git/GitHub • VS Code" },
        { h: "Languages", line: "Thai (Native) • English (Fluent)" },
      ],
    },
    learning: {
      title: "การเรียนรู้เชิงลึก (คัดสรร)",
      groups: [
        {
          h: "โปรแกรมที่เน้นทักษะคิดและการสื่อสาร",
          items: [
            "Wisdom Me — เครื่องมือและกรอบคิดสำหรับการเติบโตส่วนบุคคล",
            "ChatGPT X (ออนไลน์) โดย MIB",
          ],
        },
      ],
    },
    personalDev: {
      title: "พัฒนาตนเอง & การเรียนรู้",
      sentence:
        "ฟังพอดแคสต์เป็นประจำ ได้แก่ Productive Peter, WISE JOE และ Mission to the Moon เน้นประสิทธิภาพ มายด์เซ็ต และมุมมองเชิงกลยุทธ์",
    },
    mindfulness: {
      title: "สติ & วินัย",
      bullets: [
        "จบโปรแกรม Mindfulness Habits (รุ่นที่ 10) เน้นความชัดเจนทางความคิด วินัย และการรู้ตัว",
      ],
    },
    lookingFor: {
      title: "สิ่งที่กำลังมองหา",
      bullets: [
        "บทบาทที่ใช้ภาษาอังกฤษและทำงานร่วมกับทีมระดับโลก",
        "โอกาสด้าน AI กลยุทธ์ธุรกิจ และระบบอัตโนมัติ",
        "รูปแบบการทำงานที่ยืดหยุ่น รีโมต หรือไฮบริด",
      ],
    },
    interests: {
      title: "ความสนใจ & ลิงก์",
      bullets: ["สนใจชุมชนและผลิตภัณฑ์ที่เกี่ยวกับสัตว์เลี้ยงโดยเฉพาะสาย Exotic"],
      treasure: "My Treasure Notes",
    },
    contact: {
      title: "ติดต่อ",
      cta: "เปิดรับโอกาสใหม่ — ติดต่อทางอีเมลหรือ LinkedIn ได้เลย",
      email: "chibi.chaitip@gmail.com",
      phone: "+66 88-216-9555",
      location: "Songkhla, Thailand",
      linkedin: "https://www.linkedin.com/in/kanyapak-chaitip-377485316/",
      birthday: "1 February 2002",
    },
    nav: {
      about: "เกี่ยวกับ", whatIDo: "สิ่งที่ทำ", howIWork: "วิธีทำงาน", workStyle: "สไตล์", toolAdaptability: "เครื่องมือ",
      experience: "ประสบการณ์", additionalExperience: "เพิ่มเติม",
      education: "การศึกษา", skills: "ทักษะ", learning: "การเรียนรู้",
      personalDev: "พัฒนาตนเอง", mindfulness: "สติ", lookingFor: "เป้าหมาย",
      interests: "ความสนใจ", contact: "ติดต่อ",
    },
    footer: "Next.js • Tailwind • Framer Motion • Prompt",
  },
  en: {
    langLabel: "EN",
    head: { title: "Chibi • Portfolio", tagline: "AI • Business • Systems" },
    hero: {
      name_primary: "Kanyapak Chaitip (Gam)",
      name_alt: "แก้ม (กัญญาภัค ใชยทิพย์)",
      role: "AI • Business • Systems",
      sub: "",
      summary: "Builder and operator—ships systems with AI, solves real-world problems, and executes in global, KPI-driven environments.",
    },
    highlights: {
      title: "At a glance",
      items: [
        { k: "Palette", v: "White • Navy" },
        { k: "Base", v: "Songkhla, TH" },
      ],
    },
    about: {
      title: "About me",
      paragraphs: [
        "AI-driven business graduate focused on building systems and solving real-world problems.",
        "Background in global, high-pressure, KPI-driven execution—structured thinking, fast adaptation, and consistent delivery.",
      ],
    },
    whatIDo: {
      title: "What I do",
      bullets: [
        "Build systems using AI and automation",
        "Solve business and operational problems",
        "Apply technology to real-world use cases",
      ],
    },
    howIWork: {
      title: "How I work",
      bullets: [
        "Focus on solving real problems, not just building features",
        "Use AI tools to accelerate thinking and execution",
        "Prefer structured, efficient, outcome-driven workflows",
      ],
    },
    workStyle: {
      title: "Work style",
      bullets: [
        "Perform effectively in high-pressure, KPI-driven environments",
        "Maintain consistency and accuracy under demanding workloads",
      ],
    },
    toolAdaptability: {
      title: "Tool adaptability",
      bullets: [
        "Quickly learn and apply new tools and technologies in real-world scenarios",
        "Strong ability to integrate AI into workflows for practical outcomes",
      ],
    },
    experience: {
      title: "Experience",
      liveProductPrefix: "Live product:",
      roles: [
        {
          company: "Chibi Haven (AI-powered platform)",
          role: "Founder",
          period: "2025 – Present",
          projectUrl: "https://chibihaven.com",
          bullets: [
            "Designed and built an AI-driven platform for pet communities",
            "Developed the system using Flutter and Firebase with real-time features",
            "Applied AI tools to improve development speed and system efficiency",
            "Built and iterated the system independently using AI-assisted development tools",
          ],
        },
        {
          company: "TDCX (Global Operations)",
          role: "Content Moderator",
          period: "October 10, 2025 – May 29, 2026",
          bullets: [
            "Consistently recognized as a top performer in a high-volume, KPI-driven global environment",
            "Processed and analyzed large-scale content datasets with high accuracy",
            "Ensured compliance with complex platform policies in fast-paced scenarios",
            "Maintained high accuracy under strict KPI-driven performance metrics",
          ],
        },
        {
          company: "Lalizas (Thailand) Co., Ltd.",
          role: "Sales & Marketing Intern",
          period: "Jan 2024 – May 2024",
          bullets: [
            "Supported marketing campaigns and client communication",
            "Assisted with reports, presentations, and business operations",
          ],
        },
        {
          company: "Family Businesses (Retail, Logistics, Supply)",
          role: "Board Member",
          period: "Ongoing",
          bullets: [
            "Contributed to strategic decisions across multiple business operations",
            "Explored digital transformation and process optimization",
          ],
        },
      ],
    },
    additionalExperience: {
      title: "Additional experience",
      entries: [
        {
          headline: "X-Culture (International Virtual Team) — 2022",
          subline: "Collaborated in cross-border teams to develop business solutions",
        },
        {
          headline: "Top 500 National Program — Gen Z to be CEO (2021–2022)",
        },
      ],
    },
    education: {
      title: "Education",
      degree: "Bachelor of Business Administration (B.B.A.)",
      school: "Mae Fah Luang University",
      year: "Graduated 2023",
      gpa: 3.95,
      honors: "GPA 3.95 / 4.00 — First-Class Honours, Gold Medal",
    },
    skills: {
      title: "Skills",
      buckets: [
        { h: "Productivity & Collaboration", line: "Google Workspace • Microsoft Office" },
        { h: "AI & Automation", line: "ChatGPT • Cursor AI • API Integration" },
        { h: "Tech & Development", line: "Firebase • Flutter • Git/GitHub • VS Code" },
        { h: "Languages", line: "Thai (Native) • English (Fluent)" },
      ],
    },
    learning: {
      title: "Focused learning",
      groups: [
        {
          h: "Structured programs (selected)",
          items: [
            "Wisdom Me — frameworks for personal growth and communication",
            "ChatGPT X (online) by MIB",
          ],
        },
      ],
    },
    personalDev: {
      title: "Personal development & learning",
      sentence:
        "Regular listening includes Productive Peter, WISE JOE, and Mission to the Moon—focused on productivity, mindset, and strategic thinking.",
    },
    mindfulness: {
      title: "Mindfulness & discipline",
      bullets: [
        "Completed the Mindfulness Habits Program (Batch 10), emphasizing mental clarity, discipline, and self-awareness.",
      ],
    },
    lookingFor: {
      title: "What I’m looking for",
      bullets: [
        "Roles involving English communication and global collaboration",
        "Opportunities in AI, business strategy, and automation",
        "Flexible remote or hybrid working environments",
      ],
    },
    interests: {
      title: "Interests & links",
      bullets: ["Interest in pet communities and products, especially exotic species"],
      treasure: "My Treasure Notes",
    },
    contact: {
      title: "Get in touch",
      cta: "Open to opportunities — feel free to reach out via email or LinkedIn.",
      email: "chibi.chaitip@gmail.com",
      phone: "+66 88-216-9555",
      location: "Songkhla, Thailand",
      linkedin: "https://www.linkedin.com/in/kanyapak-chaitip-377485316/",
      birthday: "1 February 2002",
    },
    nav: {
      about: "About", whatIDo: "What I do", howIWork: "How", workStyle: "Style", toolAdaptability: "Tools",
      experience: "Experience", additionalExperience: "More",
      education: "Education", skills: "Skills", learning: "Learning",
      personalDev: "Growth", mindfulness: "Mindfulness", lookingFor: "Goals",
      interests: "Interests", contact: "Contact",
    },
    footer: "Next.js • Tailwind • Framer Motion • Prompt",
  },
};

// ---------- UI helpers ----------

const palette = { base: "#ffffff", navy: "#0B1531", navy10: "#0b15311a" };

const Section = ({ id, title, children }: { id?: string; title: ReactNode; children: ReactNode }) => (
  <section id={id} className="scroll-mt-24 pt-8 md:pt-10 first:pt-6 md:first:pt-8">
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      className="mb-4 border-b border-slate-200/90 pb-2"
    >
      <h2 className="text-lg md:text-xl font-semibold tracking-tight text-[#0B1531]">{title}</h2>
    </motion.div>
    {children}
  </section>
);

const Card = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`rounded-2xl p-5 border bg-white/95 backdrop-blur shadow-sm ${className}`}>{children}</div>
);

const Pill = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm bg-white">{children}</span>
);

// ---------- Page ----------
export default function Page() {
  const [lang, setLang] = useState<Lang>("th");
  const t = useMemo<LocaleContent>(() => content[lang], [lang]);
  const year = useMemo(() => new Date().getUTCFullYear(), []);

  return (
    <div className={`${prompt.className} min-h-screen font-[var(--font-prompt),ui-sans-serif] antialiased text-slate-900`} style={{
      background: `linear-gradient(180deg, ${palette.navy10} 0%, transparent 240px)`,
      backgroundColor: palette.base,
    }}>
      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 py-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="flex items-center justify-between gap-3 sm:block sm:min-w-[10rem]">
            <div className="font-semibold tracking-tight text-[#0B1531] text-sm sm:text-base">Chibi • Portfolio</div>
            <button
              type="button"
              onClick={() => setLang((p) => (p === "th" ? "en" : "th"))}
              className="text-xs border rounded-full px-3 py-1.5 hover:bg-white inline-flex items-center gap-2 shrink-0 sm:hidden"
              aria-label="Toggle language"
              title={lang === "th" ? "Switch to English" : "สลับเป็นภาษาไทย"}
            >
              <Languages className="w-4 h-4" /> {t.langLabel}
            </button>
          </div>
          <nav
            className="flex flex-wrap justify-center sm:justify-end gap-x-3 gap-y-2 text-xs sm:text-sm text-[#0B1531] max-w-full sm:max-w-[min(100%,42rem)] sm:flex-1"
            aria-label="Primary"
          >
            <a href="#about" className="hover:underline underline-offset-4">{t.nav.about}</a>
            <a href="#what-i-do" className="hover:underline underline-offset-4">{t.nav.whatIDo}</a>
            <a href="#how-i-work" className="hover:underline underline-offset-4">{t.nav.howIWork}</a>
            <a href="#work-style" className="hover:underline underline-offset-4">{t.nav.workStyle}</a>
            <a href="#tool-adaptability" className="hover:underline underline-offset-4">{t.nav.toolAdaptability}</a>
            <a href="#experience" className="hover:underline underline-offset-4">{t.nav.experience}</a>
            <a href="#additional-experience" className="hover:underline underline-offset-4">{t.nav.additionalExperience}</a>
            <a href="#education" className="hover:underline underline-offset-4">{t.nav.education}</a>
            <a href="#skills" className="hover:underline underline-offset-4">{t.nav.skills}</a>
            <a href="#learning" className="hover:underline underline-offset-4">{t.nav.learning}</a>
            <a href="#personal-dev" className="hover:underline underline-offset-4">{t.nav.personalDev}</a>
            <a href="#mindfulness" className="hover:underline underline-offset-4">{t.nav.mindfulness}</a>
            <a href="#looking-for" className="hover:underline underline-offset-4">{t.nav.lookingFor}</a>
            <a href="#interests" className="hover:underline underline-offset-4">{t.nav.interests}</a>
            <a href="#contact" className="hover:underline underline-offset-4">{t.nav.contact}</a>
          </nav>
          <button
            type="button"
            onClick={() => setLang((p) => (p === "th" ? "en" : "th"))}
            className="hidden sm:inline-flex text-xs border rounded-full px-3 py-1.5 hover:bg-white items-center gap-2 shrink-0 self-start"
            aria-label="Toggle language"
            title={lang === "th" ? "Switch to English" : "สลับเป็นภาษาไทย"}
          >
            <Languages className="w-4 h-4" /> {t.langLabel}
          </button>
        </div>
      </header>

      {/* Navy hero banner */}
      <div className="bg-[#0B1531] text-white">
        <div className="max-w-6xl mx-auto px-5 pt-8 pb-10">
          <div className="flex flex-col items-center">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="relative">
              <div className="rounded-2xl border border-white/20 bg-white/5 p-2 shadow-md">
                <div className="aspect-square w-[168px] md:w-[200px] rounded-xl overflow-hidden">
                  <Image src="/portrait.jpg" alt="Chibi portrait" width={600} height={600} className="w-full h-full object-cover" priority />
                </div>
              </div>
              <div className="absolute -bottom-3 right-0 bg-white/90 text-[#0B1531] border rounded-xl px-2 py-1 shadow hidden md:flex items-center">
                <span className="text-xs font-medium tracking-tight">{t.head.tagline}</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="mt-4 text-center">
              <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">{t.hero.name_primary}</h1>
              <p className="mt-1 text-white/80">{t.hero.name_alt}</p>
              <p className="mt-2 text-sm md:text-base text-white/95 font-medium tracking-wide">{t.head.tagline}</p>
              {t.hero.sub ? (
                <p className="mt-1.5 text-sm text-white/80 max-w-xl mx-auto">{t.hero.sub}</p>
              ) : null}
              <p className="mt-3 max-w-2xl mx-auto text-white/85 text-sm md:text-base leading-relaxed">{t.hero.summary}</p>

              {/* Quick highlights */}
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {t.highlights.items.map((p, i) => (
                  <span key={i} className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs md:text-sm">
                    {p.k}:&nbsp;<span className="font-medium ml-1">{p.v}</span>
                  </span>
                ))}
              </div>

              {/* Contacts in navy band */}
              <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <a className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white text-[#0B1531] border border-white/10 hover:bg-white/90" href={`mailto:${t.contact.email}`}>
                  <Mail className="w-4 h-4" /> {t.contact.email}
                </a>
                <a className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white text-[#0B1531] border border-white/10 hover:bg-white/90" href={`tel:${t.contact.phone.replace(/\s|-/g, "")}`}>
                  <Phone className="w-4 h-4" /> {t.contact.phone}
                </a>
                <span className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white/10 border border-white/25">
                  <MapPin className="w-4 h-4" /> {t.contact.location}
                </span>
                <span className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white/10 border border-white/25">
                  <Calendar className="w-4 h-4" /> {t.contact.birthday}
                </span>
                <a className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white text-[#0B1531] border border-white/10 hover:bg-white/90 sm:col-span-2 lg:col-span-4 justify-center" href={t.contact.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-5">
        {/* About */}
        <Section id="about" title={t.about.title}>
          <Card>
            <div className="space-y-3 text-sm md:text-base text-slate-800 leading-relaxed max-w-3xl">
              {t.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Card>
        </Section>

        <Section id="what-i-do" title={t.whatIDo.title}>
          <Card>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-800 max-w-3xl">
              {t.whatIDo.bullets.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </Card>
        </Section>

        <Section id="how-i-work" title={t.howIWork.title}>
          <Card>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-800 max-w-3xl">
              {t.howIWork.bullets.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </Card>
        </Section>

        <Section id="work-style" title={t.workStyle.title}>
          <Card>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-800 max-w-3xl">
              {t.workStyle.bullets.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </Card>
        </Section>

        <Section id="tool-adaptability" title={t.toolAdaptability.title}>
          <Card>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-800 max-w-3xl">
              {t.toolAdaptability.bullets.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </Card>
        </Section>

        {/* Experience — Title → Date → bullets; Chibi Haven highlighted */}
        <Section id="experience" title={t.experience.title}>
          <div className="space-y-5">
            {t.experience.roles.map((e, i) => (
              <Card
                key={i}
                className={
                  e.projectUrl
                    ? "border-[#0B1531]/40 bg-gradient-to-br from-white via-white to-slate-50 shadow-md ring-2 ring-[#0B1531]/12"
                    : ""
                }
              >
                <div className={`text-base md:text-lg font-semibold leading-snug ${e.projectUrl ? "text-[#0B1531]" : "text-slate-900"}`}>
                  <span>{e.role}</span>
                  <span className="font-normal text-slate-500"> — </span>
                  <span className={e.projectUrl ? "text-[#0B1531]" : ""}>{e.company}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600 tabular-nums">{e.period}</p>
                {e.projectUrl ? (
                  <p className="mt-3 border-t border-slate-200/90 pt-3 text-sm">
                    <span className="text-slate-700 font-medium">{t.experience.liveProductPrefix} </span>
                    <a
                      href={e.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#0B1531] underline decoration-[#0B1531]/40 underline-offset-4 hover:text-[#0c1a3d]"
                    >
                      {e.projectUrl}
                    </a>
                  </p>
                ) : null}
                {e.bullets && e.bullets.length > 0 && (
                  <ul className="mt-3 list-disc pl-5 space-y-1.5 text-sm md:text-base text-slate-700">
                    {e.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        </Section>

        <Section id="additional-experience" title={t.additionalExperience.title}>
          <Card className="space-y-4">
            {t.additionalExperience.entries.map((ent, idx) => (
              <div
                key={idx}
                className={idx > 0 ? "pt-4 border-t border-slate-200/90" : ""}
              >
                <p className="text-sm md:text-base font-semibold text-slate-900 leading-snug">{ent.headline}</p>
                {ent.subline ? (
                  <p className="mt-1.5 text-sm md:text-base text-slate-700 leading-relaxed">{ent.subline}</p>
                ) : null}
              </div>
            ))}
          </Card>
        </Section>

        {/* Education */}
        <Section id="education" title={t.education.title}>
          <Card>
            <div className="flex flex-wrap items-center gap-3">
              <div className="text-base md:text-lg font-semibold text-slate-900">{t.education.degree}</div>
              <Pill>{t.education.school}</Pill>
              <Pill>{t.education.year}</Pill>
              {typeof t.education.gpa === "number" && <Pill>GPA: {t.education.gpa.toFixed(2)} / 4.00</Pill>}
              {t.education.honors && <Pill>{t.education.honors}</Pill>}
            </div>
            <div className="mt-4 mx-auto w-full max-w-md overflow-hidden rounded-xl border">
              <div className="aspect-[16/9] w-full">
                <Image
                  src="/graduation.jpg"
                  alt="Graduation"
                  width={960}
                  height={540}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </Card>
        </Section>

        {/* Skills */}
        <Section id="skills" title={t.skills.title}>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {t.skills.buckets.map((b, i) => (
              <Card key={i} className="py-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[#0B1531]/90 mb-2">{b.h}</h3>
                <p className="text-sm md:text-base text-slate-800 leading-relaxed">{b.line}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* Learning (curated) */}
        <Section id="learning" title={t.learning.title}>
          <div className="grid md:grid-cols-2 gap-6">
            {t.learning.groups.map((grp, idx) => (
              <Card key={idx}>
                <div className="font-semibold mb-2 text-slate-900">{grp.h}</div>
                <ul className="space-y-2 text-sm md:text-base list-disc pl-5 text-slate-700">
                  {grp.items.map((it, j) => <li key={j}>{it}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="personal-dev" title={t.personalDev.title}>
          <Card>
            <p className="text-sm md:text-base text-slate-800 leading-relaxed max-w-3xl">{t.personalDev.sentence}</p>
          </Card>
        </Section>

        <Section id="mindfulness" title={t.mindfulness.title}>
          <Card>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-800">
              {t.mindfulness.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </Card>
        </Section>

        <Section id="looking-for" title={t.lookingFor.title}>
          <Card>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-800">
              {t.lookingFor.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </Card>
        </Section>

        {/* Interests & Treasure */}
        <Section id="interests" title={t.interests.title}>
          <Card>
            <div className="grid md:grid-cols-[1.5fr,1fr] gap-6 items-start">
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-800">
                {t.interests.bullets.map((g, i) => <li key={i}>{g}</li>)}
              </ul>
              <a className="inline-flex items-center gap-2 border rounded-xl px-4 py-2 hover:bg-white justify-center" href="https://drive.google.com/drive/folders/1DudYYT1Bd7qJap2YL68oWieS_Fs8q62q?usp=drive_link" target="_blank" rel="noreferrer">
                <Download className="w-4 h-4" /> {t.interests.treasure}
              </a>
            </div>
          </Card>
        </Section>

        {/* Contact */}
        <Section id="contact" title={t.contact.title}>
          <Card>
            <p className="text-sm md:text-base text-slate-800 font-medium mb-4 max-w-2xl leading-relaxed">{t.contact.cta}</p>
            <div className="flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 border rounded-xl px-4 py-2 hover:bg-white" href={`mailto:${t.contact.email}`}>
                <Mail className="w-4 h-4" /> {t.contact.email}
              </a>
              <a className="inline-flex items-center gap-2 border rounded-xl px-4 py-2 hover:bg-white" href={`tel:${t.contact.phone.replace(/\s|-/g, "")}`}>
                <Phone className="w-4 h-4" /> {t.contact.phone}
              </a>
              <a className="inline-flex items-center gap-2 border rounded-xl px-4 py-2 hover:bg-white" href={t.contact.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </Card>
        </Section>

        {/* Footer */}
        <footer className="py-10 text-center text-xs text-slate-500">
          © {year} Chibi. {t.footer}
          <div className="mt-2 inline-flex items-center gap-1 text-slate-400">
            <ChevronRight className="w-3 h-3" /> {content[lang].head.tagline}
          </div>
        </footer>
      </main>
      <div
  data-fillout-id="nNZSpWbsprus"
  data-fillout-embed-type="popup"
  data-fillout-button-text="Feedback"
  data-fillout-dynamic-resize
  data-fillout-button-color="#02055F"
  data-fillout-button-float="bottom-right"
  data-fillout-inherit-parameters
  data-fillout-popup-size="medium"
></div>
<Script src="https://server.fillout.com/embed/v1/" strategy="afterInteractive" />
    </div>
  );
}
