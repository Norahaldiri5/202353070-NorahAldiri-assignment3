
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
/* =========================
   Save Theme Preference
========================= */
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light") {
   document.body.classList.add("light-mode");
   themeIcon.src = "assets/images/moon.png";
   themeToggle.setAttribute("aria-label", "Switch to dark mode");
}
themeToggle.addEventListener("click", function () {
   document.body.classList.toggle("light-mode");
   localStorage.setItem(
      "portfolio-theme",
      document.body.classList.contains("light-mode") ? "light" : "dark"
   );
   if (document.body.classList.contains("light-mode")) {
      themeIcon.src = "assets/images/moon.png";
      themeToggle.setAttribute(
         "aria-label",
         "Switch to dark mode"
      );
   }
   else {
      themeIcon.src = "assets/images/sun.png";
      themeToggle.setAttribute(
         "aria-label",
         "Switch to light mode"
      );
   }
});
/* =========================
   Project Search, Filter and Sort
========================= */
const projectSearch = document.getElementById("project-search-input");
const projectFilter = document.getElementById("project-filter");
const projectSort = document.getElementById("project-sort");
const projectsContainer = document.querySelector(".projects-container");
const projectCards = Array.from(
   document.querySelectorAll(".project-card")
);
const noProjectsMessage = document.getElementById("no-projects-message");
// Save the original order of the projects
const originalProjectOrder = [...projectCards];
function updateProjects() {
   const searchText = projectSearch.value.trim().toLowerCase();
   const selectedCategory = projectFilter.value;
   const selectedSort = projectSort.value;
   // Filter projects by search text and category
   const visibleProjects = projectCards.filter(function (card) {
      const projectText = card.textContent.toLowerCase();
      const category = card.dataset.category;
      const matchesSearch = projectText.includes(searchText);
      const matchesCategory =
         selectedCategory === "all" ||
         category === selectedCategory;
      return matchesSearch && matchesCategory;
   });
   // Sort projects by name or restore the original order
   if (selectedSort === "az" || selectedSort === "za") {
      visibleProjects.sort(function (a, b) {
         const nameA = a.querySelector("h3").textContent.trim();
         const nameB = b.querySelector("h3").textContent.trim();
         return selectedSort === "az"
            ? nameA.localeCompare(nameB)
            : nameB.localeCompare(nameA);
      });
   } else {
      visibleProjects.sort(function (a, b) {
         return (
            originalProjectOrder.indexOf(a) -
            originalProjectOrder.indexOf(b)
         );
      });
   }
   // Hide projects that do not match
   projectCards.forEach(function (card) {
      card.hidden = !visibleProjects.includes(card);
   });
   // Update the order of project cards
   visibleProjects.forEach(function (card) {
      projectsContainer.appendChild(card);
   });
   // Show a message when no projects match
   noProjectsMessage.hidden = visibleProjects.length > 0;
}
projectSearch.addEventListener("input", updateProjects);
projectFilter.addEventListener("change", updateProjects);
projectSort.addEventListener("change", updateProjects);
updateProjects();
/* =========================
   Contact Form Validation
========================= */
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (event) {
   event.preventDefault();
   const name = document.getElementById("name").value.trim();
   const email = document.getElementById("email").value.trim();
   const message = document.getElementById("message").value.trim();
   const nameError = document.getElementById("name-error");
   const emailError = document.getElementById("email-error");
   const messageError = document.getElementById("message-error");
   const formFeedback = document.getElementById("form-feedback");
   // Clear previous messages
   nameError.textContent = "";
   emailError.textContent = "";
   messageError.textContent = "";
   formFeedback.textContent = "";
   let isValid = true;
   // Name validation
   if (name === "") {
      nameError.textContent = "Please enter your name.";
      isValid = false;
   }
   // Email validation
   if (email === "") {
      emailError.textContent = "Please enter your email.";
      isValid = false;
   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
   }
   // Message validation
   if (message === "") {
      messageError.textContent = "Please enter your message.";
      isValid = false;
   }
   // Show success feedback only if all fields are valid
   if (isValid) {
      formFeedback.textContent =
         "Your message has been validated successfully. This form is a demo and does not send emails.";
      contactForm.reset();
   }
});
/* =========================
   Project Reveal Animation
========================= */
if ("IntersectionObserver" in window &&
   !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
   const revealObserver = new IntersectionObserver(
      function (entries, observer) {
         entries.forEach(function (entry) {
            if (entry.isIntersecting) {
               entry.target.classList.remove("reveal-pending");
               entry.target.classList.add("reveal-visible");
               observer.unobserve(entry.target);
            }
         });
      },
      { threshold: 0.15 }
   );
   projectCards.forEach(function (card) {
      card.classList.add("reveal-pending");
      revealObserver.observe(card);
   });
}
/* =========================
   GitHub API Integration
========================= */
const githubUsername = "Norahaldiri5";
const githubReposContainer = document.getElementById("github-repos");
const githubError = document.getElementById("github-error");
const githubRetry = document.getElementById("github-retry");
// Fetch public repositories from GitHub
async function loadGithubRepos() {
  githubReposContainer.innerHTML = "<p>Loading repositories...</p>";
  githubError.hidden = true;
  githubRetry.hidden = true;
  try {
    const response = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?per_page=100`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }
    const repos = await response.json();
    // Show only portfolio assignment repositories
    const assignmentRepos = repos.filter((repo) =>
      /^202353070-NorahAldiri-Assignment[0-9]+$/i.test(repo.name)
    );
    githubReposContainer.innerHTML = "";
    if (assignmentRepos.length === 0) {
      githubReposContainer.textContent =
        "No assignment repositories found.";
      return;
    }
    for (const repo of assignmentRepos) {
      const card = document.createElement("article");
      card.className = "github-card";
      const title = document.createElement("a");
      title.href = repo.html_url;
      title.target = "_blank";
      title.rel = "noopener noreferrer";
      title.textContent = repo.name;
      const description = document.createElement("p");
      description.textContent =
        repo.description || "Public GitHub repository";
      const details = document.createElement("p");
      details.textContent =
        `Stars: ${repo.stargazers_count} | Updated: ${
          new Date(repo.updated_at).toLocaleDateString()
        }`;
      const languages = document.createElement("p");
      languages.textContent = "Loading languages...";
      card.append(title, description, details, languages);
      githubReposContainer.appendChild(card);
      try {
        const langResponse = await fetch(repo.languages_url);
        if (!langResponse.ok) {
          throw new Error("Failed to fetch languages");
        }
        const languageData = await langResponse.json();
        const languageNames = Object.keys(languageData);
        languages.textContent = languageNames.length
          ? `Languages: ${languageNames.join(" · ")}`
          : "Languages: Not specified";
      } catch (error) {
        console.error("Language API Error:", error);
        languages.textContent = "Languages unavailable";
      }
    }
  } catch (error) {
    console.error("GitHub API Error:", error);
    githubReposContainer.innerHTML = "";
    githubError.hidden = false;
    githubRetry.hidden = false;
  }
}
githubRetry.addEventListener("click", loadGithubRepos);
loadGithubRepos();
