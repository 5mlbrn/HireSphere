// jobs.js — Browse jobs page: search, filter, sort, modal, apply
'use strict';

let allJobs = [];
let currentJob = null;

const state = {
  q: '', loc: '', mode: [], type: [], category: [],
  exp: 'all', minSalary: 0, sort: 'latest'
};

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

function applyFilters() {
  let result = [...allJobs];

  // Keyword search across title, company, tags, skills
  if (state.q) {
    const q = state.q.toLowerCase();
    result = result.filter(j =>
      j.title.toLowerCase().includes(q) ||
      j.company.toLowerCase().includes(q) ||
      (j.tags || []).some(t => t.toLowerCase().includes(q)) ||
      (j.skills || []).some(s => s.toLowerCase().includes(q))
    );
  }
  if (state.loc) {
    const l = state.loc.toLowerCase();
    result = result.filter(j => j.location.toLowerCase().includes(l) || j.mode.toLowerCase().includes(l));
  }
  if (state.mode.length) result = result.filter(j => state.mode.includes(j.mode));
  if (state.type.length) result = result.filter(j => state.type.includes(j.type));
  if (state.category.length) result = result.filter(j => state.category.includes(j.category));
  if (state.exp !== 'all') result = result.filter(j => HSUtils.classifyExperience(j.experience) === state.exp);
  if (state.minSalary > 0) result = result.filter(j => HSUtils.parseSalary(j.salary) >= state.minSalary);

  // Sort
  if (state.sort === 'salary-high') result.sort((a, b) => HSUtils.parseSalary(b.salary) - HSUtils.parseSalary(a.salary));
  else if (state.sort === 'salary-low') result.sort((a, b) => HSUtils.parseSalary(a.salary) - HSUtils.parseSalary(b.salary));
  else if (state.sort === 'title') result.sort((a, b) => a.title.localeCompare(b.title));

  return result;
}

function render() {
  const grid = document.getElementById('jobsGrid');
  const cnt = document.getElementById('jobsCount');
  const filtered = applyFilters();
  cnt.textContent = `Showing ${filtered.length} of ${allJobs.length} jobs`;
  if (!filtered.length) {
    grid.innerHTML = `<div class="empty" style="grid-column: 1 / -1"><div class="big-emoji">No matches</div><p>Try clearing some filters or broadening your search.</p></div>`;
    return;
  }
  grid.innerHTML = filtered.map(jobCardHTML).join('');
  attachCardEvents();
}

