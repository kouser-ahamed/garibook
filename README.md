# Garibook Web Platform

A modern, high-performance, and responsive web application for **Garibook** — Bangladesh's premier car rental and mobility service. Built with **React 18**, **Vite**, **Tailwind CSS**, and **GSAP** for smooth animations and rich micro-interactions.

---

### 🔗 Project Links

- **🌐 Live Demo (Clickable)**: [https://garibook-tawny.vercel.app/](https://garibook-tawny.vercel.app/)  
  **URL (Copy)**: `https://garibook-tawny.vercel.app/`

- **💻 GitHub Repository (Clickable)**: [https://github.com/kouser-ahamed/garibook](https://github.com/kouser-ahamed/garibook)  
  **URL (Copy)**: `https://github.com/kouser-ahamed/garibook`

---

## 🚀 Features

- **Dynamic Booking Engine**:
  - Multi-tab support for **Airport Transfer**, **City-to-City / Intercity**, and **Hourly Rides**.
  - Interactive Pick-up & Drop-off location search with popular airports and divisions across Bangladesh.
  - Custom date & time picker popover with live time selection.
- **GSAP & ScrollTrigger Animations**:
  - Smooth hero entrance choreography.
  - Interactive running car timeline.
  - Numerical counter rollups and reveal animations on scroll.
- **Responsive Layouts**:
  - Pixel-perfect design optimized across Mobile, Tablet, and Desktop screens.
  - Fluid typography and responsive mosaic grids.
- **Key Sections**:
  - **Navbar**: Sticky header with logo, primary navigation, language toggle, and authentication actions.
  - **Services**: Vehicle class selection and ride options.
  - **Travel Destinations**: Popular routes with responsive carousel controls.
  - **From Booking to Arrival**: 5-stage mosaic showcase with zoom hover effects.
  - **Be a Smart Driver**: Driver onboarding section with mockups and partner benefits.
  - **Newsroom & Press**: Featured press mentions and publication carousel.
  - **Customer Testimonials**: Video testimonials and passenger feedback slider.
  - **Blog & News**: Dynamic blog article grid with single-article reading views and deep-linking (`#blog-:id`).
  - **Mobile App Download**: Direct links to iOS and Android applications.
  - **Live Chat Support**: Floating chat widget with inquiry modal and quick submit.
  - **Scroll-to-Top**: Quick floating return button.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with PostCSS & Autoprefixer
- **Animations**: [GSAP 3](https://greensock.com/gsap/) with ScrollTrigger
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (Montserrat & Outfit)

---

## 📋 Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: `v18.0.0` or higher ([Download Node.js](https://nodejs.org/))
- **npm**: `v9.0.0` or higher (comes bundled with Node.js), or **yarn** / **pnpm**

---

## ⚙️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kouser-ahamed/garibook.git
   cd garibook
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal) to view the application in your browser.

---

## 📦 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and bundles production-ready static assets into the `dist/` directory. |
| `npm run preview` | Locally serves the production build from `dist/` for testing. |

---

## 📁 Project Structure

```text
garibook/
├── public/                             # Public static assets & favicons
│   ├── assets/
│   │   ├── blog/                       # Blog cover & card images (1.webp, 2.webp, 3.webp)
│   │   ├── cars/                       # Vehicle illustrations & vector assets
│   │   ├── icons/                      # Core service vector icons (car.svg, driver.svg, fare.svg)
│   │   ├── images/                     # Partner logos, hero banners & mosaic cards
│   │   │   └── bookingappimage/        # 5-stage mosaic showcase images (1.jpeg - 5.jpeg)
│   │   ├── logo.svg                    # Primary Garibook brand logo
│   │   ├── logo-white.svg              # Inverted white Garibook logo
│   │   └── white-car.png               # High-res vehicle cutout asset
│   ├── apple-touch-icon.png            # iOS homescreen high-res icon
│   ├── favicon-16x16.png               # 16x16 PNG browser favicon
│   ├── favicon-32x32.png               # 32x32 PNG browser favicon
│   ├── favicon.ico                     # Multi-resolution ICO favicon
│   └── favicon.svg                     # Vector circular road-pin favicon
├── src/
│   ├── animations/                     # GSAP animation timeline controllers
│   │   ├── heroAnimations.js           # Entrance sequence for hero elements
│   │   └── scrollAnimations.js         # ScrollTrigger counters & reveal effects
│   ├── components/                     # Modular React UI components
│   │   ├── AppDownload/                # Mobile app download call-to-action
│   │   │   └── AppDownload.jsx
│   │   ├── BlogSection/                # Blog feed & full article reading modal
│   │   │   ├── BlogDetail.jsx
│   │   │   └── BlogSection.jsx
│   │   ├── BookingArrival/             # "From Booking to Arrival" showcase section
│   │   │   └── BookingArrivalSection.jsx
│   │   ├── DriverSection/              # "Be a Smart Driver" partner onboarding
│   │   │   └── DriverSection.jsx
│   │   ├── FeaturedNews/               # Newsroom coverage & publication slider
│   │   │   ├── FeaturedNews.jsx
│   │   │   ├── NewsCard.jsx
│   │   │   └── index.js
│   │   ├── Footer/                     # Global website footer & links
│   │   │   └── Footer.jsx
│   │   ├── FreedomSection/             # 3-step feature highlight ("Ride in 3 Steps")
│   │   │   └── FreedomSection.jsx
│   │   ├── Hero/                       # Hero section with interactive booking tabs
│   │   │   ├── BookingForm.jsx
│   │   │   ├── DateTimePickerPopover.jsx
│   │   │   └── Hero.jsx
│   │   ├── LiveChat/                   # Floating Live Chat button & modal widget
│   │   │   └── LiveChatWidget.jsx
│   │   ├── Navbar/                     # Header navbar with mobile navigation drawer
│   │   │   └── Navbar.jsx
│   │   ├── RunningCar/                 # Animated running car banner
│   │   │   └── RunningCar.jsx
│   │   ├── Services/                   # Ride categories (Intercity, Hourly, Airport)
│   │   │   └── Services.jsx
│   │   ├── Statistics/                 # Milestone statistics counters
│   │   │   └── Statistics.jsx
│   │   ├── Testimonials/               # Customer reviews & video testimonials
│   │   │   ├── PassengersTestimonials.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── index.js
│   │   └── TravelSection/              # Popular travel destinations carousel
│   │       └── TravelSection.jsx
│   ├── data/                           # Structured mock data & application contents
│   │   ├── blogsData.js                # Blog posts with full articles & metadata
│   │   ├── featuredNewsData.js         # Press releases & news publisher data
│   │   ├── homeData.js                 # Service definitions, routes, divisions, FAQs
│   │   └── testimonialsData.js         # Customer testimonials & video review links
│   ├── App.jsx                         # Main application layout & hash router
│   ├── main.jsx                        # React root entry point
│   └── index.css                       # Global Tailwind CSS imports & custom styles
├── index.html                          # HTML template with SEO tags & favicon links
├── package.json                        # Dependencies, scripts & project metadata
├── postcss.config.js                   # PostCSS configuration for Tailwind CSS
├── tailwind.config.js                  # Tailwind design system, colors & breakpoints
└── vite.config.js                      # Vite bundler configuration & plugins
```

---

## 📄 License

This project is for demonstration and personal development purposes. All rights to the Garibook branding, logos, and trademarks belong to **Garibook**.
