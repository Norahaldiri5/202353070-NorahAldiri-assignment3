# AI Usage Report — Assignment 2

## 1. Tools Used & Use Cases

### ChatGPT (GPT-6)

I used ChatGPT as an AI-assisted development tool to enhance my personal portfolio website for SWE 363 Assignment 2.

The main use cases included:

- **Feature Planning:** Identifying interactive features that meet the assignment requirements while maintaining the original portfolio design.
- **Dynamic Content:** Generating and explaining HTML, CSS, and JavaScript for Live Project Search, including filtering and empty-state feedback.
- **Data Handling:** Extending the existing light/dark theme toggle using `localStorage` to save and restore user preferences.
- **Form Validation:** Generating validation logic for the Name, Email, and Message fields, including inline error messages and confirmation feedback.
- **Animations:** Generating and explaining fade-in and slide-up animations using CSS transitions and the `IntersectionObserver` API.
- **Code Review and Debugging:** Reviewing code structure, identifying possible errors, and resolving the interaction between reveal animations and existing hover effects.
- **Documentation:** Assisting with drafting and improving the README, technical documentation, and AI usage report.
- **Development Workflow:** Providing step-by-step guidance for repository setup, Git commits, and feature testing.

ChatGPT provided code suggestions, implementation examples, explanations, and documentation drafts throughout the development process.

I incorporated these suggestions into my existing portfolio and tested the resulting functionality.

## 2. Benefits & Challenges

### Benefits

Using ChatGPT helped me extend the portfolio developed in Assignment 1 without rebuilding the website from scratch.

It provided step-by-step explanations of JavaScript concepts and helped me understand how to make the website more interactive.

For example, when implementing Live Project Search, I learned how `addEventListener("input")`, `toLowerCase()`, and `includes()` can be combined to filter project cards dynamically based on user input.

ChatGPT also helped me understand how `localStorage` can preserve theme preferences after refreshing or reopening the website.

For the contact form, AI assistance helped explain how to validate inputs, prevent default form submission, and display appropriate error and confirmation messages.

Additionally, I learned how `IntersectionObserver` works with CSS transitions to create smooth animations without external libraries.

### Challenges

One challenge was integrating new features into the existing portfolio without affecting its original functionality or design.

The JavaScript file already contained the theme toggle, so I needed to extend it while keeping the existing behavior working correctly.

Another challenge was ensuring that Live Project Search remained functional after adding reveal animations to the project cards.

The reveal animation initially interfered with the existing project card hover effect, requiring an additional CSS adjustment.

I also needed to make sure that the contact form displayed meaningful feedback and that its success message did not incorrectly suggest that an actual email had been sent.

These challenges showed me that AI-generated suggestions need to be reviewed, understood, and tested.

## 3. Learning Outcomes

Using ChatGPT during Assignment 2 helped me develop a better understanding of JavaScript, DOM manipulation, and interactive web development.

### Dynamic Content

I learned how to use event listeners to detect user input and dynamically update the visibility of project cards.

I also learned how to implement case-insensitive searching and display an empty-state message when no results match.

### Data Handling

I learned how to use `localStorage.setItem()` and `localStorage.getItem()` to store and retrieve user preferences.

This helped me understand how browser storage can improve user experience without requiring a backend.

### Form Validation and Feedback

I learned how to use `event.preventDefault()`, `trim()`, and regular expressions to validate form inputs.

I also improved my understanding of how to display inline error messages and confirmation feedback without reloading the page.

### Animation and Accessibility

I learned how CSS transitions and the `IntersectionObserver` API can create smooth animations when elements enter the viewport.

I also learned why `prefers-reduced-motion` is important for users who prefer fewer animations.

### Development Workflow

I improved my ability to organize code changes into meaningful Git commits and document technical implementations.

I also became more comfortable testing new features independently before integrating them into the final website.

## 4. Responsible Use & Modifications

I used ChatGPT to generate and explain code for several interactive features and to assist with documentation.

The generated suggestions were integrated into the existing portfolio rather than replacing the original website.

The main adaptations and integration activities included:

- **Live Project Search:** Reused the existing project cards and added a search input instead of rebuilding the Projects section.
- **Theme Persistence:** Extended the original theme toggle using `localStorage` while preserving the existing theme icons and accessibility labels.
- **Contact Form Validation:** Added validation and feedback to the existing form instead of replacing it with a new form.
- **User Feedback:** Used a confirmation message that accurately explains that the form is a demonstration and does not send emails.
- **Project Animation:** Applied reveal animations to the existing project cards and included reduced-motion support.
- **Hover Effect Fix:** Adjusted the CSS to restore the existing hover movement after introducing the reveal animation.
- **Visual Consistency:** Used the existing CSS variables and design structure to keep the new features consistent with the original portfolio.
- **Documentation:** Incorporated AI-assisted drafts into the existing README and technical documentation.

