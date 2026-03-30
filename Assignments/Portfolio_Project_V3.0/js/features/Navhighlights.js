const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let currentSectionId = "";

  sections.forEach((section) => {
    // Get the distance from the top of the document to the section
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // Check if the current scroll position is within this section
    // (Subtracting 100px acts as an offset so it triggers a bit earlier)
    if (window.scrollY >= sectionTop - 100) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    // Remove highlight from all links
    link.style.color = "gray";
    link.style.borderRight = "none";

    // Add highlight to the active link
    if (link.getAttribute("href").includes(currentSectionId)) {
      link.style.color = "#007bff"; // Active Blue
      link.style.borderRight = "3px solid #007bff";
    }
  });
});