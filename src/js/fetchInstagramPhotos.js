let currentSlide = 0;

async function fetchInstagramPhotos() {
    const accessToken = process.env.INSTAGRAM_API_KEY; // Access token from environment variable
    const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${accessToken}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the data has media
        if (data && data.data) {
            displayPhotos(data.data.slice(0, 12)); // Fetch photos
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
    photos.forEach(photo => {
        const imgElement = document.createElement('img');
        imgElement.src = photo.media_url;
        imgElement.alt = photo.caption || 'Instagram photo';
        imgElement.classList.add('object-cover', 'w-1/4', 'h-[24rem]', 'px-1');

        const link = document.createElement('a');
        link.href = photo.permalink;
        link.target = '_blank';
        link.classList.add('flex-shrink-0');
        link.style.width = '25%'; // Each image takes up 1/4 of the carousel width
        link.appendChild(imgElement);

        gallery.appendChild(link);
    });

    initCarousel();
}

function initCarousel() {
    const gallery = document.getElementById('instagram-gallery');
    const totalSlides = Math.ceil(gallery.children.length / 4); // Grouping images by 4
    let slideWidth = gallery.children[0].offsetWidth * 4; // Total width for 4 images

    window.addEventListener('resize', () => {
        slideWidth = gallery.children[0].offsetWidth * 4;
        gallery.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
    });

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
}

// Call the function to fetch and display photos when the page loads
document.addEventListener('DOMContentLoaded', fetchInstagramPhotos);