// script.js

// Track the number of sections that have been loaded
let sectionCount = 4; // We already have 4 initial sections (3 + 1 dynamic container)
const dynamicContainer = document.getElementById("dynamic-content");

// Function to create a new portfolio section dynamically
function createNewSection() {
    const newSection = document.createElement("div");
    newSection.classList.add("portfolio-section");
    
    // Simple content for the new section
    newSection.innerHTML = `
        <h1>New Section ${sectionCount}</h1>
        <p>This is section number ${sectionCount} of your portfolio.</p>
    `;
    
    dynamicContainer.appendChild(newSection);
    sectionCount++;
}

// Function to detect scroll position and load new sections
function handleScroll() {
    // If user scrolls to the bottom, load more content
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 1) {
        createNewSection();
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial content
createNewSection(); // Create the first dynamic section when the page loads
