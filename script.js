// Wait for the HTML elements to load before executing code
document.addEventListener("DOMContentLoaded", function() {
    
    // Select the "View My Work" anchor link button using its class
    const viewWorkButton = document.querySelector(".cta-btn");
    
    // Listen for a mouse click on that button
    viewWorkButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent standard instant page jump behavior
        
        // Locate the target section and scroll down smoothly
        document.querySelector("#projects").scrollIntoView({
            behavior: "smooth"
        });
    });
});
