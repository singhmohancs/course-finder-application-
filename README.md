
# Free Professional Course Finder

This project is a **beginner-friendly demo application** designed for learning **HTML, CSS, and JavaScript**. The **Free Professional Course Finder** allows users to filter and browse free and paid courses on various topics, and is a great way to understand basic web development concepts.

## Project Overview

In this project, students will learn how to:
- Structure web pages using **HTML**.
- Style pages and components using **CSS**.
- Use **JavaScript** to dynamically load, filter, and display data from a JSON file.

This project serves as a foundation for understanding how web applications function, and how we can build interactive pages with basic front-end technologies.

## Features

- **Filter Courses by Category and Price**: Users can filter courses by selecting a topic and whether they want free or paid courses.
- **View All Courses by Default**: By default, all courses are displayed under the filters on the homepage.
- **Hide and Show Filters**: The filter form is hidden when displaying course results, with a "Back" button to return to the filter options.
- **Dynamic Content**: Course data is loaded from a JSON file, demonstrating how to fetch and display external data.

## Technologies Used

- **HTML**: For structuring the content of the application.
- **CSS**: For styling and layout of the application.
- **JavaScript**: For interactivity, filtering, and dynamically displaying course data.
- **JSON**: Data format used to store and load course information.

## File Structure

```plaintext
.
├── index.html        # Main HTML file
├── style.css         # CSS file for styling
├── script.js         # JavaScript file for functionality
└── /data/course.json.json  # JSON file containing course data
```

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- **Text Editor**: You can use any text editor like Visual Studio Code, Sublime Text, or Atom.
- **Browser**: Any modern web browser (Chrome, Firefox, etc.) to view the application.

### Installation

1. **Clone the Repository** (if provided via Git):
   ```bash
   git clone https://github.com/your-username/free-course-finder.git
   ```

2. **Open the Project Folder** in your text editor.

3. **Open `index.html` in a Browser**:
   - You can right-click on `index.html` and select "Open with Browser" (if your text editor supports it).
   - Or, open `index.html` by double-clicking it from your file explorer.

## Project Structure and Explanation

- **`index.html`**: 
  - This file contains the structure of the webpage, including headers, buttons, dropdowns, and divs for displaying content.
  - The header and filter form are designed to introduce students to HTML tags and layout concepts.

- **`style.css`**: 
  - This file styles the elements in `index.html`. 
  - It covers concepts like positioning, flexbox, buttons, and typography.
  - The file also includes some basic responsive design techniques, ideal for beginners learning CSS.

- **`script.js`**: 
  - This file contains JavaScript code to handle interactivity, filter courses, and load data from a JSON file.
  - It teaches how to use functions, event listeners, conditionals, loops, and `fetch` for loading external data.

- **`data.json`**: 
  - A JSON file that holds course information, structured with different categories and prices.
  - This teaches students about JSON as a data format and demonstrates how to work with external data in a web project.

## How to Use the Application

1. **View All Courses**:
   - When you first open the page, all courses will be displayed by default under the filter form.

2. **Filter Courses**:
   - Select a **Topic** (Business, Technology, or Marketing) and a **Price** (Free or Paid).
   - Click on the "Find Courses" button to view the filtered results.

3. **Back Button**:
   - When courses are displayed, the filter form will hide, and a "Back" button will appear.
   - Click the "Back" button to return to the filter form and view all courses again.

## Key Concepts for Learning

This project covers the following key concepts in web development:

### HTML
- Using **semantic elements** like `<header>`, `<button>`, and `<select>`.
- Structuring content with **divs and headings**.
- Creating a **form for filtering** content with dropdowns and buttons.

### CSS
- **Styling elements** with classes, ids, and attributes.
- Using **flexbox** for layout control.
- Styling **buttons, forms, and cards** to make a visually appealing UI.

### JavaScript
- **DOM manipulation** to show and hide content dynamically.
- **Event handling** to perform actions on button clicks.
- **Filtering and displaying data** from a JSON file.
- **Using `fetch` API** to load external data from `data.json`.

### JSON
- Understanding **JSON structure** for data storage.
- **Accessing and filtering JSON data** within JavaScript.

## Project Extensions

Here are some ideas to extend this project if you're interested in exploring further:

1. **Add More Topics**: Expand the `data.json` file with more topics and categories to make filtering more complex.
2. **Sort Courses**: Implement sorting options to sort courses by duration or alphabetical order.
3. **Course Details**: Create a detailed view for each course, displaying more information when clicked.
4. **Responsive Design**: Enhance CSS to make the project look better on mobile devices.
5. **Add a Search Function**: Allow users to search for courses by title.

## License

This project is for educational purposes and is provided as-is for learning HTML, CSS, and JavaScript. You are free to use, modify, and distribute it as you wish.

## Conclusion

This **Free Professional Course Finder** project is a fantastic way to start learning web development. Through this project, students will gain a solid foundation in HTML, CSS, JavaScript, and JSON data handling. Enjoy coding, and feel free to experiment with the project as you learn!
