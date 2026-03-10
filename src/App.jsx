import { useState } from "react";

const angelNumbers = {
  "111": {
    title: "Manifestation Gateway",
    meaning:
      "Your thoughts are manifesting quickly. Focus on positive intentions and align your energy with your highest goals.",
  },
  "222": {
    title: "Divine Balance",
    meaning:
      "Trust the process. Everything in your life is aligning for harmony and partnership.",
  },
  "333": {
    title: "Spiritual Support",
    meaning:
      "Ascended masters are guiding you. Express your creativity and trust divine guidance.",
  },
  "444": {
    title: "Angelic Protection",
    meaning:
      "Your angels are surrounding you with protection and stability.",
  },
  "555": {
    title: "Transformation",
    meaning:
      "Major life changes are unfolding. Embrace transformation.",
  },
  "777": {
    title: "Divine Alignment",
    meaning:
      "You are aligned with the universe. Spiritual growth is accelerating.",
  },
  "888": {
    title: "Abundance",
    meaning:
      "Financial and material abundance are entering your life.",
  },
  "999": {
    title: "Completion",
    meaning:
      "A chapter of your life is ending. Prepare for a new beginning.",
  },
  "1111": {
    title: "Portal Awakening",
    meaning:
      "A powerful spiritual portal. Your consciousness is expanding.",
  },
  "1212": {
    title: "Spiritual Evolution",
    meaning:
      "You are stepping into a higher version of yourself.",
  },
};

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const lookup = () => {
    if (angelNumbers[input]) {
      setResult(angelNumbers[input]);
    } else {
      setResult({
        title: "Unknown Number",
        meaning:
          "This number carries a unique vibration. Reflect on your intuition and personal experiences.",
      });
    }
  };

  return (
    <div className="app">

      <div className="tool-container">

        <h1 className="title">Angel Number Oracle</h1>

        <p className="subtitle">
          Decode the universe's messages to you
        </p>

        <div className="input-area">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. 111, 444, 222"
          />

          <button onClick={lookup}>
            ✦
          </button>

        </div>

        <div className="popular">

          {["111","222","333","444","555","777","888","999","1111","1212"].map((n)=>(
            <button
              key={n}
              onClick={()=>setInput(n)}
              className="num-btn"
            >
              {n}
            </button>
          ))}

        </div>

        {result && (

          <div className="result">

            <h2>{result.title}</h2>

            <p>{result.meaning}</p>

          </div>

        )}

      </div>

      <style>{`

      *{
      box-sizing:border-box;
      }

      body{
      margin:0;
      }

      .app{
      min-height:100vh;
      background:#0b0418;
      color:white;
      font-family:Georgia,serif;
      display:flex;
      justify-content:center;
      padding:20px;
      }

      .tool-container{
      width:100%;
      max-width:520px;
      text-align:center;
      }

      .title{
      font-size:32px;
      margin-bottom:10px;
      }

      .subtitle{
      opacity:.7;
      margin-bottom:30px;
      }

      .input-area{
      display:flex;
      gap:10px;
      }

      input{
      flex:1;
      padding:14px;
      font-size:18px;
      border-radius:10px;
      border:none;
      }

      button{
      cursor:pointer;
      border:none;
      border-radius:10px;
      padding:12px 18px;
      font-size:18px;
      background:#7c5cff;
      color:white;
      }

      .popular{
      margin-top:20px;
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(70px,1fr));
      gap:8px;
      }

      .num-btn{
      background:#1a1030;
      }

      .result{
      margin-top:30px;
      padding:20px;
      background:#1a1030;
      border-radius:15px;
      }

      /* MOBILE */

      @media(max-width:600px){

      .title{
      font-size:24px;
      }

      input{
      font-size:16px;
      }

      }

      `}</style>

    </div>
  );
}
