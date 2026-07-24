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

  const btnBackToEditor = document.getElementById('btnBackToEditor');
  const btnSaveCover = document.getElementById('btnSaveCover');
  const coverPreview = document.getElementById('coverPreview');
  const previewTitle = document.getElementById('previewTitle');
  const previewAuthor = document.getElementById('previewAuthor');

  const inputCoverTitle = document.getElementById('inputCoverTitle');
  const inputCoverAuthor = document.getElementById('inputCoverAuthor');
  const tabPreset = document.getElementById('tabPreset');
  const tabGallery = document.getElementById('tabGallery');
  const sectionPresets = document.getElementById('sectionPresets');
  const sectionGallery = document.getElementById('sectionGallery');
  const inputGalleryFile = document.getElementById('inputGalleryFile');
  const galleryText = document.getElementById('galleryText');

  let currentMode = story.mode || 'preset';
  let currentLayout = story.layout || 'layout-bottom';
  let currentPreset = story.preset || 'preset-bg-1';
  let currentBgImage = story.bgImage || '';

  btnBackToEditor.href = `story-detail.html?id=${encodeURIComponent(storyId)}`;
  inputCoverTitle.value = story.title || '';
  inputCoverAuthor.value = story.author || '';

  function updatePreview() {
    previewTitle.textContent = inputCoverTitle.value.trim() || 'Judul Karya';
    previewAuthor.textContent = inputCoverAuthor.value.trim() || 'Nama Penulis';

    coverPreview.className = 'cover-preview-card';
    if (currentMode === 'preset') {
      coverPreview.classList.add(currentPreset, currentLayout);
      coverPreview.style.backgroundImage = '';
    } else {
      coverPreview.classList.add('mode-gallery');
      if (currentBgImage) {
        coverPreview.style.backgroundImage = `url(${currentBgImage})`;
      }
    }
  }

  function applyActiveStates() {
    if (currentMode === 'preset') {
      tabPreset.classList.add('active');
      tabGallery.classList.remove('active');
      sectionPresets.classList.remove('hidden');
      sectionGallery.classList.add('hidden');
    } else {
      tabGallery.classList.add('active');
      tabPreset.classList.remove('active');
      sectionGallery.classList.remove('hidden');
      sectionPresets.classList.add('hidden');
    }

    document.querySelectorAll('.layout-selector .btn-layout').forEach((btn) => {
      if (btn.getAttribute('data-layout') === currentLayout) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    document.querySelectorAll('.preset-grid .preset-option').forEach((opt) => {
      if (opt.getAttribute('data-preset') === currentPreset) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });
  }

  inputCoverTitle.addEventListener('input', updatePreview);
  inputCoverAuthor.addEventListener('input', updatePreview);

  tabPreset.addEventListener('click', () => {
    currentMode = 'preset';
    applyActiveStates();
    updatePreview();
  });

  tabGallery.addEventListener('click', () => {
    currentMode = 'gallery';
    applyActiveStates();
    updatePreview();
  });

  document.querySelectorAll('.layout-selector .btn-layout').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentLayout = btn.getAttribute('data-layout');
      applyActiveStates();
      updatePreview();
    });
  });

  document.querySelectorAll('.preset-grid .preset-option').forEach((opt) => {
    opt.addEventListener('click', () => {
      currentPreset = opt.getAttribute('data-preset');
      applyActiveStates();
      updatePreview();
    });
  });

  inputGalleryFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      galleryText.textContent = file.name;
      const reader = new FileReader();
      reader.onload = (evt) => {
        currentBgImage = evt.target.result;
        updatePreview();
      };
      reader.readAsDataURL(file);
    }
  });

  btnSaveCover.addEventListener('click', async () => {
    story.title = inputCoverTitle.value.trim() || story.title;
    story.author = inputCoverAuthor.value.trim() || story.author;
    story.mode = currentMode;
    story.layout = currentLayout;
    story.preset = currentPreset;
    story.bgImage = currentBgImage;

    await saveStory(story);
    window.location.href = `story-detail.html?id=${encodeURIComponent(storyId)}`;
  });

  applyActiveStates();
  updatePreview();
});