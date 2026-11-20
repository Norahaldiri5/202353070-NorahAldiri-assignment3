# Technical Documentation

**Project:** 202353070-NorahAldiri-assignment3  

**Course:** SWE 363 — Web Engineering and Development  

**Author:** Norah Al Diri

## 1. Project Overview and Development History

This project is a responsive personal portfolio built with HTML5, CSS3, and vanilla JavaScript. It introduces the author, presents two academic projects (RouterRepair: Network Detective and Academic Copilot), and provides contact links and a demonstration contact form. Assignment 3 extends the existing site rather than replacing its design.

| Stage | Functionality introduced |
|---|---|
| Assignment 1 | Page structure, project cards, responsive layout, sticky navigation, and light/dark theme toggle. |
| Assignment 2 | Live project search, theme persistence with `localStorage`, contact form validation, and scroll-triggered reveal animation. |
| Assignment 3 | GitHub REST API integration, combined category filtering and alphabetical sorting, image lazy loading, and a GitHub navigation link. |

The contact form remains a front-end demonstration; there is no custom backend, database, authentication system, or email-delivery service.

## 2. Technology Stack and Files

- ****HTML5:**** Semantic `header`, `nav`, `main`, `section`, `article`, `form`, and `footer` elements; labeled controls and descriptive image text.

- ****CSS3:**** Flexbox, Grid, custom properties, responsive media queries, transitions, and light/dark color themes.

- ****JavaScript (ES6):**** DOM updates, events, array filtering and sorting, `async`/`await`, `fetch`, and error handling.

- ****Browser APIs:**** `localStorage` for persistent theme choice and `IntersectionObserver` for scroll animations.

- ****GitHub REST API:**** Public repository metadata and detected programming languages.

- ****Development and evaluation:**** VS Code, Live Server, Git/GitHub, Chrome DevTools, and Lighthouse.

```text

202353070-NorahAldiri-assignment3/

├── index.html

├── css/

│   └── styles.css

├── js/

│   └── script.js

├── assets/

│   └── images/

│       ├── route-repair.jpg

│       ├── academic-copilot.jpg

│       ├── sun.png

│       └── moon.png

├── docs/

│   ├── technical-documentation.md

│   └── ai-usage-report.md

├── README.md

└── .gitignore

```

`index.html` owns the page content and interactive controls; `styles.css` owns presentation and responsive behavior; `script.js` owns interaction, validation, state, and API requests. The `docs` directory contains technical and AI-use documentation.

## 3. Page Structure and Navigation

The page contains About Me, Projects, GitHub Repositories, and Contact sections. The Projects section contains two cards with images, course names, descriptions, and additional information. The GitHub section is populated dynamically rather than hard-coded. Contact includes email/GitHub links and a form.

Navigation uses fragment links (`#about`, `#projects`, `#github`, `#contact`). CSS uses `position: sticky`, `scroll-behavior: smooth`, and section `scroll-margin-top` so the sticky navigation does not cover section headings. Assignment 3 added the GitHub navigation link.

## 4. Theme Management — Existing Functionality

Assignment 1 introduced the light/dark theme toggle. Assignment 2 added persistence across reloads using `localStorage`; Assignment 3 retains this existing functionality.

The default dark theme defines colors in `:root`, while `body.light-mode` overrides the same CSS variables. JavaScript restores the stored value from the `portfolio-theme` key, toggles the `light-mode` class on click, updates the sun/moon icon and accessible button label, and saves the new preference.

```javascript

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {

   document.body.classList.add("light-mode");

}

// Illustrative light-mode case when saving the theme:

localStorage.setItem("portfolio-theme", "light");

```

The new GitHub cards use the existing `--card-start`, `--card-end`, `--text`, `--border`, and `--accent` variables to follow both themes.

## 5. Project Search, Category Filter, and Sort

**Assignment 2:** Live search matches text within each project card, ignoring case and surrounding whitespace.

**Assignment 3:** The `updateProjects()` function combines this search with category selection and ordering.

HTML assigns `data-category="networking"` to RouterRepair and `data-category="ai"` to Academic Copilot. The filter options are All Projects, Networking, and Artificial Intelligence. Sort options are Default Order, Name A–Z, and Name Z–A.

