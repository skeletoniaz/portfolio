
document.addEventListener("DOMContentLoaded", function() {
    

    const viewWorkButton = document.querySelector(".cta-btn");
    

    viewWorkButton.addEventListener("click", function(event) {
        event.preventDefault();
        

        document.querySelector("#projects").scrollIntoView({
            behavior: "smooth"
        });
    });
});
