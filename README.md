# ZoroFlow — Estate Liquidation Free Website Design Landing Page

A high-converting, single-page React landing page for a free website design beta program targeting estate liquidation companies in Seattle.

## Tech Stack

- **React 19** (Vite)
- **Tailwind CSS v4** (utility-first styling with custom design tokens)
- **Framer Motion** (scroll animations, entrance effects, micro-interactions)
- **React Hook Form** (form validation with real-time feedback)
- **Lucide React** (SVG icons)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## Form Submission Setup

The application form uses [Formspree](https://formspree.io/) for submissions:

1. Go to [https://formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form endpoint ID
3. Open `src/components/ApplicationForm.jsx`
4. Replace `YOUR_FORM_ID` in the `fetch` URL with your actual Formspree form ID:
   ```js
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

**Free Tier:** Formspree allows 50 submissions/month on the free plan — plenty for a beta program.

## GitHub Pages Deployment

### 1. Update Configuration

Open `package.json` and update the `homepage` field:
```json
"homepage": "https://YOUR_USERNAME.github.io/antigravity-zoroflow-first"
```

Open `vite.config.js` and update the `base` field if your repo name differs:
```js
base: '/your-repo-name/',
```

### 2. Create GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit: ZoroFlow landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/antigravity-zoroflow-first.git
git push -u origin main
```

### 3. Deploy

```bash
npm run deploy
```

This runs `vite build` and publishes the `dist` folder to a `gh-pages` branch automatically.

### 4. Enable GitHub Pages

1. Go to your repository on GitHub → **Settings** → **Pages**
2. Under **Source**, select the `gh-pages` branch
3. Save — your site will be live within a few minutes

## Project Structure

```
src/
├── main.jsx                      # Entry point
├── index.css                     # Global styles & Tailwind theme
├── App.jsx                       # Main app (assembles all sections)
└── components/
    ├── Hero.jsx                  # Section 1: Hero with gradient + mockup
    ├── WhyThisMatters.jsx        # Section 2: Pain-Agitate-Solution
    ├── IrresistibleOffer.jsx     # Section 3: Value stack + hosting options
    ├── WhyFree.jsx               # Section 4: Transparency & trust
    ├── DecisionHelper.jsx        # Section 5: Interactive quiz
    ├── WhoThisIsFor.jsx          # Section 6: Qualification
    ├── HowThisWorks.jsx          # Section 7: 5-step process timeline
    ├── FAQ.jsx                   # Section 8: Accordion FAQ
    ├── HonestPositioning.jsx     # Section 9: Hosting cost transparency
    ├── SocialProof.jsx           # Section 10: Future testimonial placeholders
    ├── ApplicationForm.jsx       # Section 11: Full application form
    ├── CountdownTimer.jsx        # Countdown timer (21-day deadline)
    └── Footer.jsx                # Section 12: Footer
```

## Customization

### Colors
All colors are defined as Tailwind theme tokens in `src/index.css`:
- `--color-royal-purple: #6C4AB6`
- `--color-midnight-blue: #2D2A4A`
- `--color-soft-lavender: #D4C2FC`
- `--color-emerald-green: #38A169`

### Fonts
Loaded via Google Fonts in `index.html`:
- **Headings:** DM Serif Display
- **Body:** Lato

### Scarcity Numbers
Update the "4 Already Claimed" counter in `Hero.jsx` as spots fill up.

## License

MIT
