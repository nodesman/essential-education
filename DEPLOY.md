# Deployment Instructions

## Cloudflare Pages (CRITICAL SETTINGS)

1.  **Project Name:** Essential Education
2.  **Git Repo:** `nodesman/essential-education`
3.  **Branch:** `main`
4.  **Framework Preset:** `Jekyll`
5.  **Build Command:** `bundle exec jekyll build`
    *   **IMPORTANT:** Do NOT use just `jekyll build`. You MUST use `bundle exec jekyll build` to avoid "Gem::LoadError" or "public_suffix" errors.
6.  **Build Output Directory:** `_site`

## Docker (Local Run)

To run this anywhere (even without Ruby installed):

1.  **Build:**
    ```bash
    docker build -t essential-education .
    ```
2.  **Run:**
    ```bash
    docker run -p 4000:4000 -v $(pwd):/srv/jekyll essential-education
    ```
3.  **View:** Open `http://localhost:4000`
