// dashboard.js — User dashboard with tabs: applications, saved, profile
'use strict';

function jobCardHTML(j) {
  return `
    <article class="job-card" data-id="${j.id}" onclick="window.location.href='jobs.html?id=${j.id}'">
      <div class="job-head">
        <div class="job-logo">${HSUtils.escape(j.logo)}</div>
      </div>
      <div class="job-title">${HSUtils.escape(j.title)}</div>
      <div class="job-company">${HSUtils.escape(j.company)} · ${HSUtils.escape(j.location)}</div>
      <div class="job-meta">
        <span class="meta-pill">${HSUtils.escape(j.type)}</span>
        <span class="meta-pill">${HSUtils.escape(j.mode)}</span>
      </div>
      <div class="job-foot">
        <span class="job-salary">${HSUtils.escape(j.salary)}</span>
        <span class="job-posted">${HSUtils.escape(j.posted)}</span>
      </div>
    </article>`;
}

async function renderApplications() {
  const apps = HSData.getApplications();
  const wrap = document.getElementById('applicationsList');
  document.getElementById('appsCount').textContent = apps.length;

  // Mock statuses for demo
  const statusForApp = (idx) => {
    if (idx === 0) return { key: 'shortlisted', label: 'Shortlisted' };
    if (idx === 1) return { key: 'review', label: 'Under Review' };
    return { key: '', label: 'Submitted' };
  };
  document.getElementById('reviewCount').textContent = apps.filter((_, i) => i < 2).length;

  if (!apps.length) {
    wrap.innerHTML = `<div class="empty"><div class="big-emoji">Nothing yet</div><p>Browse jobs and start applying — your applications will show up here.</p><a href="jobs.html" class="btn btn-primary" style="margin-top: 1rem">Browse Jobs</a></div>`;
    return;
  }
  wrap.innerHTML = apps.map((a, i) => {
    const s = statusForApp(i);
    const date = new Date(a.submittedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
    return `
      <div class="app-row" data-testid="app-row-${a.id}">
        <div class="job-logo">${HSUtils.escape((a.company || 'NA').slice(0,2).toUpperCase())}</div>
        <div>
          <div style="font-weight:700">${HSUtils.escape(a.jobTitle)}</div>
          <div style="font-size:0.85rem; color: var(--text-soft)">${HSUtils.escape(a.company)} · Applied on ${date}</div>
        </div>
        <span class="status ${s.key}">${s.label}</span>
        <a href="jobs.html?id=${a.jobId}" class="btn btn-ghost" style="font-size:0.85rem">View</a>
      </div>`;
  }).join('');
}

async function renderSaved() {
  const ids = HSData.getSavedIds();
  const allJobs = await HSData.getAllJobs();
  const saved = ids.map(id => allJobs.find(j => j.id === Number(id))).filter(Boolean);
  document.getElementById('savedCount').textContent = saved.length;

  const wrap = document.getElementById('savedList');
  if (!saved.length) {
    wrap.innerHTML = `<div class="empty" style="grid-column: 1 / -1"><div class="big-emoji">No saves yet</div><p>Hit the bookmark icon on any job card to save it for later.</p></div>`;
    return;
  }
  wrap.innerHTML = saved.map(jobCardHTML).join('');
}

function loadProfile() {
  const p = HSUtils.store.get('hs_profile', {});
  const u = HSUtils.store.get('hs_user', {});
  document.getElementById('profName').value = p.name || u.name || '';
  document.getElementById('profEmail').value = p.email || u.email || '';
  document.getElementById('profPhone').value = p.phone || '';
  document.getElementById('profHeadline').value = p.headline || '';
  document.getElementById('profSkills').value = p.skills || '';
  document.getElementById('profBio').value = p.bio || '';

  const name = (p.name || u.name || 'Friend').split(' ')[0];
  document.getElementById('welcomeName').innerHTML = `Hello, ${HSUtils.escape(name)} 👋`;

  // Profile completeness score
  const filled = ['name', 'email', 'phone', 'headline', 'skills', 'bio'].filter(k => (p[k] || '').trim()).length;
  document.getElementById('matchScore').textContent = `${Math.round((filled / 6) * 100)}%`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderApplications();
  renderSaved();
  loadProfile();

  // Tabs
  document.querySelectorAll('.tab').forEach(t => {
    t.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      document.getElementById('pane' + t.dataset.tab.charAt(0).toUpperCase() + t.dataset.tab.slice(1)).classList.add('active');
    });
  });

  // Profile form
  document.getElementById('profileForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const profile = {
      name: profName.value.trim(),
      email: profEmail.value.trim(),
      phone: profPhone.value.trim(),
      headline: profHeadline.value.trim(),
      skills: profSkills.value.trim(),
      bio: profBio.value.trim()
    };
    HSUtils.store.set('hs_profile', profile);
    HSUtils.store.set('hs_user', { name: profile.name, email: profile.email });
    HSToast.show('Profile saved successfully!');
    loadProfile();
  });
});
