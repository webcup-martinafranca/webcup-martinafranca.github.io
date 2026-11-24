# WEB CUP 2.0 – sorgenti

Ramo con i file sorgente dell'app (il sito pubblicato è sul ramo `main`).

- `index.html` (template), `data.js` (squadre, rose, partite, regolamenti), `gazzettino.js`, `tennis.js`, `padel.js`, `privacy.js`, cartelle immagini
- `build.py` → crea `WEB-CUP-2.0-anteprima.html`; `compact.py` → comprime e scrive `/mnt/user-data/outputs/webcup2.html`
- `deploy.sh` → build + copia in `index.html` del ramo `main` (clonato in `/home/claude/webcup-martinafranca.github.io`) + push
- Photo gallery: file in `main:/gallery` (`index.json`, `f/`, `t/`)
- `reel/render.py`: script del reel Instagram

Ripristino in una nuova sessione:
    git clone -b sorgenti https://github.com/webcup-martinafranca/webcup-martinafranca.github.io /home/claude/webcup2
    git clone https://github.com/webcup-martinafranca/webcup-martinafranca.github.io /home/claude/webcup-martinafranca.github.io
