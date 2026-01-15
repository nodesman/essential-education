# Deployment Instructions

## Cloudflare Pages

Since this directory is your repository root, deployment is standard:

1.  **Connect Git:** Connect this repository to Cloudflare Pages.
2.  **Build Settings:**
    *   **Framework:** `Jekyll`
    *   **Build Command:** `bundle exec jekyll build`
    *   **Build Output Directory:** `_site`

That's it. Your books will appear directly at your domain (e.g., `your-site.com`), not inside any subdirectory.

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