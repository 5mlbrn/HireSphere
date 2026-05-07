// auth.js — Fake auth using localStorage (demonstrates objects + storage)
'use strict';

const HSAuth = (function () {
  const USERS_KEY = 'hs_users';
  const SESSION_KEY = 'hs_user';

  function signup(name, email, password) {
    if (!name || !email || !password) return HSToast.show('Please fill all fields', 'error');
    const users = HSUtils.store.get(USERS_KEY, []);
    if (users.some(u => u.email === email)) return HSToast.show('Email already registered', 'error');
    const user = { name, email, password };
    users.push(user);
    HSUtils.store.set(USERS_KEY, users);
    HSUtils.store.set(SESSION_KEY, { name, email });
    HSToast.show(`Welcome, ${name.split(' ')[0]}! Account created.`);
    setTimeout(() => window.location.href = 'dashboard.html', 900);
  }

  function login(email, password) {
    if (!email || !password) return HSToast.show('Please enter email and password', 'error');
    const users = HSUtils.store.get(USERS_KEY, []);
    const u = users.find(x => x.email === email && x.password === password);
    if (!u) {
      // Allow demo login even if no signup yet
      if (email && password.length >= 4) {
        HSUtils.store.set(SESSION_KEY, { name: email.split('@')[0], email });
        HSToast.show('Welcome back!');
        setTimeout(() => window.location.href = 'dashboard.html', 800);
        return;
      }
      return HSToast.show('Invalid credentials', 'error');
    }
    HSUtils.store.set(SESSION_KEY, { name: u.name, email: u.email });
    HSToast.show(`Welcome back, ${u.name.split(' ')[0]}!`);
    setTimeout(() => window.location.href = 'dashboard.html', 800);
  }

  function logout() {
    HSUtils.store.remove(SESSION_KEY);
    window.location.href = 'index.html';
  }

  function current() { return HSUtils.store.get(SESSION_KEY); }

  return { signup, login, logout, current };
})();
