let currentSlide = 0;

async function fetchInstagramPhotos() {
  const accessToken = process.env.INSTAGRAM_API_KEY;
  const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${accessToken}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data && data.data) {
      displayPhotos(data.data.slice(0, 12));
    } else {
      console.error("No media found.");
    }
  } catch (error) {
    console.error("Error fetching Instagram photos:", error);
  }
}

function displayPhotos(photos) {
  const gallery = document.getElementById("instagram-gallery");
  gallery.innerHTML = "";

  photos.forEach((photo) => {
    const imgElement = document.createElement("img");
    imgElement.src = photo.media_url;
    imgElement.alt = photo.caption || "Instagram photo";
    imgElement.classList.add("object-cover", "px-1");

    const link = document.createElement("a");
    link.href = photo.permalink;
    link.target = "_blank";
    link.classList.add("flex-shrink-0");
    link.appendChild(imgElement);

    gallery.appendChild(link);
  });

  initCarousel();
}

function initCarousel() {
  const gallery = document.getElementById("instagram-gallery");

  const updateSlideWidth = () => {
    let imagesPerSlide = 1;

    if (window.innerWidth >= 1025) {
      imagesPerSlide = 4;
    } else if (window.innerWidth >= 641) {
      imagesPerSlide = 3;
    } else if (window.innerWidth >= 480) {
      imagesPerSlide = 2;
    }

    const slideWidth = gallery.children[0].offsetWidth * imagesPerSlide;
    const totalSlides = Math.ceil(gallery.children.length / imagesPerSlide);

    gallery.style.transform = `translateX(-${slideWidth * currentSlide}px)`;

    document.getElementById("carousel-next").onclick = () => {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        gallery.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
      }
    };

    document.getElementById("carousel-prev").onclick = () => {
      if (currentSlide > 0) {
        currentSlide--;
        gallery.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
      }
    };
  };

  window.addEventListener("resize", updateSlideWidth);
  updateSlideWidth();
}

document.addEventListener("DOMContentLoaded", fetchInstagramPhotos);
