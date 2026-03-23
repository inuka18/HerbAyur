import React from 'react';
import './Home.css';

const categories = [
  { name: 'Herbs & Leaves', icon: '🌿' },
  { name: 'Roots & Tubers', icon: '🫚' },
  { name: 'Seeds & Spices', icon: '🌾' },
  { name: 'Flowers', icon: '🌸' },
  { name: 'Gums & Resins', icon: '💎' },
  { name: 'Minerals', icon: '🪨' },
];

export default function Home() {
  return (
    <div className="ayur-home">

<section className="hero-modern hero-flex">

  <div className="hero-content">
    <h1>Discover <span>Verified</span> Ayurvedic Raw Materials</h1>
    <p className="hero-subtitle">
      Connect directly with trusted suppliers across Sri Lanka
    </p>

    <div className="hero-buttons">
      <button className="btn-primary large">
        Post Requirement
      </button>
    </div>
  </div>

  <div className="hero-art ultra">
    <svg viewBox="0 0 600 500">

      <defs>
        <radialGradient id="bgGlow">
          <stop offset="0%" stopColor="#dcfce7"/>
          <stop offset="100%" stopColor="transparent"/>
        </radialGradient>

        <linearGradient id="wood">
          <stop offset="0%" stopColor="#e7c8a0"/>
          <stop offset="100%" stopColor="#8b5e34"/>
        </linearGradient>

        <linearGradient id="glass">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
        </linearGradient>
      </defs>

      <circle cx="300" cy="250" r="200" fill="url(#bgGlow)" />

      {/* ORBIT */}
      <g className="orbit">
        <circle cx="300" cy="40" r="6"/>
        <circle cx="560" cy="250" r="6"/>
        <circle cx="300" cy="460" r="6"/>
        <circle cx="40" cy="250" r="6"/>
      </g>

      {/* PARTICLES */}
      <g className="particles">
        <circle cx="200" cy="120" r="3"/>
        <circle cx="420" cy="100" r="4"/>
        <circle cx="480" cy="200" r="3"/>
        <circle cx="150" cy="250" r="3"/>
        <circle cx="500" cy="300" r="4"/>
      </g>

      {/* MORE LEAVES */}
      <g className="leaf">
        <path d="M250 230 C220 180 200 180 180 230 C210 260 240 260 250 230Z"/>
        <path d="M300 210 C270 160 240 170 240 210 C260 250 290 250 300 210Z"/>
        <path d="M350 230 C380 180 410 180 420 230 C390 260 360 260 350 230Z"/>
        
        {/* NEW LEAVES */}
        <path d="M200 260 C180 220 160 220 150 260 C170 290 190 290 200 260Z"/>
        <path d="M400 260 C420 220 440 220 450 260 C430 290 410 290 400 260Z"/>
        <path d="M300 180 C270 140 250 140 230 180 C260 210 290 210 300 180Z"/>
      </g>

      {/* SHADOW */}
      <ellipse cx="300" cy="410" rx="160" ry="25" fill="rgba(0,0,0,0.08)" />

      {/* MORTAR */}
      <path d="M200 280 Q300 360 400 280 L380 350 Q300 410 220 350 Z"
        className="mortar"/>
      <ellipse cx="300" cy="280" rx="110" ry="28" fill="#fde68a"/>

      {/* PESTLE */}
      <path d="M360 150 Q380 170 370 200 L340 310 Q320 320 320 290 L340 180 Q350 140 360 150Z"
        className="pestle"/>

      {/* GINGER */}
      <ellipse cx="220" cy="370" rx="22" ry="12" fill="#fbbf24"/>
      <ellipse cx="245" cy="380" rx="18" ry="10" fill="#f59e0b"/>

      {/* LEMON */}
      <circle cx="260" cy="360" r="18" fill="#fde047"/>
      <circle cx="260" cy="360" r="10" fill="#fef9c3"/>

      {/* MORE FLOWERS */}
      <g className="flower f1" transform="translate(300,370)">
        <circle r="5" fill="#facc15"/>
        <circle cx="0" cy="-10" r="7" fill="white"/>
        <circle cx="10" cy="0" r="7" fill="white"/>
        <circle cx="0" cy="10" r="7" fill="white"/>
        <circle cx="-10" cy="0" r="7" fill="white"/>
      </g>

      <g className="flower f2" transform="translate(200,350)">
        <circle r="4" fill="#facc15"/>
        <circle cx="0" cy="-8" r="6" fill="white"/>
        <circle cx="8" cy="0" r="6" fill="white"/>
        <circle cx="0" cy="8" r="6" fill="white"/>
        <circle cx="-8" cy="0" r="6" fill="white"/>
      </g>

      <g className="flower f3" transform="translate(380,350)">
        <circle r="4" fill="#facc15"/>
        <circle cx="0" cy="-8" r="6" fill="white"/>
        <circle cx="8" cy="0" r="6" fill="white"/>
        <circle cx="0" cy="8" r="6" fill="white"/>
        <circle cx="-8" cy="0" r="6" fill="white"/>
      </g>

      {/* FRONT BOWL */}
      <ellipse cx="180" cy="360" rx="85" ry="28" fill="#b45309"/>
      <ellipse cx="180" cy="340" rx="85" ry="20" fill="#d97706"/>

      {/* BOTTLES */}
      <g className="bottle bottle1">
        <rect x="380" y="300" width="55" height="90" rx="14" fill="rgba(255,255,255,0.25)" />
        <rect x="380" y="330" width="55" height="60" rx="14" className="liquid green"/>
        <rect x="390" y="300" width="12" height="90" fill="url(#glass)" />
      </g>

      <g className="bottle bottle2">
        <rect x="450" y="300" width="55" height="90" rx="14" fill="rgba(255,255,255,0.25)" />
        <rect x="450" y="340" width="55" height="50" rx="14" className="liquid orange"/>
        <rect x="460" y="300" width="12" height="90" fill="url(#glass)" />
      </g>

    </svg>
  </div>

</section>

      {/* CATEGORIES (UNCHANGED) */}
      <section className="categories-modern">
        <h2>Browse Categories</h2>
        <div className="category-grid">
          {categories.map(item => (
            <div key={item.name} className="category-card">
              <div className="category-icon-wrapper">{item.icon}</div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works-modern">
        <h2>How It Works</h2>
        <p className="how-subtitle">
          Simple process connecting customers and suppliers
        </p>

        <div className="workflow">

          {/* CUSTOMER */}
          <div className="workflow-column">
            <h3 className="workflow-title">For Customers</h3>

            {[
              ["📝", "Post Requirement", "Submit material needs"],
              ["📩", "Receive Quotes", "Suppliers send offers"],
              ["🤝", "Select Supplier", "Choose best option"],
              ["🚚", "Receive Order", "Get materials delivered"]
            ].map((step, i) => (
              <div key={i} className="workflow-card">
                <div className="wf-icon">{step[0]}</div>
                <div>
                  <h4>{step[1]}</h4>
                  <p>{step[2]}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="workflow-divider"></div>

          {/* SUPPLIER */}
          <div className="workflow-column">
            <h3 className="workflow-title">For Suppliers</h3>

            {[
              ["📥", "Browse Requests", "View requirements"],
              ["💬", "Send Quotation", "Submit pricing"],
              ["📦", "Confirm Supply", "Finalize order"],
              ["💰", "Get Paid", "Secure payments"]
            ].map((step, i) => (
              <div key={i} className="workflow-card">
                <div className="wf-icon">{step[0]}</div>
                <div>
                  <h4>{step[1]}</h4>
                  <p>{step[2]}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US (UPGRADED) */}
      <section className="why-us">
        <h2>Why Choose Our Platform</h2>
        <p className="why-subtitle">
          Built specifically for efficient raw material sourcing and supplier collaboration
        </p>

        <div className="why-grid">

          <div className="why-card">
            <div className="why-icon">🔍</div>
            <h4>Verified Supplier Network</h4>
            <p>All suppliers are reviewed to ensure reliability and quality standards.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">⚖️</div>
            <h4>Transparent Quotation System</h4>
            <p>Compare multiple quotes easily and make informed decisions.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">⚡</div>
            <h4>Faster Procurement Process</h4>
            <p>Reduce time spent sourcing materials with quick supplier responses.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">🔒</div>
            <h4>Secure & Reliable</h4>
            <p>Structured workflow ensures safe communication and transactions.</p>
          </div>

        </div>
      </section>

    </div>
  );
}