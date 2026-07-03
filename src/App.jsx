import { useState, useEffect, useRef } from "react";

const NAV = ["Home", "About", "Skills", "Projects", "Certs", "Contact"];

const SKILLS = [
  { name: "Python", color: "#3B82F6", emoji: "🐍" },
  { name: "Java", color: "#F97316", emoji: "☕" },
  { name: "JavaScript", color: "#EAB308", emoji: "⚡" },
  { name: "C", color: "#8B5CF6", emoji: "🔧" },
  { name: "React", color: "#06B6D4", emoji: "⚛️" },
  { name: "Node.js", color: "#22C55E", emoji: "🟢" },
  { name: "Express", color: "#6B7280", emoji: "🚂" },
  { name: "Spring Boot", color: "#16A34A", emoji: "🍃" },
  { name: "TensorFlow", color: "#FF6F00", emoji: "🧠" },
  { name: "PyTorch", color: "#EF4444", emoji: "🔥" },
  { name: "MySQL", color: "#0EA5E9", emoji: "🗄️" },
  { name: "PostgreSQL", color: "#6366F1", emoji: "🐘" },
  { name: "MongoDB", color: "#10B981", emoji: "🍃" },
  { name: "Git", color: "#F43F5E", emoji: "🌿" },
  { name: "VS Code", color: "#007ACC", emoji: "💻" },
];

const PROJECTS = [
  {
    title: "RAG-based Q&A System",
    desc: "Chat with multiple PDFs using RAG + FAISS vector search. Finally a reason to read boring documents — let AI do it.",
    tech: ["Python", "FAISS", "Streamlit"],
    color: "#06B6D4",
    link: "https://github.com/ThangakumarC/RAG-based-Q-A-System",
    emoji: "📚",
  },
  {
    title: "Malpractice Detection System",
    desc: "Trained a real PyTorch model (yes, a .pth file exists) to detect exam malpractice. Computer vision doing what invigilators can't.",
    tech: ["Python", "PyTorch", "Computer Vision"],
    color: "#F43F5E",
    link: "https://github.com/ThangakumarC/malpractice-detection-system",
    emoji: "🔍",
  },
  {
    title: "MindBridge",
    desc: "Full-stack mental health platform with anonymous appointment booking, AI-powered first-aid chat, and an admin heatmap dashboard. Built so students actually use it.",
    tech: ["React", "Node.js", "MySQL", "OpenRouter AI"],
    color: "#8B5CF6",
    link: "https://github.com/ThangakumarC/Digital-Mental-Health-and-Psychological-Support-System",
    emoji: "🧠",
  },
  {
    title: "Video Generator (vdo-gen)",
    desc: "Auto-generates motivational short videos with AI narration, stock footage, background music and uploads to YouTube. Fully automated chaos.",
    tech: ["Python", "n8n", "YouTube API"],
    color: "#EAB308",
    link: "https://github.com/ThangakumarC/vdo-gen",
    emoji: "🎬",
  },
];

const CERTS = [
  {
    title: "Azure AI Engineer Associate",
    issuer: "Microsoft",
    year: "2026",
    color: "#0078D4",
    link: "https://learn.microsoft.com/en-us/users/thangakumarc/credentials/bc199d38d3718736",
    emoji: "☁️",
  },
    {
    title: "Introduction to Large Language Models",
    issuer: "NPTEL",
    year: "2026",
    color: "#8B5CF6",
    link: "https://drive.google.com/file/d/1OdjU3-849gTJMbWKiwm156TFk13z4p1c/view?usp=sharing",
    emoji: "🤖",
  },
  {
    title: "Responsible & Safe AI Systems",
    issuer: "NPTEL",
    year: "2025",
    color: "#F97316",
    link: "https://drive.google.com/file/d/1FbZBi3iUXSah30sh-Fd4kdk-tx33pW_5/view",
    emoji: "🛡️",
  },
];

