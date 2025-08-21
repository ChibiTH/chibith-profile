"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Linkedin, Download, Languages, ChevronRight,
  Zap, Briefcase, GraduationCap, ShieldCheck, LibraryBig, Sparkles
} from "lucide-react";

// =============================
// BILINGUAL PORTFOLIO PAGE (TH/EN)
// Design: Minimal • Classic • Formal — Colors: White + Navy
// =============================
// ---------- Types ----------
type Lang = "th" | "en";

type LearningItem = { t: string; d: string };
type SkillsBucket = { h: string; items: string[] };
type Role = { company: string; role: string; period: string; bullets: string[] };

type Education = {
  title: string; degree: string; school: string; year: string;
  gpa: number; honors?: string; focus: string[];
};
type Contact = { title: string; email: string; phone: string; location: string; linkedin: string };

type LocaleContent = {
  langLabel: string;
  head: { title: string; tagline: string };
  hero: { greeting: string; name: string; role: string; summary: string; ctas: { contact: string; cv: string } };
  about: { title: string; bullets: string[] };
  learning: { title: string; items: LearningItem[] };
  skills: { title: string; buckets: SkillsBucket[] };
  education: Education;
  experience: { title: string; roles: Role[] };
  activities: { title: string; items: string[] };
  contact: Contact;
  nav: { about: string; learning: string; skills: string; education: string; experience: string; activities: string; contact: string };
  footer: string;
};
const content: ContentDict = {
  th: {
    langLabel: "TH",
    head: { title: "Chibi • Private Portfolio (TH)", tagline: "INTJ • Business, AI & Continuous Growth" },
    hero: {
      greeting: "สวัสดีค่ะ หนูชื่อ",
      name: "กัญญาภัค ใชยทิพย์",
      role: "Business / AI / Strategy",
      summary: "รักการพัฒนาอย่างต่อเนื่อง — ภาวนา เรียนรู้ Future Skills และประยุกต์ใช้ AI/Automation ในงานจริง",
      ctas: { contact: "ติดต่อ", cv: "ดาวน์โหลด vCard" },
    },
    about: {
      title: "เกี่ยวกับฉัน",
      bullets: [
        "ชอบพัฒนาตัวเอง: ภาวนา, คอร์สครูเงาะ, อ่านหนังสือ, คอร์ส AI (GPTX) และ Future Skills",
        "เลี้ยงสัตว์เลี้ยงตั้งแต่ ป.5 (กระต่าย, ชูการ์ไกลเดอร์, นกแก้ว) — เข้าใจผู้คนและสัตว์",
        "กรรมการธุรกิจครอบครัว 4 แห่ง — โฟกัสที่ GMJ Marketing",
        "จิตอาสาต่อเนื่อง: วัด โรงเรียน สโมสรนักศึกษา ครอบครัวพอเพียง (พ่อแม่เป็นสมาชิก Lions Club)",
        "สมาชิก YEC สงขลา, ช่วยดูแลเพจวัดหาดใหญ่ใน",
        "กำลังทำสตาร์ตอัป ‘Chibi Haven’ (Flutter)"
      ],
    },
    learning: {
      title: "การเรียนรู้ & Future Skills",
      items: [
        { t: "ภาวนา/สติ", d: "ฝึกสมาธิ & การวางใจ เพื่อคุณภาพการตัดสินใจ" },
        { t: "คอร์สครูเงาะ", d: "การสื่อสาร ภาวะผู้นำ Growth Mindset (ต่อเนื่องรายปี)" },
        { t: "GPTX (MBA)", d: "ระบบงานด้วย GPT: เอกสาร กระบวนการ วิเคราะห์" },
        { t: "VibeCoding, n8n", d: "Automation/RPA เพื่อประสิทธิภาพธุรกิจ" },
      ],
    },
    skills: {
      title: "ทักษะ",
      buckets: [
        { h: "Core", items: ["การวิเคราะห์ธุรกิจ", "กลยุทธ์/การตลาด", "AI/Automation", "Problem Solving", "Time Management", "Leadership"] },
        { h: "Tools", items: ["Excel/Word", "Graphic/Video Editing", "GPTX (MBA)", "n8n", "VibeCoding"] },
        { h: "Languages", items: ["ไทย (เจ้าของภาษา)", "อังกฤษ (ดีมาก)"] },
      ],
    },
    education: {
      title: "การศึกษา",
      degree: "ปริญญาตรี บริหารธุรกิจ",
      school: "มหาวิทยาลัยแม่ฟ้าหลวง (สำนักวิชาการจัดการ)",
      year: "สำเร็จการศึกษา พ.ศ. 2566",
      gpa: 3.95,
      honors: "เหรียญทองเกียรตินิยม (First-class Honours)",
      focus: ["การตลาด", "การจัดการธุรกิจระหว่างประเทศ", "พฤติกรรมผู้บริโภค", "ส่งออก-นำเข้า", "กลยุทธ์ธุรกิจ", "ภาวะผู้นำ"],
    },
    experience: {
      title: "ประสบการณ์",
      roles: [
        {
          company: "Lalizas (Thailand) Co., Ltd.",
          role: "Sales & Marketing Intern",
          period: "ม.ค. 2024 – พ.ค. 2024 (ภูเก็ต)",
          bullets: [
            "ดูแล Online Store (เพิ่ม/อัปเดตสินค้า + SEO)",
            "คอนเทนต์ภาพ/วิดีโอ โปรโมตบน Facebook & TikTok",
            "สนับสนุนแคมเปญการขาย + ทำ One-pager ให้คู่ค้า",
            "สนับสนุนผู้บริหารและฝ่ายขาย งานสต็อก/อีเวนต์"
          ],
        },
        {
          company: "GMJ Marketing Co., Ltd.",
          role: "กรรมการบริษัท (ครอบครัว)",
          period: "2023 – ปัจจุบัน",
          bullets: ["ช่วยพัฒนาธุรกิจครอบครัว", "ประสานงานด้านการตลาดและกลยุทธ์"],
        },
      ],
    },
    activities: {
      title: "กิจกรรม & ภาวะผู้นำ",
      items: [
        "สภานักศึกษาคณะบริหารธุรกิจ – ฝ่ายเอกสาร (2020–2021)",
        "พิธีกรหลักกิจกรรมคริสต์มาส มหาวิทยาลัย (2022)",
        "Top 500 ประเทศ โครงการ ‘Gen Z to be CEO’ (2021–2022)",
        "พี่บัดดี้นักเรียนแลกเปลี่ยนจากจีน & เมียนมา",
        "แข่งขัน (หมากรุกคำ) – อันดับ 3",
        "OBELS Webinar 2021",
        "ช่วยครอบครัวจัดงานเลี้ยงขอบคุณลูกค้า GS Battery",
      ],
    },
    contact: {
      title: "ติดต่อฉัน",
      email: "chibi.chaitip@gmail.com",
      phone: "+66 88-216-9555",
      location: "Thailand",
      linkedin: "https://www.linkedin.com/in/kanyapak-chaitip-377485316/",
    },
    nav: { about: "เกี่ยวกับ", learning: "เรียนรู้", skills: "ทักษะ", education: "การศึกษา", experience: "ประสบการณ์", activities: "กิจกรรม", contact: "ติดต่อ" },
    footer: "Private build with Next.js + Tailwind + Framer Motion",
  },
  en: {
    langLabel: "EN",
    head: { title: "Chibi • Private Portfolio (EN)", tagline: "INTJ • Business, AI & Continuous Growth" },
    hero: {
      greeting: "Hello, I'm",
      name: "Kanyapak Chaitip",
      role: "Business / AI / Strategy",
      summary: "Obsessed with continuous growth — meditation, future skills, and practical AI/automation.",
      ctas: { contact: "Contact", cv: "Download vCard" },
    },
    about: {
      title: "About",
      bullets: [
        "Continuous learner: meditation, Coach Krungha year-long program, books, AI (GPTX), future skills.",
        "Pet parent since grade 5 (rabbits, sugar gliders, parrots).",
        "Board member in 4 family companies — focus on GMJ Marketing.",
        "Active volunteer: temples, schools, student union; parents in Lions Club.",
        "YEC Songkhla member; co-manage Wat Hat Yai Nai page.",
        "Building ‘Chibi Haven’ (Flutter).",
      ],
    },
    learning: {
      title: "Learning & Future Skills",
      items: [
        { t: "Mindfulness/Meditation", d: "Decision-quality through presence" },
        { t: "Communication & Leadership (Krungha)", d: "Year-long program; growth mindset" },
        { t: "GPTX (MBA)", d: "Operational systems with GPT: docs, processes, analysis" },
        { t: "VibeCoding, n8n", d: "Automation/RPA for business efficiency" },
      ],
    },
    skills: {
      title: "Skills",
      buckets: [
        { h: "Core", items: ["Business Analysis", "Strategy/Marketing", "AI/Automation", "Problem Solving", "Time Management", "Leadership"] },
        { h: "Tools", items: ["Excel/Word", "Graphic/Video Editing", "GPTX (MBA)", "n8n", "VibeCoding"] },
        { h: "Languages", items: ["Thai (Native)", "English (Advanced)"] },
      ],
    },
    education: {
      title: "Education",
      degree: "B.B.A.",
      school: "Mae Fah Luang University — School of Management",
      year: "Graduated 2023",
      gpa: 3.95,
      honors: "First-class Honours (Gold Medal)",
      focus: ["Marketing", "International Business Management", "Consumer Behavior", "Export-Import", "Business Strategy", "Leadership"],
    },
    experience: {
      title: "Experience",
      roles: [
        {
          company: "Lalizas (Thailand) Co., Ltd.",
          role: "Sales & Marketing Intern",
          period: "Jan 2024 – May 2024 (Phuket)",
          bullets: [
            "Online store ops (catalog & SEO)",
            "Promo content for Facebook & TikTok (images/videos)",
            "Campaign support; partner one-pagers",
            "Sales & executive assistance; stock/events"
          ],
        },
        {
          company: "GMJ Marketing Co., Ltd.",
          role: "Board Member (Family)",
          period: "2023 – Present",
          bullets: ["Business development support", "Marketing & strategy coordination"],
        },
      ],
    },
    activities: {
      title: "Activities & Leadership",
      items: [
        "Student Council (BA) — Documentation (2020–2021)",
        "Main MC — University Christmas Event (2022)",
        "Top 500 — ‘Gen Z to be CEO’ (2021–2022)",
        "Buddy for exchange students (China & Myanmar)",
        "Word Chess — 3rd place",
        "OBELS Webinar 2021",
        "Family customer appreciation event — GS Battery",
      ],
    },
    contact: {
      title: "Get in touch",
      email: "chibi.chaitip@gmail.com",
      phone: "+66 88-216-9555",
      location: "Thailand",
      linkedin: "https://www.linkedin.com/in/kanyapak-chaitip-377485316/",
    },
    nav: { about: "About", learning: "Learning", skills: "Skills", education: "Education", experience: "Experience", activities: "Activities", contact: "Contact" },
    footer: "Private build with Next.js + Tailwind + Framer Motion",
  },
};

