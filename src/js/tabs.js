// Select all elements with the class "tab" and store them in the "tabs" variable.
let tabs = document.querySelectorAll('.tab')
// Select all elements with the class "tab-panel" and store them in the "panels" variable.
let panels = document.querySelectorAll('.tab-panel')

// Loop through each "tab" element to add an event listener.
tabs.forEach((tab) => {
	// Add a "click" event listener to each tab.
	tab.addEventListener('click', () => {
		// Get the value of the "aria-controls" attribute of the clicked tab. This helps identify the panel to show.
		let tabTarget = tab.getAttribute('aria-controls')

		// Loop through all tabs to reset their styling (remove active state).
		tabs.forEach((t) => {
			t.classList.remove('border-brightPink')
			// Add the "border-veryLightGray" class to make the inactive tabs have a light gray border.
			t.classList.add('border-veryLightGray')
			// Remove the "text-brightPink" class, changing the text color back to its default for inactive tabs.
			t.classList.remove('text-brightPink')
		})
		// Add classes to the clicked tab to highlight it as active.
		// Remove the light gray border from the active tab.
		tab.classList.remove('border-veryLightGray')
		// Add the pink border to show that this tab is now active.
		tab.classList.add('border-brightPink')
		// Change the text color to pink for the active tab.
		tab.classList.add('text-brightPink')

		// Loop through all panels to display the one that matches the clicked tab's target.
		panels.forEach((panel) => {
			// Get the "id" attribute of each panel.
			let panelId = panel.getAttribute('id')
			// Compare the "aria-controls" value from the tab to the "id" of the panel.
			if (tabTarget === panelId) {
				// If they match, remove the "invisible" and "opacity-0" classes to make the panel visible.
				panel.classList.remove('invisible', 'opacity-0')
				// Add the "visible" and "opacity-100" classes to ensure the panel is fully visible.
				panel.classList.add('visible', 'opacity-100')
			} else {
				// If the panel doesn't match, make sure it's invisible by adding "invisible" and "opacity-0".
				panel.classList.add('invisible', 'opacity-0')
			}
		})
	})
})
