import { useState, useEffect, useRef } from "react";

const angelNumbers = {
  "000": {
    title: "Infinite Potential",
    meaning: "You are at a point of infinite possibility. The universe is signaling a fresh start — a void full of creation waiting to emerge through you.",
    keywords: ["New Beginnings", "Infinite Loop", "Divine Reset"],
    chakra: "Crown",
    color: "#ffffff",
    affirmation: "I am open to infinite possibilities flowing through me.",
    element: "Ether",
    frequency: "963 Hz",
  },
  "111": {
    title: "Manifestation Gateway",
    meaning: "Your thoughts are manifesting at lightning speed. The universe has opened a portal — be intentional, stay positive, and watch your inner world become your outer reality.",
    keywords: ["Manifestation", "Alignment", "New Chapters"],
    chakra: "Third Eye",
    color: "#a78bfa",
    affirmation: "My thoughts create my reality. I choose abundance.",
    element: "Air",
    frequency: "528 Hz",
  },
  "222": {
    title: "Divine Balance",
    meaning: "Trust the process. You are exactly where you need to be. Relationships, partnerships, and collaborations are being divinely guided toward harmony.",
    keywords: ["Balance", "Trust", "Partnership"],
    chakra: "Heart",
    color: "#34d399",
    affirmation: "I trust the divine timing of my life completely.",
    element: "Water",
    frequency: "417 Hz",
  },
  "333": {
    title: "Holy Trinity Activation",
    meaning: "Mind, body, and spirit are awakening in unison. The Ascended Masters surround you, amplifying your creative energy and urging you to express your authentic self.",
    keywords: ["Creativity", "Expression", "Divine Support"],
    chakra: "Solar Plexus",
    color: "#fbbf24",
    affirmation: "I express my truth boldly and the universe celebrates me.",
    element: "Fire",
    frequency: "639 Hz",
  },
  "444": {
    title: "Angelic Foundation",
    meaning: "You are completely surrounded and protected by angels. They are building a stable foundation beneath your feet. This is confirmation — keep going.",
    keywords: ["Protection", "Stability", "Foundation"],
    chakra: "Root",
    color: "#f97316",
    affirmation: "I am divinely protected and grounded in my purpose.",
    element: "Earth",
    frequency: "396 Hz",
  },
  "555": {
    title: "Transformation Vortex",
    meaning: "Major life changes are unfolding. Buckle in — this is a divine acceleration. Release what no longer serves and surrender to the transformation with open arms.",
    keywords: ["Change", "Freedom", "Adventure"],
    chakra: "Throat",
    color: "#60a5fa",
    affirmation: "I welcome change as the divine upgrade I have been seeking.",
    element: "Air",
    frequency: "741 Hz",
  },
  "666": {
    title: "Earthly Rebalance",
    meaning: "A gentle nudge to rebalance your material and spiritual worlds. Worry less, trust more. Your angels ask you to shift perspective from fear to love.",
    keywords: ["Rebalance", "Perspective", "Self-Care"],
    chakra: "Sacral",
    color: "#f472b6",
    affirmation: "I release worry and embrace the love that surrounds me.",
    element: "Water",
    frequency: "285 Hz",
  },
  "777": {
    title: "Cosmic Jackpot",
    meaning: "You are in complete alignment with the universe. Miracles are incoming. Your spiritual growth has been noticed and rewarded at the highest level.",
    keywords: ["Luck", "Spirituality", "Reward"],
    chakra: "Crown",
    color: "#c4b5fd",
    affirmation: "I am a magnet for miracles and divine blessings.",
    element: "Ether",
    frequency: "852 Hz",
  },
  "888": {
    title: "Abundance Frequency",
    meaning: "Financial and material abundance is flowing directly to you. The cycle of karma is completing. Prosperity in all its forms is your divine birthright.",
    keywords: ["Abundance", "Prosperity", "Karma"],
    chakra: "Solar Plexus",
    color: "#d97706",
    affirmation: "Wealth and abundance flow to me effortlessly and joyfully.",
    element: "Earth",
    frequency: "432 Hz",
  },
  "999": {
    title: "Divine Completion",
    meaning: "A sacred chapter of your life is closing to make room for something extraordinary. This ending is divinely orchestrated. Release, be grateful, and look forward.",
    keywords: ["Completion", "Release", "Wisdom"],
    chakra: "Third Eye",
    color: "#818cf8",
    affirmation: "I release the past with gratitude and step into my highest timeline.",
    element: "Fire",
    frequency: "963 Hz",
  },
  "1111": {
    title: "Master Portal",
    meaning: "The rarest and most powerful angel number. You have crossed through a spiritual portal. This is the universe's direct call — you are a lightworker, and your awakening is complete.",
    keywords: ["Awakening", "Portal", "Destiny"],
    chakra: "All",
    color: "#f0abfc",
    affirmation: "I have awakened. I am aligned. I am exactly who I was born to be.",
    element: "All",
    frequency: "1111 Hz",
  },
  "1212": {
    title: "Spiritual Evolution",
    meaning: "You are stepping into a higher version of yourself. The universe confirms: your positive mindset is working. Keep your thoughts elevated and your heart open.",
    keywords: ["Evolution", "Positivity", "Growth"],
    chakra: "Heart",
    color: "#86efac",
    affirmation: "I am becoming the highest version of myself every single day.",
    element: "Air",
    frequency: "528 Hz",
  },
  "1234": {
    title: "Divine Staircase",
    meaning: "Step by step, you are climbing exactly the right path. Progress is guaranteed. Your angels celebrate each small step as a sacred act.",
    keywords: ["Progress", "Steps", "Journey"],
    chakra: "Root",
    color: "#fb923c",
    affirmation: "Every step I take leads me closer to my divine purpose.",
    element: "Earth",
    frequency: "396 Hz",
  },
  "1010": {
    title: "Awakened Mind",
    meaning: "Your spiritual awareness is at a peak. The universe is speaking — are you listening? Trust your intuition completely. Every sign you see is real.",
    keywords: ["Intuition", "Awareness", "Signs"],
    chakra: "Third Eye",
    color: "#7dd3fc",
    affirmation: "I trust my intuition as my greatest divine compass.",
    element: "Ether",
    frequency: "741 Hz",
  },
  "2222": {
    title: "Patience & Trust",
    meaning: "Everything is unfolding in divine timing. What feels like delay is actually divine protection. Trust that what is meant for you cannot be taken away.",
    keywords: ["Patience", "Divine Timing", "Faith"],
    chakra: "Heart",
    color: "#4ade80",
    affirmation: "Divine timing is always perfect. I trust the unfolding.",
    element: "Water",
    frequency: "639 Hz",
  },
};

