#!/bin/bash
# Build + compatta + pubblica su GitHub Pages (ramo main) + salva i sorgenti (ramo sorgenti)
set -e
# Allinea prima entrambi i rami (es. file CNAME creato da GitHub, modifiche di altre sessioni)
git -C /home/claude/webcup2 pull -q --rebase origin sorgenti
git -C /home/claude/webcup-martinafranca.github.io pull -q --rebase origin main
cd /home/claude/webcup2
python3 build.py >/dev/null
python3 compact.py
cp /mnt/user-data/outputs/webcup2.html /home/claude/webcup-martinafranca.github.io/index.html
cp /home/claude/webcup2/version.txt /home/claude/webcup-martinafranca.github.io/version.txt
cd /home/claude/webcup-martinafranca.github.io
git add -A
git -c user.name="Claude" -c user.email="noreply@anthropic.com" commit -qm "${1:-Aggiornamento WEB CUP}

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_011eaB78UaSKa38cEVVvLm5x" || echo "nessuna modifica"
git -c push.negotiate=true push origin HEAD 2>&1 | tail -1
# Salva anche i sorgenti (ramo sorgenti)
cd /home/claude/webcup2
git add -A
git -c user.name="Claude" -c user.email="noreply@anthropic.com" commit -qm "${1:-Aggiornamento WEB CUP}" || echo "sorgenti: nessuna modifica"
git -c push.negotiate=true push origin sorgenti 2>&1 | tail -1
