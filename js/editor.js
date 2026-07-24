document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const storyId = urlParams.get('storyId');
  const chapterId = urlParams.get('chapterId');

  if (!storyId || !chapterId) {
    window.location.href = 'index.html';
    return;
  }

  const chapter = await getChapter(chapterId);
  if (!chapter) {
    window.location.href = `story-detail.html?id=${encodeURIComponent(storyId)}`;
    return;
  }

  const btnBackToDetail = document.getElementById('btnBackToDetail');
  const editorChapterTitle = document.getElementById('editorChapterTitle');
  const saveStatus = document.getElementById('saveStatus');
  const btnDeleteChapter = document.getElementById('btnDeleteChapter');
  const editorContent = document.getElementById('editorContent');
  const wordCountEl = document.getElementById('wordCount');
  const charCountEl = document.getElementById('charCount');
  const readTimeEl = document.getElementById('readTime');

  btnBackToDetail.href = `story-detail.html?id=${encodeURIComponent(storyId)}`;
  editorChapterTitle.textContent = chapter.title;
  editorContent.innerHTML = chapter.content || '';

  let saveTimeout = null;

  function updateStats() {
    const text = editorContent.textContent || editorContent.innerText || '';
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const chars = text.length;
    const readTime = Math.ceil(words / 200);

    wordCountEl.textContent = words;
    charCountEl.textContent = chars;
    readTimeEl.textContent = readTime;
  }

  async function performSave() {
    saveStatus.textContent = 'Menyimpan...';
    chapter.content = editorContent.innerHTML;
    chapter.updatedAt = Date.now();
    await saveChapter(chapter);
    saveStatus.textContent = 'Tersimpan';
  }

  function triggerAutoSave() {
    saveStatus.textContent = 'Belum disimpan';
    if (saveTimeout) clearTimeout(saveTimeout);
    saveTimeout = setTimeout(performSave, 1000);
  }

  editorContent.addEventListener('input', () => {
    updateStats();
    triggerAutoSave();
  });

  document.querySelectorAll('.tool-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const cmd = btn.getAttribute('data-cmd');
      const val = btn.getAttribute('data-val') || null;
      document.execCommand(cmd, false, val);
      editorContent.focus();
      updateStats();
      triggerAutoSave();
    });
  });

  btnDeleteChapter.addEventListener('click', async () => {
    if (confirm('Apakah Anda yakin ingin menghapus bab ini?')) {
      await deleteChapter(chapterId);
      window.location.href = `story-detail.html?id=${encodeURIComponent(storyId)}`;
    }
  });

  updateStats();
});