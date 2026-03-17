# CNTRL Futbol Website v3

## Brand Colors (from your Brand Guidelines)
- Primary:   #000000 (black)
- Secondary: #F1F1F1 (off-white)
- Accent:    #DBC9B4 (beige) ← replaces neon green
- Dark Gray: #4C4C4C
- Fonts:     Zekton (headlines) + Poppins (body)

All colors are in one place: `css/style.css` → `:root { ... }`

## How to Add Your Photos
Create an `images/` folder and add photos with these filenames:

### Homepage
- `hero-bg.jpg`     — Full hero background
- `action-1.jpg`    — Photo strip 1 (portrait)
- `action-2.jpg`    — Photo strip 2
- `action-3.jpg`    — Photo strip 3
- `action-4.jpg`    — Photo strip 4

### Private Training
- `private-hero.jpg`   — Hero background
- `private-action.jpg` — Mid-page split image

### Small Group
- `small-group-hero.jpg` — Hero background

### Team Training
- `team-hero.jpg` — Hero background

### About
- `kyle-main.jpg`     — Main founder photo (portrait)
- `kyle-1.jpg`        — Gallery 1
- `kyle-2.jpg`        — Gallery 2
- `kyle-3.jpg`        — Gallery 3
- `kyle-headshot.jpg` — Staff card
- `stefan-headshot.jpg` — Stefan staff card

### SEO
- `og-image.jpg` — 1200×630px social share image

## Replacing a Placeholder
Find: `<div class="img-placeholder" ...>`
Replace entire block with:
```html
<img src="images/yourfile.jpg" alt="Description" class="img-block">
```
Use `img-portrait` for tall, `img-wide` for cinematic, `img-square` for 1:1.

## Files
- `index.html`            Homepage
- `private-training.html` Private Training
- `small-group.html`      Small Group Training
- `team-training.html`    Team & Skills Training
- `about.html`            About
- `contact.html`          Contact / Book Evaluation
- `css/style.css`         All global styles
- `js/main.js`            Nav + interactions
- `sitemap.xml`           SEO sitemap
- `robots.txt`            SEO crawl file
