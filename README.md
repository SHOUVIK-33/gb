# PORICHOY · পৰিচয়

Ek love website — satta ta section, phoolor boraun, aru Zubeen Da r xur.

---

## 1 · File bur ki ki

| File | Kaam |
|---|---|
| `index.html` | Website r ghor (structure) |
| `style.css` | Rong, font, design, animation |
| `content.js` | **Tomar sob text, kobita, rong, gaan — ei file tu edit koriba** |
| `main.js` | Phoolor boraun, music, cloud bubble, nav |
| `README.md` | Ei file |

Sob file **ekta folder t** e rakhiba. Bas.

---

## 2 · Kenekoi khulibo (locally)

`index.html` tu double-click koriba. Bas khuli jabo.

> Jodi music tu na baji, tente folder tu ekta local server r pora khuliba —
> terminal t ei command tu diya:
> ```
> python3 -m http.server 8000
> ```
> tar pichot browser t `http://localhost:8000` khuliba.

---

## 3 · 🎵 Mon Jai gaan tu add koribo

1. Tomar `mon-jai.mp3` file tu loi ahiba.
2. Xei file tu r naam **exactly `mon-jai.mp3`** koriba.
3. Xei file tu `index.html` r logot, eke folder t rakhiba.

```
📁 porichoy/
   ├── index.html
   ├── style.css
   ├── content.js
   ├── main.js
   └── mon-jai.mp3      ← ei tu
```

Naam tu salabo khojile `content.js` r upor t:
```js
music: "mon-jai.mp3",
```
— ei line t notun naam tu likhiba.

### Autoplay r kotha (guruttopurno)
Modern browser bur (Chrome, Safari, Firefox) e **page khuli logotei** music
autoplay hobo nodore — ei tu browser r niyom, code r dosh noi. Xei karone:

- Website khuli logote **phoolor boraun** arambho hobo.
- Music tu xomoi matra t page t **prothom click / scroll / touch** korile arambho hobo.
- Tumi jodi xathe xathe music xunibo khoja, tente **tala pichot thaka ♪ button** tu
  click koriba.

Ei dutar pora xobahke dhuniya sob kichu kaj koribo.

---

## 4 · ✍️ Content kenekoi bhoribo

Sob kichu `content.js` t ase. Kenekoi edit koribo:

- `"..."` r bhitorot thaka text tu salai notun text likhiba.
- **Comma `,` aru bracket `{ }` `[ ]` naaposiba.**
- Save koriba → browser t refresh koriba (Ctrl+Shift+R).

### Section 1 — Tai k chowa (photo)
```js
{ src: "gayatri-1.jpg", caption: "Prothom din", note: "April 2023" }
```
Photo tu `index.html` r logot e rakhiba. Photo nai hole `src: ""`.

### Section 2 — Tai r rong
```js
{ name: "White", as: "বগা", hex: "#f6f2ec", note: "9 October — English oral" }
```
`hex` = colour code. Google t "color picker" likhi colour code paiba.

### Section 3 — Tai r naamot gaan
**Ei section tu tomar prem kahini r pora e bhorai diya hoi ase** — 19 ta gaan.
Notun add koribo:
```js
{ title: "Gaan r naam", line: "ek line lyric", note: "kiya ei gaan tu" },
```

### Section 4 — Mur prem kahini
9 ta chapter, protitu chapter t cloud bubble. Notun bubble add koribo:
```js
{ t: "Topic r naam", p: ["prothom paragraph", "ditio paragraph"] }
```
Bubble tu dangor koribo hole `size: "wide"` add koriba.

### Section 5 — Tai r pora xikha
```js
{ title: "Dhairjo", text: "..." },
```

### Section 6 — Kobita
```js
{ title: "Kakhot Ahiyu Tumi Usorot Naha", as: "কাখত আহিয়ু তুমি ওচৰত নাহা",
  lines: ["prothom line", "ditio line", "tisio line"] },
```

### Section 7 — Geet
```js
{ title: "Geet r naam", note: "kiya likhisilo",
  lyrics: ["line", "line"], audio: "geet-1.mp3" },
```
Geet r recording nai hole `audio: ""` rakhiba.

---

## 5 · 🕵️ Privacy (guruttopurno)

`content.js` r `meta` t:
```js
herName: "Gayatri"
```
Jodi tai r asol naam tu public t dekhaibo nodore, tente `"G"` ba `"Mal"` likhiba.
Kahini r bhitorot thaka naam bur salabo hole Ctrl+H diya "Gayatri" → "G" replace
koriba.

---

## 6 · Website tu online t tulibo (free)

**Netlify (sobhatko xohoj):**
1. [netlify.com/drop](https://app.netlify.com/drop) khuliba
2. Gota folder tu drag-and-drop koriba
3. Link tu xathe xathe hoi jabo ✅

**GitHub Pages:**
1. GitHub t notun repository bonaba
2. Sob file upload koriba
3. Settings → Pages → Branch: `main` → Save
4. `https://<username>.github.io/<repo>/`

**Vercel / Cloudflare Pages** — eke dhoroner, folder tu upload korile hobo.

---

## 7 · Xoru xoru tip

- Mobile t o bhalke khulibo — sob responsive hoi bonowa hoi ase.
- Browser t dark mode thakile o website r rong tu xei dhorone thakibo (design tu fixed).
- Font bur Google Fonts r pora ahe — internet nalage hole system font hoi jabo.
- Kiba bhul hoi jodi website khali dekhai, tente browser r console (F12) t
  `content.js` r line number tu saba — xexot comma ba bracket eta bhul thakibo.

---

ভাল পোৱা। ভালপোৱা।
