/* =====================================================================
   PORICHOY  ·  main.js
   1. Falling flowers (petal rain)
   2. Music (autoplay + toggle)
   3. Section rendering from content.js
   4. Nav dots, progress, reveal animations
   ===================================================================== */

(function () {
  "use strict";

  var C = window.CONTENT || {};
  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };

  /* ==================================================================
     1 · FALLING FLOWERS
     ================================================================== */
  (function petals() {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    var cv = $("#petals");
    if (!cv) return;
    var ctx = cv.getContext("2d");
    var W = 0, H = 0, DPR = Math.min(window.devicePixelRatio || 1, 2);
    var parts = [];
    var COLORS = [
      "#e78c9c", "#d96a80", "#f5c2c9", "#b8324a",
      "#f7dfe3", "#e9b7a5", "#f3d6b8", "#c9697f"
    ];

    function size() {
      W = window.innerWidth; H = window.innerHeight;
      cv.width = W * DPR; cv.height = H * DPR;
      cv.style.width = W + "px"; cv.style.height = H + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function makePetal(burst) {
      var r = Math.random();
      return {
        x: Math.random() * W,
        y: burst ? -Math.random() * H * 0.6 : -40 - Math.random() * H * 0.5,
        s: 5 + Math.random() * 9,                  // size
        vy: 0.5 + Math.random() * 1.5,             // fall speed
        vx: -0.35 + Math.random() * 0.7,           // drift
        a: Math.random() * Math.PI * 2,            // rotation
        va: (-0.02 + Math.random() * 0.04),        // rotation speed
        sw: 0.6 + Math.random() * 1.4,             // sway amplitude
        ph: Math.random() * Math.PI * 2,           // sway phase
        c: COLORS[(Math.random() * COLORS.length) | 0],
        o: 0.55 + Math.random() * 0.4,
        flower: r > 0.82                            // a few full blossoms
      };
    }

    function drawPetal(p) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.a);
      ctx.globalAlpha = p.o;
      ctx.fillStyle = p.c;

      if (p.flower) {
        // five small petals = one blossom
        for (var i = 0; i < 5; i++) {
          ctx.save();
          ctx.rotate((Math.PI * 2 / 5) * i);
          ctx.beginPath();
          ctx.ellipse(0, -p.s * 0.52, p.s * 0.3, p.s * 0.55, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
        ctx.globalAlpha = p.o * 0.9;
        ctx.fillStyle = "#f6e3b8";
        ctx.beginPath();
        ctx.arc(0, 0, p.s * 0.17, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // single soft petal
        ctx.beginPath();
        ctx.moveTo(0, -p.s * 0.6);
        ctx.bezierCurveTo(p.s * 0.62, -p.s * 0.36, p.s * 0.5, p.s * 0.5, 0, p.s * 0.66);
        ctx.bezierCurveTo(-p.s * 0.5, p.s * 0.5, -p.s * 0.62, -p.s * 0.36, 0, -p.s * 0.6);
        ctx.fill();
        ctx.globalAlpha = p.o * 0.35;
        ctx.strokeStyle = "rgba(255,255,255,.9)";
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.moveTo(0, -p.s * 0.45);
        ctx.lineTo(0, p.s * 0.45);
        ctx.stroke();
      }
      ctx.restore();
    }

    function loop() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        p.ph += 0.012;
        p.y += p.vy;
        p.x += p.vx + Math.sin(p.ph) * p.sw * 0.5;
        p.a += p.va;
        if (p.y > H + 60 || p.x < -80 || p.x > W + 80) {
          parts[i] = makePetal(false);
          parts[i].y = -40;
        }
        drawPetal(p);
      }
      requestAnimationFrame(loop);
    }

    function start() {
      size();
      var n = Math.round(Math.min(70, Math.max(26, (W * H) / 26000)));
      parts = [];
      for (var i = 0; i < n; i++) parts.push(makePetal(true));

      // a soft opening burst — "phoolon ki barsat"
      for (var b = 0; b < 26; b++) {
        var q = makePetal(true);
        q.y = -20 - Math.random() * 120;
        q.vy = 1.6 + Math.random() * 2.2;
        parts.push(q);
      }
      loop();
    }

    window.addEventListener("resize", size, { passive: true });
    start();
  })();

  /* ==================================================================
     2 · MUSIC
     ================================================================== */
  (function music() {
    var btn = $("#musicBtn"), tip = $("#musicTip");
    if (!btn || !C.meta || !C.meta.music) return;

    var audio = new Audio();
    audio.src = C.meta.music;
    audio.loop = true;
    audio.volume = 0.55;
    audio.preload = "auto";

    var missing = false;
    audio.addEventListener("error", function () {
      missing = true;
      if (tip) tip.textContent = "Add " + C.meta.music + " next to index.html";
    });

    function setState(on) {
      btn.classList.toggle("is-playing", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.setAttribute("aria-label", on ? "Pause music" : "Play music");
      if (tip && !missing) {
        tip.textContent = on
          ? (C.meta.musicLabel || "Now playing") + " · playing"
          : "Tap to play · " + (C.meta.musicLabel || "music");
      }
    }

    function tryPlay() {
      var p = audio.play();
      if (p && typeof p.then === "function") {
        p.then(function () { setState(true); })
         .catch(function () { setState(false); armUnlock(); });
      }
    }

    // browsers block autoplay until the user touches the page — so we
    // listen once for the very first interaction and start the song then.
    var armed = false;
    function armUnlock() {
      if (armed) return;
      armed = true;
      var unlock = function () {
        if (audio.paused) tryPlay();
        document.removeEventListener("pointerdown", unlock);
        document.removeEventListener("keydown", unlock);
        document.removeEventListener("touchstart", unlock);
        document.removeEventListener("wheel", unlock);
      };
      document.addEventListener("pointerdown", unlock, { once: false });
      document.addEventListener("keydown", unlock, { once: false });
      document.addEventListener("touchstart", unlock, { once: false });
      document.addEventListener("wheel", unlock, { once: false, passive: true });
    }

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      if (audio.paused) tryPlay(); else { audio.pause(); setState(false); }
    });

    setState(false);
    tryPlay();          // best effort on load
  })();

  /* ==================================================================
     3 · RENDER HELPERS
     ================================================================== */
  function head(s) {
    if (!s) return "";
    return '' +
      '<div class="head reveal">' +
        '<span class="head__no">' + esc(s.no || "") + '</span>' +
        '<h2 class="head__as">' + esc(s.as || "") + '</h2>' +
        '<p class="head__title">' + esc(s.title || "") + '</p>' +
        '<div class="head__orn" aria-hidden="true">❀</div>' +
        (s.intro ? '<p class="head__intro">' + esc(s.intro) + '</p>' : '') +
      '</div>';
  }

  function emptyState(t, x) {
    return '<div class="empty reveal">' +
      '<div class="empty__icon" aria-hidden="true">✎</div>' +
      '<p class="empty__t">' + esc(t) + '</p>' +
      '<p class="empty__x">' + x + '</p>' +
    '</div>';
  }

  /* ---------- 3.1 SECTION 1 ---------- */
  function renderSec1(s) {
    if (!s) return;
    var g = (s.gallery || []).map(function (it, i) {
      var img = it.src
        ? '<img src="' + esc(it.src) + '" alt="' + esc(it.caption || ("Photo " + (i + 1))) + '" loading="lazy">'
        : '<span class="frame__ph" aria-hidden="true">❀</span>';
      return '<figure class="frame reveal">' +
        '<div class="frame__img">' + img + '</div>' +
        '<figcaption class="frame__cap">' +
          '<h4>' + esc(it.caption || "") + '</h4>' +
          (it.note ? '<p>' + esc(it.note) + '</p>' : "") +
        '</figcaption>' +
      '</figure>';
    }).join("");

    $("#sec1 [data-render]").innerHTML = head(s) +
      (g ? '<div class="gallery">' + g + '</div>'
         : emptyState("Photo r babe jagah khali ase",
             'Photo add koribo: chobi tu ei folder t rakhiba, tar pichot <code>content.js</code> r <code>sec1.gallery</code> t <code>src: "chobi.jpg"</code> likhiba.'));
  }

  /* ---------- 3.2 SECTION 2 ---------- */
  function renderSec2(s) {
    if (!s) return;
    var list = s.colours || [];
    var body = list.length
      ? '<div class="swatches">' + list.map(function (c) {
          return '<article class="swatch reveal" style="--sw:' + esc(c.hex || "#e9c9cd") + '">' +
            '<div class="swatch__dot" aria-hidden="true"></div>' +
            '<h4 class="swatch__name">' + esc(c.name || "") + '</h4>' +
            '<p class="swatch__as">' + esc(c.as || "") + '</p>' +
            '<p class="swatch__note">' + esc(c.note || "") + '</p>' +
          '</article>';
        }).join("") + '</div>'
      : emptyState("Rong bur likha hoi nai",
          '<code>content.js</code> r <code>sec2.colours</code> t protitu rong r <code>name</code>, <code>hex</code> aru <code>note</code> likhiba.');

    $("#sec2 [data-render]").innerHTML = head(s) + body;
  }

  /* ---------- 3.3 SECTION 3 ---------- */
  function renderSec3(s) {
    if (!s) return;
    var list = s.songs || [];
    var body = list.length
      ? '<div class="tracks">' + list.map(function (t, i) {
          return '<article class="track reveal">' +
            '<span class="track__no" aria-hidden="true">' + String(i + 1).padStart(2, "0") + '</span>' +
            '<div class="track__body">' +
              '<h4 class="track__title">' + esc(t.title || "") + '</h4>' +
              (t.line ? '<p class="track__line">“' + esc(t.line) + '”</p>' : "") +
              (t.note ? '<p class="track__note">' + esc(t.note) + '</p>' : "") +
            '</div>' +
          '</article>';
        }).join("") + '</div>'
      : emptyState("Gaan r list khali ase",
          '<code>content.js</code> r <code>sec3.songs</code> t gaan r naam likhiba.');

    $("#sec3 [data-render]").innerHTML = head(s) + body;
  }

  /* ---------- 3.4 SECTION 4 · CLOUD BUBBLES ---------- */
  function bubble(b) {
    var ps = (b.p || []).map(function (x) { return '<p>' + esc(x) + '</p>'; }).join("");
    var pts = b.pts && b.pts.length
      ? '<ul class="drops">' + b.pts.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join("") + '</ul>'
      : "";
    return '<article class="cloud reveal' + (b.size === "wide" ? ' cloud--wide' : '') + '">' +
      '<h4 class="cloud__t">' + esc(b.t || "") + '</h4>' + ps + pts +
    '</article>';
  }

  function renderSec4(s) {
    if (!s) return;
    var chs = (s.chapters || []).map(function (ch) {
      return '<section class="chapter">' +
        '<div class="chapter__head reveal">' +
          '<span class="chapter__no">' + esc(ch.n || "") + '</span>' +
          '<h3 class="chapter__title">' + esc(ch.title || "") + '</h3>' +
          '<p class="chapter__as">' + esc(ch.as || "") + '</p>' +
          (ch.sub ? '<p class="chapter__sub">' + esc(ch.sub) + '</p>' : "") +
        '</div>' +
        '<div class="cloudfield">' + (ch.bubbles || []).map(bubble).join("") + '</div>' +
      '</section>';
    }).join("");

    $("#sec4 [data-render]").innerHTML = head(s) + chs;
  }

  /* ---------- 3.5 SECTION 5 ---------- */
  function renderSec5(s) {
    if (!s) return;
    var list = s.lessons || [];
    var body = list.length
      ? '<div class="lessons">' + list.map(function (l, i) {
          return '<article class="lesson reveal">' +
            '<span class="lesson__no" aria-hidden="true">' + String(i + 1).padStart(2, "0") + '</span>' +
            '<h4 class="lesson__t">' + esc(l.title || "") + '</h4>' +
            '<p class="lesson__x">' + esc(l.text || "") + '</p>' +
          '</article>';
        }).join("") + '</div>'
      : emptyState("Ei chapter tu tomar opekkhat ase",
          '<code>content.js</code> r <code>sec5.lessons</code> t <code>{ title: "...", text: "..." }</code> hoi likhiba.');

    $("#sec5 [data-render]").innerHTML = head(s) + body;
  }

  /* ---------- 3.6 SECTION 6 ---------- */
  function renderSec6(s) {
    if (!s) return;
    var list = s.poems || [];
    var body = list.length
      ? '<div class="poems">' + list.map(function (p) {
          var lines = (p.lines || []).map(function (x) { return esc(x); }).join("\n");
          return '<article class="poem reveal">' +
            '<h4 class="poem__t">' + esc(p.title || "") + '</h4>' +
            (p.as ? '<p class="poem__as">' + esc(p.as) + '</p>' : "") +
            '<div class="poem__body">' + lines + '</div>' +
          '</article>';
        }).join("") + '</div>'
      : emptyState("Kobita r babe jagah khali",
          '<code>content.js</code> r <code>sec6.poems</code> t <code>{ title: "...", as: "...", lines: ["...", "..."] }</code> likhiba.');

    $("#sec6 [data-render]").innerHTML = head(s) + body;
  }

  /* ---------- 3.7 SECTION 7 ---------- */
  function renderSec7(s) {
    if (!s) return;
    var list = s.songs || [];
    var body = list.length
      ? '<div class="geets">' + list.map(function (g) {
          var ly = (g.lyrics || []).map(function (x) { return esc(x); }).join("\n");
          return '<article class="geet reveal">' +
            '<h4 class="geet__t">' + esc(g.title || "") + '</h4>' +
            (g.note ? '<p class="geet__note">' + esc(g.note) + '</p>' : "") +
            (ly ? '<div class="geet__ly">' + ly + '</div>' : "") +
            (g.audio ? '<audio controls preload="none" src="' + esc(g.audio) + '"></audio>' : "") +
          '</article>';
        }).join("") + '</div>'
      : emptyState("Geet r babe jagah khali",
          '<code>content.js</code> r <code>sec7.songs</code> t <code>{ title: "...", note: "...", lyrics: ["..."], audio: "geet.mp3" }</code> likhiba.');

    $("#sec7 [data-render]").innerHTML = head(s) + body;
  }

  renderSec1(C.sec1);
  renderSec2(C.sec2);
  renderSec3(C.sec3);
  renderSec4(C.sec4);
  renderSec5(C.sec5);
  renderSec6(C.sec6);
  renderSec7(C.sec7);

  /* ==================================================================
     4 · NAV DOTS · PROGRESS · REVEAL
     ================================================================== */
  (function chrome() {
    var secs = $$("main .sec");
    var dots = $("#dots");

    if (dots) {
      var top = document.createElement("a");
      top.href = "#top";
      top.setAttribute("data-label", "Top");
      top.setAttribute("aria-label", "Top");
      dots.appendChild(top);

      secs.forEach(function (sec, i) {
        var a = document.createElement("a");
        a.href = "#" + sec.id;
        a.setAttribute("data-label", sec.getAttribute("data-nav") || ("0" + (i + 1)));
        a.setAttribute("aria-label", sec.getAttribute("data-nav") || sec.id);
        dots.appendChild(a);
      });
    }

    var dotLinks = dots ? $$("a", dots) : [];

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var id = en.target.id;
          dotLinks.forEach(function (a) {
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    secs.forEach(function (s) { io.observe(s); });

    // progress bar
    var bar = $("#progress");
    function onScroll() {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var p = max > 0 ? (h.scrollTop || document.body.scrollTop) / max : 0;
      if (bar) bar.style.width = (p * 100).toFixed(2) + "%";
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // reveal on scroll
    var rev = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-in");
          rev.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    $$(".reveal").forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 6, 5) * 55 + "ms";
      rev.observe(el);
    });
  })();

})();
