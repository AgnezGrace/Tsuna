# 🪶 Tsuna — Minimalist Web Writing Studio

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![IndexedDB](https://img.shields.io/badge/Storage-IndexedDB-4479A1?style=for-the-badge&logo=sqlite&logoColor=white)
![Offline First](https://img.shields.io/badge/Offline--First-Enabled-brightgreen?style=for-the-badge)

**Tsuna** is a lightweight, privacy-first, offline-ready web application designed for novel writers, storytellers, and content creators. Built purely with Vanilla HTML, CSS, and JavaScript, Tsuna offers a distraction-free writing environment directly in your browser.

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **📚 Story Workspace** | Create and manage multiple story projects with dedicated chapter lists. |
| **🎨 Cover Designer** | Customize book covers using dynamic background presets, text layouts, or custom uploaded photos. |
| **📝 Rich Text Editor** | Full WYSIWYG editor featuring bold, italic, headings, blockquotes, lists, and real-time word/character counting. |
| **🎭 Aesthetic Themes** | Switch seamlessly between 6 carefully curated color palettes. |
| **💾 Offline & Local First** | All stories and chapters are saved locally in browser **IndexedDB** — zero server dependencies. |
| **📦 Backup & Restore** | Export your entire database into a JSON file or restore from a backup in one click. |

---

## 🎨 Available Themes

Tsuna includes 6 built-in visual themes tailored for comfortable long-form reading and writing:

| Theme Name | Style / Vibe | Primary Color Accent |
| :--- | :--- | :--- |
| **Sage Forest** *(Default)* | Calming nature tones | `#375534` |
| **Skijan Lavender** | Soft lavender & violet | `#6C5F8D` |
| **Charcoal Monochrome** | Distraction-free grayscale | `#4A4A4A` |
| **Uxintace Earthy** | Cozy vintage paper | `#6E473B` |
| **Berry Sunset** | Warm crimson & magenta | `#A33757` |
| **Ocean Navy** | Deep oceanic blue | `#052659` |

---

## 📄 Page Architecture

| File | Purpose |
| :--- | :--- |
| `index.html` | **Main Dashboard:** Story grid view, theme selector drawer, new project creator, and backup manager. |
| `story-detail.html` | **Story Details:** Chapter management list, cover shortcut, and project deletion. |
| `editor.html` | **Chapter Editor:** Distraction-free writing UI with formatting toolbar and live stats. |
| `cover-editor.html` | **Cover Editor:** Standalone editor to fine-tune story cover layouts and gradients. |

---

## 🛡️ Data Privacy & Security

Tsuna operates entirely inside your browser. **No data is collected, logged, or sent to any external server.** Make sure to use the **Export JSON** feature periodically in the settings menu to maintain backups of your work.
