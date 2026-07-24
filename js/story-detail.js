document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const storyId = urlParams.get('id');

  if (!storyId) {
    window.location.href = 'index.html';
    return;
  }

  const story = await getStory(storyId);
  if (!story) {
    window.location.href = 'index.html';
    return;
  }

  const btnEditCover = document.getElementById('btnEditCover');
  const btnDeleteStory = document.getElementById('btnDeleteStory');
  const detailCoverPreview = document.getElementById('detailCoverPreview');
  const detailTitle = document.getElementById('detailTitle');
  const detailAuthor = document.getElementById('detailAuthor');
  const detailInfoTitle = document.getElementById('detailInfoTitle');
  const detailInfoAuthor = document.getElementById('detailInfoAuthor');
  const totalChaptersBadge = document.getElementById('totalChaptersBadge');
  const totalWordsBadge = document.getElementById('totalWordsBadge');

  const btnOpenCreateChapter = document.getElementById('btnOpenCreateChapter');
  const btnCloseChapterModal = document.getElementById('btnCloseChapterModal');
  const modalChapterOverlay = document.getElementById('modalChapterOverlay');
  const formCreateChapter = document.getElementById('formCreateChapter');
  const chapterTitleInput = document.getElementById('chapterTitleInput');
  const chapterEmptyState = document.getElementById('chapterEmptyState');
  const chapterList = document.getElementById('chapterList');

  if (btnEditCover) btnEditCover.href = `cover-editor.html?id=${encodeURIComponent(storyId)}`;

  if (detailTitle) detailTitle.textContent = story.title;
  if (detailAuthor) detailAuthor.textContent = story.author;
  if (detailInfoTitle) detailInfoTitle.textContent = story.title;
  if (detailInfoAuthor) detailInfoAuthor.textContent = story.author;

  if (detailCoverPreview) {
    detailCoverPreview.className = 'card-portrait story-detail-cover';
    if (story.mode === 'gallery') {
      detailCoverPreview.classList.add('mode-gallery');
      if (story.bgImage) detailCoverPreview.style.backgroundImage = `url(${story.bgImage})`;
    } else {
      detailCoverPreview.classList.add(story.preset || 'preset-bg-1', story.layout || 'layout-bottom');
    }
  }

  const deleteI18n = {
  id: {
    title: 'Hapus Karya',
    message: 'Apakah Anda yakin ingin menghapus karya ini beserta seluruh bab di dalamnya?',
    confirm: 'Hapus',
    cancel: 'Batal'
  },
  en: {
    title: 'Delete Story',
    message: 'Are you sure you want to delete this story and all its chapters?',
    confirm: 'Delete',
    cancel: 'Cancel'
  },
  ja: {
    title: '作品を削除',
    message: 'この作品とそのすべての章を削除してもよろしいですか？',
    confirm: '削除',
    cancel: 'キャンセル'
  },
  ko: {
    title: '작품 삭제',
    message: '이 작품과 모든 챕터를 삭제하시겠습니까?',
    confirm: '삭제',
    cancel: '취소'
  },
  zh: {
    title: '删除作品',
    message: '您确定要删除这部作品及其所有章节吗？',
    confirm: '删除',
    cancel: '取消'
  },
  es: {
    title: 'Eliminar Obra',
    message: '¿Estás seguro de que deseas eliminar esta obra y todos sus capítulos?',
    confirm: 'Eliminar',
    cancel: 'Cancelar'
  }
};

