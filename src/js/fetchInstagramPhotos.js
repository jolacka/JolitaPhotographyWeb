let currentSlide = 0;

async function fetchInstagramPhotos() {
	const accessToken = process.env.INSTAGRAM_API_KEY; // Access token from environment variable
	const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${accessToken}`;

	try {
		const response = await fetch(apiUrl);
		const data = await response.json();

		if (data && data.data) {
			displayPhotos(data.data.slice(0, 12)); // Fetch and display up to 12 photos
		} else {
			console.error('No media found.');
		}
	} catch (error) {
		console.error('Error fetching Instagram photos:', error);
	}
}

function displayPhotos(photos) {
	const gallery = document.getElementById('instagram-gallery');
	gallery.innerHTML = ''; // Clear any existing content

	photos.forEach((photo) => {
		const imgElement = document.createElement('img');
		imgElement.src = photo.media_url;
		imgElement.alt = photo.caption || 'Instagram photo';
		imgElement.classList.add('object-cover', 'px-1'); // Basic styling for images

		const link = document.createElement('a');
		link.href = photo.permalink;
		link.target = '_blank';
		link.classList.add('flex-shrink-0');
		link.appendChild(imgElement);

		gallery.appendChild(link);
	});

	initCarousel();
}

function initCarousel() {
	const gallery = document.getElementById('instagram-gallery');
	const updateSlideWidth = () => {
		let imagesPerSlide;
		if (window.innerWidth < 640) {
			imagesPerSlide = 1;
		} else if (window.innerWidth < 1024) {
			imagesPerSlide = 2;
		} else {
			imagesPerSlide = 3;
		}
		const slideWidth = gallery.children[0].offsetWidth * imagesPerSlide;
		const totalSlides = Math.ceil(gallery.children.length / imagesPerSlide);

		document.getElementById('carousel-next').addEventListener('click', () => {
			if (currentSlide < totalSlides - 1) {
				currentSlide++;
				gallery.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
			}
		});

		document.getElementById('carousel-prev').addEventListener('click', () => {
			if (currentSlide > 0) {
				currentSlide--;
				gallery.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
			}
		});

		window.addEventListener('resize', () => {
			updateSlideWidth();
			gallery.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
		});
	};

	updateSlideWidth();
}

document.addEventListener('DOMContentLoaded', fetchInstagramPhotos);