const palette = { base: "#ffffff", navy: "#0f172a", accent: "#1e293b", brown: "#9a7b63" };

const Section = ({ id, title, icon, children }: SectionProps) => (
  <section id={id} className="scroll-mt-24">
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mb-6 flex items-center gap-3">
      <div className="p-2 rounded-2xl shadow-sm border bg-white/80 backdrop-blur text-slate-700">{icon}</div>
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h2>
    </motion.div>
    {children}
  </section>
);

const Card = ({ children, className = "" }: CardProps) => (
  <div className={`rounded-2xl p-5 border bg-white/60 backdrop-blur shadow-sm ${className}`}>{children}</div>
);

const Pill = ({ children }: PillProps) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm bg-white/70">{children}</span>
);
export default function Page() {
  const [lang, setLang] = useState<"th" | "en">("th");
  const t = useMemo(() => content[lang], [lang]);
  const year = useMemo(() => new Date().getUTCFullYear(), []);

  return (
    <div
      className="min-h-screen font-[Inter,ui-sans-serif] antialiased bg-slate-50 text-slate-900"
      style={{
        backgroundImage:
          `radial-gradient(50rem 60rem at 120% -20%, ${palette.navy}10 0%, transparent 70%),` +
          `radial-gradient(50rem 60rem at -20% 120%, ${palette.accent}10 0%, transparent 70%)`,
      }}
    >
      {/* Ribbon */}
      <div className="fixed right-[-4rem] top-6 rotate-45 bg-slate-900 text-white text-xs md:text-sm px-8 py-1 shadow-lg z-50">
        PRIVATE PROFILE
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/20 border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <div className="font-semibold tracking-tight text-slate-800">Chibi • Portfolio</div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:underline">{t.nav.about}</a>
            <a href="#learning" className="hover:underline">{t.nav.learning}</a>
            <a href="#skills" className="hover:underline">{t.nav.skills}</a>
            <a href="#education" className="hover:underline">{t.nav.education}</a>
            <a href="#experience" className="hover:underline">{t.nav.experience}</a>
            <a href="#activities" className="hover:underline">{t.nav.activities}</a>
            <a href="#contact" className="hover:underline">{t.nav.contact}</a>
          </nav>
          <button
            onClick={() => setLang((p) => (p === "th" ? "en" : "th"))}
            className="text-xs border rounded-full px-3 py-1 hover:bg-white/60 inline-flex items-center gap-2"
            aria-label="Toggle language"
          >
            <Languages className="w-4 h-4" /> {t.langLabel}
          </button>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-5">
        <section className="pt-12 md:pt-16 pb-10">
          <div className="grid md:grid-cols-[1.4fr,1fr] gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-slate-900">
                {t.hero.greeting} <span className="underline decoration-wavy decoration-[#9a7b63]">{t.hero.name}</span>
              </div>
              <p className="mt-3 text-base md:text-lg text-slate-500">{t.hero.role} • {content[lang].head.tagline}</p>
              <p className="mt-4 text-slate-700 max-w-2xl">{t.hero.summary}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a className="inline-flex items-center gap-2 border rounded-2xl px-4 py-2 hover:bg-white/70" href={`mailto:${t.contact.email}`}>
                  <Mail className="w-4 h-4" /> {t.contact.email}
                </a>
                <a className="inline-flex items-center gap-2 border rounded-2xl px-4 py-2 hover:bg-white/70" href={`tel:${t.contact.phone.replace(/\s|-/g, "")}`}>
                  <Phone className="w-4 h-4" /> {t.contact.phone}
                </a>
                <span className="inline-flex items-center gap-2 border rounded-2xl px-4 py-2">
                  <MapPin className="w-4 h-4" /> {t.contact.location}
                </span>
                <a className="inline-flex items-center gap-2 border rounded-2xl px-4 py-2 hover:bg-white/70" href={t.contact.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a className="inline-flex items-center gap-2 border rounded-2xl px-4 py-2 hover:bg-white/70" href="#" onClick={(e) => { e.preventDefault(); downloadVCard(t); }}>
                  <Download className="w-4 h-4" /> {t.hero.ctas.cv}
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Pill>MBTI: INTJ</Pill>
                <Pill>Style: Classic Minimal</Pill>
                <Pill>Colors: White • Navy • Brown</Pill>
              </div>
            </motion.div>

            {/* Hero portrait */}
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-slate-900/10 to-[#9a7b63]10 blur-2xl" />
             {/* Portrait */}
<div className="relative rounded-3xl overflow-hidden border shadow-md">
  <Image
    src="/portrait.jpg"
    alt="Chibi portrait"
    width={800}
    height={900}
    className="w-full h-[360px] object-cover"
    priority
  />
</div>
              <div className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur border rounded-2xl px-3 py-2 shadow flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-slate-700" />
                <span className="text-xs text-slate-700">Business • AI • Strategy</span>
              </div>
            </motion.div>
          </div>
        </section>
        {/* About */}
        <Section id="about" title={t.about.title} icon={<ShieldCheck className="w-5 h-5" /> }>
          <Card>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-800">
              {t.about.bullets.map((g: string, i: number) => <li key={i}>{g}</li>)}
            </ul>
          </Card>
        </Section>

        {/* Learning */}
        <Section id="learning" title={t.learning.title} icon={<LibraryBig className="w-5 h-5" /> }>
          <div className="grid md:grid-cols-3 gap-6">
            {t.learning.items.map((item: LearningItem, idx: number) => (
              <Card key={idx}>
                <div className="font-semibold mb-1 text-slate-900">{item.t}</div>
                <div className="text-sm md:text-base text-slate-600">{item.d}</div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Image strip: YEC & Graduation */}
        <div className="my-8 grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative rounded-2xl overflow-hidden border shadow-sm">
            {/* YEC */}
<Image
  src="/yec.jpg"
  alt="YEC Songkhla Orientation"
  width={1200}
  height={600}
  className="w-full h-[220px] object-cover"
/>

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-3 left-3 text-white text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4"/>
              {lang === 'th' ? 'YEC สงขลา — ปฐมนิเทศ' : 'YEC Songkhla — Orientation'}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="relative rounded-2xl overflow-hidden border shadow-sm">
           {/* Graduation */}
<Image
  src="/graduation.jpg"
  alt="Graduation with Family — First-class Honours"
  width={1200}
  height={600}
  className="w-full h-[220px] object-cover"
/>

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-3 left-3 text-white text-sm flex items-center gap-2">
              <GraduationCap className="w-4 h-4"/>
              {lang === 'th' ? 'รับปริญญา — เหรียญทองเกียรตินิยม • ครอบครัว' : 'Graduation — First-class Honours • Family'}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <Section id="skills" title={t.skills.title} icon={<Zap className="w-5 h-5" /> }>
          <div className="grid md:grid-cols-3 gap-6">
            {t.skills.buckets.map((b: SkillsBucket, i: number) => (
              <Card key={i}>
                <h3 className="font-semibold mb-2 text-slate-900">{b.h}</h3>
                <ul className="space-y-2 text-sm md:text-base list-disc pl-5 text-slate-700">
                  {b.items.map((s: string, j: number) => <li key={j}>{s}</li>)}
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
            <div className="mt-4 text-sm md:text-base text-slate-700">
              <span className="font-medium">Focus: </span>
              {t.education.focus.join(" • ")}
            </div>
          </Card>
        </Section>

        {/* Experience */}
        <Section id="experience" title={t.experience.title} icon={<Briefcase className="w-5 h-5" /> }>
          <div className="space-y-4">
            {t.experience.roles.map((e: Role, i: number) => (
              <Card key={i}>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="text-base md:text-lg font-semibold text-slate-900">{e.role}</div>
                  <Pill>{e.company}</Pill>
                  <Pill>{e.period}</Pill>
                </div>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-sm md:text-base text-slate-700">
                  {e.bullets.map((b: string, j: number) => <li key={j}>{b}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* Activities */}
        <Section id="activities" title={t.activities.title} icon={<ShieldCheck className="w-5 h-5" /> }>
          <Card>
            <ul className="grid md:grid-cols-2 gap-3 text-sm md:text-base list-disc pl-5 text-slate-700">
              {t.activities.items.map((a: string, i: number) => (<li key={i}>{a}</li>))}
            </ul>
          </Card>
        </Section>

        {/* Contact */}
        <Section id="contact" title={t.contact.title} icon={<Mail className="w-5 h-5" /> }>
          <Card>
            <div className="flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 border rounded-2xl px-4 py-2 hover:bg-white/70" href={`mailto:${t.contact.email}`}>
                <Mail className="w-4 h-4" /> {t.contact.email}
              </a>
              <a className="inline-flex items-center gap-2 border rounded-2xl px-4 py-2 hover:bg-white/70" href={`tel:${t.contact.phone.replace(/\s|-/g, "")}`}>
                <Phone className="w-4 h-4" /> {t.contact.phone}
              </a>
              <a className="inline-flex items-center gap-2 border rounded-2xl px-4 py-2 hover:bg-white/70" href={t.contact.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a className="inline-flex items-center gap-2 border rounded-2xl px-4 py-2 hover:bg-white/70" href="#" onClick={(e) => { e.preventDefault(); downloadVCard(t); }}>
                <Download className="w-4 h-4" /> {t.hero.ctas.cv}
              </a>
            </div>
          </Card>
        </Section>

      <footer className="py-10 text-center text-xs text-slate-500">
  © {year} Chibi. {t.footer}
  <div className="mt-2 inline-flex items-center gap-1 text-slate-400">
    <ChevronRight className="w-3 h-3" /> {content[lang].head.tagline}
  </div>
</footer>
      </main>
    </div>
  );
}
// ---- Utils ----
function downloadVCard(p: Pick<LocaleContent, "langLabel" | "hero" | "contact" | "head">) {
   const fn = `Chibi-${p.langLabel}-contact.vcf`;
  const v = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${p.hero.name};;;`,
    `FN:${p.hero.name} (Chibi)`,
    `EMAIL;TYPE=INTERNET:${p.contact.email}`,
    `TEL;TYPE=CELL:${p.contact.phone}`,
    `ADR;TYPE=HOME:;;${p.contact.location};;;;`,
    `NOTE:${p.head?.tagline || "Business, AI & Growth"}`,
    "END:VCARD",
  ].join("\n");
  const blob = new Blob([v], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = fn; a.click();
  URL.revokeObjectURL(url);
}