I reviewed the implementation and tested the interactive features in the browser, including project searching, theme switching, form validation, and animation behavior.

I also tested the responsive layout using browser developer tools and a mobile device.

The original portfolio structure and project content from Assignment 1 were preserved.

## 5. AI Usage Log

The following log documents my use of ChatGPT during Assignment 2.

| ID | Tool (Model) | Date | Purpose | Files Affected | What Was Changed and How It Was Verified |
|---|---|---|---|---|---|
| C01 | ChatGPT (GPT-6) | October 12, 2026 | Feature planning, code generation, debugging, documentation, and testing guidance | `index.html`, `css/styles.css`, `js/script.js`, `README.md`, `docs/technical-documentation.md`, `docs/ai-usage-report.md` | Integrated AI-assisted features into the existing portfolio, reviewed generated suggestions, tested functionality in the browser, and documented the implementation. |

### Conversation Evidence

**Evidence ID:** C01

**Tool:** ChatGPT (GPT-6)

**Date:** October 12, 2026

**Topic:** SWE 363 — Assignment 2: Interactive Features

**Evidence File:** `conversations/C01_Norah_ChatGPT_Assignment2.pdf`

I use a single ongoing ChatGPT conversation for my SWE 363 coursework, including studying, practice exercises, labs, and assignments.

Since this conversation covers multiple course activities, I extracted the complete Assignment 2 discussion into a separate 78-page PDF for submission. The extracted section preserves the original messages without editing or summarizing their content.

This approach keeps the evidence focused on Assignment 2 while maintaining transparency about the source of the conversation.

### AI-Generated Artifacts

The AI-generated code and documentation suggestions covered:

- Live Project Search implementation.
- Theme preference persistence using `localStorage`.
- Contact form validation and feedback.
- Project reveal animations.
- Hover effect debugging and CSS adjustments.
- README documentation.
- Technical documentation.
- AI usage documentation.

The original AI suggestions are recorded in the conversation evidence. The corresponding final implementations are available in the GitHub repository and its commit history.

## 6. AI-Assisted Git Commits

The following commits were completed with ChatGPT assistance.

| Commit Hash | Commit Message | AI Assistance |
|---|---|---|
| `1cdbaa2` | Add live project search with empty state feedback | HTML, CSS, and JavaScript implementation of live project filtering and empty-state feedback |
| `b1bd4e6` | Persist theme preference using localStorage | JavaScript logic for saving and restoring theme preferences |
| `ddd6eb5` | Add contact form validation and user feedback | Form validation, error messages, and success feedback |
| `32ea509` | Add scroll reveal animation to project cards | CSS transitions and IntersectionObserver implementation |
| `a4936bc` | Update README for Assignment 2 interactive features | Documentation drafting and organization |
| `301d948` | Update technical documentation for Assignment 2 | Technical explanations of the interactive features |
| `69b2b4d` | Update AI usage report for Assignment 2 | AI usage documentation and learning reflections |
| `996b352` | Fix project card hover effect after reveal animation | Debugging and CSS adjustments |

All commits listed above were created on October 12, 2026.

The original commit messages did not include an explicit AI credit trailer. This section documents the AI assistance associated with those commits while preserving the original Git commit history.

The repository setup commits imported existing Assignment 1 files and established the starting structure for Assignment 2.

## 7. AI Usage Declaration

**Student Name:** Norah Al Diri

**Student ID:** 202353070

**Course:** SWE 363 — Web Engineering and Development

**Assignment:** Assignment 2 — Interactive Features

**Date:** October 19, 2026

### Declaration

I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

**Student Signature:** Norah Al Diri

**Date Signed:** October 19, 2026

## 8. Evidence Submission

The AI evidence for Assignment 2 is organized separately from the GitHub repository.

The evidence package is named:

`202353070-NorahAldiri-Assignment2-ai-evidence.zip`

The package includes the Assignment 2 conversation evidence in the `conversations/` folder and supporting AI-generated artifacts in the `artifacts/` folder.

The conversation evidence documents the AI-generated suggestions and development discussions, while the GitHub commit history provides the final implementation and documentation changes.

The AI Evidence ZIP is submitted through Blackboard with the Assignment 2 repository link and is not committed to the repository.