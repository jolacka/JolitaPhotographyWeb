# 📸 JolitaPhotographyWeb - Built with Astro

This README provides an overview of the project structure, features, technologies used, and instructions for getting started with [JolitaPhotographyWeb](https://jolacka.github.io/JolitaPhotographyWeb/). Multi-page website with responsive web design (mobile-first approach) for presenting my personal works.

## 💻 Technologies Used

- Astro framework: Static site generation for minimal JavaScript and optimal performance.
- Tailwind CSS
- JavaScript & HTML/CSS
- PhotoSwipe
- API Integrations: Formspree, Calendly, Instagram, Cloudinary
  
## 🌐 Visit Hosted GitHub Pages Site

You can find the live version of the site [JolitaPhotographyWeb](https://jolacka.github.io/JolitaPhotographyWeb/)

## 🌟 KeyFeatures

- **Navigation:** Provides links to all main sections and pages.
- **Hero Section:** Features a call-to-action button for easy contact.
- **About Me Section:** A personal introduction to the photographer.
- **Portfolio Gallery:** Divided into various photoshoot formats for easy browsing.
- **PhotoSwipe Lightbox:** All linked pictures are displayed using PhotoSwipe.
- **Client Reviews:** Displays testimonials from clients.
- **Social Media Links:** Icons for quick access to social profiles.
- **Get in Touch:** Contact information with social links.
- **Contact Form:** Integrated with Formspree for email submissions.
- **Make a Bookinking:** Calendly integration for scheduling appointments.
- **Instagram gallery carusel:** Fetch displays recently Instagram pictures.
- **Recent Photos:** Fetches images from Cloudinary with PhotoSwipe support.
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

/
├── public/                       # Static assets
│   ├── data/                     # Reviews and other public data
│   ├── img/                      # Static images
│   ├── favicon.svg               # Site favicon
│   ├── JB_logo.svg               # JB logo
│   └── Jolita_logo_W.svg         # Logo
│
├── src/                       # Source code
│   ├── assets/                # Dynamic assets
│   │   ├── formats/           # Portfolio categories
│   │   └── portfolio/         # General portfolio assets     
│   │
│   ├── components/           # Reusable UI components (Astro)
│   ├── data/                 # Data files, e.g., contact information
│   ├── js/                   # JavaScript components (animations, fetches, etc.)
│   ├── layouts/              # Layouts for pages
│   ├── pages/                # Website pages (Gallery)
│   ├── styles/               # Global styles
│   └── env.d.ts              # TypeScript environment definition
├── .env                      # API keys configuration
├── astro.config.mjs          # Astro configuration
├── package.json              # Dependencies and scripts
├── tailwind.config.mjs       # Tailwind CSS configuration
└── README.md                 # Project documentation

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
