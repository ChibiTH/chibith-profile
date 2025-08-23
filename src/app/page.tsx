"use client";
import Script from "next/script";
import { useMemo, useState, type ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Linkedin, Languages, ChevronRight,
  Zap, Briefcase, GraduationCap, ShieldCheck, LibraryBig, Sparkles, Globe, Calendar, Download
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

type SkillsBucket = { h: string; items: string[] };

type Role = { company: string; role: string; period: string; bullets?: string[] };

type Education = {
  title: string; degree: string; school: string; year: string;
  gpa: number; honors?: string;
};

type Contact = {
  title: string; email: string; phone: string; location: string; linkedin: string; birthday: string;
};

type LocaleContent = {
  langLabel: string;
  head: { title: string; tagline: string };
  hero: {
    name_primary: string; name_alt: string; role: string; sub: string; summary: string;
  };
  highlights: { title: string; items: { k: string; v: string }[] };
  about: { title: string; bullets: string[] };
  strengths: { title: string; good: string[]; bad_title: string; bad: string[] };
  experience: { title: string; roles: Role[] };
  education: Education;
  skills: { title: string; buckets: SkillsBucket[] };
  learning: { title: string; groups: LearningGroup[] };
  interests: { title: string; bullets: string[]; treasure: string };
  contact: Contact;
  nav: { about: string; experience: string; education: string; skills: string; learning: string; interests: string; contact: string };
  footer: string;
};

type ContentDict = Record<Lang, LocaleContent>;

// ---------- Copy (refined TH/EN) ----------

const content: ContentDict = {
  th: {
    langLabel: "ไทย",
    head: { title: "Chibi • Portfolio", tagline: "Business • AI • Strategy • Continuous Growth" },
    hero: {
      name_primary: "แก้ม (กัญญาภัค ใชยทิพย์)",
      name_alt: "Gam (Kanyapak Chaitip)",
      role: "Business • AI • Strategy",
      sub: "เติบโตอย่างต่อเนื่อง • ใช้ AI/Automation ให้เกิดผลจริง",
      summary: "วิเคราะห์เป็น วางระบบได้ ลงมือทำจริง ชอบทำงานเป็นระบบ สื่อสารชัด และเรียนรู้เร็ว",
    },
    highlights: {
      title: "ข้อมูลย่อ",
      items: [
        { k: "MBTI", v: "INTJ" },
        { k: "ภาษา", v: "ไทย (Native) • English (Fluent)" },
        { k: "โทนสี", v: "White • Navy" },
        { k: "ที่อยู่", v: "Songkhla, TH" },
      ],
    },
    about: {
      title: "เกี่ยวกับฉัน",
      bullets: [
        "รักการพัฒนาตัวเอง (ภาวนา/สติ • Mindset • Soft Skills)",
        "ประยุกต์ใช้ AI/Automation (GPT, n8n, Vibe Coding) กับงานจริง",
        "รักสัตว์ตั้งแต่เด็ก อยากทำให้โลกดีขึ้น","กำลังทำ Start Up ,Chibi Haven ด้วยตัวเอง (Flutter) "
      ],
    },
    strengths: {
      title: "บุคลิก & สไตล์การทำงาน",
      good: [
        "วางแผนเก่ง", "ใจดี เปิดกว้าง", "เรียบร้อย",
        "ละเอียด มีเหตุผล", "รับผิดชอบ", "วิสัยทัศน์", "เรียนรู้ไว", "ซื่อสัตย์ ตรงเวลา",
        "แก้ปัญหาเร็ว"
      ],
      bad_title: "พื้นที่ที่กำลังพัฒนา",
      bad: ["ขี้กลัว", "ตรงไปตรงมามากไปบ้าง", "กดดันตัวเอง", "บางครั้งสื่อสารน้อย"],
    },
    experience: {
      title: "ประสบการณ์",
      roles: [
        { company: "Lalizas (Thailand) Co., Ltd.", role: "Sales & Marketing Intern", period: "ม.ค. 2024 – พ.ค. 2024 (ภูเก็ต)" },
        { company: "GMJ Marketing Co., Ltd.", role: "กรรมการธุรกิจครอบครัว", period: "ปัจจุบัน" },
        { company: "111 ขนส่ง จำกัด", role: "กรรมการธุรกิจครอบครัว", period: "ปัจจุบัน" },
        { company: "Product Center Supply", role: "กรรมการธุรกิจครอบครัว", period: "ปัจจุบัน" },
         { company: "X-Culture (International Virtual Teamwork)", role: "ทำงานเป็นทีมข้ามชาติ • พัฒนาโซลูชันธุรกิจ", period: "Global remote project" },
  { company: "โครงการ ‘Gen Z to be CEO’", role: "Top 500 ประเทศ", period: "2021–2022" },
      ],
    },
    education: {
      title: "การศึกษา",
      degree: "ปริญญาตรี บริหารธุรกิจ",
      school: "มหาวิทยาลัยแม่ฟ้าหลวง — สำนักวิชาการจัดการ",
      year: "สำเร็จการศึกษา พ.ศ. 2566",
      gpa: 3.95,
      honors: "เหรียญทองเกียรตินิยม (First‑class Honours)",
      
    },
    
    skills: {
      title: "ทักษะ",
      buckets: [
        { h: "Productivity & Collaboration", items: ["Google Workspace", "Microsoft Office", "Discord"] },
        { h: "AI & Automation", items: ["ChatGPT, Cursor AI", "Workflow Automation (n8n, Remouse)", "API Integration"] },
        { h: "Design & Content", items: ["Canva", "CapCut"] },
        { h: "Tech & Development", items: ["Git/GitHub", "VS Code", "Firebase (BaaS)"] },
      ],
    },
    learning: {
      title: "คอร์ส & การเรียนรู้",
      groups: [
        { h: "Courses", items: [
          "Ultimate Life Tool by Wisdom Me",
          "Heart to Social Skill by Wisdom Me",
          "Self Love – Self Confidence by Wisdom Me",
          "Build your perfect friendship by Wisdom Me",
          "Thinking Techniques for Growth by Wisdom Me",
          "I LOVE ME by Wisdom Me",
          "ChatGPT X (Online) by MIB",
          "n8n Workflow Automation 101 by Uncle Engineer",
          "Multiple programs by FutureSkill",
          "Vibe Coding",
        ] },
      ],
    },
    interests: {
      title: "ความสนใจ & ลิงก์",
      bullets: ["Podcast: Mission to the Moon", "รักสัตว์ โดยเฉพาะสาย Exotic"],
      treasure: "My Treasure Notes",
    },
    contact: {
      title: "ติดต่อ",
      email: "chibi.chaitip@gmail.com",
      phone: "+66 88-216-9555",
      location: "Songkhla, Thailand",
      linkedin: "https://www.linkedin.com/in/kanyapak-chaitip-377485316/",
      birthday: "1 February 2002",
    },
    nav: { about: "เกี่ยวกับ", experience: "ประสบการณ์", education: "การศึกษา", skills: "ทักษะ", learning: "คอร์ส", interests: "ความสนใจ", contact: "ติดต่อ" },
    footer: "Next.js • Tailwind • Framer Motion • Prompt",
  },
  en: {
    langLabel: "EN",
    head: { title: "Chibi • Portfolio", tagline: "Business • AI • Strategy • Continuous Growth" },
    hero: {
      name_primary: "Kanyapak Chaitip (Gam)",
      name_alt: "แก้ม (กัญญาภัค ใชยทิพย์)",
      role: "Business • AI • Strategy",
      sub: "Continuously improving • Practical AI/Automation",
      summary: "Operator‑strategist who analyzes, systemizes, and ships. Clear communication, structured execution, fast learner.",
    },
    highlights: {
      title: "At a glance",
      items: [
        { k: "MBTI", v: "INTJ" },
        { k: "Languages", v: "Thai (Native) • English (Fluent)" },
        { k: "Palette", v: "White • Navy" },
        { k: "Base", v: "Songkhla, TH" },
      ],
    },
    about: {
      title: "About",
      bullets: [
        "Self‑development (mindfulness • mindset • soft skills)",
        "Applies AI/Automation (GPT, n8n, Vibe Coding) to real workflows",
        "Lifelong pet lover; Want to make a world better place", " Doing Start Up ,Chibi Haven, By myself (Flutter) "
      ],
    },
    strengths: {
      title: "Strengths & Working style",
      good: [
        "Strong planning", "Kind & open‑minded", "Family‑oriented", "Neat & cheerful",
        "Detail‑oriented & rational", "Responsible", "Vision", "Fast learner", "Honest & punctual",
        "Good problem‑solver", "IT/Eng savvy", "Adaptable", "Playful",
      ],
      bad_title: "Growth areas",
      bad: ["Fearful at times", "Too direct occasionally", "Self‑pressure", "Sometimes under‑communicates"],
    },
    experience: {
      title: "Experience",
      roles: [
        { company: "Lalizas (Thailand) Co., Ltd.", role: "Sales & Marketing Intern", period: "Jan 2024 – May 2024 (Phuket)" },
        { company: "GMJ Marketing Co., Ltd.", role: "Family Business Board Member", period: "Present" },
        { company: "111 Transport Co., Ltd.", role: "Family Business Board Member", period: "Present" },
        { company: "Product Center Supply", role: "Family Business Board Member", period: "Present" },
      { company: "X-Culture", role: "International Virtual Teamwork — cross-border team developing business solutions", period: "Global remote project" },
  { company: "‘Gen Z to be CEO’ Program", role: "Top 500 (National)", period: "2021–2022" },
      ],
    },
    education: {
      title: "Education",
      degree: "B.B.A.",
      school: "Mae Fah Luang University — School of Management",
      year: "Graduated 2023",
      gpa: 3.95,
      honors: "First‑class Honours (Gold Medal)",
    },
    skills: {
      title: "Skills",
      buckets: [
        { h: "Productivity & Collaboration", items: ["Google Workspace", "Microsoft Office", "Discord"] },
        { h: "AI & Automation", items: ["ChatGPT, Cursor AI", "Workflow Automation (n8n, Remouse)", "API Integration"] },
        { h: "Design & Content", items: ["Canva", "CapCut"] },
        { h: "Tech & Development", items: ["Git/GitHub", "VS Code", "Firebase (BaaS)"] },
      ],
    },
    learning: {
      title: "Courses & Learning",
      groups: [
        { h: "Courses", items: [
          "Ultimate Life Tool by Wisdom Me",
          "Heart to Social Skill by Wisdom Me",
          "Self Love – Self Confidence by Wisdom Me",
          "Build your perfect friendship by Wisdom Me",
          "Thinking Techniques for Growth by Wisdom Me",
          "I LOVE ME by Wisdom Me",
          "ChatGPT X (Online) by MIB",
          "n8n Workflow Automation 101 by Uncle Engineer",
          "Multiple programs by FutureSkill",
          "Vibe Coding",
        ] },
      ],
    },
    interests: {
      title: "Interests & Links",
      bullets: ["Podcast I enjoy: Mission to the Moon", "Lifelong pet lover, especially exotic species"],
      treasure: "My Treasure Notes",
    },
    contact: {
      title: "Get in touch",
      email: "chibi.chaitip@gmail.com",
      phone: "+66 88-216-9555",
      location: "Songkhla, Thailand",
      linkedin: "https://www.linkedin.com/in/kanyapak-chaitip-377485316/",
      birthday: "1 February 2002",
    },
    nav: { about: "About", experience: "Experience", education: "Education", skills: "Skills", learning: "Courses", interests: "Interests", contact: "Contact" },
    footer: "Next.js • Tailwind • Framer Motion • Prompt",
  },
};

// ---------- UI helpers ----------

const palette = { base: "#ffffff", navy: "#0B1531", navy10: "#0b15311a" };

const Section = ({ id, title, icon, children }: { id?: string; title: ReactNode; icon?: ReactNode; children: ReactNode }) => (
  <section id={id} className="scroll-mt-24">
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4 }} className="mb-5 flex items-center gap-3">
      <div className="p-2 rounded-xl border bg-white/90 backdrop-blur text-slate-700 shadow-sm">{icon}</div>
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0B1531]">{title}</h2>
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
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <div className="font-semibold tracking-tight text-[#0B1531]">Chibi • Portfolio</div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:underline">{t.nav.about}</a>
            <a href="#experience" className="hover:underline">{t.nav.experience}</a>
            <a href="#education" className="hover:underline">{t.nav.education}</a>
            <a href="#skills" className="hover:underline">{t.nav.skills}</a>
            <a href="#learning" className="hover:underline">{t.nav.learning}</a>
            <a href="#interests" className="hover:underline">{t.nav.interests}</a>
            <a href="#contact" className="hover:underline">{t.nav.contact}</a>
          </nav>
          <button
            onClick={() => setLang((p) => (p === "th" ? "en" : "th"))}
            className="text-xs border rounded-full px-3 py-1 hover:bg-white inline-flex items-center gap-2"
            aria-label="Toggle language"
            title={lang === 'th' ? 'Switch to English' : 'สลับเป็นภาษาไทย'}
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
              <div className="absolute -bottom-3 right-0 bg-white/90 text-[#0B1531] border rounded-xl px-2 py-1 shadow hidden md:flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs">Business • AI • Strategy</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="mt-4 text-center">
              <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">{t.hero.name_primary}</h1>
              <p className="mt-1 text-white/80">{t.hero.name_alt}</p>
              <p className="mt-2 text-sm md:text-base text-white/90">{t.hero.role} • {content[lang].head.tagline}</p>
              <p className="mt-3 max-w-2xl mx-auto text-white/90">{t.hero.summary}</p>

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
        <Section id="about" title={t.about.title} icon={<ShieldCheck className="w-5 h-5" /> }>
          <Card>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-800">
              {t.about.bullets.map((g, i) => <li key={i}>{g}</li>)}
            </ul>
          </Card>
        </Section>

        {/* Strengths */}
        <Section id="strengths" title={t.strengths.title} icon={<Sparkles className="w-5 h-5" /> }>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <div className="font-semibold mb-2 text-[#0B1531]">{lang === 'th' ? 'ข้อดี' : 'Strengths'}</div>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-700">
                {t.strengths.good.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </Card>
            <Card>
              <div className="font-semibold mb-2 text-[#0B1531]">{t.strengths.bad_title}</div>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-700">
                {t.strengths.bad.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </Card>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title={t.skills.title} icon={<Zap className="w-5 h-5" /> }>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.skills.buckets.map((b, i) => (
              <Card key={i}>
                <h3 className="font-semibold mb-2 text-slate-900">{b.h}</h3>
                <ul className="space-y-2 text-sm md:text-base list-disc pl-5 text-slate-700">
                  {b.items.map((s, j) => <li key={j}>{s}</li>)}
                </ul>
              </Card>
            ))}
          </div>
          <p className="mt-3 text-sm text-slate-600">{lang === 'th' ? 'เรียนรู้เทคโนโลยีใหม่ได้เร็ว และเชี่ยวชาญการประยุกต์ใช้ AI ในงานจริง' : 'Learns new tech quickly and applies AI tools effectively.'}</p>
        </Section>

        {/* Learning */}
        <Section id="learning" title={t.learning.title} icon={<LibraryBig className="w-5 h-5" /> }>
          <div className="grid md:grid-cols-3 gap-6">
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

        {/* Education */}
<Section id="education" title={t.education.title} icon={<GraduationCap className="w-5 h-5" /> }>
  <Card>
    <div className="flex flex-wrap items-center gap-3">
      <div className="text-base md:text-lg font-semibold text-slate-900">{t.education.degree}</div>
      <Pill>{t.education.school}</Pill>
      <Pill>{t.education.year}</Pill>
      {typeof t.education.gpa === "number" && <Pill>GPA: {t.education.gpa.toFixed(2)}</Pill>}
      {t.education.honors && <Pill>{t.education.honors}</Pill>}
    </div>

    {/* Graduation photo — เล็กพอดี, โค้งมน, ครอบ 16:9 */}
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

        {/* Experience */}
<Section id="experience" title={t.experience.title} icon={<Briefcase className="w-5 h-5" /> }>
  <div className="space-y-4">
    {t.experience.roles.map((e, i) => (
      <Card key={i}>
        <div className="flex flex-wrap items-center gap-3">
          <div className="text-base md:text-lg font-semibold text-slate-900">{e.role}</div>
          <Pill>{e.company}</Pill>
          <Pill>{e.period}</Pill>
        </div>
      </Card>
    ))}

    {/* YEC highlight — การ์ดภาพเล็ก โค้งมน ครอบ 16:9 */}
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-slate-900">
          {lang === "th" ? "สมาชิก YEC สงขลา" : "YEC Songkhla Member"}
        </h3>
        <span className="text-sm text-slate-600">Young Entrepreneur Chamber</span>
      </div>
      <div className="mt-3 mx-auto w-full max-w-sm overflow-hidden rounded-xl border shadow-sm">
        <div className="aspect-[16/9] w-full">
          <Image
            src="/yec.jpg"
            alt="YEC Songkhla"
            width={800}
            height={450}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </Card>
  </div>
</Section>

        {/* Interests & Treasure */}
        <Section id="interests" title={t.interests.title} icon={<Globe className="w-5 h-5" /> }>
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
        <Section id="contact" title={t.contact.title} icon={<Mail className="w-5 h-5" /> }>
          <Card>
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
