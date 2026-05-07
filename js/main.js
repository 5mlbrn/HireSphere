// main.js — Landing page logic (featured jobs + AI tips)
'use strict';

const TIPS = [
  { num: '01', title: 'Tailor every resume', text: 'Mirror keywords from the job description to clear ATS filters and stand out instantly.' },
  { num: '02', title: 'Quantify your impact', text: 'Use numbers — "improved load time by 40%" beats "improved performance" every time.' },
  { num: '03', title: 'Tell a story in your bio', text: 'A great profile reads like a journey, not a checklist. Hook them in the first sentence.' },
  { num: '04', title: 'Network in public', text: 'Share what you build on LinkedIn and Twitter. Recruiters love active candidates.' },
  { num: '05', title: 'Practice mock interviews', text: 'Record yourself answering 10 common questions. Review and iterate weekly.' },
  { num: '06', title: 'Follow up gracefully', text: 'A thoughtful message 48 hours after applying lifts your reply rate by 30%.' }
];

function renderTips() {
  const el = document.getElementById('tipsGrid');
  if (!el) return;
  el.innerHTML = TIPS.map(t => `
    <div class="tip-card">
      <div class="tip-num">${t.num}</div>
      <h4>${t.title}</h4>
      <p>${t.text}</p>
    </div>`).join('');
}

function jobCardHTML(j) {
  return `
    <article class="job-card" data-id="${j.id}" data-testid="job-card-${j.id}">
      <div class="job-head">
        <div class="job-logo">${HSUtils.escape(j.logo)}</div>
        <button class="job-bookmark ${HSData.isSaved(j.id) ? 'saved' : ''}" data-bookmark="${j.id}" title="Save job">
          <svg viewBox="0 0 24 24" fill="${HSData.isSaved(j.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        </button>
      </div>
      <div class="job-title">${HSUtils.escape(j.title)}</div>
      <div class="job-company">${HSUtils.escape(j.company)} · ${HSUtils.escape(j.location)}</div>
      <div class="job-meta">
        <span class="meta-pill">${HSUtils.escape(j.type)}</span>
        <span class="meta-pill">${HSUtils.escape(j.mode)}</span>
        <span class="meta-pill">${HSUtils.escape(j.experience)}</span>
      </div>
      <div class="job-tags">${(j.tags || []).slice(0, 3).map(t => `<span class="tag">${HSUtils.escape(t)}</span>`).join('')}</div>
      <div class="job-foot">
        <span class="job-salary">${HSUtils.escape(j.salary)}</span>
        <span class="job-posted">${HSUtils.escape(j.posted)}</span>
      </div>
    </article>`;
}

async function renderFeatured() {
  const grid = document.getElementById('featuredJobs');
  if (!grid) return;
  grid.innerHTML = '<div class="loader-wrap"><div class="loader"></div><div>Loading featured jobs...</div></div>';
  const jobs = await HSData.getAllJobs();
  // Pick 6 highest salary
  const featured = [...jobs].sort((a, b) => HSUtils.parseSalary(b.salary) - HSUtils.parseSalary(a.salary)).slice(0, 6);
  grid.innerHTML = featured.map(jobCardHTML).join('');

  // Stats
  const cnt = document.getElementById('statJobs');
  if (cnt) cnt.textContent = `${jobs.length}+`;

  // Card click → jobs page with id
  grid.querySelectorAll('.job-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('[data-bookmark]')) return;
      const id = card.dataset.id;
      window.location.href = `jobs.html?id=${id}`;
    });
  });
  grid.querySelectorAll('[data-bookmark]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.bookmark;
      const saved = HSData.toggleSaved(id);
      btn.classList.toggle('saved', saved);
      btn.querySelector('svg').setAttribute('fill', saved ? 'currentColor' : 'none');
      HSToast.show(saved ? 'Job saved to your list ❤' : 'Removed from saved jobs', saved ? 'success' : 'info');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTips();
  renderFeatured();

  const form = document.getElementById('heroSearch');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const k = document.getElementById('heroKeyword').value.trim();
      const l = document.getElementById('heroLocation').value.trim();
      const params = new URLSearchParams();
      if (k) params.set('q', k);
      if (l) params.set('loc', l);
      window.location.href = `jobs.html${params.toString() ? '?' + params.toString() : ''}`;
    });
  }
});
