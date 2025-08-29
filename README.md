# Shopify Style Image Swiper Slider - jQuery, React, SwiperJS Project Tutorial

---

## Project Overview

This repository contains two educational projects that demonstrate how to build a modern, responsive image swiper slider inspired by Shopify:

- **image-swiper-jquery**: A static HTML/CSS/JS project using jQuery and SwiperJS.
- **image-swiper-reactjs**: A modern React app using SwiperJS, React Router, and Vite.

Both projects are designed for learning, teaching, and easy integration into your own web projects.

---

## Features

- Responsive, mobile-friendly design
- SwiperJS-powered slider with navigation and pagination
- Clickable product slides with redirect functionality
- Customizable styles and easy-to-edit structure
- SEO-optimized HTML with rich metadata
- Modular, reusable components (React version)
- No backend required—fully client-side

---

## Repository Structure

```bash
my-shopify-swiper/
├── image-swiper-jquery/      # jQuery + SwiperJS static project
│   ├── images/               # Product images
│   ├── index.html            # Main HTML file
│   ├── script.js             # Swiper and jQuery logic
│   ├── styles.css            # Custom styles
│   └── README.md             # Project documentation
├── image-swiper-reactjs/     # React + SwiperJS project
│   ├── public/               # Static assets (images, favicon)
│   ├── src/                  # Source code (components, config)
│   ├── index.html            # Main HTML file
│   ├── package.json          # Project metadata and dependencies
│   ├── vite.config.js        # Vite configuration
│   └── README.md             # Project documentation
└── README.md                 # Root documentation (this file)
```

---

## How Each Project Works

### image-swiper-jquery (How It Works)

- Uses static HTML, CSS, and JS (jQuery + SwiperJS)
- All logic is in `script.js` and all styles in `styles.css`
- Product images are in the `images/` folder
- Clicking a slide redirects to `/product/{productId}` (customize as needed)
- No build step—just open `index.html` in your browser

### image-swiper-reactjs (How It Works)

- Built with React, SwiperJS, React Router, and Vite
- `src/components/ImageSlider.jsx` displays the Swiper slider
- `src/components/ProductPage.jsx` displays product details based on the URL
- `src/shopifySchema.js` provides slider configuration
- Product images are in the `public/` folder
- Run locally with `npm install` and `npm run dev`

---

## Quick Start

### image-swiper-jquery

1. Open `image-swiper-jquery/index.html` in your browser.
2. No build or install step required.

### image-swiper-reactjs

1. Navigate to `image-swiper-reactjs/` in your terminal.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser at the URL shown in the terminal (usually `http://localhost:5173`).

---

## Usage & Integration

- Both projects are designed to be easily copied and integrated into your own sites.
- Update image paths and product details as needed.
- Customize styles to match your branding.
- The React version's components are modular and reusable in any React project.

---

## Example: Adding a New Slide (jQuery Version)

```html
<div
  class="swiper-slide image-container"
  data-product-id="product6"
  onclick="redirectToProduct(this)"
>
  <img src="images/image6.png" alt="" />
  <div class="text-overlay">
    <p class="subtitle">New Product Title</p>
    <p class="subsubtitle">Product Subtitle</p>
  </div>
</div>
```

---

## Example: Adding a New Slide (React Version)

```jsx
// In src/components/ImageSlider.jsx
const mockImages = [
  // ...existing images
  { id: 6, src: "/image6.png", productId: "product6" },
];
```

---

## .env File & Environment Variables

Both projects are fully static and do **not** require a `.env` file or any environment variables for basic usage. If you wish to extend the React project with API endpoints or dynamic data, you can add your own `.env` file and reference variables in your scripts as needed (see [Vite environment variables](https://vitejs.dev/guide/env-and-mode.html)).

---

## API Endpoints & Routes

- **jQuery Version**: Clicking a slide triggers a redirect to `/product/{productId}`. You can implement these routes in your backend or static site as needed.
- **React Version**: Uses React Router for `/` (slider) and `/product/:id` (product details). No external API calls are made by default.

---

## Reusing Components

- The Swiper slider structure and logic can be copied into any HTML or React project.
- Update the configuration and image data to fit your needs.
- The CSS is modular and can be imported into other projects.

---

## Example Code Snippet: Swiper Initialization (jQuery)

```js
$(document).ready(function () {
  var swiper = new swiper(".swiper", {
    pagination: {
      clickable: false,
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        var $pagination = $(this.el).find(".swiper-pagination");
        var $nextButton = $(this.el).find(".swiper-button-next");
        var $prevButton = $(this.el).find(".swiper-button-prev");
        $pagination.prepend($prevButton);
        $pagination.append($nextButton);
      },
    },
  });
});
```

---

## Example Code Snippet: Swiper Initialization (React)

```jsx
<Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  navigation={{ clickable: true, el: ".swiper-navigation" }}
  pagination={{ clickable: true, el: ".swiper-pagination" }}
  spaceBetween={spaceBetween}
  slidesPerView={slidesPerView}
  loop={true}
>
  {mockImages.map((image) => (
    <SwiperSlide
      key={image.id}
      onClick={() => handleImageClick(image.productId)}
    >
      {/* ...slide content... */}
    </SwiperSlide>
  ))}
</Swiper>
```

---

## Keywords

Shopify, Swiper, Slider, React, jQuery, Image Slider, Product Gallery, Responsive, E-commerce, Arnob Mahmud, Frontend, Static Site, Web Components, Vite

---

## Conclusion

These projects are great starting points for anyone looking to build a modern, responsive image slider with jQuery or React and SwiperJS. They’re easy to customize, extend, and integrate into any web project. Perfect for learning, teaching, or production use!

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
