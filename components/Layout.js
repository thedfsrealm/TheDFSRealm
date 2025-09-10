// components/Layout.js
import React from 'react';

export default function Layout({ children }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <header style={{ borderBottom: '2px solid #000', marginBottom: '20px' }}>
        <h1>🌌 TR DFS Realm</h1>
      </header>

      <main>{children}</main>

      <footer style={{ borderTop: '2px solid #000', marginTop: '20px', paddingTop: '10px' }}>
        <p>⚡ Powered by TR • The Kingdom is at hand ⚡</p>
      </footer>
    </div>
  );
}
