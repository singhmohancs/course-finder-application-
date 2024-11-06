let courses = [];

// Fetch data from JSON file and display all courses by default
window.onload = async function() {
  try {
    const response = await fetch("./data/course.json");
    courses = await response.json();
    displayCourses(courses, 3); // Display all courses by default
  } catch (error) {
    console.error("Error loading course data:", error);
  }
};

function findCourses() {
  const topic = document.getElementById("topic").value;
  const filter = document.getElementById("filter").value;

  // Filter courses based on user selection
  const filteredCourses = courses.filter(course =>
    course.category === topic && course.price === filter
  );

  // Hide filter section and show back button
  document.getElementById("filter-section").style.display = "none";
  document.getElementById("back-button").style.display = "block";

  // Display filtered courses or a "No course found" message
  displayCourses(filteredCourses.length ? filteredCourses : null);
}

function displayCourses(courseList, count) {
  const resultsSection = document.getElementById("results");
  resultsSection.innerHTML = ""; // Clear previous results

  if(count){
    courseList = courseList.splice(0, count);
  }

  if (!courseList || courseList.length === 0) {
    resultsSection.innerHTML = "<p>No course found.</p>";
  } else {
    courseList.forEach(course => {
      const courseCard = document.createElement("div");
      courseCard.className = "course-card";
      
      courseCard.innerHTML = `
        <h3>${course.title}</h3>
        <p>By: ${course.provider}</p>
        <p>Duration: ${course.duration}</p>
        ${course.price === "Free" ? '<span class="free-badge">FREE</span>' : ''}
      `;
      
      resultsSection.appendChild(courseCard);
    });
  }
}

function showFilterSection() {
  // Show filter section and hide back button
  document.getElementById("filter-section").style.display = "flex";
  document.getElementById("back-button").style.display = "none";
  document.getElementById("results").innerHTML = ""; // Clear course results

  // Show all courses by default under filters
  displayCourses(courses);
}
