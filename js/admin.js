// admin.js — Admin: Add/Edit/Delete jobs (CRUD on localStorage)
'use strict';

let editingId = null;
let cachedAllJobs = [];

function adminItemHTML(j, isCustom) {
  return `
    <div class="admin-item" data-id="${j.id}">
      <div style="display:flex; gap: 1rem; align-items: center; flex:1; min-width:0">
        <div class="job-logo">${HSUtils.escape(j.logo)}</div>
        <div class="admin-item-info" style="min-width:0">
          <h4 style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis">${HSUtils.escape(j.title)}</h4>
          <p>${HSUtils.escape(j.company)} · ${HSUtils.escape(j.location)} · ${HSUtils.escape(j.salary)}</p>
        </div>
      </div>
      <div class="admin-actions">
        <button class="icon-btn" data-edit="${j.id}" title="Edit" data-testid="edit-${j.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>
        <button class="icon-btn danger" data-del="${j.id}" title="Delete" data-testid="delete-${j.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    </div>
  `;
}

async function refreshList() {
  cachedAllJobs = await HSData.getAllJobs();
  const search = (document.getElementById('adminSearch').value || '').toLowerCase();
  const filtered = search
    ? cachedAllJobs.filter(j => j.title.toLowerCase().includes(search) || j.company.toLowerCase().includes(search))
    : cachedAllJobs;
  const wrap = document.getElementById('adminJobsList');
  if (!filtered.length) {
    wrap.innerHTML = `<div class="empty"><div class="big-emoji">No jobs</div><p>Add your first job using the form on the left.</p></div>`;
    return;
  }
  wrap.innerHTML = filtered.map(j => adminItemHTML(j)).join('');
  attachActions();
}

function attachActions() {
  document.querySelectorAll('[data-edit]').forEach(b => b.addEventListener('click', () => loadIntoForm(Number(b.dataset.edit))));
  document.querySelectorAll('[data-del]').forEach(b => b.addEventListener('click', () => {
    if (!confirm('Delete this job?')) return;
    HSData.deleteJob(Number(b.dataset.del));
    HSToast.show('Job deleted', 'info');
    refreshList();
  }));
}

function loadIntoForm(id) {
  const j = cachedAllJobs.find(x => x.id === id);
  if (!j) return;
  editingId = id;
  document.getElementById('formTitle').textContent = 'Edit job';
  document.getElementById('editId').value = id;
  document.getElementById('jTitle').value = j.title;
  document.getElementById('jCompany').value = j.company;
  document.getElementById('jLocation').value = j.location;
  document.getElementById('jType').value = j.type;
  document.getElementById('jMode').value = j.mode;
  document.getElementById('jSalary').value = j.salary;
  document.getElementById('jExp').value = j.experience;
  document.getElementById('jCategory').value = j.category;
  document.getElementById('jTags').value = (j.tags || []).join(', ');
  document.getElementById('jDesc').value = j.description;
  document.getElementById('cancelEdit').style.display = 'inline-flex';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetForm() {
  editingId = null;
  document.getElementById('formTitle').textContent = 'Post a new job';
  document.getElementById('adminForm').reset();
  document.getElementById('editId').value = '';
  document.getElementById('cancelEdit').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  refreshList();

  document.getElementById('adminForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
      title: jTitle.value.trim(),
      company: jCompany.value.trim(),
      location: jLocation.value.trim(),
      type: jType.value,
      mode: jMode.value,
      salary: jSalary.value.trim(),
      experience: jExp.value.trim(),
      category: jCategory.value,
      tags: jTags.value.split(',').map(t => t.trim()).filter(Boolean),
      description: jDesc.value.trim(),
      responsibilities: ['Define role responsibilities here'],
      skills: jTags.value.split(',').map(t => t.trim()).filter(Boolean)
    };
    if (editingId) {
      await HSData.updateJob(editingId, data);
      HSToast.show('Job updated successfully ✓');
    } else {
      HSData.addJob(data);
      HSToast.show('Job posted successfully 🎉');
    }
    resetForm();
    refreshList();
  });

  document.getElementById('cancelEdit').addEventListener('click', resetForm);
  document.getElementById('adminSearch').addEventListener('input', HSUtils.debounce(refreshList, 200));
});
