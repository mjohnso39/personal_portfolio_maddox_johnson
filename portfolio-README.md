# Portfolio Website - Assignment 6

## What This Is
A simple, responsive personal portfolio site with four sections: Home, About, Projects, and Contact. Built with plain HTML, CSS, and a small bit of JavaScript (no frameworks).

## Files
- `index.html` - page structure and content
- `style.css` - all styling, colors, spacing, and responsive layout rules
- `app.js` - opens/closes the mobile nav menu

## Before You Deploy
Edit `index.html` and replace the placeholder text:
- "Your Name" (appears in the logo, hero heading, and footer)
- The one-line description in the hero section
- The About Me paragraph
- The three project cards (titles, descriptions, and links)
- The email, GitHub, and LinkedIn links in the Contact section

## UI/UX Decisions
- **Colors:** A dark navy header/footer (#1f2937) paired with a blue accent (#2f6fed) for buttons and links, on a white/light-gray background. This keeps contrast high for readability and accessibility.
- **Fonts:** A single system font stack keeps load times fast and text consistent across devices.
- **Spacing:** Generous padding around sections and a max content width (900-1100px) prevent text from stretching too wide on large screens, which improves readability.
- **Responsiveness:** The project cards go from 3 columns, to 2, to 1 as the screen narrows, and the nav bar collapses into a hamburger menu on phones.

(Replace/expand this section with your own reflection paragraph once you've customized the site - talk about *why* you chose your specific colors/fonts/layout.)

## How to Deploy with GitHub Pages (step by step)

1. **Create a GitHub account** at github.com if you don't have one.
2. **Create a new repository:**
   - Click the "+" icon (top right) > "New repository."
   - Name it something like `my-portfolio`.
   - Set it to Public.
   - Click "Create repository."
3. **Upload your files:**
   - On the new repo page, click "uploading an existing file."
   - Drag in `index.html`, `style.css`, and `app.js`.
   - Scroll down and click "Commit changes."
4. **Turn on GitHub Pages:**
   - Go to the repo's "Settings" tab.
   - Click "Pages" in the left sidebar.
   - Under "Branch," select `main` and folder `/ (root)`, then click "Save."
5. **Get your live link:**
   - Wait about a minute, then refresh the Pages settings screen.
   - Your live URL will appear at the top, something like:
     `https://yourusername.github.io/my-portfolio/`

## Deliverables to Submit
- **Live URL:** (paste your GitHub Pages link here after deploying)
- **GitHub Repository link:** (paste your repo link here)
- **Reflection paragraph:** (paste your finished UI/UX reflection here)

## Version Control Tip
If you have Git installed, you can also push updates from your computer instead of uploading files manually:
```
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/yourusername/my-portfolio.git
git push -u origin main
```
Making a few small commits as you customize the site (instead of one big upload) shows good version control habits.
