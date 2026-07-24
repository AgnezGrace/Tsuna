document.addEventListener('DOMContentLoaded', () => {
  const btnBrandMenu = document.getElementById('btnBrandMenu');
  const btnCloseSidebar = document.getElementById('btnCloseSidebar');
  const sidebarMenu = document.getElementById('sidebarMenu');
  const sidebarOverlay = document.getElementById('sidebarOverlay');

  const btnOpenCreateModal = document.getElementById('btnOpenCreateModal');
  const btnCloseCreateModal = document.getElementById('btnCloseCreateModal');
  const modalCreateOverlay = document.getElementById('modalCreateOverlay');
  const formCreateStory = document.getElementById('formCreateStory');

  const btnOpenDB = document.getElementById('btnOpenDB');
  const btnCloseDBModal = document.getElementById('btnCloseDBModal');
  const modalDBOverlay = document.getElementById('modalDBOverlay');
  const btnExportJSON = document.getElementById('btnExportJSON');
  const inputImportJSON = document.getElementById('inputImportJSON');

  const emptyState = document.getElementById('emptyState');
  const storyGrid = document.getElementById('storyGrid');

  const inputTitle = document.getElementById('storyTitleInput');
  const inputAuthor = document.getElementById('storyAuthorInput');
  const tabPresetMode = document.getElementById('tabPresetMode');
  const tabGalleryMode = document.getElementById('tabGalleryMode');
  const sectionPresetControls = document.getElementById('sectionPresetControls');
  const sectionGalleryControls = document.getElementById('sectionGalleryControls');
  const cardPreview = document.getElementById('cardPreview');
  const previewTitleText = document.getElementById('previewTitleText');
  const previewAuthorText = document.getElementById('previewAuthorText');
  const inputGalleryImage = document.getElementById('inputGalleryImage');
  const galleryFileName = document.getElementById('galleryFileName');

  let currentMode = 'preset';
  let currentLayout = 'layout-bottom';
  let currentPreset = 'preset-bg-1';
  let currentGalleryBg = '';

  function openSidebar() {
    sidebarMenu.classList.remove('hidden');
    sidebarOverlay.classList.remove('hidden');
  }

  function closeSidebar() {
    sidebarMenu.classList.add('hidden');
    sidebarOverlay.classList.add('hidden');
  }

  btnBrandMenu.addEventListener('click', openSidebar);
  btnCloseSidebar.addEventListener('click', closeSidebar);
  sidebarOverlay.addEventListener('click', closeSidebar);

  document.querySelectorAll('.theme-card').forEach((card) => {
    card.addEventListener('click', () => {
      const theme = card.getAttribute('data-theme');
      localStorage.setItem('tsuna_theme', theme);
      applySavedTheme();
      document.querySelectorAll('.theme-card').forEach((c) => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  function updatePreview() {
    previewTitleText.textContent = inputTitle.value.trim() || 'Judul Karya';
    previewAuthorText.textContent = inputAuthor.value.trim() || 'Nama Penulis';

    cardPreview.className = 'card-portrait';
    if (currentMode === 'preset') {
      cardPreview.classList.add(currentPreset, currentLayout);
      cardPreview.style.backgroundImage = '';
    } else {
      cardPreview.classList.add('mode-gallery');
      if (currentGalleryBg) {
        cardPreview.style.backgroundImage = `url(${currentGalleryBg})`;
      }
    }
  }

  inputTitle.addEventListener('input', updatePreview);
  inputAuthor.addEventListener('input', updatePreview);

  tabPresetMode.addEventListener('click', () => {
    currentMode = 'preset';
    tabPresetMode.classList.add('active');
    tabGalleryMode.classList.remove('active');
    sectionPresetControls.classList.remove('hidden');
    sectionGalleryControls.classList.add('hidden');
    updatePreview();
  });

  tabGalleryMode.addEventListener('click', () => {
    currentMode = 'gallery';
    tabGalleryMode.classList.add('active');
    tabPresetMode.classList.remove('active');
    sectionGalleryControls.classList.remove('hidden');
    sectionPresetControls.classList.add('hidden');
    updatePreview();
  });

  document.querySelectorAll('.layout-selector .btn-layout').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.layout-selector .btn-layout').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentLayout = btn.getAttribute('data-layout');
      updatePreview();
    });
  });

  document.querySelectorAll('.preset-grid .preset-option').forEach((opt) => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.preset-grid .preset-option').forEach((o) => o.classList.remove('active'));
      opt.classList.add('active');
      currentPreset = opt.getAttribute('data-preset');
      updatePreview();
    });
  });

  inputGalleryImage.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      galleryFileName.textContent = file.name;
      const reader = new FileReader();
      reader.onload = (evt) => {
        currentGalleryBg = evt.target.result;
        updatePreview();
      };
      reader.readAsDataURL(file);
    }
  });

  btnOpenCreateModal.addEventListener('click', () => {
    formCreateStory.reset();
    currentMode = 'preset';
    currentLayout = 'layout-bottom';
    currentPreset = 'preset-bg-1';
    currentGalleryBg = '';
    galleryFileName.textContent = 'Pilih foto dari HP / Perangkat';
    tabPresetMode.click();
    updatePreview();
    modalCreateOverlay.classList.remove('hidden');
  });

  btnCloseCreateModal.addEventListener('click', () => {
    modalCreateOverlay.classList.add('hidden');
  });

  formCreateStory.addEventListener('submit', async (e) => {
    e.preventDefault();
    const story = {
      id: Date.now().toString(),
      title: inputTitle.value.trim(),
      author: inputAuthor.value.trim() || 'Anonim',
      mode: currentMode,
      layout: currentLayout,
      preset: currentPreset,
      bgImage: currentGalleryBg,
      createdAt: Date.now()
    };
    await saveStory(story);
    modalCreateOverlay.classList.add('hidden');
    renderStories();
  });

  btnOpenDB.addEventListener('click', () => modalDBOverlay.classList.remove('hidden'));
  btnCloseDBModal.addEventListener('click', () => modalDBOverlay.classList.add('hidden'));

  btnExportJSON.addEventListener('click', async () => {
    const dataStr = await exportDB();
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tsuna-backup-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  inputImportJSON.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (evt) => {
        try {
          await importDB(evt.target.result);
          modalDBOverlay.classList.add('hidden');
          renderStories();
        } catch (err) {
          alert('Format JSON tidak valid');
        }
      };
      reader.readAsText(file);
    }
  });

  async function renderStories() {
    const stories = await getAllStories();
    if (!stories || stories.length === 0) {
      emptyState.classList.remove('hidden');
      storyGrid.classList.add('hidden');
      storyGrid.innerHTML = '';
      return;
    }

    emptyState.classList.add('hidden');
    storyGrid.classList.remove('hidden');
    storyGrid.innerHTML = '';

    stories.forEach((s) => {
      const card = document.createElement('a');
      card.href = `story-detail.html?id=${encodeURIComponent(s.id)}`;
      card.className = 'card-portrait';

      if (s.mode === 'gallery') {
        card.classList.add('mode-gallery');
        if (s.bgImage) card.style.backgroundImage = `url(${s.bgImage})`;
      } else {
        card.classList.add(s.preset || 'preset-bg-1', s.layout || 'layout-bottom');
      }

      card.innerHTML = `
        <div class="cover-overlay"></div>
        <div class="card-top">
          <span class="badge">Draft</span>
        </div>
        <div class="card-bottom">
          <h3>${s.title}</h3>
          <p>${s.author}</p>
        </div>
      `;

      storyGrid.appendChild(card);
    });
  }

  renderStories();
});
