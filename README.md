# gabriellewintersbostwick — personal academic site

A self-contained static site. No build step, no dependencies: open `index.html` in a browser, or upload the whole folder to any static host.

## Layout

```
index.html          Home: headline, three doors, bio, timeline, recent
research.html       The question, the arm, published work, the program, students, feasibility
teaching.html       Philosophy, practice, courses taught, prepared to teach, mentoring, development
publications.html   Papers with DOIs, talks, awards
horizons.html       Gastropod circuits, Ocean Genome Atlas Project, public science
cv.html             Full CV (HTML)
assets/
  style.css         All styling (colours and type are variables at the top)
  site.js           Nav highlighting, footer year, play-when-visible videos
  favicon.svg
  WintersBostwick_CV.pdf
  art/*.svg         Line drawings (octopus, squid, sea slugs, arm cross-section, traces)
  img/*.jpg         Photographs and illustrations
  video/*.mp4       Calcium-imaging movies with poster frames
```

## Editing

Everything is plain HTML. To change text, edit the page directly. To add a photo, drop a JPEG into `assets/img/` and reference it with:

```html
<figure class="photo">
  <img src="assets/img/your-photo.jpg" alt="what it shows">
  <figcaption class="caption"><b>Fig. 3</b>Your caption.</figcaption>
</figure>
```

To add a headshot: save it as `assets/img/portrait.jpg` (roughly 4:5, at least 800 px wide). The Home page picks it up automatically.

## Publishing on GitHub Pages

1. Create a new repository on GitHub named `Gaberelladeville.github.io` (public).
2. From this folder:

```bash
git init
git add .
git commit -m "Site"
git branch -M main
git remote add origin git@github.com:Gaberelladeville/Gaberelladeville.github.io.git
git push -u origin main
```

3. On GitHub: Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`. The site appears at `https://gaberelladeville.github.io/` within a minute or two.

For a custom domain, add a file named `CNAME` containing the domain (for example `gabriellewintersbostwick.com`) and point the domain's DNS at GitHub Pages.

The `.nojekyll` file tells GitHub to serve the folder as-is.
