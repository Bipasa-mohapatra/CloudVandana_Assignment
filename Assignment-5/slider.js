document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "images/image1.jpeg",
        "images/image2.jpeg",
        "images/image3.jpeg",
        "images/image4.jpeg",
        "images/image5.jpeg"
    ];

    let currentIndex = 0;
    const imgElement = document.getElementById("image");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    function showImage(index) {
        if (index < 0) {
            currentIndex = images.length - 1;
        } else if (index >= images.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        imgElement.src = images[currentIndex];
    }

    prevButton.addEventListener("click", () => showImage(currentIndex - 1));
    nextButton.addEventListener("click", () => showImage(currentIndex + 1));

    showImage(currentIndex); 
});
