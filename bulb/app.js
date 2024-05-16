document.addEventListener("DOMContentLoaded", function() {
    const bulbImage = document.getElementById("div-container"); // Corrected ID
    const onButton = document.querySelector(".on-button");
    const offButton = document.querySelector(".off-button");

    // Set initial state to off
    bulbImage.src = "./assets/two_bulbs.2-removebg-preview.png";
    bulbImage.style.display = "block"; // Make sure image is displayed

    onButton.addEventListener("click", function() {
        bulbImage.src = "./assets/two_bulbs.1-removebg-preview.png";
        bulbImage.style.display = "block";
    });

    offButton.addEventListener("click", function() {
        bulbImage.src = "./assets/two_bulbs.2-removebg-preview.png";
        bulbImage.style.display = "block";
    });
});