function showDeleteConfirmationModal() {
  return new Promise((resolve) => {
    const currentLang = (typeof i18n !== 'undefined' && i18n.currentLang) 
      || localStorage.getItem('tsuna_lang') 
      || 'id';
      
    const t = deleteI18n[currentLang] || deleteI18n.id;

    const dangerSvg = `
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d32f2f" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
      </svg>
    `;

    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.style.zIndex = '9999';

    modalOverlay.innerHTML = `
      <div class="modal-box" style="text-align: center; max-width: 340px; padding: 1.5rem;">
        <div style="display: flex; justify-content: center; margin-bottom: 0.8rem;">
          ${dangerSvg}
        </div>
        <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--dark); margin-bottom: 0.5rem;">
          ${t.title}
        </h3>
        <p style="font-size: 0.88rem; color: var(--primary); margin-bottom: 1.2rem; line-height: 1.4;">
          ${t.message}
        </p>
        <div style="display: flex; gap: 0.6rem;">
          <button id="btnCancelDeleteModal" class="btn-secondary" style="flex: 1; padding: 0.6rem;">
            ${t.cancel}
          </button>
          <button id="btnConfirmDeleteModal" class="btn-primary" style="flex: 1; padding: 0.6rem; background-color: #d32f2f; color: #ffffff;">
            ${t.confirm}
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modalOverlay);

    const closeModal = (result) => {
      modalOverlay.remove();
      resolve(result);
    };

    modalOverlay.querySelector('#btnCancelDeleteModal').addEventListener('click', () => closeModal(false));
    modalOverlay.querySelector('#btnConfirmDeleteModal').addEventListener('click', () => closeModal(true));
  });
}

if (btnDeleteStory) {
  btnDeleteStory.addEventListener('click', async () => {
    const isConfirmed = await showDeleteConfirmationModal();
    if (isConfirmed) {
      await deleteStory(storyId);
      window.location.href = 'index.html';
    }
  });
}

  if (btnOpenCreateChapter) {
    btnOpenCreateChapter.addEventListener('click', () => {
      formCreateChapter.reset();
      modalChapterOverlay.classList.remove('hidden');
    });
  }

  if (btnCloseChapterModal) {
    btnCloseChapterModal.addEventListener('click', () => {
      modalChapterOverlay.classList.add('hidden');
    });
  }

  if (formCreateChapter) {
    formCreateChapter.addEventListener('submit', async (e) => {
      e.preventDefault();
      const chapterId = Date.now().toString();
      const newChapter = {
        id: chapterId,
        storyId: storyId,
        title: chapterTitleInput.value.trim(),
        content: '',
        updatedAt: Date.now()
      };
      await saveChapter(newChapter);
      window.location.href = `editor.html?storyId=${encodeURIComponent(storyId)}&chapterId=${encodeURIComponent(chapterId)}`;
    });
  }

  function countWords(text) {
    const div = document.createElement('div');
    div.innerHTML = text || '';
    const clean = div.textContent || div.innerText || '';
    const trimmed = clean.trim();
    return trimmed ? trimmed.split(/\s+/).length : 0;
  }

  async function renderChapters() {
    const chapters = await getChaptersByStory(storyId);
    let totalWords = 0;

    if (!chapters || chapters.length === 0) {
      if (chapterEmptyState) chapterEmptyState.classList.remove('hidden');
      if (chapterList) {
        chapterList.classList.add('hidden');
        chapterList.innerHTML = '';
      }
      if (totalChaptersBadge) totalChaptersBadge.textContent = '0 Bab';
      if (totalWordsBadge) totalWordsBadge.textContent = '0 Kata';
      return;
    }

    if (chapterEmptyState) chapterEmptyState.classList.add('hidden');
    if (chapterList) {
      chapterList.classList.remove('hidden');
      chapterList.innerHTML = '';

      chapters.forEach((ch) => {
        const words = countWords(ch.content);
        totalWords += words;

        const item = document.createElement('div');
        item.className = 'chapter-item';
        item.innerHTML = `
          <a href="editor.html?storyId=${encodeURIComponent(storyId)}&chapterId=${encodeURIComponent(ch.id)}" class="chapter-item-info">
            <h4>${ch.title}</h4>
            <span class="chapter-item-meta">${words} Kata</span>
          </a>
        `;
        chapterList.appendChild(item);
      });
    }

    if (totalChaptersBadge) totalChaptersBadge.textContent = `${chapters.length} Bab`;
    if (totalWordsBadge) totalWordsBadge.textContent = `${totalWords} Kata`;
  }

  renderChapters();
});