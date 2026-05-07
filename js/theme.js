// theme.js — Dark/Light mode toggle (DOM + localStorage + BOM events)
'use strict';

(function () {
  const KEY = 'hs_theme';
  const saved = localStorage.getItem(KEY);
  if (saved === 'dark') document.body.classList.add('dark');

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      localStorage.setItem(KEY, isDark ? 'dark' : 'light');
    });
  });
})();
