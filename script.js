document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');
    const moveLeftBtn = document.querySelector('.move-left');
    const moveRightBtn = document.querySelector('.move-right');
    
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