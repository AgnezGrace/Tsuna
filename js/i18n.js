(function () {
  'use strict';

  const translations = {
    id: {
      "Pengaturan": "Pengaturan",
      "Pilih Palet Tema": "Pilih Palet Tema",
      "Pilih Bahasa": "Pilih Bahasa",
      "Desain Sampul": "Desain Sampul",
      "Detail Karya": "Detail Karya",
      "Judul Bab": "Judul Bab",
      "Tersimpan": "Tersimpan",
      "Menyimpan...": "Menyimpan...",
      "Kelola Database": "Kelola Database",
      "Buat Karya Baru": "Buat Karya Baru",
      "Kembali": "Kembali",
      "Simpan": "Simpan",
      "Hapus Karya": "Hapus Karya",
      "Hapus Bab": "Hapus Bab",
      "Belum ada karya. Klik tombol + di atas untuk membuat karya pertama.": "Belum ada karya. Klik tombol + di atas untuk membuat karya pertama.",
      "Draft": "Draft",
      "Judul Karya": "Judul Karya",
      "Nama Penulis": "Nama Penulis",
      "Nama Penulis / Subjudul": "Nama Penulis / Subjudul",
      "Masukkan judul karya...": "Masukkan judul karya...",
      "Masukkan nama penulis...": "Masukkan nama penulis...",
      "Judul Karya...": "Judul Karya...",
      "Nama Penulis / Subjudul...": "Nama Penulis / Subjudul...",
      "Jenis Sampul": "Jenis Sampul",
      "Layout Preset": "Layout Preset",
      "Dari Galeri": "Dari Galeri",
      "Layout Sampul": "Layout Sampul",
      "Layout Teks": "Layout Teks",
      "Bawah": "Bawah",
      "Tengah": "Tengah",
      "Minimal": "Minimal",
      "Warna Background": "Warna Background",
      "Pilih Warna Preset": "Pilih Warna Preset",
      "Unggah Gambar dari Galeri": "Unggah Gambar dari Galeri",
      "Unggah Foto Perangkat": "Unggah Foto Perangkat",
      "Pilih foto dari HP / Perangkat": "Pilih foto dari HP / Perangkat",
      "Klik untuk memilih gambar dari Galeri": "Klik untuk memilih gambar dari Galeri",
      "Pratinjau Sampul": "Pratinjau Sampul",
      "Simpan Karya": "Simpan Karya",
      "Cadangkan (Export JSON)": "Cadangkan (Export JSON)",
      "Pulihkan (Import JSON)": "Pulihkan (Import JSON)",
      "Daftar Bab": "Daftar Bab",
      "+ Bab Baru": "+ Bab Baru",
      "Belum ada bab. Klik \"+ Bab Baru\" untuk mulai menulis.": "Belum ada bab. Klik \"+ Bab Baru\" untuk mulai menulis.",
      "Tambah Bab Baru": "Tambah Bab Baru",
      "Contoh: Bab 1 - Awal Mula": "Contoh: Bab 1 - Awal Mula",
      "Mulai Menulis": "Mulai Menulis",
      "Teks Sampul": "Teks Sampul",
      "Sumber Gambar": "Sumber Gambar",
      "Preset Bawaan": "Preset Bawaan",
      "Kata": "Kata",
      "Karakter": "Karakter",
      "Estimasi Baca:": "Estimasi Baca:",
      "mnt": "mnt",
      "Tulis isi bab ini...": "Tulis isi bab ini...",
      "Cetak Tebal": "Cetak Tebal",
      "Cetak Miring": "Cetak Miring",
      "Garis Bawah": "Garis Bawah",
      "Coret": "Coret",
      "Judul Besar": "Judul Besar",
      "Sub Judul": "Sub Judul",
      "Paragraf": "Paragraf",
      "Kutipan": "Kutipan",
      "Daftar Poin": "Daftar Poin",
      "Daftar Angka": "Daftar Angka",
      "Rata Kiri": "Rata Kiri",
      "Rata Tengah": "Rata Tengah",
      "Rata Kanan": "Rata Kanan",
      "Tutup Pengaturan": "Tutup Pengaturan",
      "Tutup Modal": "Tutup Modal",
      "Buka Menu Pengaturan": "Buka Menu Pengaturan",
      "Sage Forest": "Sage Forest",
      "Skijan Lavender": "Skijan Lavender",
      "Charcoal & Monochrome": "Charcoal & Monochrome",
      "Uxintace Earthy": "Uxintace Earthy",
      "Apakah Anda yakin ingin menghapus karya ini?": "Apakah Anda yakin ingin menghapus karya ini?",
      "Apakah Anda yakin ingin menghapus karya ini beserta seluruh bab di dalamnya?": "Apakah Anda yakin ingin menghapus karya ini beserta seluruh bab di dalamnya?",
      "Apakah Anda yakin ingin menghapus bab ini?": "Apakah Anda yakin ingin menghapus bab ini?",
      "Batal": "Batal",
      "Hapus": "Hapus",
      "Bab": "Bab"
    },
    en: {
      "Pengaturan": "Settings",
      "Pilih Palet Tema": "Select Theme Palette",
      "Pilih Bahasa": "Select Language",
      "Desain Sampul": "Cover Design",
      "Detail Karya": "Work Details",
      "Judul Bab": "Chapter Title",
      "Tersimpan": "Saved",
      "Menyimpan...": "Saving...",
      "Kelola Database": "Manage Database",
      "Buat Karya Baru": "Create New Work",
      "Kembali": "Back",
      "Simpan": "Save",
      "Hapus Karya": "Delete Story",
      "Hapus Bab": "Delete Chapter",
      "Belum ada karya. Klik tombol + di atas untuk membuat karya pertama.": "No works yet. Click the + button above to create your first work.",
      "Draft": "Draft",
      "Judul Karya": "Work Title",
      "Nama Penulis": "Author Name",
      "Nama Penulis / Subjudul": "Author Name / Subtitle",
      "Masukkan judul karya...": "Enter work title...",
      "Masukkan nama penulis...": "Enter author name...",
      "Judul Karya...": "Work Title...",
      "Nama Penulis / Subjudul...": "Author Name / Subtitle...",
      "Jenis Sampul": "Cover Type",
      "Layout Preset": "Preset Layout",
      "Dari Galeri": "From Gallery",
      "Layout Sampul": "Cover Layout",
      "Layout Teks": "Text Layout",
      "Bawah": "Bottom",
      "Tengah": "Center",
      "Minimal": "Minimal",
      "Warna Background": "Background Color",
      "Pilih Warna Preset": "Select Preset Color",
      "Unggah Gambar dari Galeri": "Upload Image from Gallery",
      "Unggah Foto Perangkat": "Upload Device Photo",
      "Pilih foto dari HP / Perangkat": "Choose photo from Device",
      "Klik untuk memilih gambar dari Galeri": "Click to select image from Gallery",
      "Pratinjau Sampul": "Cover Preview",
      "Simpan Karya": "Save Work",
      "Cadangkan (Export JSON)": "Backup (Export JSON)",
      "Pulihkan (Import JSON)": "Restore (Import JSON)",
      "Daftar Bab": "Chapter List",
      "+ Bab Baru": "+ New Chapter",
      "Belum ada bab. Klik \"+ Bab Baru\" untuk mulai menulis.": "No chapters yet. Click \"+ New Chapter\" to start writing.",
      "Tambah Bab Baru": "Add New Chapter",
      "Contoh: Bab 1 - Awal Mula": "Example: Chapter 1 - Beginning",
      "Mulai Menulis": "Start Writing",
      "Teks Sampul": "Cover Text",
      "Sumber Gambar": "Image Source",
      "Preset Bawaan": "Default Presets",
      "Kata": "Words",
      "Karakter": "Characters",
      "Estimasi Baca:": "Est. Read Time:",
      "mnt": "min",
      "Tulis isi bab ini...": "Write chapter content here...",
      "Cetak Tebal": "Bold",
      "Cetak Miring": "Italic",
      "Garis Bawah": "Underline",
      "Coret": "Strikethrough",
      "Judul Besar": "Heading 2",
      "Sub Judul": "Heading 3",
      "Paragraf": "Paragraph",
      "Kutipan": "Quote",
      "Daftar Poin": "Bullet List",
      "Daftar Angka": "Numbered List",
      "Rata Kiri": "Align Left",
      "Rata Tengah": "Align Center",
      "Rata Kanan": "Align Right",
      "Tutup Pengaturan": "Close Settings",
      "Tutup Modal": "Close Modal",
      "Buka Menu Pengaturan": "Open Settings Menu",
      "Sage Forest": "Sage Forest",
      "Skijan Lavender": "Skijan Lavender",
      "Charcoal & Monochrome": "Charcoal & Monochrome",
      "Uxintace Earthy": "Uxintace Earthy",
      "Apakah Anda yakin ingin menghapus karya ini?": "Are you sure you want to delete this work?",
      "Apakah Anda yakin ingin menghapus karya ini beserta seluruh bab di dalamnya?": "Are you sure you want to delete this story and all its chapters?",
      "Apakah Anda yakin ingin menghapus bab ini?": "Are you sure you want to delete this chapter?",
      "Batal": "Cancel",
      "Hapus": "Delete",
      "Bab": "Chapter"
    },
    ja: {
      "Pengaturan": "設定",
      "Pilih Palet Tema": "テーマパレットを選択",
      "Pilih Bahasa": "言語を選択",
      "Desain Sampul": "カバーデザイン",
      "Detail Karya": "作品の詳細",
      "Judul Bab": "章のタイトル",
      "Tersimpan": "保存済み",
      "Menyimpan...": "保存中...",
      "Kelola Database": "データベース管理",
      "Buat Karya Baru": "新規作品を作成",
      "Kembali": "戻る",
      "Simpan": "保存",
      "Hapus Karya": "作品を削除",
      "Hapus Bab": "章を削除",
      "Belum ada karya. Klik tombol + di atas untuk membuat karya pertama.": "作品がまだありません。上の + ボタンをクリックして最初の作品を作成してください。",
      "Draft": "下書き",
      "Judul Karya": "作品タイトル",
      "Nama Penulis": "著者名",
      "Nama Penulis / Subjudul": "著者名 / サブタイトル",
      "Masukkan judul karya...": "作品タイトルを入力...",
      "Masukkan nama penulis...": "著者名を入力...",
      "Judul Karya...": "作品タイトル...",
      "Nama Penulis / Subjudul...": "著者名 / サブタイトル...",
      "Jenis Sampul": "カバーの種類",
      "Layout Preset": "プリセット",
      "Dari Galeri": "ギャラリーから",
      "Layout Sampul": "カバーレイアウト",
      "Layout Teks": "テキストレイアウト",
      "Bawah": "下部",
      "Tengah": "中央",
      "Minimal": "ミニマル",
      "Warna Background": "背景色",
      "Pilih Warna Preset": "プリセットカラーを選択",
      "Unggah Gambar dari Galeri": "ギャラリーから画像をアップロード",
      "Unggah Foto Perangkat": "端末の写真をアップロード",
      "Pilih foto dari HP / Perangkat": "端末から写真を選択",
      "Klik untuk memilih gambar dari Galeri": "クリックしてギャラリーから画像を選択",
      "Pratinjau Sampul": "カバープレビュー",
      "Simpan Karya": "作品を保存",
      "Cadangkan (Export JSON)": "バックアップ (JSON出力)",
      "Pulihkan (Import JSON)": "復元 (JSON入力)",
      "Daftar Bab": "章リスト",
      "+ Bab Baru": "+ 新規章",
      "Belum ada bab. Klik \"+ Bab Baru\" untuk mulai menulis.": "章がまだありません。「+ 新規章」をクリックして執筆を開始してください。",
      "Tambah Bab Baru": "新しい章を追加",
      "Contoh: Bab 1 - Awal Mula": "例：第1章 - 始まり",
      "Mulai Menulis": "執筆を開始",
      "Teks Sampul": "カバーテキスト",
      "Sumber Gambar": "画像ソース",
      "Preset Bawaan": "デフォルト",
      "Kata": "単語",
      "Karakter": "文字",
      "Estimasi Baca:": "読了予想時間:",
      "mnt": "分",
      "Tulis isi bab ini...": "ここから章の内容を執筆...",
      "Cetak Tebal": "太字",
      "Cetak Miring": "斜体",
      "Garis Bawah": "下線",
      "Coret": "取り消し線",
      "Judul Besar": "大見出し",
      "Sub Judul": "小見出し",
      "Paragraf": "段落",
      "Kutipan": "引用",
      "Daftar Poin": "箇条書き",
      "Daftar Angka": "番号付きリスト",
      "Rata Kiri": "左揃え",
      "Rata Tengah": "中央揃え",
      "Rata Kanan": "右揃え",
      "Tutup Pengaturan": "設定を閉じる",
      "Tutup Modal": "モーダルを閉じる",
      "Buka Menu Pengaturan": "設定メニューを開く",
      "Sage Forest": "セージフォレスト",
      "Skijan Lavender": "ラベンダー",
      "Charcoal & Monochrome": "モノクロ",
      "Uxintace Earthy": "アースカラー",
      "Apakah Anda yakin ingin menghapus karya ini?": "この作品を削除してもよろしいですか？",
      "Apakah Anda yakin ingin menghapus karya ini beserta seluruh bab di dalamnya?": "この作品とそのすべての章を削除してもよろしいですか？",
      "Apakah Anda yakin ingin menghapus bab ini?": "この章を削除してもよろしいですか？",
      "Batal": "キャンセル",
      "Hapus": "削除",
      "Bab": "章"
    },
    es: {
      "Pengaturan": "Configuración",
      "Pilih Palet Tema": "Seleccionar Paleta",
      "Pilih Bahasa": "Seleccionar Idioma",
      "Desain Sampul": "Diseño de Portada",
      "Detail Karya": "Detalles de la Obra",
      "Judul Bab": "Título del Capítulo",
      "Tersimpan": "Guardado",
      "Menyimpan...": "Guardando...",
      "Kelola Database": "Gestionar Base de Datos",
      "Buat Karya Baru": "Crear Nueva Obra",
      "Kembali": "Volver",
      "Simpan": "Guardar",
      "Hapus Karya": "Eliminar Obra",
      "Hapus Bab": "Eliminar Capítulo",
      "Belum ada karya. Klik tombol + di atas untuk membuat karya pertama.": "Aún no hay obras. Haz clic en el botón + de arriba para crear tu primera obra.",
      "Draft": "Borrador",
      "Judul Karya": "Título de la Obra",
      "Nama Penulis": "Nombre del Autor",
      "Nama Penulis / Subjudul": "Autor / Subtítulo",
      "Masukkan judul karya...": "Introduce el título de la obra...",
      "Masukkan nama penulis...": "Introduce el nombre del autor...",
      "Judul Karya...": "Título de la Obra...",
      "Nama Penulis / Subjudul...": "Autor / Subtítulo...",
      "Jenis Sampul": "Tipo de Portada",
      "Layout Preset": "Diseño Predeterminado",
      "Dari Galeri": "Desde la Galería",
      "Layout Sampul": "Diseño de Portada",
      "Layout Teks": "Diseño de Texto",
      "Bawah": "Inferior",
      "Tengah": "Centro",
      "Minimal": "Mínimo",
      "Warna Background": "Color de Fondo",
      "Pilih Warna Preset": "Color Predeterminado",
      "Unggah Gambar dari Galeri": "Subir Imagen de la Galería",
      "Unggah Foto Perangkat": "Subir Foto del Dispositivo",
      "Pilih foto dari HP / Perangkat": "Seleccionar foto del dispositivo",
      "Klik untuk memilih gambar dari Galeri": "Haz clic para seleccionar imagen",
      "Pratinjau Sampul": "Vista Previa de Portada",
      "Simpan Karya": "Guardar Obra",
      "Cadangkan (Export JSON)": "Copia de Seguridad (Exportar JSON)",
      "Pulihkan (Import JSON)": "Restaurar (Importar JSON)",
      "Daftar Bab": "Lista de Capítulos",
      "+ Bab Baru": "+ Nuevo Capítulo",
      "Belum ada bab. Klik \"+ Bab Baru\" untuk mulai menulis.": "Aún no hay capítulos. Haz clic en \"+ Nuevo Capítulo\" para comenzar.",
      "Tambah Bab Baru": "Añadir Nuevo Capítulo",
      "Contoh: Bab 1 - Awal Mula": "Ejemplo: Capítulo 1 - El Inicio",
      "Mulai Menulis": "Comenzar a Escribir",
      "Teks Sampul": "Texto de la Portada",
      "Sumber Gambar": "Fuente de Imagen",
      "Preset Bawaan": "Predeterminado",
      "Kata": "Palabras",
      "Karakter": "Caracteres",
      "Estimasi Baca:": "Tiempo de lectura:",
      "mnt": "min",
      "Tulis isi bab ini...": "Escribe el contenido del capítulo aquí...",
      "Cetak Tebal": "Negrita",
      "Cetak Miring": "Cursiva",
      "Garis Bawah": "Subrayado",
      "Coret": "Tachado",
      "Judul Besar": "Encabezado 2",
      "Sub Judul": "Encabezado 3",
      "Paragraf": "Párrafo",
      "Kutipan": "Cita",
      "Daftar Poin": "Lista de viñetas",
      "Daftar Angka": "Lista numerada",
      "Rata Kiri": "Alinear a la izquierda",
      "Rata Tengah": "Centrar",
      "Rata Kanan": "Alinear a la derecha",
      "Tutup Pengaturan": "Cerrar Configuración",
      "Tutup Modal": "Cerrar Ventana",
      "Buka Menu Pengaturan": "Abrir Menú de Configuración",
      "Sage Forest": "Bosque de Salvia",
      "Skijan Lavender": "Lavanda",
      "Charcoal & Monochrome": "Monocromo",
      "Uxintace Earthy": "Tono Tierra",
      "Apakah Anda yakin ingin menghapus karya ini?": "¿Estás seguro de que quieres eliminar esta obra?",
      "Apakah Anda yakin ingin menghapus karya ini beserta seluruh bab di dalamnya?": "¿Estás seguro de que deseas eliminar esta obra y todos sus capítulos?",
      "Apakah Anda yakin ingin menghapus bab ini?": "¿Estás seguro de que quieres eliminar este capítulo?",
      "Batal": "Cancelar",
      "Hapus": "Eliminar",
      "Bab": "Capítulo"
    },
    fr: {
      "Pengaturan": "Paramètres",
      "Pilih Palet Tema": "Palette de Thèmes",
      "Pilih Bahasa": "Choisir la Langue",
      "Desain Sampul": "Design de Couverture",
      "Detail Karya": "Détails de l'Œuvre",
      "Judul Bab": "Titre du Chapitre",
      "Tersimpan": "Enregistré",
      "Menyimpan...": "Enregistrement...",
      "Kelola Database": "Gérer la Base de Données",
      "Buat Karya Baru": "Créer une Nouvelle Œuvre",
      "Kembali": "Retour",
      "Simpan": "Enregistrer",
      "Hapus Karya": "Supprimer l'Œuvre",
      "Hapus Bab": "Supprimer le Chapitre",
      "Belum ada karya. Klik tombol + di atas untuk membuat karya pertama.": "Aucune œuvre pour le moment. Cliquez sur le bouton + ci-dessus pour créer votre première œuvre.",
      "Draft": "Brouillon",
      "Judul Karya": "Titre de l'Œuvre",
      "Nama Penulis": "Nom de l'Auteur",
      "Nama Penulis / Subjudul": "Auteur / Sous-titre",
      "Masukkan judul karya...": "Entrez le titre...",
      "Masukkan nama penulis...": "Entrez le nom de l'auteur...",
      "Judul Karya...": "Titre de l'œuvre...",
      "Nama Penulis / Subjudul...": "Auteur / Sous-titre...",
      "Jenis Sampul": "Type de Couverture",
      "Layout Preset": "Disposition Prédéfinie",
      "Dari Galeri": "Depuis la Galerie",
      "Layout Sampul": "Disposition de Couverture",
      "Layout Teks": "Disposition du Texte",
      "Bawah": "Bas",
      "Tengah": "Centre",
      "Minimal": "Minimaliste",
      "Warna Background": "Couleur de Fond",
      "Pilih Warna Preset": "Couleur Prédéfinie",
      "Unggah Gambar dari Galeri": "Télécharger depuis la Galerie",
      "Unggah Foto Perangkat": "Télécharger une Photo",
      "Pilih foto dari HP / Perangkat": "Choisir une photo de l'appareil",
      "Klik untuk memilih gambar dari Galeri": "Cliquez pour choisir une image",
      "Pratinjau Sampul": "Aperçu de la Couverture",
      "Simpan Karya": "Enregistrer l'Œuvre",
      "Cadangkan (Export JSON)": "Sauvegarder (Exporter JSON)",
      "Pulihkan (Import JSON)": "Restaurar (Importer JSON)",
      "Daftar Bab": "Liste des Chapitres",
      "+ Bab Baru": "+ Nouveau Chapitre",
      "Belum ada bab. Klik \"+ Bab Baru\" untuk mulai menulis.": "Aucun chapitre. Cliquez sur \"+ Nouveau Chapitre\" pour commencer.",
      "Tambah Bab Baru": "Ajouter un Nouveau Chapitre",
      "Contoh: Bab 1 - Awal Mula": "Exemple: Chapitre 1 - Le Début",
      "Mulai Menulis": "Commencer à Écrire",
      "Teks Sampul": "Texte de la Couverture",
      "Sumber Gambar": "Source de l'Image",
      "Preset Bawaan": "Préréglages",
      "Kata": "Mots",
      "Karakter": "Caractères",
      "Estimasi Baca:": "Temps de lecture:",
      "mnt": "min",
      "Tulis isi bab ini...": "Écrivez le contenu du chapitre ici...",
      "Cetak Tebal": "Gras",
      "Cetak Miring": "Italique",
      "Garis Bawah": "Souligné",
      "Coret": "Barré",
      "Judul Besar": "Titre 2",
      "Sub Judul": "Titre 3",
      "Paragraf": "Paragraphe",
      "Kutipan": "Citation",
      "Daftar Poin": "Liste à puces",
      "Daftar Angka": "Liste numérotée",
      "Rata Kiri": "Aligner à gauche",
      "Rata Tengah": "Centrer",
      "Rata Kanan": "Aligner à droite",
      "Tutup Pengaturan": "Fermer les Paramètres",
      "Tutup Modal": "Fermer la Fenêtre",
      "Buka Menu Pengaturan": "Ouvrir le Menu des Paramètres",
      "Sage Forest": "Forêt de Sauge",
      "Skijan Lavender": "Lavande",
      "Charcoal & Monochrome": "Monochrome",
      "Uxintace Earthy": "Tons Terrestres",
      "Apakah Anda yakin ingin menghapus karya ini?": "Voulez-vous vraiment supprimer cette œuvre ?",
      "Apakah Anda yakin ingin menghapus karya ini beserta seluruh bab di dalamnya?": "Êtes-vous sûr de vouloir supprimer cette œuvre et tous ses chapitres ?",
      "Apakah Anda yakin ingin menghapus bab ini?": "Voulez-vous vraiment supprimer ce chapitre ?",
      "Batal": "Annuler",
      "Hapus": "Supprimer",
      "Bab": "Chapitre"
    },
    de: {
      "Pengaturan": "Einstellungen",
      "Pilih Palet Tema": "Themenpalette Wählen",
      "Pilih Bahasa": "Sprache Auswählen",
      "Desain Sampul": "Cover-Design",
      "Detail Karya": "Werkdetails",
      "Judul Bab": "Kapiteltitel",
      "Tersimpan": "Gespeichert",
      "Menyimpan...": "Speichern...",
      "Kelola Database": "Datenbank Verwalten",
      "Buat Karya Baru": "Neues Werk Erstellen",
      "Kembali": "Zurück",
      "Simpan": "Speichern",
      "Hapus Karya": "Werk Löschen",
      "Hapus Bab": "Kapitel Löschen",
      "Belum ada karya. Klik tombol + di atas untuk membuat karya pertama.": "Noch keine Werke vorhanden. Klicken Sie oben auf +, um Ihr erstes Werk zu erstellen.",
      "Draft": "Entwurf",
      "Judul Karya": "Werktitel",
      "Nama Penulis": "Autorenname",
      "Nama Penulis / Subjudul": "Autor / Untertitel",
      "Masukkan judul karya...": "Werktitel eingeben...",
      "Masukkan nama penulis...": "Autorenname eingeben...",
      "Judul Karya...": "Werktitel...",
      "Nama Penulis / Subjudul...": "Autor / Untertitel...",
      "Jenis Sampul": "Cover-Typ",
      "Layout Preset": "Standard-Layout",
      "Dari Galeri": "Aus der Galerie",
      "Layout Sampul": "Cover-Layout",
      "Layout Teks": "Text-Layout",
      "Bawah": "Unten",
      "Tengah": "Mitte",
      "Minimal": "Minimal",
      "Warna Background": "Hintergrundfarbe",
      "Pilih Warna Preset": "Farbe Wählen",
      "Unggah Gambar dari Galeri": "Bild aus Galerie Hochladen",
      "Unggah Foto Perangkat": "Gerätefoto Hochladen",
      "Pilih foto dari HP / Perangkat": "Foto vom Gerät auswählen",
      "Klik untuk memilih gambar dari Galeri": "Klicken, um Bild aus der Galerie auszuwählen",
      "Pratinjau Sampul": "Cover-Vorschau",
      "Simpan Karya": "Werk Speichern",
      "Cadangkan (Export JSON)": "Sichern (JSON Exportieren)",
      "Pulihkan (Import JSON)": "Wiederherstellen (JSON Importieren)",
      "Daftar Bab": "Kapitelliste",
      "+ Bab Baru": "+ Neues Kapitel",
      "Belum ada bab. Klik \"+ Bab Baru\" untuk mulai menulis.": "Noch keine Kapitel. Klicken Sie auf \"+ Neues Kapitel\", um zu schreiben.",
      "Tambah Bab Baru": "Neues Kapitel Hinzufügen",
      "Contoh: Bab 1 - Awal Mula": "Beispiel: Kapitel 1 - Der Anfang",
      "Mulai Menulis": "Schreiben Beginnen",
      "Teks Sampul": "Cover-Text",
      "Sumber Gambar": "Bildquelle",
      "Preset Bawaan": "Voreinstellungen",
      "Kata": "Wörter",
      "Karakter": "Zeichen",
      "Estimasi Baca:": "Lesezeit:",
      "mnt": "Min.",
      "Tulis isi bab ini...": "Schreiben Sie hier den Kapitelinhalt...",
      "Cetak Tebal": "Fett",
      "Cetak Miring": "Kursiv",
      "Garis Bawah": "Unterstrichen",
      "Coret": "Durchgestrichen",
      "Judul Besar": "Überschrift 2",
      "Sub Judul": "Überschrift 3",
      "Paragraf": "Absatz",
      "Kutipan": "Zitat",
      "Daftar Poin": "Aufzählung",
      "Daftar Angka": "Nummerierte Liste",
      "Rata Kiri": "Linksbündig",
      "Rata Tengah": "Zentriert",
      "Rata Kanan": "Rechtsbündig",
      "Tutup Pengaturan": "Einstellungen Schließen",
      "Tutup Modal": "Fenster Schließen",
      "Buka Menu Pengaturan": "Einstellungsmenü Öffnen",
      "Sage Forest": "Salbeiwald",
      "Skijan Lavender": "Lavendel",
      "Charcoal & Monochrome": "Monochrom",
      "Uxintace Earthy": "Erdtöne",
      "Apakah Anda yakin ingin menghapus karya ini?": "Möchten Sie dieses Werk wirklich löschen?",
      "Apakah Anda yakin ingin menghapus karya ini beserta seluruh bab di dalamnya?": "Möchten Sie dieses Werk und alle enthaltenen Kapitel wirklich löschen?",
      "Apakah Anda yakin ingin menghapus bab ini?": "Möchten Sie dieses Kapitel wirklich löschen?",
      "Batal": "Abbrechen",
      "Hapus": "Löschen",
      "Bab": "Kapitel"
    },
    tl: {
      "Pengaturan": "Mga Setting",
      "Pilih Palet Tema": "Pumili ng Tema",
      "Pilih Bahasa": "Pumili ng Wika",
      "Desain Sampul": "Disenyo ng Takip",
      "Detail Karya": "Mga Detalye ng Akda",
      "Judul Bab": "Pamagat ng Kabanata",
      "Tersimpan": "Nai-save",
      "Menyimpan...": "Nagse-save...",
      "Kelola Database": "Pamahalaan ang Database",
      "Buat Karya Baru": "Gumawa ng Bagong Akda",
      "Kembali": "Bumalik",
      "Simpan": "I-save",
      "Hapus Karya": "Burahin ang Akda",
      "Hapus Bab": "Burahin ang Kabanata",
      "Belum ada karya. Klik tombol + di atas untuk membuat karya pertama.": "Wala pang akda. I-click ang + na pindutan sa itaas upang gumawa ng una.",
      "Draft": "Draft",
      "Judul Karya": "Pamagat ng Akda",
      "Nama Penulis": "Pangalan ng Manunulat",
      "Nama Penulis / Subjudul": "Manunulat / Subpamagat",
      "Masukkan judul karya...": "Ilagay ang pamagat ng akda...",
      "Masukkan nama penulis...": "Ilagay ang pangalan ng manunulat...",
      "Judul Karya...": "Pamagat ng Akda...",
      "Nama Penulis / Subjudul...": "Manunulat / Subpamagat...",
      "Jenis Sampul": "Uri ng Takip",
      "Layout Preset": "Preset na Layout",
      "Dari Galeri": "Mula sa Galerya",
      "Layout Sampul": "Layout ng Takip",
      "Layout Teks": "Layout ng Teksto",
      "Bawah": "Ibaba",
      "Tengah": "Gitna",
      "Minimal": "Minimal",
      "Warna Background": "Kulay ng Background",
      "Pilih Warna Preset": "Pumili ng Kulay",
      "Unggah Gambar dari Galeri": "I-upload mula sa Galerya",
      "Unggah Foto Perangkat": "I-upload ang Larawan ng Device",
      "Pilih foto dari HP / Perangkat": "Pumili ng larawan mula sa Device",
      "Klik untuk memilih gambar dari Galeri": "I-click para pumili ng larawan",
      "Pratinjau Sampul": "Silip sa Takip",
      "Simpan Karya": "I-save ang Akda",
      "Cadangkan (Export JSON)": "I-backup (Export JSON)",
      "Pulihkan (Import JSON)": "Ibalik (Import JSON)",
      "Daftar Bab": "Talaan ng Kabanata",
      "+ Bab Baru": "+ Bagong Kabanata",
      "Belum ada bab. Klik \"+ Bab Baru\" untuk mulai menulis.": "Wala pang kabanata. I-click ang \"+ Bagong Kabanata\" upang magsimula.",
      "Tambah Bab Baru": "Magdagdag ng Kabanata",
      "Contoh: Bab 1 - Awal Mula": "Halimbawa: Kabanata 1 - Simula",
      "Mulai Menulis": "Magsimulang Sumulat",
      "Teks Sampul": "Teksto ng Takip",
      "Sumber Gambar": "Pinagmulan ng Larawan",
      "Preset Bawaan": "Default Presets",
      "Kata": "Mga Salita",
      "Karakter": "Mga Karakter",
      "Estimasi Baca:": "Tantiya sa Pagbasa:",
      "mnt": "min",
      "Tulis isi bab ini...": "Isulat ang nilalaman ng kabanata dito...",
      "Cetak Tebal": "Makapal",
      "Cetak Miring": "Mahiwa",
      "Garis Bawah": "Guhit sa Ibaba",
      "Coret": "Guhit sa Gitna",
      "Judul Besar": "Malaking Pamagat",
      "Sub Judul": "Subpamagat",
      "Paragraf": "Talata",
      "Kutipan": "Sipi",
      "Daftar Poin": "Listahan ng Puntos",
      "Daftar Angka": "Listahan ng Numero",
      "Rata Kiri": "I-pantay sa Kaliwa",
      "Rata Tengah": "I-gitna",
      "Rata Kanan": "I-pantay sa Kanan",
      "Tutup Pengaturan": "Isara ang Settings",
      "Tutup Modal": "Isara ang Window",
      "Buka Menu Pengaturan": "Buksan ang Menu ng Settings",
      "Sage Forest": "Sage Forest",
      "Skijan Lavender": "Skijan Lavender",
      "Charcoal & Monochrome": "Charcoal & Monochrome",
      "Uxintace Earthy": "Uxintace Earthy",
      "Apakah Anda yakin ingin menghapus karya ini?": "Sigurado ka bang gusto mong burahin ang akdang ito?",
      "Apakah Anda yakin ingin menghapus karya ini beserta seluruh bab di dalamnya?": "Sigurado ka bang gusto mong burahin ang akdang ito pati ang lahat ng kabanata nito?",
      "Apakah Anda yakin ingin menghapus bab ini?": "Sigurado ka bang gusto mong burahin ang kabanatang ito?",
      "Batal": "Kanselahin",
      "Hapus": "Burahin",
      "Bab": "Kabanata"
    },
    zh: {
      "Pengaturan": "设置",
      "Pilih Palet Tema": "选择主题配色",
      "Pilih Bahasa": "选择语言",
      "Desain Sampul": "封面设计",
      "Detail Karya": "作品详情",
      "Judul Bab": "章节标题",
      "Tersimpan": "已保存",
      "Menyimpan...": "保存中...",
      "Kelola Database": "管理数据库",
      "Buat Karya Baru": "创建新作品",
      "Kembali": "返回",
      "Simpan": "保存",
      "Hapus Karya": "删除作品",
      "Hapus Bab": "删除章节",
      "Belum ada karya. Klik tombol + di atas untuk membuat karya pertama.": "暂无作品。点击上方的 + 按钮创建您的第一部作品。",
      "Draft": "草稿",
      "Judul Karya": "作品名称",
      "Nama Penulis": "作者姓名",
      "Nama Penulis / Subjudul": "作者 / 副标题",
      "Masukkan judul karya...": "请输入作品名称...",
      "Masukkan nama penulis...": "请输入作者姓名...",
      "Judul Karya...": "作品名称...",
      "Nama Penulis / Subjudul...": "作者 / 副标题...",
      "Jenis Sampul": "封面类型",
      "Layout Preset": "预设布局",
      "Dari Galeri": "来自相册",
      "Layout Sampul": "封面布局",
      "Layout Teks": "文本布局",
      "Bawah": "底部",
      "Tengah": "居中",
      "Minimal": "极简",
      "Warna Background": "背景颜色",
      "Pilih Warna Preset": "选择预设颜色",
      "Unggah Gambar dari Galeri": "从相册上传图片",
      "Unggah Foto Perangkat": "上传设备照片",
      "Pilih foto dari HP / Perangkat": "从设备选择照片",
      "Klik untuk memilih gambar dari Galeri": "点击从相册选择图片",
      "Pratinjau Sampul": "封面预览",
      "Simpan Karya": "保存作品",
      "Cadangkan (Export JSON)": "备份 (导出 JSON)",
      "Pulihkan (Import JSON)": "恢复 (导入 JSON)",
      "Daftar Bab": "章节列表",
      "+ Bab Baru": "+ 新建章节",
      "Belum ada bab. Klik \"+ Bab Baru\" untuk mulai menulis.": "暂无章节。点击“+ 新建章节”开始写作。",
      "Tambah Bab Baru": "添加新章节",
      "Contoh: Bab 1 - Awal Mula": "示例：第1章 - 序幕",
      "Mulai Menulis": "开始写作",
      "Teks Sampul": "封面文字",
      "Sumber Gambar": "图片来源",
      "Preset Bawaan": "默认预设",
      "Kata": "字",
      "Karakter": "字符",
      "Estimasi Baca:": "预计阅读时间：",
      "mnt": "分钟",
      "Tulis isi bab ini...": "在此编写章节内容...",
      "Cetak Tebal": "加粗",
      "Cetak Miring": "斜体",
      "Garis Bawah": "下划线",
      "Coret": "删除线",
      "Judul Besar": "大标题",
      "Sub Judul": "副标题",
      "Paragraf": "正文",
      "Kutipan": "引用",
      "Daftar Poin": "无序列表",
      "Daftar Angka": "有序列表",
      "Rata Kiri": "左对齐",
      "Rata Tengah": "居中对齐",
      "Rata Kanan": "右对齐",
      "Tutup Pengaturan": "关闭设置",
      "Tutup Modal": "关闭弹窗",
      "Buka Menu Pengaturan": "打开设置菜单",
      "Sage Forest": "鼠尾草森林",
      "Skijan Lavender": "薰衣草",
      "Charcoal & Monochrome": "黑白单色",
      "Uxintace Earthy": "大地色调",
      "Apakah Anda yakin ingin menghapus karya ini?": "确定要删除此作品吗？",
      "Apakah Anda yakin ingin menghapus karya ini beserta seluruh bab di dalamnya?": "确定要删除此作品及其所有章节吗？",
      "Apakah Anda yakin ingin menghapus bab ini?": "确定要删除此章节吗？",
      "Batal": "取消",
      "Hapus": "删除",
      "Bab": "章"
    },
    ko: {
      "Pengaturan": "설정",
      "Pilih Palet Tema": "테마 팔레트 선택",
      "Pilih Bahasa": "언어 선택",
      "Desain Sampul": "커버 디자인",
      "Detail Karya": "작품 상세",
      "Judul Bab": "챕터 제목",
      "Tersimpan": "저장됨",
      "Menyimpan...": "저장 중...",
      "Kelola Database": "데이터베이스 관리",
      "Buat Karya Baru": "새 작품 만들기",
      "Kembali": "돌아가기",
      "Simpan": "저장",
      "Hapus Karya": "작품 삭제",
      "Hapus Bab": "챕터 삭제",
      "Belum ada karya. Klik tombol + di atas untuk membuat karya pertama.": "아직 작품이 없습니다. 위 + 버튼을 눌러 첫 작품을 만들어 보세요.",
      "Draft": "초안",
      "Judul Karya": "작품 제목",
      "Nama Penulis": "작가 이름",
      "Nama Penulis / Subjudul": "작가 / 부제목",
      "Masukkan judul karya...": "작품 제목을 입력하세요...",
      "Masukkan nama penulis...": "작가 이름을 입력하세요...",
      "Judul Karya...": "작품 제목...",
      "Nama Penulis / Subjudul...": "작가 / 부제목...",
      "Jenis Sampul": "커버 유형",
      "Layout Preset": "프리셋 레이아웃",
      "Dari Galeri": "갤러리에서 선택",
      "Layout Sampul": "커버 레이아웃",
      "Layout Teks": "텍스트 레이아웃",
      "Bawah": "하단",
      "Tengah": "중앙",
      "Minimal": "미니멀",
      "Warna Background": "배경색",
      "Pilih Warna Preset": "프리셋 색상 선택",
      "Unggah Gambar dari Galeri": "갤러리에서 이미지 업로드",
      "Unggah Foto Perangkat": "기기 사진 업로드",
      "Pilih foto dari HP / Perangkat": "기기에서 사진 선택",
      "Klik untuk memilih gambar dari Galeri": "갤러리에서 이미지를 선택하려면 클릭",
      "Pratinjau Sampul": "커버 미리보기",
      "Simpan Karya": "작품 저장",
      "Cadangkan (Export JSON)": "백업 (JSON 내보내기)",
      "Pulihkan (Import JSON)": "복원 (JSON 가져오기)",
      "Daftar Bab": "챕터 목록",
      "+ Bab Baru": "+ 새 챕터",
      "Belum ada bab. Klik \"+ Bab Baru\" untuk mulai menulis.": "아직 챕터가 없습니다. \"+ 새 챕터\"를 눌러 집필을 시작하세요.",
      "Tambah Bab Baru": "새 챕터 추가",
      "Contoh: Bab 1 - Awal Mula": "예: 제1장 - 시작",
      "Mulai Menulis": "집필 시작",
      "Teks Sampul": "커버 텍스트",
      "Sumber Gambar": "이미지 출처",
      "Preset Bawaan": "기본 프리셋",
      "Kata": "단어",
      "Karakter": "자",
      "Estimasi Baca:": "예상 읽기 시간:",
      "mnt": "분",
      "Tulis isi bab ini...": "여기에 챕터 내용을 작성하세요...",
      "Cetak Tebal": "굵게",
      "Cetak Miring": "기울임꼴",
      "Garis Bawah": "밑줄",
      "Coret": "취소선",
      "Judul Besar": "큰 제목",
      "Sub Judul": "부제목",
      "Paragraf": "본문",
      "Kutipan": "인용구",
      "Daftar Poin": "글머리 기호 목록",
      "Daftar Angka": "번호 매기기 목록",
      "Rata Kiri": "왼쪽 정렬",
      "Rata Tengah": "중앙 정렬",
      "Rata Kanan": "오른쪽 정렬",
      "Tutup Pengaturan": "설정 닫기",
      "Tutup Modal": "모달 닫기",
      "Buka Menu Pengaturan": "설정 메뉴 열기",
      "Sage Forest": "세이지 포레스트",
      "Skijan Lavender": "라벤더",
      "Charcoal & Monochrome": "모노크롬",
      "Uxintace Earthy": "어스 톤",
      "Apakah Anda yakin ingin menghapus karya ini?": "이 작품을 삭제하시겠습니까?",
      "Apakah Anda yakin ingin menghapus karya ini beserta seluruh bab di dalamnya?": "이 작품과 모든 챕터를 삭제하시겠습니까?",
      "Apakah Anda yakin ingin menghapus bab ini?": "이 챕터를 삭제하시겠습니까?",
      "Batal": "취소",
      "Hapus": "삭제",
      "Bab": "장"
    },
    ru: {
      "Pengaturan": "Настройки",
      "Pilih Palet Tema": "Выбрать тему",
      "Pilih Bahasa": "Выбрать язык",
      "Desain Sampul": "Дизайн обложки",
      "Detail Karya": "Детали произведения",
      "Judul Bab": "Название главы",
      "Tersimpan": "Сохранено",
      "Menyimpan...": "Сохранение...",
      "Kelola Database": "Управление базой данных",
      "Buat Karya Baru": "Создать новое произведение",
      "Kembali": "Назад",
      "Simpan": "Сохранить",
      "Hapus Karya": "Удалить произведение",
      "Hapus Bab": "Удалить главу",
      "Belum ada karya. Klik tombol + di atas untuk membuat karya pertama.": "Произведений пока нет. Нажмите +, чтобы создать первое.",
      "Draft": "Черновик",
      "Judul Karya": "Название произведения",
      "Nama Penulis": "Имя автора",
      "Nama Penulis / Subjudul": "Автор / Подзаголовок",
      "Masukkan judul karya...": "Введите название...",
      "Masukkan nama penulis...": "Введите имя автора...",
      "Judul Karya...": "Название произведения...",
      "Nama Penulis / Subjudul...": "Автор / Подзаголовок...",
      "Jenis Sampul": "Тип обложки",
      "Layout Preset": "Готовый макет",
      "Dari Galeri": "Из галереи",
      "Layout Sampul": "Макет обложки",
      "Layout Teks": "Макет текста",
      "Bawah": "Внизу",
      "Tengah": "По центру",
      "Minimal": "Минимализм",
      "Warna Background": "Цвет фона",
      "Pilih Warna Preset": "Выбрать цвет",
      "Unggah Gambar dari Galeri": "Загрузить из галереи",
      "Unggah Foto Perangkat": "Загрузить с устройства",
      "Pilih foto dari HP / Perangkat": "Выбрать фото с устройства",
      "Klik untuk memilih gambar dari Galeri": "Нажмите, чтобы выбрать из галереи",
      "Pratinjau Sampul": "Предпросмотр обложки",
      "Simpan Karya": "Сохранить произведение",
      "Cadangkan (Export JSON)": "Резервная копия (Экспорт JSON)",
      "Pulihkan (Import JSON)": "Восстановить (Импорт JSON)",
      "Daftar Bab": "Список глав",
      "+ Bab Baru": "+ Новая глава",
      "Belum ada bab. Klik \"+ Bab Baru\" untuk mulai menulis.": "Глав пока нет. Нажмите «+ Новая глава», чтобы начать.",
      "Tambah Bab Baru": "Добавить новую главу",
      "Contoh: Bab 1 - Awal Mula": "Пример: Глава 1 - Начало",
      "Mulai Menulis": "Начать писать",
      "Teks Sampul": "Текст обложки",
      "Sumber Gambar": "Источник изображения",
      "Preset Bawaan": "По умолчанию",
      "Kata": "Слов",
      "Karakter": "Символов",
      "Estimasi Baca:": "Время чтения:",
      "mnt": "мин",
      "Tulis isi bab ini...": "Напишите текст главы...",
      "Cetak Tebal": "Полужирный",
      "Cetak Miring": "Курсив",
      "Garis Bawah": "Подчеркнутый",
      "Coret": "Зачеркнутый",
      "Judul Besar": "Заголовок 2",
      "Sub Judul": "Заголовок 3",
      "Paragraf": "Абзац",
      "Kutipan": "Цитата",
      "Daftar Poin": "Маркированный список",
      "Daftar Angka": "Нумерованный список",
      "Rata Kiri": "По левому краю",
      "Rata Tengah": "По центру",
      "Rata Kanan": "По правому краю",
      "Tutup Pengaturan": "Закрыть настройки",
      "Tutup Modal": "Закрыть окно",
      "Buka Menu Pengaturan": "Открыть настройки",
      "Sage Forest": "Шалфейный лес",
      "Skijan Lavender": "Лаванда",
      "Charcoal & Monochrome": "Монохром",
      "Uxintace Earthy": "Земляные тона",
      "Apakah Anda yakin ingin menghapus karya ini?": "Вы уверены, что хотите удалить это произведение?",
      "Apakah Anda yakin ingin menghapus karya ini beserta seluruh bab di dalamnya?": "Вы уверены, что хотите удалить произведение со всеми главами?",
      "Apakah Anda yakin ingin menghapus bab ini?": "Вы уверены, что хотите удалить эту главу?",
      "Batal": "Отмена",
      "Hapus": "Удалить",
      "Bab": "Глава"
    },
    pt: {
      "Pengaturan": "Configurações",
      "Pilih Palet Tema": "Selecionar Paleta",
      "Pilih Bahasa": "Selecionar Idioma",
      "Desain Sampul": "Design da Capa",
      "Detail Karya": "Detalhes da Obra",
      "Judul Bab": "Título do Capítulo",
      "Tersimpan": "Salvo",
      "Menyimpan...": "Salvando...",
      "Kelola Database": "Gerenciar Banco de Dados",
      "Buat Karya Baru": "Criar Nova Obra",
      "Kembali": "Voltar",
      "Simpan": "Salvar",
      "Hapus Karya": "Excluir Obra",
      "Hapus Bab": "Excluir Capítulo",
      "Belum ada karya. Klik tombol + di atas untuk membuat karya pertama.": "Nenhuma obra ainda. Clique no botão + acima para criar a primeira.",
      "Draft": "Rascunho",
      "Judul Karya": "Título da Obra",
      "Nama Penulis": "Nome do Autor",
      "Nama Penulis / Subjudul": "Autor / Subtítulo",
      "Masukkan judul karya...": "Digite o título da obra...",
      "Masukkan nama penulis...": "Digite o nome do autor...",
      "Judul Karya...": "Título da Obra...",
      "Nama Penulis / Subjudul...": "Autor / Subtítulo...",
      "Jenis Sampul": "Tipo de Capa",
      "Layout Preset": "Layout Padrão",
      "Dari Galeri": "Da Galeria",
      "Layout Sampul": "Layout da Capa",
      "Layout Teks": "Layout do Texto",
      "Bawah": "Inferior",
      "Tengah": "Centro",
      "Minimal": "Minimalista",
      "Warna Background": "Cor de Fundo",
      "Pilih Warna Preset": "Escolher Cor Pré-definida",
      "Unggah Gambar dari Galeri": "Carregar da Galeria",
      "Unggah Foto Perangkat": "Carregar Foto do Dispositivo",
      "Pilih foto dari HP / Perangkat": "Selecionar foto do dispositivo",
      "Klik untuk memilih gambar dari Galeri": "Clique para selecionar da Galeria",
      "Pratinjau Sampul": "Pré-visualização da Capa",
      "Simpan Karya": "Salvar Obra",
      "Cadangkan (Export JSON)": "Backup (Exportar JSON)",
      "Pulihkan (Import JSON)": "Restaurar (Importar JSON)",
      "Daftar Bab": "Lista de Capítulos",
      "+ Bab Baru": "+ Novo Capítulo",
      "Belum ada bab. Klik \"+ Bab Baru\" untuk mulai menulis.": "Nenhum capítulo ainda. Clique em \"+ Novo Capítulo\" para começar.",
      "Tambah Bab Baru": "Adicionar Novo Capítulo",
      "Contoh: Bab 1 - Awal Mula": "Exemplo: Capítulo 1 - O Início",
      "Mulai Menulis": "Começar a Escrever",
      "Teks Sampul": "Texto da Capa",
      "Sumber Gambar": "Fonte da Imagem",
      "Preset Bawaan": "Predefinições",
      "Kata": "Palavras",
      "Karakter": "Caracteres",
      "Estimasi Baca:": "Tempo de leitura:",
      "mnt": "min",
      "Tulis isi bab ini...": "Escreva o conteúdo do capítulo aqui...",
      "Cetak Tebal": "Negrito",
      "Cetak Miring": "Itálico",
      "Garis Bawah": "Sublinhado",
      "Coret": "Tachado",
      "Judul Besar": "Título 2",
      "Sub Judul": "Título 3",
      "Paragraf": "Parágrafo",
      "Kutipan": "Citação",
      "Daftar Poin": "Lista com marcadores",
      "Daftar Angka": "Lista numerada",
      "Rata Kiri": "Alinhar à esquerda",
      "Rata Tengah": "Centralizar",
      "Rata Kanan": "Alinhar à direita",
      "Tutup Pengaturan": "Fechar Configurações",
      "Tutup Modal": "Fechar Janela",
      "Buka Menu Pengaturan": "Abrir Menu de Configurações",
      "Sage Forest": "Floresta de Sálvia",
      "Skijan Lavender": "Lavanda",
      "Charcoal & Monochrome": "Monocromático",
      "Uxintace Earthy": "Tons de Terra",
      "Apakah Anda yakin ingin menghapus karya ini?": "Tem certeza de que deseja excluir esta obra?",
      "Apakah Anda yakin ingin menghapus karya ini beserta seluruh bab di dalamnya?": "Tem certeza de que deseja excluir esta obra e todos os seus capítulos?",
      "Apakah Anda yakin ingin menghapus bab ini?": "Tem certeza de que deseja excluir este capítulo?",
      "Batal": "Cancelar",
      "Hapus": "Excluir",
      "Bab": "Capítulo"
    },
    it: {
      "Pengaturan": "Impostazioni",
      "Pilih Palet Tema": "Seleziona Tavolozza",
      "Pilih Bahasa": "Seleziona Lingua",
      "Desain Sampul": "Design Copertina",
      "Detail Karya": "Dettagli Opera",
      "Judul Bab": "Titolo Capitolo",
      "Tersimpan": "Salvato",
      "Menyimpan...": "Salvataggio...",
      "Kelola Database": "Gestisci Database",
      "Buat Karya Baru": "Crea Nuova Opera",
      "Kembali": "Indietro",
      "Simpan": "Salva",
      "Hapus Karya": "Elimina Opera",
      "Hapus Bab": "Elimina Capitolo",
      "Belum ada karya. Klik tombol + di atas untuk membuat karya pertama.": "Nessuna opera presente. Clicca il pulsante + in alto per crearne una.",
      "Draft": "Bozza",
      "Judul Karya": "Titolo Opera",
      "Nama Penulis": "Nome Autore",
      "Nama Penulis / Subjudul": "Autore / Sottotitolo",
      "Masukkan judul karya...": "Inserisci il titolo dell'opera...",
      "Masukkan nama penulis...": "Inserisci il nome dell'autore...",
      "Judul Karya...": "Titolo Opera...",
      "Nama Penulis / Subjudul...": "Autore / Sottotitolo...",
      "Jenis Sampul": "Tipo Copertina",
      "Layout Preset": "Layout Predefinito",
      "Dari Galeri": "Dalla Galleria",
      "Layout Sampul": "Layout Copertina",
      "Layout Teks": "Layout Testo",
      "Bawah": "In basso",
      "Tengah": "Al centro",
      "Minimal": "Minimale",
      "Warna Background": "Colore di Sfondo",
      "Pilih Warna Preset": "Seleziona Colore Predefinito",
      "Unggah Gambar dari Galeri": "Carica Immagine dalla Galleria",
      "Unggah Foto Perangkat": "Carica Foto dal Dispositivo",
      "Pilih foto dari HP / Perangkat": "Scegli foto dal dispositivo",
      "Klik untuk memilih gambar dari Galeri": "Clicca per selezionare l'immagine",
      "Pratinjau Sampul": "Anteprima Copertina",
      "Simpan Karya": "Salva Opera",
      "Cadangkan (Export JSON)": "Backup (Esporta JSON)",
      "Pulihkan (Import JSON)": "Ripristina (Importa JSON)",
      "Daftar Bab": "Elenco Capitoli",
      "+ Bab Baru": "+ Nuovo Capitolo",
      "Belum ada bab. Klik \"+ Bab Baru\" untuk mulai menulis.": "Nessun capitolo. Clicca \"+ Nuovo Capitolo\" per iniziare a scrivere.",
      "Tambah Bab Baru": "Aggiungi Nuovo Capitolo",
      "Contoh: Bab 1 - Awal Mula": "Esempio: Capitolo 1 - L'Inizio",
      "Mulai Menulis": "Inizia a Scrivere",
      "Teks Sampul": "Testo Copertina",
      "Sumber Gambar": "Origine Immagine",
      "Preset Bawaan": "Predefiniti",
      "Kata": "Parole",
      "Karakter": "Caratteri",
      "Estimasi Baca:": "Tempo di lettura:",
      "mnt": "min",
      "Tulis isi bab ini...": "Scrivi qui il contenuto del capitolo...",
      "Cetak Tebal": "Grassetto",
      "Cetak Miring": "Corsivo",
      "Garis Bawah": "Sottolineato",
      "Coret": "Barrato",
      "Judul Besar": "Intestazione 2",
      "Sub Judul": "Intestazione 3",
      "Paragraf": "Paragrafo",
      "Kutipan": "Citazione",
      "Daftar Poin": "Elenco puntato",
      "Daftar Angka": "Elenco numerato",
      "Rata Kiri": "Allinea a sinistra",
      "Rata Tengah": "Centra",
      "Rata Kanan": "Allinea a destra",
      "Tutup Pengaturan": "Chiudi Impostazioni",
      "Tutup Modal": "Chiudi Finestra",
      "Buka Menu Pengaturan": "Apri Menu Impostazioni",
      "Sage Forest": "Foresta di Salvia",
      "Skijan Lavender": "Lavanda",
      "Charcoal & Monochrome": "Monocromo",
      "Uxintace Earthy": "Toni della Terra",
      "Apakah Anda yakin ingin menghapus karya ini?": "Sei sicuro di voler eliminare questa opera?",
      "Apakah Anda yakin ingin menghapus karya ini beserta seluruh bab di dalamnya?": "Sei sicuro di voler eliminare questa opera e tutti i suoi capitoli?",
      "Apakah Anda yakin ingin menghapus bab ini?": "Sei sicuro di voler eliminare questo capitolo?",
      "Batal": "Annulla",
      "Hapus": "Elimina",
      "Bab": "Capitolo"
    }
  };

  const unitTranslations = {
    id: { bab: (n) => `${n} Bab`, kata: (n) => `${n} Kata` },
    en: { bab: (n) => `${n} ${n === 1 ? 'Chapter' : 'Chapters'}`, kata: (n) => `${n} ${n === 1 ? 'Word' : 'Words'}` },
    ja: { bab: (n) => `${n}章`, kata: (n) => `${n}単語` },
    es: { bab: (n) => `${n} ${n === 1 ? 'Capítulo' : 'Capítulos'}`, kata: (n) => `${n} ${n === 1 ? 'Palabra' : 'Palabras'}` },
    fr: { bab: (n) => `${n} ${n === 1 ? 'Chapitre' : 'Chapitres'}`, kata: (n) => `${n} ${n === 1 ? 'Mot' : 'Mots'}` },
    de: { bab: (n) => `${n} Kapitel`, kata: (n) => `${n} ${n === 1 ? 'Wort' : 'Wörter'}` },
    tl: { bab: (n) => `${n} Kabanata`, kata: (n) => `${n} Salita` },
    zh: { bab: (n) => `${n}章`, kata: (n) => `${n}字` },
    ko: { bab: (n) => `${n}장`, kata: (n) => `${n}단어` },
    ru: { bab: (n) => `${n} Гл.`, kata: (n) => `${n} Слов` },
    pt: { bab: (n) => `${n} ${n === 1 ? 'Capítulo' : 'Capítulos'}`, kata: (n) => `${n} ${n === 1 ? 'Palavra' : 'Palavras'}` },
    it: { bab: (n) => `${n} ${n === 1 ? 'Capitolo' : 'Capitoli'}`, kata: (n) => `${n} ${n === 1 ? 'Parola' : 'Parole'}` }
  };

  const languageOptions = [
    { code: 'id', label: 'Bahasa Indonesia' },
    { code: 'en', label: 'English' },
    { code: 'ja', label: '日本語' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'tl', label: 'Tagalog' },
    { code: 'zh', label: '中文 (Simplified)' },
    { code: 'ko', label: '한국어' },
    { code: 'ru', label: 'Русский' },
    { code: 'pt', label: 'Português' },
    { code: 'it', label: 'Italiano' }
  ];

  let currentLang = localStorage.getItem('tsuna_lang') || 'id';

  function createSvgBadge(code) {
    return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" style="flex-shrink:0;"><rect width="24" height="24" rx="6" fill="currentColor" fill-opacity="0.12"/><text x="12" y="15.5" font-size="9" font-weight="700" text-anchor="middle" fill="currentColor" font-family="'Plus Jakarta Sans', sans-serif">${code.toUpperCase()}</text></svg>`;
  }

  function createGlobeIcon() {
    return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;flex-shrink:0;"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
  }

  function createChevronDownIcon() {
    return `<svg class="i18n-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:16px;height:16px;flex-shrink:0;transition:transform 0.2s ease;"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
  }

  function createRadioActiveSvg() {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="var(--dark, #1A1A1A)" stroke-width="2" fill="var(--dark, #1A1A1A)" fill-opacity="0.15"/><circle cx="12" cy="12" r="4" fill="var(--dark, #1A1A1A)"/></svg>`;
  }

  function createRadioInactiveSvg() {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="rgba(0,0,0,0.25)" stroke-width="2"/></svg>`;
  }

  function translatePatterns(str) {
    if (!str) return str;
    let res = str;

    res = res.replace(/(\d+)\s*Bab\b/gi, (match, num) => {
      const n = parseInt(num, 10);
      if (unitTranslations[currentLang] && unitTranslations[currentLang].bab) {
        return unitTranslations[currentLang].bab(n);
      }
      return match;
    });

    res = res.replace(/(\d+)\s*Kata\b/gi, (match, num) => {
      const n = parseInt(num, 10);
      if (unitTranslations[currentLang] && unitTranslations[currentLang].kata) {
        return unitTranslations[currentLang].kata(n);
      }
      return match;
    });

    return res;
  }

  function t(key) {
    if (!key) return key;
    const cleanKey = key.trim();
    if (translations[currentLang] && translations[currentLang][cleanKey]) {
      return translations[currentLang][cleanKey];
    }
    return translatePatterns(cleanKey);
  }

  function applyTranslations() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while ((node = walker.nextNode())) {
      const parentNode = node.parentNode;
      if (!parentNode) continue;
      const tag = parentNode.tagName ? parentNode.tagName.toLowerCase() : '';
      if (tag === 'script' || tag === 'style' || tag === 'textarea') continue;

      const currentVal = node.nodeValue;
      if (!currentVal) continue;
      const trimmed = currentVal.trim();
      if (!trimmed) continue;

      if (!parentNode.hasAttribute('data-i18n-orig') || /(\d+)\s*(Bab|Kata)\b/i.test(trimmed)) {
        if (isKeyTranslatable(trimmed) || /(\d+)\s*(Bab|Kata)\b/i.test(trimmed)) {
          parentNode.setAttribute('data-i18n-orig', trimmed);
        }
      }

      const origText = parentNode.getAttribute('data-i18n-orig');
      const sourceText = origText || trimmed;
      const translated = t(sourceText);

      if (translated && translated !== trimmed) {
        node.nodeValue = currentVal.replace(trimmed, translated);
      }
    }

    document.querySelectorAll('[placeholder]').forEach(input => {
      if (!input.hasAttribute('data-i18n-ph-orig')) {
        input.setAttribute('data-i18n-ph-orig', input.placeholder);
      }
      const origPH = input.getAttribute('data-i18n-ph-orig');
      if (origPH) {
        input.placeholder = t(origPH);
      }
    });

    document.querySelectorAll('[aria-label]').forEach(el => {
      if (!el.hasAttribute('data-i18n-aria-orig')) {
        el.setAttribute('data-i18n-aria-orig', el.getAttribute('aria-label'));
      }
      const origAria = el.getAttribute('data-i18n-aria-orig');
      if (origAria) {
        el.setAttribute('aria-label', t(origAria));
      }
    });
  }

  function isKeyTranslatable(text) {
    if (!text) return false;
    const clean = text.trim();
    return Object.keys(translations.id).some(key => key === clean);
  }

  function injectLanguageModule() {
    const sidebarContent = document.querySelector('.sidebar-content');

    if (sidebarContent && !document.getElementById('i18nSidebarSection')) {
      const section = document.createElement('div');
      section.id = 'i18nSidebarSection';
      section.style.cssText = 'margin-bottom: 1.2rem; border-bottom: 1px solid rgba(0,0,0,0.08); padding-bottom: 0.8rem;';

      const activeOpt = languageOptions.find(o => o.code === currentLang) || languageOptions[0];

      const toggleBar = document.createElement('div');
      toggleBar.className = 'i18n-accordion-bar';
      toggleBar.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.65rem 0.8rem;
        background-color: rgba(0, 0, 0, 0.04);
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        cursor: pointer;
        user-select: none;
        transition: background-color 0.15s ease;
      `;

      toggleBar.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.6rem; font-weight: 700; font-size: 0.85rem; color: var(--dark, #1A1A1A);">
          ${createGlobeIcon()}
          <span data-i18n-orig="Pilih Bahasa">${t('Pilih Bahasa')}</span>
          <span style="font-weight: 500; font-size: 0.75rem; opacity: 0.6;">(${activeOpt.label})</span>
        </div>
        ${createChevronDownIcon()}
      `;

      const dropdownContainer = document.createElement('div');
      dropdownContainer.className = 'i18n-dropdown-container';
      dropdownContainer.style.cssText = `
        display: none;
        max-height: 210px;
        overflow-y: auto;
        margin-top: 0.5rem;
        padding-right: 4px;
        scrollbar-width: thin;
      `;

      const listContainer = createLanguageCustomList();
      dropdownContainer.appendChild(listContainer);

      toggleBar.addEventListener('click', () => {
        const isOpen = dropdownContainer.style.display === 'block';
        dropdownContainer.style.display = isOpen ? 'none' : 'block';
        const chevron = toggleBar.querySelector('.i18n-chevron');
        if (chevron) {
          chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        }
      });

      section.appendChild(toggleBar);
      section.appendChild(dropdownContainer);

      sidebarContent.insertBefore(section, sidebarContent.firstChild);
    } else if (!sidebarContent) {
      const navActions = document.querySelector('.nav-actions') || document.querySelector('.navbar');
      if (navActions && !document.getElementById('btnI18nModalTrigger')) {
        const btn = document.createElement('button');
        btn.id = 'btnI18nModalTrigger';
        btn.className = 'btn-icon';
        btn.setAttribute('aria-label', 'Pilih Bahasa');
        btn.innerHTML = createGlobeIcon();

        btn.addEventListener('click', () => {
          openI18nModal();
        });

        navActions.insertBefore(btn, navActions.firstChild);
        createI18nModalElement();
      }
    }
  }

  function createLanguageCustomList() {
    const list = document.createElement('div');
    list.className = 'i18n-custom-list';
    list.style.cssText = 'display: flex; flex-direction: column; gap: 0.4rem;';

    languageOptions.forEach(opt => {
      const isSelected = opt.code === currentLang;
      const item = document.createElement('div');
      item.className = 'i18n-custom-item';
      item.setAttribute('data-lang', opt.code);
      item.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 0.7rem;
        background-color: ${isSelected ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.4)'};
        border-radius: 6px;
        border: 1px solid ${isSelected ? 'var(--dark, #1A1A1A)' : 'rgba(0,0,0,0.08)'};
        cursor: pointer;
        transition: all 0.15s ease;
      `;

      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.6rem; font-weight: 600; font-size: 0.8rem; color: var(--dark, #1A1A1A);">
          ${createSvgBadge(opt.code)}
          <span>${opt.label}</span>
        </div>
        <div class="i18n-radio">${isSelected ? createRadioActiveSvg() : createRadioInactiveSvg()}</div>
      `;

      item.addEventListener('click', () => {
        setLanguage(opt.code);
      });

      list.appendChild(item);
    });

    return list;
  }

  function createI18nModalElement() {
    if (document.getElementById('i18nModalOverlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'i18nModalOverlay';
    overlay.className = 'modal-overlay hidden';

    const box = document.createElement('div');
    box.className = 'modal-box';

    const header = document.createElement('div');
    header.className = 'modal-header';

    const h2 = document.createElement('h2');
    h2.setAttribute('data-i18n-orig', 'Pilih Bahasa');
    h2.textContent = t('Pilih Bahasa');

    const closeBtn = document.createElement('button');
    closeBtn.className = 'btn-icon';
    closeBtn.innerHTML = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    closeBtn.addEventListener('click', closeI18nModal);

    header.appendChild(h2);
    header.appendChild(closeBtn);

    const body = document.createElement('div');
    body.className = 'modal-body';
    body.id = 'i18nModalBody';
    body.style.cssText = 'max-height: 300px; overflow-y: auto;';

    box.appendChild(header);
    box.appendChild(body);
    overlay.appendChild(box);

    document.body.appendChild(overlay);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeI18nModal();
    });
  }

  function openI18nModal() {
    const modal = document.getElementById('i18nModalOverlay');
    const body = document.getElementById('i18nModalBody');
    if (!modal || !body) return;

    body.innerHTML = '';
    body.appendChild(createLanguageCustomList());

    modal.classList.remove('hidden');
  }

  function closeI18nModal() {
    const modal = document.getElementById('i18nModalOverlay');
    if (modal) modal.classList.add('hidden');
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('tsuna_lang', lang);

    const activeOpt = languageOptions.find(o => o.code === currentLang) || languageOptions[0];
    const section = document.getElementById('i18nSidebarSection');
    if (section) {
      const toggleBar = section.querySelector('.i18n-accordion-bar');
      if (toggleBar) {
        const labelSpan = toggleBar.querySelector('span:nth-child(3)');
        if (labelSpan) {
          labelSpan.textContent = `(${activeOpt.label})`;
        }
      }
    }

    document.querySelectorAll('.i18n-custom-list').forEach(list => {
      const parent = list.parentNode;
      if (parent) {
        parent.replaceChild(createLanguageCustomList(), list);
      }
    });

    applyTranslations();
    closeI18nModal();
  }

  window.i18n = {
    t: t,
    setLanguage: setLanguage,
    getCurrentLanguage: () => currentLang,
    apply: applyTranslations
  };

  document.addEventListener('DOMContentLoaded', () => {
    injectLanguageModule();
    applyTranslations();

    const observer = new MutationObserver(() => {
      applyTranslations();
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  });

})();