const StarField = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const ctx = canvas.getContext("2d");
    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.5 + 0.3,
      speed: Math.random() * 0.008 + 0.002,
      phase: Math.random() * Math.PI * 2,
    }));
    let frame;
    const draw = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        const opacity = 0.3 + 0.5 * Math.abs(Math.sin(t * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${opacity})`;
        ctx.fill();
      });
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

export default function AngelNumberTool() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [orbPulse, setOrbPulse] = useState(false);

  // Send height to WordPress iframe parent
  useEffect(() => {
    const sendHeight = () => {
      const height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      window.parent.postMessage(
        { type: "angelToolHeight", height: height },
        "*"
      );
    };
    sendHeight();
    setTimeout(sendHeight, 500);
    setTimeout(sendHeight, 1500);
    setTimeout(sendHeight, 3000);
    const observer = new ResizeObserver(sendHeight);
    observer.observe(document.body);
    return () => observer.disconnect();
  }, []);

  const lookup = async () => {
    const clean = input.replace(/\s/g, "");
    if (!clean) { setError("Enter a number to reveal its meaning."); return; }
    setError("");
    setLoading(true);
    setShowResult(false);
    setOrbPulse(true);
    await new Promise(r => setTimeout(r, 1400));
    if (angelNumbers[clean]) {
      setResult({ type: "preset", data: angelNumbers[clean], number: clean });
    } else {
      try {
        const response = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_ANTHROPIC_API_KEY,
            "anthropic-version": "2023-06-01",
            "anthropic-dangerous-direct-browser-access": "true",
          },
          body: JSON.stringify({
            model: "claude-sonnet-4-20250514",
            max_tokens: 1000,
            messages: [{
              role: "user",
              content: `You are a mystical numerology oracle. The user is asking about angel number ${clean}. Respond ONLY with a valid JSON object (no markdown, no extra text) with these fields:
{
  "title": "Short mystical title (2-4 words)",
  "meaning": "2-3 sentence spiritual interpretation of this angel number — mystical, poetic, empowering tone",
  "keywords": ["keyword1", "keyword2", "keyword3"],
  "chakra": "one chakra name or All",
  "color": "a hex color that feels spiritually resonant for this number",
  "affirmation": "A first-person affirmation related to this number's energy",
  "element": "Earth, Air, Fire, Water, or Ether",
  "frequency": "A Hz frequency number as a string like 528 Hz"
}`
            }]
          })
        });
        const data = await response.json();
        const text = data.content?.map(b => b.text || "").join("") || "";
        const cleaned = text.replace(/```json|```/g, "").trim();
        const parsed = JSON.parse(cleaned);
        setResult({ type: "ai", data: parsed, number: clean });
      } catch {
        setError("Could not decode this number's frequency. Try again.");
        setLoading(false);
        setOrbPulse(false);
        return;
      }
    }
    setLoading(false);
    setOrbPulse(false);
    setTimeout(() => setShowResult(true), 100);
  };

  const accentColor = result?.data?.color || "#a78bfa";

  return (
    <>
      <StarField />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          background: radial-gradient(ellipse at 20% 20%, #0d0520 0%, #050010 40%, #000308 100%);
          min-height: 100vh;
        }
        @keyframes floatOrb { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(20px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { 0%,100%{opacity:.6} 50%{opacity:1} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06)} }
        .glyph-btn:hover { transform:scale(1.04); background:rgba(255,255,255,0.1) !important; }
        .number-input:focus { outline:none; border-color: #a78bfa !important; box-shadow: 0 0 0 3px rgba(167,139,250,0.2); }
        .reveal-btn:hover { opacity: 0.9; transform: translateY(-1px); }
      `}</style>

      <div style={{
        fontFamily: "'Georgia', serif",
        color: "#e8e0f0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 16px 120px",
        position: "relative",
        zIndex: 1,
        width: "100%",
      }}>

        {/* Ambient orb */}
        <div style={{
          position: "fixed",
          top: "-120px", left: "50%",
          transform: "translateX(-50%)",
          width: "500px", height: "500px",
          background: `radial-gradient(circle, ${accentColor}18 0%, transparent 70%)`,
          borderRadius: "50%",
          pointerEvents: "none",
          transition: "background 1.5s ease",
          animation: "floatOrb 8s ease-in-out infinite",
          zIndex: 0,
        }} />

        {/* Header */}
        <div style={{ textAlign: "center", paddingTop: "48px", marginBottom: "36px", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "32px", marginBottom: "8px", animation: "shimmer 3s ease infinite" }}>✦ ✧ ✦</div>
          <h1 style={{
            fontSize: "clamp(26px, 5vw, 46px)",
            fontWeight: "400",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "10px",
            background: "linear-gradient(135deg, #e8d5ff 0%, #b794f4 50%, #e8d5ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Angel Number Oracle</h1>
          <p style={{
            color: "#9d8bbd", fontSize: "13px",
            letterSpacing: "0.2em", textTransform: "uppercase",
          }}>Decode the universe's messages to you</p>
        </div>

        {/* Input Card */}
        <div style={{
          width: "100%", maxWidth: "500px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "24px",
          padding: "28px 24px",
          backdropFilter: "blur(20px)",
          position: "relative", zIndex: 1,
          marginBottom: "28px",
        }}>
          <p style={{
            fontSize: "12px", color: "#9d8bbd",
            letterSpacing: "0.15em", textTransform: "uppercase",
            marginBottom: "14px", textAlign: "center",
          }}>Enter your angel number</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "18px" }}>
            <input
              className="number-input"
              value={input}
              onChange={e => setInput(e.target.value.replace(/[^0-9]/g, "").slice(0, 6))}
              onKeyDown={e => e.key === "Enter" && lookup()}
              placeholder="e.g. 1111, 444, 222..."
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "14px",
                padding: "15px 20px",
                color: "#e8e0f0",
                fontSize: "22px",
                letterSpacing: "0.15em",
                textAlign: "center",
                fontFamily: "'Georgia', serif",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
            />
            <button
              className="reveal-btn"
              onClick={lookup}
              disabled={loading}
              style={{
                width: "100%",
                background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
                border: "none",
                borderRadius: "14px",
                padding: "15px",
                color: "#fff",
                fontSize: "17px",
                cursor: loading ? "wait" : "pointer",
                transition: "all 0.3s",
                animation: orbPulse ? "pulse 0.7s ease infinite" : "none",
                letterSpacing: "0.15em",
                fontFamily: "'Georgia', serif",
              }}
            >{loading ? "Reading the cosmos..." : "✦ Reveal Meaning"}</button>
          </div>

          {error && (
            <p style={{ color: "#f87171", fontSize: "13px", textAlign: "center", marginBottom: "14px" }}>{error}</p>
          )}

          <p style={{
            fontSize: "11px", color: "#6b5a8a",
            letterSpacing: "0.2em", textTransform: "uppercase",
            marginBottom: "10px", textAlign: "center",
          }}>Popular numbers</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", justifyContent: "center" }}>
            {["111","222","333","444","555","777","888","999","1111","1212"].map(n => (
              <button key={n} className="glyph-btn"
                onClick={() => setInput(n)}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  padding: "5px 13px",
                  color: "#c4b5fd",
                  fontSize: "13px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  fontFamily: "'Georgia', serif",
                  letterSpacing: "0.1em",
                }}
              >{n}</button>
            ))}
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div style={{ textAlign: "center", position: "relative", zIndex: 1, marginBottom: "20px" }}>
            <div style={{ fontSize: "36px", animation: "spin 2s linear infinite", display: "inline-block" }}>✦</div>
            <p style={{ color: "#9d8bbd", fontSize: "12px", letterSpacing: "0.2em", marginTop: "10px" }}>READING THE COSMOS…</p>
          </div>
        )}

        {/* Result */}
        {showResult && result && (
          <div style={{
            width: "100%", maxWidth: "500px",
            animation: "fadeUp 0.7s ease forwards",
            position: "relative", zIndex: 1,
          }}>
            {/* Number badge */}
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: `radial-gradient(circle, ${accentColor}40, ${accentColor}15)`,
                border: `2px solid ${accentColor}60`,
                borderRadius: "50%",
                width: "96px", height: "96px",
                fontSize: "26px", fontWeight: "300",
                letterSpacing: "0.05em",
                color: accentColor,
                boxShadow: `0 0 40px ${accentColor}40`,
                animation: "shimmer 2.5s ease infinite",
              }}>{result.number}</div>
            </div>

            {/* Result card */}
            <div style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${accentColor}30`,
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: `0 0 60px ${accentColor}15`,
              marginBottom: "16px",
            }}>
              {/* Title */}
              <div style={{
                padding: "24px 24px 18px",
                borderBottom: `1px solid ${accentColor}20`,
                background: `linear-gradient(135deg, ${accentColor}12, transparent)`,
              }}>
                <h2 style={{
                  fontSize: "22px", fontWeight: "400",
                  letterSpacing: "0.08em",
                  color: accentColor,
                  marginBottom: "10px",
                }}>{result.data.title}</h2>
                <div style={{ display: "flex", gap: "7px", flexWrap: "wrap" }}>
                  {result.data.keywords.map(k => (
                    <span key={k} style={{
                      background: `${accentColor}20`,
                      border: `1px solid ${accentColor}40`,
                      borderRadius: "20px",
                      padding: "3px 11px",
                      fontSize: "11px",
                      color: accentColor,
                      letterSpacing: "0.08em",
                    }}>{k}</span>
                  ))}
                </div>
              </div>

              {/* Meaning */}
              <div style={{ padding: "20px 24px", borderBottom: `1px solid rgba(255,255,255,0.05)` }}>
                <p style={{
                  lineHeight: "1.85", fontSize: "15px",
                  color: "#d4c8e8", fontStyle: "italic",
                }}>{result.data.meaning}</p>
              </div>

              {/* Metadata */}
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                gap: "1px", background: "rgba(255,255,255,0.05)",
              }}>
                {[
                  ["✦ Chakra", result.data.chakra],
                  ["⊕ Element", result.data.element],
                  ["◈ Frequency", result.data.frequency],
                  ["◯ Energy Color", <span style={{ color: accentColor }}>●</span>],
                ].map(([label, val]) => (
                  <div key={label} style={{ padding: "14px 18px", background: "rgba(255,255,255,0.02)" }}>
                    <div style={{
                      fontSize: "9px", color: "#6b5a8a",
                      letterSpacing: "0.2em", textTransform: "uppercase",
                      marginBottom: "4px",
                    }}>{label}</div>
                    <div style={{ fontSize: "14px", color: "#e8e0f0" }}>{val}</div>
                  </div>
                ))}
              </div>

              {/* Affirmation */}
              <div style={{
                padding: "20px 24px",
                background: `linear-gradient(135deg, ${accentColor}08, transparent)`,
                borderTop: `1px solid ${accentColor}20`,
              }}>
                <p style={{
                  fontSize: "10px", color: "#6b5a8a",
                  letterSpacing: "0.25em", textTransform: "uppercase",
                  marginBottom: "10px",
                }}>✧ Your Affirmation</p>
                <p style={{
                  fontSize: "15px", lineHeight: "1.7",
                  color: accentColor, fontStyle: "italic",
                  borderLeft: `2px solid ${accentColor}50`,
                  paddingLeft: "14px",
                }}>"{result.data.affirmation}"</p>
              </div>
            </div>

            <p style={{
              textAlign: "center", fontSize: "11px",
              color: "#4a3a6a", letterSpacing: "0.1em",
              paddingBottom: "20px",
            }}>✦ The universe speaks in patterns — you were meant to see {result.number} ✦</p>
          </div>
        )}
      </div>
    </>
  );
}
