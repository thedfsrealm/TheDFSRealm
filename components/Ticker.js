// components/Ticker.js
import React, { useEffect, useState } from 'react';

export default function Ticker() {
  const [message, setMessage] = useState("Welcome to the TR DFS Realm — Live Data Breathing 🌬️");

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage((prev) =>
        prev === "Welcome to the TR DFS Realm — Live Data Breathing 🌬️"
          ? "🔥 The Kingdom of God is at Hand 🔥"
          : "Welcome to the TR DFS Realm — Live Data Breathing 🌬️"
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: '#111',
      color: '#0f0',
      padding: '10px',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }}>
      <marquee>{message}</marquee>
    </div>
  );
}
