# Repository Guidelines

## Project Structure & Module Organization
- `mkdocs.yml`: Site config and navigation.
- `docs/`: Source content (Markdown). Key areas: `docs/books/`, `docs/stories/`, `docs/interactive_simulations/`, `docs/wisdom_and_analysis/`.
- Prototypes: `harm_calculator_app/` and `legal_navigator_app/` hold standalone HTML/UX experiments.
- Working notes live at the repo root (e.g., `rough_notes/`, topic `.md` files).

## Build, Test, and Development Commands
- Preview locally: `mkdocs serve` (hot reload at http://127.0.0.1:8000).
- Production build: `mkdocs build --strict` (fails on broken links/format issues).
- Python: `3.11.9` (see `.python-version`). Install MkDocs via `pipx install mkdocs` or `pip install mkdocs`.

## Coding Style & Naming Conventions
- Markdown
  - One `#` H1 per page; use ATX headings (`#`, `##`, `###`).
  - Keep sections short; prefer lists over long paragraphs where possible.
  - Use relative links within `docs/`; update `mkdocs.yml` when adding pages.
- Filenames
  - Lowercase `snake_case.md`. Chapters: `chapter_XX_descriptive_title.md` (zero‑padded). Intros: `introduction.md`. Outlines: `outline.md`.
  - Directories: lowercase `snake_case/` (e.g., `docs/books/mental_fitness/`).
- Prototypes
  - Keep as static HTML/CSS/JS. Avoid third‑party trackers and remote assets.

## Testing Guidelines
- Run `mkdocs build --strict` before committing; the site must build cleanly.
- Click‑through test with `mkdocs serve`: navigation entries in `mkdocs.yml`, internal anchors, and cross‑book links should resolve.
- When adding pages, ensure the new file is referenced in `mkdocs.yml` and headings generate a correct TOC.

## Commit & Pull Request Guidelines
- Commit messages follow Conventional Commits found in history: `feat(scope): …`, `docs(scope): …`, `refactor: …`.
- PRs: include a concise summary, affected paths (e.g., `docs/books/deception/...`), and screenshots/GIFs for UI or HTML changes.
- Keep changes focused and small. Link related issues and note any navigation updates.

## Agent‑Specific Instructions
- Respect existing structure and naming; do not mass‑rename or reformat.
- When adding content, also update `mkdocs.yml`. Avoid unrelated edits.
- Prefer minimal dependencies; no network calls or tooling changes without approval.
- Validate with `mkdocs build --strict` and summarize changes clearly in outputs.