export default function App() {
  const [activeNav, setActiveNav] = useState("Home");
  const [easterTyped, setEasterTyped] = useState("");
  const [easterActive, setEasterActive] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Easter egg: type "hireme"
  useEffect(() => {
    const handler = (e) => {
      const next = (easterTyped + e.key).slice(-6);
      setEasterTyped(next);
      if (next === "hireme") {
        setEasterActive(true);
        const pieces = Array.from({ length: 60 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          color: ["#F43F5E","#FACC15","#34D399","#60A5FA","#A78BFA","#FB923C"][Math.floor(Math.random()*6)],
          delay: Math.random() * 1.5,
          size: Math.random() * 10 + 6,
        }));
        setConfetti(pieces);
        setTimeout(() => { setEasterActive(false); setConfetti([]); }, 5000);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [easterTyped]);

  // Scroll spy
  useEffect(() => {
    const sections = NAV.map(n => document.getElementById(n.toLowerCase()));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActiveNav(e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1)); });
      },
      { threshold: 0.4 }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Syne', sans-serif", background: "#0A0A0A", color: "#F5F5F5", minHeight: "100vh", overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0A0A0A; }
        ::-webkit-scrollbar-thumb { background: #F43F5E; border-radius: 2px; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes confettiFall { 0%{transform:translateY(-20px) rotate(0deg);opacity:1} 100%{transform:translateY(100vh) rotate(720deg);opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        @keyframes slideIn { from{transform:translateY(40px);opacity:0} to{transform:translateY(0);opacity:1} }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes gradientShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        .nav-pill { transition: all 0.2s; cursor: pointer; padding: 6px 12px; border-radius: 999px; font-size: 13px; font-weight: 600; border: none; background: transparent; color: #888; }
        .nav-pill:hover { color: #F5F5F5; background: rgba(255,255,255,0.08); }
        .nav-pill.active { background: #F43F5E; color: white; }
        .skill-chip { display:inline-flex; align-items:center; gap:6px; padding:10px 18px; border-radius:999px; font-size:14px; font-weight:600; border:2px solid; cursor:default; transition:all 0.2s; }
        .skill-chip:hover { transform:scale(1.08) rotate(-2deg); }
        .project-card { border-radius:20px; padding:28px; border:1.5px solid rgba(255,255,255,0.08); background:rgba(255,255,255,0.03); transition:all 0.3s; cursor:pointer; }
        .project-card:hover { transform:translateY(-6px); border-color:rgba(255,255,255,0.2); background:rgba(255,255,255,0.06); }
        .cert-card { border-radius:16px; padding:24px; border:1.5px solid rgba(255,255,255,0.08); background:rgba(255,255,255,0.03); transition:all 0.3s; }
        .cert-card:hover { transform:translateY(-4px); }
        .glow-text { background: linear-gradient(135deg, #F43F5E, #FACC15, #34D399, #60A5FA); background-size:300% 300%; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; animation: gradientShift 4s ease infinite; }
        .marquee-track { display:flex; gap:32px; animation:marquee 20s linear infinite; white-space:nowrap; }
        .section-tag { display:inline-block; padding:4px 14px; border-radius:999px; font-size:12px; font-weight:700; letter-spacing:2px; text-transform:uppercase; background:rgba(244,63,94,0.15); color:#F43F5E; border:1px solid rgba(244,63,94,0.3); margin-bottom:16px; }
        input, textarea { background:rgba(255,255,255,0.05); border:1.5px solid rgba(255,255,255,0.1); border-radius:12px; padding:14px 18px; color:#F5F5F5; font-family:inherit; font-size:15px; width:100%; outline:none; transition:border-color 0.2s; }
        input:focus, textarea:focus { border-color:#F43F5E; }
        .send-btn { background:linear-gradient(135deg,#F43F5E,#FB923C); border:none; border-radius:12px; padding:14px 32px; color:white; font-family:inherit; font-size:16px; font-weight:700; cursor:pointer; transition:all 0.2s; width:100%; }
        .send-btn:hover { transform:scale(1.02); opacity:0.9; }
        .easter-overlay { position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);backdrop-filter:blur(8px); }
        .easter-box { background:linear-gradient(135deg,#1a1a2e,#16213e);border:2px solid #F43F5E;border-radius:24px;padding:48px;text-align:center;max-width:480px;animation:slideIn 0.4s ease; }
      `}</style>

      {/* Easter Egg Overlay */}
      {easterActive && (
        <div className="easter-overlay" onClick={() => setEasterActive(false)}>
          {confetti.map(c => (
            <div key={c.id} style={{ position:"fixed", left:`${c.x}%`, top:0, width:c.size, height:c.size, background:c.color, borderRadius:"2px", animation:`confettiFall ${2+c.delay}s ease-in forwards`, animationDelay:`${c.delay*0.3}s` }} />
          ))}
          <div className="easter-box">
            <div style={{ fontSize:64, marginBottom:16 }}>🎉</div>
            <h2 style={{ fontSize:32, fontWeight:800, marginBottom:12 }}>You found it!</h2>
            <p style={{ color:"#888", marginBottom:24, lineHeight:1.6 }}>Wow, you actually typed "hireme". Bold move. <br/>I respect the commitment. Let's talk? 👀</p>
            <a href="mailto:thangakumarc22@gmail.com" style={{ display:"inline-block", background:"linear-gradient(135deg,#F43F5E,#FB923C)", borderRadius:12, padding:"12px 28px", color:"white", fontWeight:700, textDecoration:"none" }}>
              Okay, let's actually talk 🚀
            </a>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, display:"flex", justifyContent:"center", padding:"16px 24px" }}>
        <div style={{ background:"rgba(10,10,10,0.8)", backdropFilter:"blur(16px)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:999, padding:"6px 8px", display:"flex", gap:4 }}>
          {NAV.map(n => (
            <button key={n} className={`nav-pill ${activeNav === n ? "active" : ""}`} onClick={() => scrollTo(n)}>{n}</button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", padding:"80px 24px 40px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"20%", left:"10%", width:300, height:300, background:"radial-gradient(circle,rgba(244,63,94,0.15),transparent)", borderRadius:"50%", filter:"blur(40px)" }} />
        <div style={{ position:"absolute", bottom:"20%", right:"10%", width:400, height:400, background:"radial-gradient(circle,rgba(96,165,250,0.12),transparent)", borderRadius:"50%", filter:"blur(50px)" }} />
        <div style={{ textAlign:"center", maxWidth:760, position:"relative", zIndex:1 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(244,63,94,0.1)", border:"1px solid rgba(244,63,94,0.3)", borderRadius:999, padding:"6px 18px", marginBottom:32, fontSize:13, color:"#F43F5E", fontWeight:600 }}>
            <span style={{ width:6, height:6, background:"#F43F5E", borderRadius:"50%", animation:"pulse 1.5s infinite" }} />
            Open to opportunities
          </div>
          <h1 style={{ fontSize:"clamp(48px,9vw,96px)", fontWeight:800, lineHeight:1.05, marginBottom:24 }}>
            Hey, I'm<br /><span className="glow-text">Thanga Kumar</span>
          </h1>
          <p style={{ fontSize:20, color:"#888", lineHeight:1.7, marginBottom:12, fontFamily:"'Space Mono', monospace" }}>
            AI & Data Science student.
          </p>

          <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
            <button onClick={() => scrollTo("Projects")} style={{ background:"linear-gradient(135deg,#F43F5E,#FB923C)", border:"none", borderRadius:14, padding:"14px 32px", color:"white", fontFamily:"inherit", fontSize:16, fontWeight:700, cursor:"pointer", transition:"all 0.2s" }}
              onMouseOver={e=>e.target.style.transform="scale(1.04)"} onMouseOut={e=>e.target.style.transform="scale(1)"}>
              See my work 👀
            </button>
            <a href="https://drive.google.com/file/d/1Ig9Z8AzPyLk8EWWdFRawOIHYWPsS9f3F/view?usp=sharing"
              style={{ background:"transparent", border:"1.5px solid rgba(255,255,255,0.2)", borderRadius:14, padding:"14px 32px", color:"#F5F5F5", fontFamily:"inherit", fontSize:16, fontWeight:600, cursor:"pointer", transition:"all 0.2s", textDecoration:"none", display:"inline-flex", alignItems:"center", gap:8 }}
              onMouseOver={e=>e.currentTarget.style.borderColor="rgba(255,255,255,0.5)"} onMouseOut={e=>e.currentTarget.style.borderColor="rgba(255,255,255,0.2)"}>
              Resume 📄
            </a>
            <button onClick={() => scrollTo("Contact")} style={{ background:"transparent", border:"1.5px solid rgba(255,255,255,0.2)", borderRadius:14, padding:"14px 32px", color:"#F5F5F5", fontFamily:"inherit", fontSize:16, fontWeight:600, cursor:"pointer", transition:"all 0.2s" }}
              onMouseOver={e=>{e.target.style.borderColor="rgba(255,255,255,0.5)"}} onMouseOut={e=>{e.target.style.borderColor="rgba(255,255,255,0.2)"}}>
              Let's talk ☕
            </button>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div style={{ overflow:"hidden", padding:"16px 0", borderTop:"1px solid rgba(255,255,255,0.05)", borderBottom:"1px solid rgba(255,255,255,0.05)", background:"rgba(255,255,255,0.02)" }}>
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            SKILLS.map(s => (
              <span key={`${s.name}-${i}`} style={{ fontSize:14, fontWeight:600, color:"#555", display:"flex", alignItems:"center", gap:8 }}>
                <span>{s.emoji}</span> {s.name} <span style={{ color:"#222", marginLeft:8 }}>✦</span>
              </span>
            ))
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ padding:"60px 24px", maxWidth:900, margin:"0 auto" }}>
        <div className="section-tag">About</div>
        <h2 style={{ fontSize:"clamp(32px,5vw,52px)", fontWeight:800, marginBottom:32, lineHeight:1.2 }}>
          The human behind<br />the commits 👨‍💻
        </h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:20 }}>
          {[
            { emoji:"🎓", title:"Currently studying", desc:"B.Tech in AI & Data Science at Mepco Schlenk Engineering College, Sivakasi. CGPA: 8.28. Yes, I actually study.", color:"#F43F5E" },
            { emoji:"🗺️", title:"Based in", desc:"Tamil Nadu, India - Land that made legends. I'm just next in line.", color:"#FACC15" },
            { emoji:"🔥", title:"Currently obsessed with", desc:"Building things with AI, breaking things with AI, and then blaming the model when it's clearly my fault.", color:"#60A5FA" },
          ].map(card => (
            <div key={card.title} style={{ background:"rgba(255,255,255,0.03)", border:`1.5px solid ${card.color}30`, borderRadius:20, padding:24 }}>
              <div style={{ fontSize:32, marginBottom:12 }}>{card.emoji}</div>
              <div style={{ fontSize:12, fontWeight:700, color:card.color, letterSpacing:1, textTransform:"uppercase", marginBottom:8 }}>{card.title}</div>
              <p style={{ color:"#AAA", lineHeight:1.7, fontSize:15 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding:"60px 24px", maxWidth:900, margin:"0 auto" }}>
        <div className="section-tag">Skills</div>
        <h2 style={{ fontSize:"clamp(32px,5vw,52px)", fontWeight:800, marginBottom:12, lineHeight:1.2 }}>
          Techs I've touched 🛠️
        </h2>
        <p style={{ color:"#666", marginBottom:48, fontFamily:"'Space Mono',monospace", fontSize:14 }}>
          (and didn't break. mostly.)
        </p>
        <div style={{ display:"flex", flexWrap:"wrap", gap:12, justifyContent:"center" }}>
          {SKILLS.map(s => (
            <div key={s.name} className="skill-chip"
              style={{ borderColor:`${s.color}50`, color:s.color, background:`${s.color}10` }}
              onMouseEnter={() => setHoveredSkill(s.name)}
              onMouseLeave={() => setHoveredSkill(null)}>
              <span>{s.emoji}</span>
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding:"60px 24px", maxWidth:1100, margin:"0 auto" }}>
        <div className="section-tag">Projects</div>
        <h2 style={{ fontSize:"clamp(32px,5vw,52px)", fontWeight:800, marginBottom:12, lineHeight:1.2 }}>
          Things I built 🔨
        </h2>
        <p style={{ color:"#666", marginBottom:48, fontFamily:"'Space Mono',monospace", fontSize:14 }}>
          (most of them work. click to check.)
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:20, alignItems:"stretch" }}>
          {PROJECTS.map(p => (
            <a key={p.title} href={p.link} target="_blank" rel="noreferrer" style={{ textDecoration:"none", color:"inherit", display:"flex" }}>
              <div className="project-card" style={{ display:"flex", flexDirection:"column", width:"100%" }}>
                <div style={{ fontSize:40, marginBottom:16 }}>{p.emoji}</div>
                <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:12, marginBottom:12 }}>
                  <h3 style={{ fontSize:18, fontWeight:700, lineHeight:1.3 }}>{p.title}</h3>
                  <span style={{ fontSize:18, flexShrink:0 }}>↗</span>
                </div>
                <p style={{ color:"#888", fontSize:14, lineHeight:1.7, marginBottom:20, flex:1 }}>{p.desc}</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                  {p.tech.map(t => (
                    <span key={t} style={{ background:`${p.color}15`, color:p.color, border:`1px solid ${p.color}30`, borderRadius:999, padding:"4px 12px", fontSize:12, fontWeight:600 }}>{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        <p style={{ textAlign:"center", marginTop:36, color:"#555", fontSize:14, fontFamily:"'Space Mono',monospace" }}>
          These are just the highlights.{" "}
          <a href="https://github.com/ThangakumarC" target="_blank" rel="noreferrer" style={{ color:"#F43F5E", fontWeight:700, textDecoration:"none", borderBottom:"1px solid #F43F5E" }}>
            See all projects on GitHub ↗
          </a>
        </p>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certs" style={{ padding:"60px 24px", maxWidth:900, margin:"0 auto" }}>
        <div className="section-tag">Certifications</div>
        <h2 style={{ fontSize:"clamp(32px,5vw,52px)", fontWeight:800, marginBottom:12, lineHeight:1.2 }}>
          Proof I studied 📜
        </h2>
        <p style={{ color:"#666", marginBottom:48, fontFamily:"'Space Mono',monospace", fontSize:14 }}>
          (not just vibing the whole time)
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:20 }}>
          {CERTS.map(c => (
            <a key={c.title} href={c.link} target="_blank" rel="noreferrer" style={{ textDecoration:"none", color:"inherit" }}>
              <div className="cert-card" style={{ borderColor:`${c.color}30` }}>
                <div style={{ fontSize:36, marginBottom:16 }}>{c.emoji}</div>
                <div style={{ fontSize:11, fontWeight:700, color:c.color, letterSpacing:1.5, textTransform:"uppercase", marginBottom:8 }}>{c.issuer} · {c.year}</div>
                <h3 style={{ fontSize:17, fontWeight:700, marginBottom:16, lineHeight:1.4 }}>{c.title}</h3>
                <span style={{ fontSize:13, color:c.color, fontWeight:600 }}>View Credential ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding:"60px 24px", maxWidth:700, margin:"0 auto" }}>
        <div className="section-tag">Contact</div>
        <h2 style={{ fontSize:"clamp(32px,5vw,52px)", fontWeight:800, marginBottom:12, lineHeight:1.2 }}>
          Let's talk 🤝
        </h2>
        <p style={{ color:"#666", marginBottom:48, fontFamily:"'Space Mono',monospace", fontSize:14 }}>
          (or just send memes. both are fine.)
        </p>
        <form action="https://formspree.io/f/xbdbpnro" method="POST" style={{ display:"flex", flexDirection:"column", gap:16 }}>
          <input type="text" name="name" placeholder="Your name (or alias, no judgment)" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" rows={5} placeholder="What's on your mind? Jobs, collabs, memes..." style={{ resize:"vertical" }} required />
          <button type="submit" className="send-btn">Send it 🚀</button>
        </form>
        <div style={{ display:"flex", gap:16, marginTop:40, justifyContent:"center" }}>
          {[
            { label:"GitHub", href:"https://github.com/ThangakumarC", color:"#F5F5F5" },
            { label:"LinkedIn", href:"https://linkedin.com/in/ThangakumarC", color:"#0A66C2" },
            { label:"Email", href:"mailto:thangakumarc22@gmail.com", color:"#F43F5E" },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={{ color:l.color, fontWeight:700, fontSize:15, textDecoration:"none", borderBottom:`2px solid ${l.color}`, paddingBottom:2, transition:"opacity 0.2s" }}
              onMouseOver={e=>e.target.style.opacity="0.7"} onMouseOut={e=>e.target.style.opacity="1"}>
              {l.label}
            </a>
          ))}
        </div>
        <p style={{ textAlign:"center", marginTop:40, color:"#333", fontSize:12, fontFamily:"'Space Mono',monospace" }}>
          psst... type "hireme" anywhere on this page 👀
        </p>
      </section>

      {/* Footer */}
      <footer style={{ textAlign:"center", padding:"32px 24px", borderTop:"1px solid rgba(255,255,255,0.05)", color:"#333", fontSize:13, fontFamily:"'Space Mono',monospace" }}>
        Built by Thanga Kumar · "It works on my machine." 🚀
      </footer>
    </div>
  );
}
