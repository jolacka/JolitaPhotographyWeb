# Astro JolitaPhotographyWeb

This readme file provides an overview of the project's structure, features, and usage instructions.

*using technologies: Astro framework & Tailwind, HTML, CSS, Bootstrap, and JavaScript
[link to web-site http://localhost:4321/jolacka/JolitaPhotographyWeb/]

Welcome to JolitaPhotographyWeb, my hobby site. Multi-page website with responsive web design (mobile-first approach) for presenting my personal works.
 
## 🌐 Website Overview 

The website is organized into multiple pages, allowing visitors to explore my photography work in detail. The Landing Page presents all the essential information about me and my portfolio, with easy navigation to other portfolio pages.

Main page Features: :
- Navigation: Provides links to all main sections and pages.
- Hero Section: Features a call-to-action button for easy contact.
- About Me Section: A personal introduction to the photographer.
- Portfolio Gallery: Divided into various photoshoot formats for easy browsing.
- Client Reviews: Displays testimonials from satisfied clients.
- Social Media Links: Icons on the left sidebar for easy access to social profiles.
- Contact Form: Integrated with Formspree for handling contact submissions.
- Footer: Contains navigation links, social media links, and contact information.
- footer with navigation links, contacts, social-media links.
- Breadcrumb Navigation: Available at the top of each additional page for easy user navigation.

## 🚀 Getting Started

Installation
To set up JolitaPhotographyWeb website locally, follow these steps:

1. **Clone the repository*
 
   git clone [https://github.com/jolacka/Jolita-s-PHOTOGRAPHY](https://github.com/jolacka/JolitaPhotographyWeb.git)
   cd JolitaPhotographyWeb
   

2. **Install the project dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```
   This will start the server at localhost [http://localhost:4321](http://localhost:4321/JolitaPhotographyWeb/)

4. **Build the project for production:**
   
   ```bash
   npm run build

## 🌐 Visit Hosted GitHub Pages Site

You can find the live version of the site here:

--> https://jolacka.github.io/JolitaPhotographyWeb/
 
## 🌟 Features

- **API Integration: Formspree, Calendly, Instagram's**
- **Multi-Page Portfolio Website:** A clean, organized site to showcase personal photography work/hoby.
- **Responsive Web Design:** Mobile-first approach, ensuring a great experience on all devices.
- **Landing Page Overview** Central hub with navigation, hero section, personal bio, portfolio gallery, client reviews/feedbacks, and contact information.
- **Portfolio Gallery**   Photoshoot formats are displayed in a categorized gallery for easy exploration.
- **Client Reviews/Feedbacks** Section showcasing reviews from satisfied clients to build trust and authenticity.
- **Social Media Links** Accessible icons to connect visitors with my social media profiles.
- **Contact Form Integration** Fully functional contact form utilizing Formspree for sending messages directly to your inbox.
- **Breadcrumb Navigation** Intuitive breadcrumb navigation on each additional portfolio page for easy user flow.
- **Hero Section with CTA** Contact me directly via the engaging hero section.
- **Footer with Navigation and Social Links** Consistent footer containing navigation links, social media, and contact information across all pages.
- **Custom Desients** Tailored design and imagery to reflect a unique and personal style.
- **Astro Framework & Tailwind CSS** Built using the Astro framework combined with Tailwind CSS for modern styling and faster development.
- **JavaScript Functionality** Enhanced user experience with interactive elements powered by JavaScript.

## 🚀 Project Structure

Inside of my project, you'll see the following folders and files:

```textpadaryti veliau
/
├── public/
│   ├── data/
│   │   └── review.json
│   ├── img/
│   │   └── reviews/          # Contains review-related images
│   ├── favicon.svg
│   ├── JB_logo.svg
│   └── Jolita_logo_W.svg
├── src/
│   ├── assets/
│   │   └── formats/          # Portfolio-related formats
│   ├── components/
│   │   ├── Button.astro
│   │   ├── Footer.astro
│   │   ├── Icon.astro
│   │   ├── Nav.astro
│   │   ├── Portfolio.astro
│   │   └── TabPhoto.astro
│   ├── data/
│   │   └── contactData.js
│   ├── js/
│   │   ├── animation.js
│   │   ├── nav.js
│   │   ├── reviews.js
│   │   └── tabs.js
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── child-portfolio.astro      # Portfolio-related
│   │   ├── family-portfolio.astro
│   │   ├── index.astro
│   │   ├── moments-portfolio.astro
│   │   └── portrait-portfolio.astro
│   ├── styles/
│   │   └── global.css
│   └── env.d.ts              # TypeScript environment definition
├── package.json
└── README.md

```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


## ♻️ Reusability

- **Reusable Components:** All components are made to be easily reused across the website.

## How I Managed the Project

For this project, I used GitHub to handle everything, including code, documentation, and task management. I used the following:

- **Regular Commits**: I made regular updates to the code with clear messages explaining what I changed.

## 📞 Contact

If you have any questions, feedback, or issues, please contact me via the contact form on the Contact page.

## 📑 Credits

- All photos taken by Jolita budriene 
- Logo designed by Jolita Budriene Photoshop Elements 2020
- Contact form API from [Formspree](https://formspree.io) - Used for handling form submissions easily and securely.
- Instagram API: [InstagramAPI](https:) - fetch Instagram Photos
- Calendly's API - for book appointments 

## 👀 My Development Journey

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

Focusing on making the site as user-friendly as possible.

This project has been a fantastic learning experience. From designing the user interface to implementing interactive features, I’ve had the chance to experiment with modern front-end technologies and frameworks.
First time tuch ASTRO framwork.




Thank you for visiting my page!
