let reviews = []
let slideIndex = 0

function renderStars(rating) {
	const fullStar = '★' // Unicode character for filled star
	const emptyStar = '☆' // Unicode character for empty star
	const totalStars = 5

	let stars = ''

	for (let i = 0; i < totalStars; i++) {
		stars += i < rating ? fullStar : emptyStar
	}

	return stars
}

function loadReviews(review) {
	return `
    <div class="review grid grid-cols-1 md:grid-cols-6 max-w-full flex flex-col md:flex-row flex-grow shrink-0 basis-full">
      <div class="h-[18rem] sm:h-[18rem] md:h-auto lg:h-[22rem] xl:h-[24rem] col-span-2 overflow-hidden">
        <img src="${review.headshot}" alt="${review.name}" class="object-cover w-full h-full" />
      </div>
      <div class="h-[31rem] sm:h-[26rem] md:h-auto lg:h-[22rem] xl:h-[24rem] col-span-4 flex flex-col space-y-6 px-5 md:px-10 xl:px-20 py-10 bg-veryLightGray text-darkGray">
        <p class="font-serif text-brightPurple text-xl">
          ${review.name}
        </p>
        <p class="text-yellow-500">
          ${renderStars(review.rating)}
        </p>
        <p class="">
          ${review.body}
        </p>
      </div>
    </div>
  `
}

function moveSlider(e) {
	slideIndex === reviews.length - 1 ? (slideIndex = 0) : slideIndex++
	document.querySelector('.reviews').style.transform = `translate(${-100 * slideIndex}%)`
}
function moveSliderLeft() {
	slideIndex === 0 ? (slideIndex = reviews.length - 1) : slideIndex--;
	document.querySelector('.reviews').style.transform = `translate(${-100 * slideIndex}%)`;
}

async function fetchReviews() {
	await fetch('/JolitaPhotographyWeb/data/reviews.json') // updated base path for github
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}
			return response.json()
		})
		.then((data) => {
			reviews = data
			document.querySelector('.reviews').innerHTML = data.map(loadReviews).join('')
		})
		.catch((error) => {
			console.error('There has been a problem with your fetch operation:', error)
		})
}

fetchReviews()

document.querySelector('#reviews-arrow-right').addEventListener('click', moveSlider)
document.querySelector('#reviews-arrow-left').addEventListener('click', moveSliderLeft);