### Processing sequence

1. Read the search input, selected category, and sort option.

2. Use `filter()` to retain cards matching both search text and category.

3. Use `localeCompare()` to sort matching cards by their `h3` title, or restore the saved original order.

4. Set each card's `hidden` property according to whether it matches.

5. Reorder visible cards in `.projects-container` with `appendChild()`.

6. Show `#no-projects-message` when there are no matches.

```javascript

const matchesSearch = card.textContent.toLowerCase().includes(searchText);

const matchesCategory = selectedCategory === "all" || card.dataset.category === selectedCategory;

return matchesSearch && matchesCategory;

```

The `input` event updates results as the user types; `change` events update them when either select menu changes. The original DOM card elements are reused, preserving their existing CSS classes and content. The current implementation does not persist filter or sort selections across reloads; they are interaction state for the current page session.

## 6. GitHub REST API — New in Assignment 3

The portfolio requests public repositories for `Norahaldiri5`:

```http

GET https://api.github.com/users/Norahaldiri5/repos?per_page=100

```

`loadGithubRepos()` is an asynchronous function using `fetch()` and `await`. It checks `response.ok`, parses JSON, and filters repository names with the case-insensitive pattern:

```javascript

/^202353070-NorahAldiri-Assignment[0-9]+$/i

```

This includes matching numbered assignment repositories and excludes unrelated repositories, including the lab repository. It depends on the naming convention and the first page of up to 100 public repositories; repositories outside that page or with different names will not appear.

For each matching repository, JavaScript creates an `article.github-card` containing a link, description, star count, update date, and detected languages. The languages are retrieved separately through the repository's `languages_url` endpoint and displayed as a joined list, such as `HTML · CSS · JavaScript` when those languages are reported by GitHub. GitHub's language results describe recognized source files, not necessarily every technology used.

The script uses `textContent` for externally supplied text, and external links include `target="_blank"` and `rel="noopener noreferrer"`.

### Loading and error states

- Before fetching, the page shows ****Loading repositories...****

- If the repository request fails or returns a non-success HTTP status, a user-friendly error and ****Try Again**** button appear.

- If no repositories match the naming pattern, ****No assignment repositories found.**** appears.

- If a languages request fails, the card remains visible with ****Languages unavailable****.

- Errors are also logged to the developer console using `console.error()`.

Public GitHub API calls do not require a token for this implementation, but they are subject to GitHub's unauthenticated rate limits. An internet connection is needed for live results. The site does not embed API secrets.

## 7. Contact Form Validation — Existing from Assignment 2

The contact form contains Name, Email, and Message fields. `novalidate` allows custom JavaScript feedback. A submit handler calls `preventDefault()`, trims inputs, and checks that all fields are nonempty and the email has a basic valid structure.

```javascript

/^[^\s@]+@[^\s@]+.[^\s@]+$/

```

Errors appear next to the relevant field and previous messages are cleared on each attempt. A valid submission displays a confirmation message and resets the form. No email is sent, and no submitted message is stored in a backend. Feedback elements use `aria-live` where provided in HTML.

## 8. Reveal Animation — Existing from Assignment 2

`IntersectionObserver` watches `.project-card` elements. Cards initially receive `reveal-pending`; when visible, the script removes it, adds `reveal-visible`, and stops observing the card. CSS transitions animate opacity and vertical movement. When the user prefers reduced motion, the reveal effect is skipped. The new filtering/sorting feature retains the same card elements; animation behavior should be checked after sorting and filtering.

The new GitHub cards use a hover transform but are not part of the existing project-card scroll reveal animation.

## 9. Responsive Design and Accessibility

The original layout uses responsive media queries, including a breakpoint at `768px` that stacks project cards vertically. Assignment 3 adds `.project-controls`, which stack vertically below `600px`, and a GitHub CSS Grid with responsive columns. Project images use descriptive `alt` text, form inputs use associated labels, and the theme toggle updates its `aria-label`. The interface uses visible focus styles and reduced-motion support.

The GitHub navigation link adds a fourth navigation item; its spacing should be checked on narrow screens to ensure no unintended horizontal overflow.

## 10. Performance Optimization — Assignment 3

