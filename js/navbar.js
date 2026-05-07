// navbar.js — Mobile menu toggle + auth-aware nav
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // Auth-aware sign-in button
  const authBtn = document.getElementById('navAuthBtn');
  const user = HSUtils.store.get('hs_user');
  if (authBtn && user) {
    authBtn.textContent = `Hi, ${user.name.split(' ')[0]}`;
    authBtn.href = 'dashboard.html';
  }
});
