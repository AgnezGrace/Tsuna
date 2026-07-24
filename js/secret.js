(function () {
  'use strict';

  const SECRET_HEX = "0x41 0x6B 0x75 0x20 0x6D 0x65 0x72 0x69 0x6E 0x64 0x75 0x6B 0x61 0x6E 0x6D 0x75 0x2E";
  const SECRET_B64 = "QWt1IG1lcmluZHVrYW5tdS4=";
  const CIPHER_CHARS = "01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101";

  let holdTimer = null;
  const HOLD_DURATION = 5000;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    .brand-btn, .brand-title, .brand-btn svg {
      user-select: none !important;
      -webkit-user-select: none !important;
      -webkit-user-drag: none !important;
      -khtml-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
    }

    #tsunaSecretOverlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(15, 42, 29, 0.92);
      z-index: 99999;
      pointer-events: none;
      opacity: 0;
      transition: opacity 1.5s ease-in-out;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      backdrop-filter: blur(8px);
    }

    #tsunaSecretCanvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `;
  document.head.appendChild(styleSheet);

  document.addEventListener("DOMContentLoaded", () => {
    const brandBtn = document.getElementById("btnBrandMenu");
    if (!brandBtn) return;

    brandBtn.addEventListener("contextmenu", (e) => e.preventDefault());

    brandBtn.addEventListener("mousedown", startTimer);
    brandBtn.addEventListener("touchstart", startTimer, { passive: true });

    brandBtn.addEventListener("mouseup", cancelTimer);
    brandBtn.addEventListener("mouseleave", cancelTimer);
    brandBtn.addEventListener("touchend", cancelTimer);
    brandBtn.addEventListener("touchcancel", cancelTimer);

    function startTimer() {
      if (holdTimer) clearTimeout(holdTimer);
      holdTimer = setTimeout(() => {
        triggerSecretRain();
      }, HOLD_DURATION);
    }

    function cancelTimer() {
      if (holdTimer) {
        clearTimeout(holdTimer);
        holdTimer = null;
      }
    }
  });

  function triggerSecretRain() {
    let overlay = document.getElementById("tsunaSecretOverlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "tsunaSecretOverlay";
      const canvas = document.createElement("canvas");
      canvas.id = "tsunaSecretCanvas";
      overlay.appendChild(canvas);
      document.body.appendChild(overlay);
    }

    const canvas = document.getElementById("tsunaSecretCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const secretChars = (SECRET_HEX + " " + SECRET_B64 + " " + CIPHER_CHARS).split("");

    let animationFrameId;
    let startTime = Date.now();
    const DURATION = 6000;

    function drawMatrix() {
      ctx.fillStyle = "rgba(15, 42, 29, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#AEC3B0";
      ctx.font = `${fontSize}px 'Courier New', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = secretChars[Math.floor(Math.random() * secretChars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      if (Date.now() - startTime < DURATION) {
        animationFrameId = requestAnimationFrame(drawMatrix);
      }
    }

    overlay.style.display = "flex";
    setTimeout(() => {
      overlay.style.opacity = "1";
      drawMatrix();
    }, 50);

    setTimeout(() => {
      overlay.style.opacity = "0";
      setTimeout(() => {
        cancelAnimationFrame(animationFrameId);
        overlay.remove();
      }, 1500);
    }, DURATION);
  }
})();