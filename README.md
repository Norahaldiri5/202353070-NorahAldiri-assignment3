# 202353070-NorahAldiri-Assignment3

## Personal Portfolio Website — Advanced Functionality

A responsive and interactive personal portfolio website developed for **SWE 363: Web Engineering and Development** at King Fahd University of Petroleum and Minerals (KFUPM).

This project builds upon Assignments 1 and 2 by integrating an external API, implementing advanced project filtering and sorting, and improving website performance while preserving the original design and functionality.

The portfolio introduces me as a Software Engineering student specializing in Cloud Computing and showcases my academic projects, technical interests, and contact information.

## Features

### Core Portfolio Features — Assignment 1

- About Me section introducing my academic background and interests.
- Academic project showcase featuring RouterRepair: Network Detective and Academic Copilot.
- Contact section with email and GitHub links.
- Responsive design for desktop, tablet, and mobile screens.
- Sticky navigation with smooth scrolling.
- Light and dark theme toggle.
- Accessible labels, descriptive image text, and interactive hover effects.

### Interactive Features — Assignment 2

- **Live Project Search:** Dynamically searches project names, course information, and descriptions.
- **Persistent Theme Preference:** Uses `localStorage` to remember the selected theme across page reloads.
- **Contact Form Validation:** Checks required fields and email format, displays inline errors, and provides confirmation feedback.
- **Scroll Reveal Animation:** Uses `IntersectionObserver` to animate project cards when they enter the viewport, while respecting reduced-motion preferences.

### Advanced Features — Assignment 3

**1. GitHub API Integration**

- Fetches public repository information using the GitHub REST API.
- Displays only repositories matching the academic assignment naming pattern.
- Shows repository names, descriptions, star counts, and update dates.
- Fetches and displays programming languages detected for each repository.
- Handles API failures with a user-friendly message and retry button.
- Provides direct links to GitHub repositories.

**2. Project Filtering and Sorting**

- Filters projects by Networking or Artificial Intelligence.
- Sorts projects alphabetically from A to Z or Z to A.
- Restores the original project order when Default Order is selected.
- Combines live search, category filtering, and sorting.
- Displays a message when no projects match the selected criteria.

**3. State Management**

- Preserves the selected light or dark theme using browser `localStorage`.
- Updates project visibility and ordering according to user selections.
- Updates the interface dynamically without reloading the page.

**4. Performance Improvements**

- Uses native lazy loading for project images.
- Maintains small image assets to reduce loading overhead.
- Uses vanilla JavaScript without additional front-end frameworks.
- Applies responsive layouts and reusable CSS styling.
- Evaluates performance using Chrome Lighthouse.

**5. User Experience and Error Handling**

- Includes a GitHub Repositories navigation link.
- Provides accessible labels for form fields and interactive controls.
- Displays validation feedback for invalid contact form submissions.
- Handles GitHub API request errors and unavailable language data.
- Preserves existing animations and theme functionality.

## Technologies Used

- **HTML5:** Semantic structure, navigation, project cards, and forms.
- **CSS3:** Responsive layouts, custom properties, themes, and animations.
- **JavaScript (ES6):** DOM manipulation, asynchronous requests, filtering, sorting, and validation.
- **GitHub REST API:** External repository and programming-language data.
- **Web Storage API:** Theme preference persistence using `localStorage`.
- **Intersection Observer API:** Scroll-triggered project animations.
- **Git and GitHub:** Version control and repository hosting.
- **Visual Studio Code:** Development environment.
- **Chrome DevTools and Lighthouse:** Performance and accessibility evaluation.

## Project Structure

```text
202353070-NorahAldiri-assignment3/
├── assets/
│   └── images/
│       ├── academic-copilot.jpg
│       ├── moon.png
│       ├── route-repair.jpg
│       └── sun.png
├── css/
│   └── styles.css
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── js/
│   └── script.js
├── .gitignore
├── index.html
└── README.md
```

## Setup and Running Instructions

### Requirements

- A modern web browser, such as Google Chrome, Firefox, Safari, or Microsoft Edge.
- An internet connection to retrieve live GitHub API data.
- Visual Studio Code with the Live Server extension (recommended).

No npm installation, external framework, backend server, or build process is required.

### Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Norahaldiri5/202353070-NorahAldiri-assignment3.git
   ```

2. Open the project folder in Visual Studio Code.
3. Open `index.html` using the Live Server extension.
4. Navigate through About Me, Projects, GitHub Repositories, and Contact.
5. Use the search field, category filter, and sorting menu to explore projects.
6. Switch between light and dark modes to test theme persistence.
7. Test contact form validation and GitHub repository loading.

The portfolio can also be opened directly through `index.html`, although Live Server is recommended for local development.

## Testing and Performance

The website was evaluated locally using Chrome DevTools and Lighthouse.

### Lighthouse Results

| Category | Score |
|---|---:|
| Performance | 100/100 |
| Accessibility | 100/100 |
| Best Practices | 100/100 |
| SEO | 91/100 |

These scores represent a local Lighthouse test and may vary depending on the browser, device, network conditions, and testing environment.

### Functional Testing

The following functionality is included for verification:

- Search, filter, and sort project cards individually and in combination.
- Display an appropriate message when no projects match.
- Preserve theme preference after refreshing the page.
- Validate empty fields and invalid email addresses in the contact form.
- Display repository data and programming languages from GitHub.
- Handle API failures and retry requests.
- Display project images and responsive layouts on different screen sizes.
- Preserve project reveal animations and navigation functionality.

**Note:** The contact form is a front-end demonstration. It validates user input but does not send emails or store submitted messages.

## AI Usage

ChatGPT (GPT-6) was used to support feature planning, code generation, explanations, code review, debugging, CSS improvements, performance optimization, and documentation.

AI assistance included implementing GitHub API integration, combining project search with filtering and sorting, reviewing code suggestions, and improving the documentation structure.

AI-generated suggestions were reviewed and adapted during development. The development process, modifications, verification activities, and AI conversations are documented in the AI Usage Report.

See [AI Usage Report](docs/ai-usage-report.md).

The complete AI conversation evidence and intermediate AI-generated artifacts are submitted separately through Blackboard, as required by the assignment instructions.

## Technical Documentation

For implementation details, application logic, API handling, state management, performance considerations, and testing information, see [Technical Documentation](docs/technical-documentation.md).

## Author

**Norah Al Diri**  
Student ID: 202353070  
Software Engineering Student  
Cloud Computing Concentration  
King Fahd University of Petroleum and Minerals (KFUPM)