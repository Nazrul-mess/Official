let currentImageIndex = 0;
const images = document.querySelectorAll('.images-section img');
const totalImages = images.length;

function showNextImage() {
    // Hide the current image
    images[currentImageIndex].classList.remove('active');

    // Move to the next image, or reset to the first if at the end
    currentImageIndex = (currentImageIndex + 1) % totalImages;

    // Show the new image
    images[currentImageIndex].classList.add('active');
}

// Change images every 3 seconds
setInterval(showNextImage, 3000);
