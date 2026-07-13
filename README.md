<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>Rahul Etyala | Full-Stack & GenAI Engineer</title>
  <!-- Font Awesome 6 for icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: #0a0c0f;
      font-family: 'Segoe UI', 'Inter', system-ui, sans-serif;
      color: #e5e9f0;
      line-height: 1.5;
      overflow-x: hidden;
      scroll-behavior: smooth;
    }

    /* animated gradient background */
    .animated-bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 30% 40%, #1e293b 0%, #0f172a 65%, #020617 100%);
      z-index: -2;
    }

    .particles {
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: -1;
      overflow: hidden;
      top: 0;
      left: 0;
    }

    .particle {
      position: absolute;
      background: rgba(108, 99, 255, 0.25);
      border-radius: 50%;
      filter: blur(2px);
      animation: floatParticle 12s infinite ease-in-out;
    }

    @keyframes floatParticle {
      0% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.2; }
      50% { transform: translateY(-60px) translateX(30px) scale(1.4); opacity: 0.5; }
      100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.2; }
    }

    .container {
      max-width: 1300px;
      margin: 0 auto;
      padding: 2rem 2rem 1rem;
      position: relative;
    }

    /* header capsule imitation */
    .header-wave {
      text-align: center;
      margin-bottom: 2.5rem;
      animation: fadeSlideDown 1.2s cubic-bezier(0.23, 1, 0.32, 1);
    }

    @keyframes fadeSlideDown {
      0% { opacity: 0; transform: translateY(-40px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    .wave-text {
      font-size: clamp(2.8rem, 8vw, 4.5rem);
      font-weight: 800;
      background: linear-gradient(135deg, #a78bfa, #60a5fa, #34d399);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 0.5rem;
      letter-spacing: -0.5px;
      filter: drop-shadow(0 0 15px #6c63ff66);
    }

    .sub-header {
      display: flex;
      justify-content: center;
      gap: 1.8rem;
      flex-wrap: wrap;
      margin: 1.8rem 0 1rem;
    }

    .badge-link {
      background: rgba(255, 255, 255, 0.06);
      backdrop-filter: blur(12px);
      padding: 0.7rem 2rem;
      border-radius: 60px;
      font-weight: 600;
      color: #f1f5f9;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
      box-shadow: 0 8px 20px rgba(0,0,0,0.4);
    }

    .badge-link:hover {
      background: #6c63ff;
      border-color: #a78bfa;
      transform: translateY(-4px);
      box-shadow: 0 15px 30px rgba(108, 99, 255, 0.5);
      color: white;
    }

    .typing-banner {
      background: rgba(10, 15, 30, 0.7);
      backdrop-filter: blur(14px);
      border-radius: 80px;
      padding: 1rem 2.5rem;
      margin: 2rem auto;
      display: inline-block;
      font-family: 'Fira Code', monospace;
      font-size: 1.3rem;
      border: 1px solid #6c63ff50;
      color: #cbd5e1;
      animation: pulseGlow 2.4s infinite;
    }

    @keyframes pulseGlow {
      0% { box-shadow: 0 0 8px #6c63ff40; }
      50% { box-shadow: 0 0 25px #6c63ffaa; }
      100% { box-shadow: 0 0 8px #6c63ff40; }
    }

    /* yaml card */
    .yaml-card {
      background: rgba(20, 25, 40, 0.8);
      backdrop-filter: blur(18px);
      border-radius: 2.5rem;
      padding: 2rem;
      margin: 2.5rem 0;
      border: 1px solid rgba(108, 99, 255, 0.3);
      box-shadow: 0 25px 50px -10px rgba(0,0,0,0.7);
      font-family: 'Fira Code', monospace;
      transition: transform 0.3s;
    }

    .yaml-card:hover {
      transform: scale(1.01);
      border-color: #a78bfa;
    }

    .tech-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      margin: 2rem 0;
    }

    .tech-badge {
      background: #1e293b;
      padding: 0.7rem 1.7rem;
      border-radius: 3rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      transition: 0.25s;
      border: 1px solid #334155;
      box-shadow: 0 4px 12px rgba(0,0,0,0.4);
      animation: techFloat 3s infinite alternate;
    }

    .tech-badge:hover {
      background: #6c63ff;
      border-color: #c4b5fd;
      transform: translateY(-6px) rotate(1deg);
      box-shadow: 0 15px 25px #6c63ff70;
    }

    @keyframes techFloat {
      0% { transform: translateY(0); }
      100% { transform: translateY(-6px); }
    }

    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      margin: 2.5rem 0;
    }

    .project-card {
      background: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(20px);
      border-radius: 2.5rem;
      padding: 2rem;
      border: 1px solid rgba(255,255,255,0.1);
      transition: all 0.4s ease;
      position: relative;
      overflow: hidden;
    }

    .project-card::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, #6c63ff20 0%, transparent 70%);
      opacity: 0;
      transition: opacity 0.5s;
    }

    .project-card:hover::before {
      opacity: 1;
    }

    .project-card:hover {
      transform: translateY(-12px) scale(1.02);
      border-color: #a78bfa;
      box-shadow: 0 35px 45px -15px #6c63ff;
    }

    .stats-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
      margin: 3rem 0;
    }

    .stat-graph {
      background: #0f172acc;
      backdrop-filter: blur(16px);
      border-radius: 2rem;
      padding: 1.5rem;
      transition: 0.3s;
    }

    .footer-links {
      display: flex;
      justify-content: center;
      gap: 2.5rem;
      flex-wrap: wrap;
      margin: 2.5rem 0;
    }

    .footer-icon {
      font-size: 2.2rem;
      color: #94a3b8;
      transition: 0.3s;
    }

    .footer-icon:hover {
      color: #a78bfa;
      transform: scale(1.2) rotate(5deg);
      filter: drop-shadow(0 0 12px #6c63ff);
    }

    @media (max-width: 600px) {
      .container { padding: 1rem; }
    }
  </style>
</head>
<body>
<div class="animated-bg"></div>
<div class="particles" id="particles"></div>

<div class="container">
  <div class="header-wave">
    <h1 class="wave-text">Hi There! I'm Rahul 👋</h1>
    <div style="font-size: 1.5rem; color: #cbd5e1; margin-top: 0.5rem;">Software Engineer • Full-Stack • GenAI Builder</div>
  </div>

  <div class="sub-header">
    <a href="https://linkedin.com/in/rahuletyala" class="badge-link"><i class="fab fa-linkedin"></i> LinkedIn</a>
    <a href="https://github.com/EtyalaRahul" class="badge-link"><i class="fab fa-github"></i> GitHub</a>
    <a href="mailto:2300032656csehte@gmail.com" class="badge-link"><i class="fas fa-envelope"></i> Gmail</a>
    <a href="tel:+919182172872" class="badge-link"><i class="fab fa-whatsapp"></i> Call</a>
  </div>

  <div class="typing-banner" id="typing-text"></div>

  <!-- About YAML -->
  <div class="yaml-card">
    <pre style="color:#f8fafc; font-size:1.1rem; white-space: pre-wrap;">
<span style="color:#6c63ff;">name:</span> Rahul Etyala
<span style="color:#6c63ff;">role:</span> Software Engineer
<span style="color:#6c63ff;">university:</span> KL University, Vijayawada (B.Tech CSE, CGPA 9.47)
<span style="color:#6c63ff;">focus:</span> Full-Stack Development • Generative AI • RAG Systems
<span style="color:#6c63ff;">achievement:</span> "TCS Digital 2026 Select 🎯"
<span style="color:#6c63ff;">leetcode:</span> 1666 rating | 300+ problems
<span style="color:#6c63ff;">certifications:</span> Cambridge B2, AWS Cloud Practitioner
    </pre>
  </div>

  <!-- Tech Arsenal -->
  <h2 style="text-align:center; margin-top:2rem; font-size:2.2rem; background: linear-gradient(to right, #c084fc, #60a5fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">🛠️ Tech Arsenal</h2>
  <div class="tech-grid">
    <span class="tech-badge"><i class="fab fa-python"></i> Python</span>
    <span class="tech-badge"><i class="fab fa-js"></i> JavaScript</span>
    <span class="tech-badge"><i class="fab fa-react"></i> React</span>
    <span class="tech-badge"><i class="fab fa-node"></i> Node.js</span>
    <span class="tech-badge"><i class="fas fa-server"></i> Express</span>
    <span class="tech-badge"><i class="fas fa-database"></i> MongoDB</span>
    <span class="tech-badge"><i class="fas fa-database"></i> MySQL</span>
    <span class="tech-badge"><i class="fab fa-html5"></i> HTML5</span>
    <span class="tech-badge"><i class="fab fa-css3-alt"></i> CSS3</span>
    <span class="tech-badge"><i class="fab fa-aws"></i> AWS</span>
    <span class="tech-badge"><i class="fab fa-git-alt"></i> Git</span>
    <span class="tech-badge"><i class="fas fa-brain"></i> LangChain</span>
  </div>

  <!-- Projects -->
  <h2 style="text-align:center; margin:2.5rem 0 1rem; font-size:2.2rem;">🚀 Featured Projects</h2>
  <div class="projects">
    <div class="project-card">
      <h3 style="color:#a78bfa;">🎓 EduReach AI Bot</h3>
      <p><strong>React • Node • MongoDB • LangChain • RAG</strong></p>
      <p>AI chatbot automating admission queries via Retrieval-Augmented Generation. Semantic search with vector embeddings.</p>
    </div>
    <div class="project-card">
      <h3 style="color:#60a5fa;">🛡️ AI Fraud Detection</h3>
      <p><strong>React • Node • MongoDB • GANs</strong></p>
      <p>GAN-based image verification for food delivery refund fraud. Detects synthetic & edited images.</p>
    </div>
  </div>

  <!-- Stats visual -->
  <div class="stats-container">
    <div class="stat-graph">
      <i class="fas fa-code" style="color:#6c63ff;"></i> LeetCode 1666<br>300+ solved
    </div>
    <div class="stat-graph">
      <i class="fas fa-star" style="color:#fbbf24;"></i> 2★ CodeChef
    </div>
    <div class="stat-graph">
      <i class="fas fa-trophy" style="color:#34d399;"></i> TCS Digital '26
    </div>
  </div>

  <!-- Experience -->
  <div style="background: #1e1b4b30; border-radius:2rem; padding:2rem; margin:2rem 0; backdrop-filter: blur(12px);">
    <h3>💼 Experience</h3>
    <p><strong>Responsive Web Dev Intern @ NxtWave</strong> (Mar 2025 – Apr 2025)<br>Built scalable UIs with React.js, mobile-first design.</p>
  </div>

  <!-- Footer Connect -->
  <div class="footer-links">
    <a href="https://linkedin.com/in/rahuletyala"><i class="fab fa-linkedin footer-icon"></i></a>
    <a href="https://github.com/EtyalaRahul"><i class="fab fa-github footer-icon"></i></a>
    <a href="mailto:2300032656csehte@gmail.com"><i class="fas fa-envelope footer-icon"></i></a>
  </div>
  <div style="text-align:center; margin:2rem 0; font-style:italic; color:#9ca3af;">
    "Turning ☕ into code, and problems into solutions."
  </div>
</div>

<script>
  (function() {
    // particles animation
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 45; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 10 + 5;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 10 + 's';
      particle.style.animationDuration = 8 + Math.random() * 15 + 's';
      particlesContainer.appendChild(particle);
    }

    // Typing effect
    const typingElement = document.getElementById('typing-text');
    const phrases = [
      "Building Scalable Full-Stack Apps 💻",
      "Crafting LLM + RAG Powered Systems 🤖",
      "Solving 300+ DSA Problems on LeetCode 🧩",
      "Selected for TCS Digital 2026 🎉"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let currentPhrase = '';
    let isDeleting = false;

    function typeEffect() {
      if (!typingElement) return;
      currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        charIndex--;
        typingElement.textContent = currentPhrase.substring(0, charIndex);
      } else {
        charIndex++;
        typingElement.textContent = currentPhrase.substring(0, charIndex);
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => { isDeleting = true; }, 1800);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }

      const speed = isDeleting ? 50 : 90;
      setTimeout(typeEffect, speed);
    }

    typeEffect();

    // Additional motion: animate stats on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transition = '0.6s';
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.project-card, .yaml-card, .stat-graph').forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(25px)';
      observer.observe(el);
    });

    // initial trigger for visible elements
    window.addEventListener('load', () => {
      document.querySelectorAll('.project-card, .yaml-card, .stat-graph').forEach(el => {
        el.style.transition = '0.8s ease';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      });
    });
  })();
</script>
</body>
</html>
