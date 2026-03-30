// 1. Store projects in an array of objects
const projects = [
  { name: "E-commerce Website", tech: "JavaScript", desc: "A full-stack online store." },
  { name: "Data Dashboard", tech: "Python", desc: "Visualizing weather patterns." },
  { name: "Mobile Fitness App", tech: "React Native", desc: "Track your daily steps." },
  { name: "Portfolio Theme", tech: "HTML/CSS", desc: "Minimalist design for devs." },
  { name: "AI Chatbot", tech: "Python", desc: "Natural language processing tool." }
];

const searchInput = document.getElementById('project-search');
const projectcontainer = document.getElementById('project-container');

/**
 * Function to render projects to the DOM
 */
function renderProjects(filteredList) {
  // Clear the current list
  projectcontainer.innerHTML = '';

  // If no projects match
  if (filteredList.length === 0) {
    projectcontainer.innerHTML = '<p style="color: gray;">No projects found.</p>';
    return;
  }

  // Create HTML for each project
  filteredList.forEach(project => {
    const card = document.createElement('div');
    // Inline CSS for the project card
    card.style.cssText = "border: 1px solid #ddd; padding: 15px; border-radius: 8px; width: 200px; box-shadow: 2px 2px 10px rgba(0,0,0,0.05);";
    
    card.innerHTML = `
      <h3 style="margin-top: 0; color: #333;">${project.name}</h3>
      <p style="font-size: 14px; color: #666;">${project.desc}</p>
      <span style="font-size: 12px; background: #e0e0e0; padding: 3px 8px; border-radius: 12px;">${project.tech}</span>
    `;
    projectcontainer.appendChild(card);
  });
}

// 2. Add 'input' event listener for real-time filtering
searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();

  // 3. Filter using toLowerCase() and includes()
  const filteredProjects = projects.filter(project => {
    return (
      project.name.toLowerCase().includes(searchTerm) || 
      project.tech.toLowerCase().includes(searchTerm)
    );
  });

  // 4. Re-render the results
  renderProjects(filteredProjects);
});

// Initial render of all projects
renderProjects(projects);