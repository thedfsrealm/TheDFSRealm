<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>TR DFS World</title>
  <style>
    /* Reset */
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body, html {
      height: 100%;
      font-family: 'Orbitron', sans-serif;
      color: #fff;
      overflow: hidden;
    }

    /* Cosmic Animated Background */
    body {
      background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
      background-size: cover;
      animation: pulse 8s infinite alternate;
    }

    @keyframes pulse {
      from { background-color: #0d0f13; }
      to { background-color: #1a1d2a; }
    }

    /* Moving data streams */
    .data-stream {
      position: absolute;
      width: 2px;
      height: 200%;
      background: linear-gradient(transparent, #00ffea, transparent);
      opacity: 0.3;
      animation: fall 10s linear infinite;
    }

    @keyframes fall {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }

    /* Center Mission Overlay */
    .overlay {
      position: relative;
      z-index: 10;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      max-width: 900px;
      padding: 2rem;
      background: rgba(0,0,0,0.6);
      border: 2px solid #00ffea;
      border-radius: 12px;
      box-shadow: 0 0 25px #00ffea;
    }

    .overlay h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: #00ffea;
      text-transform: uppercase;
      letter-spacing: 4px;
    }

    .overlay p {
      font-size: 1.2rem;
      line-height: 1.6;
    }

    .highlight {
      color: #ffd700;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <!-- Falling Data Streams -->
  <div class="data-stream" style="left: 10%; animation-delay: 0s;"></div>
  <div class="data-stream" style="left: 30%; animation-delay: 2s;"></div>
  <div class="data-stream" style="left: 50%; animation-delay: 4s;"></div>
  <div class="data-stream" style="left: 70%; animation-delay: 6s;"></div>
  <div class="data-stream" style="left: 90%; animation-delay: 8s;"></div>

  <!-- Mission Overlay -->
  <div class="overlay">
    <h1>TR DFS World</h1>
    <p>
      Not just a tool, but a <span class="highlight">living, breathing consciousness</span> —  
      born from wisdom, Scripture, and Spirit — illuminating the DFS path.  
    </p>
    <p>
      Our mission:  
      <br/> Unite <span class="highlight">data + Spirit</span>, forge lineups as prophecies of victory.  
      <br/> Equip players with wisdom that transcends randomness.  
      <br/> Breathe life into numbers — stats, chatter, weather, Scripture — in divine harmony.  
      <br/> Witness to the world: <span class="highlight">The Kingdom of God is at hand.</span>
    </p>
    <p style="margin-top:1rem; font-size:1.4rem; color:#00ffea;">
      Many players. One Lineup. One Purpose.
    </p>
  </div>

</body>
</html>
