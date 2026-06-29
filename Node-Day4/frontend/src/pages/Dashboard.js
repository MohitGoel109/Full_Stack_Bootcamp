import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Scene from '../components/Scene';
import '../index.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const name = localStorage.getItem('name') || 'User';
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    navigate('/login');
  };

  const hour = time.getHours();
  const greeting = hour < 12 ? '🌤 Good morning' : hour < 17 ? '☀️ Good afternoon' : '🌙 Good evening';

  return (
    <>
      <Scene />
      <div className="dash-page">
        <nav className="dash-nav">
          <div className="dash-logo">AuthFlow</div>
          <button className="btn-ghost" onClick={logout}>Sign out</button>
        </nav>

        <div className="dash-hero">
          <h1>{greeting}, {name}!</h1>
          <p>You're securely signed in. Your session is active and protected.</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon violet">🔐</div>
            <div className="stat-label">Auth Status</div>
            <div className="stat-value">Active</div>
            <span className="badge">JWT Verified</span>
          </div>

          <div className="stat-card">
            <div className="stat-icon cyan">⏱</div>
            <div className="stat-label">Local Time</div>
            <div className="stat-value" style={{ fontSize: '20px', letterSpacing: '1px' }}>
              {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </div>
            <span className="badge" style={{ background: 'rgba(34,211,238,0.1)', color: '#22d3ee', borderColor: 'rgba(34,211,238,0.25)' }}>
              Live
            </span>
          </div>

          <div className="stat-card">
            <div className="stat-icon pink">👤</div>
            <div className="stat-label">Signed In As</div>
            <div className="stat-value" style={{ fontSize: '18px' }}>{name}</div>
            <span className="badge" style={{ background: 'rgba(244,114,182,0.1)', color: '#f472b6', borderColor: 'rgba(244,114,182,0.25)' }}>
              Member
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
