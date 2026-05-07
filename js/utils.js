// utils.js — Shared utility helpers (ES6, arrow fns, destructuring, template literals)
'use strict';

const HSUtils = {
  // Convert "₹8 LPA" / "₹40K/month" -> numeric LPA value
  parseSalary(s) {
    if (!s) return 0;
    const num = parseFloat(s.replace(/[^\d.]/g, ''));
    if (s.toLowerCase().includes('k/month')) return (num * 12) / 100000;
    return num;
  },

  classifyExperience(exp) {
    const min = parseInt(exp, 10) || 0;
    if (min <= 1) return 'entry';
    if (min <= 4) return 'mid';
    return 'senior';
  },

  // Debounce — demonstrates closures + setTimeout
  debounce(fn, delay = 300) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  },

  // Escape HTML for safe insertion
  escape(str = '') {
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  },

  // localStorage wrapper with JSON parsing
  store: {
    get(key, fallback = null) {
      try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
      catch { return fallback; }
    },
    set(key, value) { localStorage.setItem(key, JSON.stringify(value)); },
    remove(key) { localStorage.removeItem(key); }
  },

  // Format date — uses BOM/Date object
  timeAgo(posted) { return posted || 'recently'; }
};
