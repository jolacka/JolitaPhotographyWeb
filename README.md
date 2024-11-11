# 📸 JolitaPhotographyWeb - Built with Astro

This README provides an overview of the project structure, features, technologies used, and instructions for getting started with [JolitaPhotographyWeb](https://jolacka.github.io/JolitaPhotographyWeb/). Multi-page website with responsive web design (mobile-first approach) for presenting my personal works.

## 💻 Technologies Used

- Astro framework: Static site generation for minimal JavaScript and optimal performance.
- Tailwind CSS
- JavaScript & HTML/CSS
- PhotoSwipe
- API Integrations: Calendly, Instagram, Cloudinary
  
## 🌐 Visit Hosted GitHub Pages Site

You can find the live version of the site [here] https://jolacka.github.io/JolitaPhotographyWeb/

## 🌟 Features

- **Navigation:** Provides links to all main sections and pages.
- **Hero Section:** Features a call-to-action button for easy contact.
- **About Me Section:** A personal introduction to the photographer.
- **Portfolio Gallery:** Divided into various photoshoot formats for easy browsing.
- **PhotoSwipe Lightbox:** All linked pictures are displayed using PhotoSwipe.
- **Client Reviews:** Displays testimonials from clients.
- **Social Media Links:** Icons on the left sidebar for easy access to social profiles.
- **Get in Touch:** Contact information with social links.
- **Contact Form:** Integrated with Formspree for handling contact submissions, sending messages directly to email.
- **Make a Bookinking:** Calendly form to easy make bookings.
- **Instagram gallery carusel:** Fetch recently Instagram pictures.
- **Recent Photos:** Recent pictures from Cloudinary cloud with PhotoSwipe function.
- **Footer with Navigation and Social Links:** Consistent footer containing navigation links, social media, and contact information across all pages.
- **Breadcrumb Navigation:** Available at the top of each additional page for easy user navigation.


## 🚀 Getting Started

Required: Node.js (latest LTS version recommended)

### Installation

To set up JolitaPhotographyWeb website locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone [JolitaPhotographyWeb](https://github.com/jolacka/JolitaPhotographyWeb.git)
   cd JolitaPhotographyWeb

2. **Install the project dependencies:**

   ```bash
   npm install
   ```

3. **Build the project for production:**

   ```bash
   npm run build
   ```
   
4. **Environment Variables:** 
NOTE: If you want to copy my setup: Create a .env file in the root directory and add your API key.
   
   ```bash
   FORMSPREE_KEY=your_formspree_key
   INSTAGRAM_API_KEY=your_instagram_key
   CLOUDINARY_API_KEY=your_cloudinary_key
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

   This will start the server at localhost [http://localhost:4321](http://localhost:4321/JolitaPhotographyWeb/)

## 📁 Project Structure

Inside of my project, you'll see the following folders and files:

```textpadaryti veliau
/
├── public/
│   ├── data/
│   │   └── review.json
│   ├── img/
│   │   └── img/reviews/          # Contains review-related images
│   ├── favicon.svg
│   ├── JB_logo.svg
│   └── Jolita_logo_W.svg
├── src/
│   ├── assets/
│   │   ├── formats/          # Portfolio-related formats child family moments portrait
│   │   └── portfolio
│   ├── components/
│   │   ├── Button.astro
│   │   ├── Footer.astro
│   │   ├── Icon.astro
│   │   ├── Nav.astro
|   |   ├── PhotoSwipe.astro
|   |   ├── PhotoSwipeCloudinary.astro
│   │   ├── Portfolio.astro
│   │   └── TabPhoto.astro
│   ├── data/
│   │   └── contactData.js
│   ├── js/
│   │   ├── animation.js
│   │   ├── fetchInstagramPhotos.js  # Frontend fetch logic
│   │   ├── fetchCloudinaryImages.js
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
├── .env
├── .gitignore
├── .prettierignore
├── .prettierrc
├── astro.config.mjs
├── package-lock.json
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
└── README.md

```
## 🛠️ Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🔌 API Integrations

- **Formspree** - contact form submissions.
- **Calendly** - appointment scheduling.
- **Cloudinary** - photos from the Cloudinary API, fast performance and optimized image quality.
- **Instagram API** - fetches and displays recent Instagram photos in a carousel format.

## ♻️ Reusability

- **Reusable Components:** All components are made to be easily reused across the website.

## 🔍 SEO & Accessibility

- **SEO Optimization** - use of meta tags and structured data.
- **Accessibility** - follows best practices for accessibility, including ARIA labels and semantic HTML.

## 📬 Contact

If you have any questions, feedback, or issues, please contact me via the contact form on the Contact page.

## 📝 How I Managed the Project

For this project, I used GitHub to handle everything, including code, documentation, and task management. I used the following:

- **Regular Commits**: I made regular updates to the code with clear messages explaining what I changed.
  
## 👀 My Development Journey

This project has been a fantastic learning experience and challenge, allowing me to work with modern web technologies like Astro, Tailwind CSS, and cloud-based solutions. It was also my first time using Astro, and I learned a lot about optimizing images and integrating third-party APIs to ensure a responsive and performant site.

Focusing on making the site as user-friendly as possible.

## 📌 Credits

- All photos taken by Jolita Budriene
- Logo designed by Jolita Budriene Photoshop Elements 2020
- Contact form API from [Formspree](https://formspree.io) - Used for handling form submissions easily and securely.
- https://photoswipe.com/getting-started/

Thank you for visiting [my page](https://jolacka.github.io/JolitaPhotographyWeb/) !
