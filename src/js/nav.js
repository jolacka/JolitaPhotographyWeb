// Get the hamburger menu button element by its ID
const menu_btn = document.getElementById('menu-btn')

// Function to toggle the visibility of the slideover menu
const toggleSlideover = () => {
	menu_btn.classList.toggle('open') //// Toggle the 'open' class on the menu button to trigger the animation
	document.getElementById('slideover-container').classList.toggle('invisible') // Toggle the visibility of the slideover container
	document.getElementById('slideover-bg').classList.toggle('opacity-0') // Toggle the background overlay opacity for the slideover menu
	document.getElementById('slideover-bg').classList.toggle('opacity-50') // Toggle the background overlay opacity for the slideover menu
	document.getElementById('slideover').classList.toggle('translate-x-full') // Toggle the sliding effect of the slideover menu
}

// Event listener for when the menu button is clicked
menu_btn.addEventListener('click', () => {
	toggleSlideover()
})

// Add click event listeners to all navigation links
document.querySelectorAll('.nav-link').forEach((n) =>
	n.addEventListener('click', () => {
		toggleSlideover() // Close the slideover when a navigation link is clicked
	})
)

// Add click event listener to the background overlay
document.getElementById('slideover-bg').addEventListener('click', () => {
	toggleSlideover() // Close the slideover when a navigation link is clicked
})
