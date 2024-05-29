document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');
    const moveLeftBtn = document.querySelector('.prev');
    const moveRightBtn = document.querySelector('.next');
    
    moveLeftBtn.addEventListener('click', function () {
        gallery.scrollBy({
            left: -100,
            behavior: 'smooth'
        });
    });
    
    moveRightBtn.addEventListener('click', function () {
        gallery.scrollBy({
            left: 100,
            behavior: 'smooth'
        });
    });
});
const imageContainer = document.querySelector('.image-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const images = document.querySelectorAll('.image-container img');

let currentIndex = 0;
const scrollAmount = images[0].offsetWidth + 20; // Width of one image plus some margin

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  imageContainer.scrollLeft -= scrollAmount;
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  imageContainer.scrollLeft += scrollAmount;
});
// function moveImages(direction) {
// 	const container = document.querySelector('.image-container');
// 	const images = container.querySelectorAll('.image');
// 	const firstImage = images[0];
// 	const lastImage = images[images.length - 1];
// 	const containerWidth = container.offsetWidth;
// 	const imageWidth = firstImage.offsetWidth;

// 	if (direction === 1) {
// 		container.scrollLeft += containerWidth - imageWidth;
// 	} else if (direction === -1) {
// 		container.scrollLeft -= containerWidth - imageWidth;
// 	}
// }
