const DB_NAME = 'TsunaDB';
const DB_VERSION = 4;

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('stories')) {
        db.createObjectStore('stories', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('chapters')) {
        const store = db.createObjectStore('chapters', { keyPath: 'id' });
        store.createIndex('storyId', 'storyId', { unique: false });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function getSetting(key, defaultValue = null) {
  try {
    const val = localStorage.getItem('tsuna_setting_' + key);
    return val !== null ? JSON.parse(val) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
}

function saveSetting(key, value) {
  try {
    localStorage.setItem('tsuna_setting_' + key, JSON.stringify(value));
  } catch (e) {}
}

async function getAllStories() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('stories', 'readonly');
    const store = tx.objectStore('stories');
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function getStory(id) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('stories', 'readonly');
    const store = tx.objectStore('stories');
    const req = store.get(id);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveStory(story) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('stories', 'readwrite');
    const store = tx.objectStore('stories');
    const req = store.put(story);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function deleteStory(id) {
  const db = await openDB();
  const chapters = await getChaptersByStory(id);
  return new Promise((resolve, reject) => {
    const tx = db.transaction(['stories', 'chapters'], 'readwrite');
    tx.objectStore('stories').delete(id);
    const chapterStore = tx.objectStore('chapters');
    chapters.forEach((ch) => chapterStore.delete(ch.id));
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function getChaptersByStory(storyId) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('chapters', 'readonly');
    const store = tx.objectStore('chapters');
    const index = store.index('storyId');
    const req = index.getAll(storyId);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function getChapter(id) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('chapters', 'readonly');
    const store = tx.objectStore('chapters');
    const req = store.get(id);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveChapter(chapter) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('chapters', 'readwrite');
    const store = tx.objectStore('chapters');
    const req = store.put(chapter);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function deleteChapter(id) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('chapters', 'readwrite');
    const store = tx.objectStore('chapters');
    const req = store.delete(id);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

async function exportDB() {
  const stories = await getAllStories();
  const db = await openDB();
  const tx = db.transaction('chapters', 'readonly');
  const store = tx.objectStore('chapters');
  const chapters = await new Promise((resolve) => {
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result);
  });
  return JSON.stringify({ stories, chapters }, null, 2);
}

async function importDB(jsonData) {
  const data = JSON.parse(jsonData);
  const db = await openDB();
  const tx = db.transaction(['stories', 'chapters'], 'readwrite');
  const storyStore = tx.objectStore('stories');
  const chapterStore = tx.objectStore('chapters');
  
  storyStore.clear();
  chapterStore.clear();
  
  if (data.stories) data.stories.forEach((s) => storyStore.put(s));
  if (data.chapters) data.chapters.forEach((c) => chapterStore.put(c));
  
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

function applySavedTheme() {
  const theme = localStorage.getItem('tsuna_theme') || 'theme-sage';
  const el = document.getElementById('themeStylesheet');
  if (el) el.href = `css/themes/${theme}.css`;
}

document.addEventListener('DOMContentLoaded', applySavedTheme);