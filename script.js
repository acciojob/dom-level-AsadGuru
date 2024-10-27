//your JS code here. If required

// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Get the element with the id 'level'
    const element = document.getElementById('level');

    // Initialize a variable to count the levels
    let levelCount = 0;

    // Traverse up the DOM tree until the element is null
    let currentElement = element;
    while (currentElement) {
        levelCount++;
        currentElement = currentElement.parentElement; // Move to the parent element
    }

    // Display the result using alert
    alert(`The level of the element is: ${levelCount}`);
});
