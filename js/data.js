// data.js — Data layer: fetch from JSON, mix with localStorage admin jobs
'use strict';

const HSData = (function () {
  const STORE_JOBS_KEY  = 'hs_admin_jobs';   // jobs added/edited by admin
  const STORE_DELETED   = 'hs_deleted_jobs'; // ids of deleted seed jobs
  const STORE_APPS      = 'hs_applications';
  const STORE_SAVED     = 'hs_saved';
  let cachedSeed = null;

  // Async fetch using async/await + try/catch
  async function fetchSeed() {
    if (cachedSeed) return cachedSeed;
    // Use embedded SEED_JOBS if available, otherwise fallback to empty array
    cachedSeed = typeof SEED_JOBS !== 'undefined' ? SEED_JOBS : [];
    return cachedSeed;
  }

  // Merge JSON + admin localStorage with proper id offsets
  async function getAllJobs() {
    const [seed, admin] = [await fetchSeed(), HSUtils.store.get(STORE_JOBS_KEY, [])];
    const deleted = HSUtils.store.get(STORE_DELETED, []);
    const filteredSeed = seed.filter(j => !deleted.includes(j.id));
    return [...admin, ...filteredSeed];
  }

  async function getJobById(id) {
    const all = await getAllJobs();
    return all.find(j => j.id === Number(id));
  }

  // Admin operations
  function addJob(job) {
    const list = HSUtils.store.get(STORE_JOBS_KEY, []);
    const newJob = { ...job, id: Date.now(), posted: 'Just now', logo: (job.company || 'NA').slice(0, 2).toUpperCase() };
    list.unshift(newJob);
    HSUtils.store.set(STORE_JOBS_KEY, list);
    return newJob;
  }

  function updateJob(id, patch) {
    const adminList = HSUtils.store.get(STORE_JOBS_KEY, []);
    const idx = adminList.findIndex(j => j.id === Number(id));
    if (idx >= 0) {
      adminList[idx] = { ...adminList[idx], ...patch };
      HSUtils.store.set(STORE_JOBS_KEY, adminList);
      return adminList[idx];
    }
    // Editing a seed job — copy it into admin store
    return getJobById(id).then(seedJob => {
      if (!seedJob) return null;
      const updated = { ...seedJob, ...patch };
      adminList.unshift(updated);
      HSUtils.store.set(STORE_JOBS_KEY, adminList);
      const deleted = HSUtils.store.get(STORE_DELETED, []);
      if (!deleted.includes(seedJob.id)) HSUtils.store.set(STORE_DELETED, [...deleted, seedJob.id]);
      return updated;
    });
  }

  function deleteJob(id) {
    const numId = Number(id);
    const adminList = HSUtils.store.get(STORE_JOBS_KEY, []);
    const filtered = adminList.filter(j => j.id !== numId);
    if (filtered.length !== adminList.length) {
      HSUtils.store.set(STORE_JOBS_KEY, filtered);
    } else {
      const deleted = HSUtils.store.get(STORE_DELETED, []);
      if (!deleted.includes(numId)) HSUtils.store.set(STORE_DELETED, [...deleted, numId]);
    }
  }

  // Applications
  function addApplication(app) {
    const apps = HSUtils.store.get(STORE_APPS, []);
    apps.unshift({ ...app, id: Date.now(), submittedAt: new Date().toISOString(), status: 'submitted' });
    HSUtils.store.set(STORE_APPS, apps);
  }
  function getApplications() { return HSUtils.store.get(STORE_APPS, []); }
  function hasApplied(jobId) { return getApplications().some(a => a.jobId === Number(jobId)); }

  // Saved jobs
  function getSavedIds() { return HSUtils.store.get(STORE_SAVED, []); }
  function toggleSaved(jobId) {
    const ids = getSavedIds();
    const num = Number(jobId);
    const idx = ids.indexOf(num);
    if (idx >= 0) { ids.splice(idx, 1); HSUtils.store.set(STORE_SAVED, ids); return false; }
    ids.push(num); HSUtils.store.set(STORE_SAVED, ids); return true;
  }
  function isSaved(id) { return getSavedIds().includes(Number(id)); }

  return { fetchSeed, getAllJobs, getJobById, addJob, updateJob, deleteJob, addApplication, getApplications, hasApplied, getSavedIds, toggleSaved, isSaved };
})();
