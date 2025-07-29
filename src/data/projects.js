// src/data/projects.js
export const projects = [
  {
    slug: 'access-portal',
    title: 'Employee Access Portal',
    short: 'Simple credential gate with form validation.',
    description:
      'A static employee access portal mock with client-side validation and a sleek blue themed UI.',
    tech: ['HTML', 'CSS'],
    type: 'static',               // served from /public/projects/<slug>/index.html
    year: 2024
  },
  {
    slug: 'lux-events',
    title: 'Event Portal Mockup',
    short: 'Simple events page for events company.',
    description:
      'Mockup website for events with ticket buying, contact form, and event display',
    tech: ['HTML', 'CSS', 'JavaScript'],
    type: 'static',               // served from /public/projects/<slug>/index.html
    year: 2025
  },
  {
    slug: 'basic-calculator',
    title: 'Basic Calculator',
    short: 'Lightweight calculator with keyboard support.',
    description:
      'Vanilla JS calculator supporting chained operations and a responsive glassmorphism design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    type: 'static',
    year: 2024
  },
  {
    slug: 'e-commerce',
    title: 'Legacy E-Commerce (Static)',
    short: 'Original static version of product catalog.',
    description:
      'The first iteration of my car accessories storefront built with plain HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    type: 'static',
    year: 2024
  },
  {
  slug: 'shift-happens',
  title: 'Shift Happens Accessories (MERN)',
  short: 'Full-stack MERN e-commerce platform.',
  description: 'Modernized version with MongoDB, Express API, Next.js front-end, dynamic product filtering, cart & mock checkout.',
  tech: ['MongoDB', 'Express', 'React', 'Next.js', 'Tailwind', 'Node.js'],
  type: 'video',                
  video: '/projects/shift-happens/demo.mp4', 
  poster: '/projects/shift-happens/screenshot.png', 
  year: 2025,
  repo: 'https://github.com/yourusername/shift-happens'
}

]