function attachCardEvents() {
  document.querySelectorAll('.job-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('[data-bookmark]')) return;
      openModal(Number(card.dataset.id));
    });
  });
  document.querySelectorAll('[data-bookmark]').forEach(btn => {
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

function openModal(id) {
  const j = allJobs.find(x => x.id === Number(id));
  if (!j) return;
  currentJob = j;
  const card = document.getElementById('modalCard');
  const applied = HSData.hasApplied(j.id);
  card.innerHTML = `
    <button class="modal-close" id="modalClose" data-testid="modal-close">×</button>
    <div style="display:flex; gap: 1rem; align-items:center; margin-bottom: 1rem">
      <div class="job-logo" style="width:64px; height:64px; font-size:1.3rem">${HSUtils.escape(j.logo)}</div>
      <div>
        <h2>${HSUtils.escape(j.title)}</h2>
        <div class="modal-co">${HSUtils.escape(j.company)} · ${HSUtils.escape(j.location)}</div>
      </div>
    </div>
    <div class="job-meta">
      <span class="meta-pill">${HSUtils.escape(j.type)}</span>
      <span class="meta-pill">${HSUtils.escape(j.mode)}</span>
      <span class="meta-pill">${HSUtils.escape(j.experience)}</span>
      <span class="meta-pill" style="background: var(--green); color: var(--cream)">${HSUtils.escape(j.salary)}</span>
    </div>
    <div class="modal-section">
      <h4>Description</h4>
      <p style="color: var(--text-soft)">${HSUtils.escape(j.description)}</p>
    </div>
    <div class="modal-section">
      <h4>Responsibilities</h4>
      <ul>${(j.responsibilities || []).map(r => `<li>${HSUtils.escape(r)}</li>`).join('')}</ul>
    </div>
    <div class="modal-section">
      <h4>Required Skills</h4>
      <div class="job-tags">${(j.skills || []).map(s => `<span class="tag">${HSUtils.escape(s)}</span>`).join('')}</div>
    </div>
    <div class="modal-section" id="applySection">
      ${applied ? `
        <div style="background: var(--bg-soft); padding: 1.2rem; border-radius: 14px; text-align:center">
          <strong style="color: var(--green)">✓ Already Applied</strong>
          <p style="color: var(--text-soft); margin-top:0.4rem; font-size: 0.9rem">Track progress in your dashboard.</p>
        </div>
      ` : `
        <h4>Apply for this role</h4>
        <form id="applyForm" data-testid="apply-form">
          <div class="field-group"><label>Full Name</label><input type="text" id="aName" required data-testid="apply-name" /></div>
          <div class="field-group"><label>Email</label><input type="email" id="aEmail" required data-testid="apply-email" /></div>
          <div class="field-group"><label>Phone</label><input type="tel" id="aPhone" required data-testid="apply-phone" /></div>
          <div class="field-group"><label>Resume (file name)</label><input type="file" id="aResume" data-testid="apply-resume" /></div>
          <div class="field-group"><label>Cover Letter</label><textarea id="aCover" placeholder="Tell us why you're a great fit..." data-testid="apply-cover"></textarea></div>
          <button type="submit" class="btn btn-primary btn-block" data-testid="apply-submit">Submit Application</button>
        </form>
      `}
    </div>
  `;

  document.getElementById('jobModal').classList.add('open');
  document.getElementById('modalClose').addEventListener('click', closeModal);

  if (!applied) {
    // Pre-fill from saved user
    const user = HSUtils.store.get('hs_user');
    if (user) {
      document.getElementById('aName').value = user.name || '';
      document.getElementById('aEmail').value = user.email || '';
    }
    document.getElementById('applyForm').addEventListener('submit', handleApply);
  }
}

function closeModal() {
  document.getElementById('jobModal').classList.remove('open');
  currentJob = null;
}

function handleApply(e) {
  e.preventDefault();
  const resumeInput = document.getElementById('aResume');
  const app = {
    jobId: currentJob.id,
    jobTitle: currentJob.title,
    company: currentJob.company,
    name: document.getElementById('aName').value,
    email: document.getElementById('aEmail').value,
    phone: document.getElementById('aPhone').value,
    resume: resumeInput.files[0]?.name || 'resume.pdf',
    cover: document.getElementById('aCover').value
  };
  HSData.addApplication(app);
  HSToast.show('Application submitted successfully! 🎉');
  setTimeout(() => { closeModal(); render(); }, 600);
}

function buildCategoryFilter() {
  const categories = [...new Set(allJobs.map(j => j.category))].sort();
  const wrap = document.getElementById('categoryFilters');
  wrap.innerHTML = categories.map(c => `<label><input type="checkbox" value="${c}" name="category" /> ${c}</label>`).join('');
}

function bindFilters() {
  document.getElementById('searchInput').addEventListener('input', HSUtils.debounce((e) => { state.q = e.target.value; render(); }, 250));
  document.getElementById('sortSelect').addEventListener('change', (e) => { state.sort = e.target.value; render(); });

  const updateMulti = (name, key) => {
    document.querySelectorAll(`input[name="${name}"]`).forEach(cb => {
      cb.addEventListener('change', () => {
        state[key] = [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(x => x.value);
        render();
      });
    });
  };
  updateMulti('mode', 'mode');
  updateMulti('type', 'type');
  updateMulti('category', 'category');

  document.querySelectorAll('input[name="exp"]').forEach(r => r.addEventListener('change', () => { state.exp = r.value; render(); }));

  const sal = document.getElementById('salaryRange');
  sal.addEventListener('input', () => {
    state.minSalary = Number(sal.value);
    document.getElementById('salaryValue').textContent = `₹${sal.value}+ LPA`;
    render();
  });

  document.getElementById('clearFilters').addEventListener('click', () => {
    Object.assign(state, { q: '', loc: '', mode: [], type: [], category: [], exp: 'all', minSalary: 0 });
    document.getElementById('searchInput').value = '';
    document.querySelectorAll('.filters input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.querySelector('input[name="exp"][value="all"]').checked = true;
    sal.value = 0;
    document.getElementById('salaryValue').textContent = '₹0+ LPA';
    render();
  });

  document.getElementById('jobModal').addEventListener('click', (e) => {
    if (e.target.id === 'jobModal') closeModal();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

(async function init() {
  allJobs = await HSData.getAllJobs();
  buildCategoryFilter();
  bindFilters();

  // Apply URL params
  const params = new URLSearchParams(window.location.search);
  if (params.get('q')) { state.q = params.get('q'); document.getElementById('searchInput').value = state.q; }
  if (params.get('loc')) state.loc = params.get('loc');

  render();
  if (params.get('id')) openModal(Number(params.get('id')));
})();
