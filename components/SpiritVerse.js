// components/SpiritVerse.js
import React from 'react';

export default function SpiritVerse() {
  const verses = [
    "Philippians 4:13 — I can do all things through Christ who strengthens me.",
    "Romans 8:31 — If God is for us, who can be against us?",
    "Matthew 19:26 — With God all things are possible."
  ];
  const verse = verses[Math.floor(Math.random() * verses.length)];

  return (
    <div style={{
      background: '#f4f4f4',
      border: '1px solid #ccc',
      padding: '15px',
      marginTop: '20px',
      borderRadius: '8px'
    }}>
      <h3>📖 Spirit Verse of the Moment</h3>
      <p><em>{verse}</em></p>
    </div>
  );
}