Project images use native `loading="lazy"` to defer loading when appropriate. The existing image assets were inspected locally: `academic-copilot.jpg` was approximately 52 KB and `route-repair.jpg` approximately 140 KB; the theme icons were approximately 4 KB each. No additional image compression was required based on those sizes.

The site uses no JavaScript framework or bundler, and CSS variables help avoid duplicated theme rules. Lighthouse was run locally in Chrome DevTools; a later screenshot showed Performance ****100/100****, Accessibility ****100/100****, Best Practices ****100/100****, and SEO ****91/100****. These are environment-dependent measurements, not guarantees across browsers, devices, or network conditions. The earlier Lighthouse run reported a browser-cache clearing timeout; repeating the run produced the later results.

## 11. Verification and Test Cases

The table below describes expected behavior. A test case listed here should not be interpreted as executed unless its result has been observed and recorded.

| Area | Test | Expected behavior |
|---|---|---|
| Search | Enter `network` | RouterRepair matches. |
| Search | Enter an unrelated keyword | Empty-state message appears. |
| Filter | Select Networking | Only RouterRepair remains. |
| Filter | Select Artificial Intelligence | Only Academic Copilot remains. |
| Sort | Select A–Z | Academic Copilot precedes RouterRepair. |
| Sort | Select Z–A | RouterRepair precedes Academic Copilot. |
| Combined logic | Search `academic` while filtering Networking | No matching projects. |
| Reset | Clear search, select All Projects and Default Order | Both cards return in their original order. |
| Theme | Select Light Mode and refresh | Light Mode remains selected. |
| Form | Submit empty fields or malformed email | Appropriate inline errors appear. |
| Form | Submit valid values | Confirmation appears; fields reset; no email is sent. |
| GitHub | API responds successfully | Matching assignment repositories and metadata appear. |
| GitHub | Repository API request fails | Error message and retry button appear. |
| GitHub | Language endpoint fails | Card displays Languages unavailable. |
| Animation | Scroll to Projects | Cards reveal when visible, unless reduced motion is enabled. |
| Mobile | Inspect narrow viewport | Project cards and controls stack; no unwanted overflow. |

During development, the project reveal behavior was observed working, responsive/mobile inspection was performed, and Lighthouse results were captured. Complete cross-browser testing (Safari, Firefox, Edge) and deliberate API failure simulations should be recorded only after they are actually performed.

## 12. Known Constraints and Future Work

- The contact form validates inputs but does not transmit messages.

- GitHub results depend on external service availability, rate limits, repository naming, and pagination.

- The GitHub language endpoint adds a separate request for each displayed repository.

- Filter and sort selections are not saved across reloads; only the theme preference is persistent.

- Future enhancements could include a secure contact-form service, additional academic projects, repository pagination, and deployment to GitHub Pages.

## 13. Code Quality and Maintainability

The portfolio follows several practices to improve code readability, organization, and maintainability:

- **Separation of Concerns:** HTML defines the page structure, CSS handles styling and responsive layouts, and JavaScript manages interactions and application logic.
- **Code Organization:** JavaScript functionality is divided into clearly labeled sections for theme management, project search/filter/sort, contact form validation, reveal animations, and GitHub API integration.
- **Meaningful Naming:** Variables and functions use descriptive names, such as `updateProjects()`, `loadGithubRepos()`, and `projectFilter`.
- **Reusable Logic:** Search, filtering, and sorting are combined into a single `updateProjects()` function to reduce duplicated code.
- **Consistent Styling:** CSS custom properties are reused across components to maintain consistent colors and support light and dark themes.
- **Error Handling:** GitHub API requests use `try/catch` blocks, while form validation provides clear feedback for invalid inputs.
- **Maintainability:** The project uses a simple folder structure and vanilla JavaScript without unnecessary frameworks or dependencies.

## 14. AI Use and Academic Integrity

ChatGPT was used during Assignment 3 for feature planning, code explanations, code review, debugging, and documentation support. AI-assisted changes must be reviewed and understood by the student. The detailed usage log, declaration, and evidence inventory belong in [AI Usage Report](ai-usage-report.md). Full unedited conversations and intermediate AI outputs must be submitted separately as the required Blackboard evidence ZIP, not committed to the repository.