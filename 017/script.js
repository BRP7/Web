let currentPage = 0;  // Track the current page
const pages = document.querySelectorAll('.page');
const container = document.querySelector('.container');
let isScrolling = false;  // Flag to prevent multiple scroll events
let scrollTimeout = null;  // Timeout for throttling scroll events

// Function to handle the page switching
function switchPage() {
    container.style.transform = `translateX(-${currentPage * 100}%)`;
}

// Throttle scroll events to ensure only one page move per scroll action
document.addEventListener('wheel', (event) => {
    // If already scrolling, ignore further scroll events
    if (isScrolling) return;

    isScrolling = true;  // Set the flag to prevent multiple scrolls

    // Clear previous timeout if there was one
    clearTimeout(scrollTimeout);

    // Trigger page transition after a short delay to throttle the scroll events
    scrollTimeout = setTimeout(() => {
        // Handle scroll direction
        if (event.deltaY > 0) {
            // Scroll Down -> Move to the next page
            currentPage++;
            if (currentPage >= pages.length) {
                currentPage = 0;  // Loop back to the first page after the last one
            }
        } else {
            // Scroll Up -> Move to the previous page
            currentPage--;
            if (currentPage < 0) {
                currentPage = pages.length - 1;  // Loop back to the last page from the first one
            }
        }

        switchPage();  // Apply the page transition

        // Reset the scroll flag after a delay to allow for smooth transition
        setTimeout(() => {
            isScrolling = false;
        }, 800);  // The delay matches the duration of the transition (0.8s)
    }, 200);  // Increased delay between scroll events (200ms)
});
