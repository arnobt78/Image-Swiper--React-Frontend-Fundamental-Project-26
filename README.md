# Shopify Style Image Swiper Slider - jQuery, React, SwiperJS Tutorial Projects

![task](https://github.com/user-attachments/assets/cd00d5bd-7a4f-4337-bc5d-457e590cfdd2)

---

## Project Overview

This repository contains two educational projects for building a modern, responsive image swiper slider inspired by Shopify:

- **image-swiper-jquery**: A static, jQuery + SwiperJS implementation
- **image-swiper-reactjs**: A modular, React + SwiperJS implementation with Vite

Both projects demonstrate how to create a sleek, interactive product gallery with smooth navigation, pagination, and custom styling. Perfect for e-commerce, portfolios, or any site needing a beautiful image slider.

---

## Features

- Responsive, mobile-friendly design
- SwiperJS-powered slider with navigation and pagination
- Clickable product slides with redirect functionality
- Customizable styles and easy-to-edit structure
- SEO-optimized HTML with rich metadata
- Educational code and documentation for learning and reuse

---

## Repository Structure

```bash
my-shopify-swiper/
├── image-swiper-jquery/    # jQuery + SwiperJS project
│   ├── images/
│   ├── index.html
│   ├── script.js
│   ├── styles.css
│   └── README.md
├── image-swiper-reactjs/   # React + SwiperJS project
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
└── README.md               # Root documentation (this file)
```

---

## How Each Project Works

### image-swiper-jquery (Static)

- Uses static HTML, CSS, jQuery, and SwiperJS.
- All logic is in `script.js` and all styles in `styles.css`.
- Product images are in the `images/` folder.
- Clicking a slide redirects to `/product/{productId}` (customize as needed).
- No build step or backend required—just open `index.html` in your browser.

### image-swiper-reactjs (React Project)

- Built with React, SwiperJS, and Vite for a modern, component-based approach.
- Routing handled by React Router (`/` for slider, `/product/:id` for product page).
- All logic and styles are modularized in the `src/` folder.
- Product images are in the `public/` folder.
- Run locally with `npm install` and `npm run dev`.

---

## Quick Start

### image-swiper-jquery

1. Go to the `image-swiper-jquery` folder.
2. Open `index.html` in your browser.

### image-swiper-reactjs

1. Go to the `image-swiper-reactjs` folder.
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

- Both projects are designed for easy reuse and extension.
- Copy the relevant files or components into your own project.
- Update image paths, product details, and styles as needed.
- For React, you can import and reuse the `ImageSlider` and `ProductPage` components in any React app.

---

## .env File & Environment Variables

Both projects are fully static and do **not** require a `.env` file or any environment variables for basic usage. If you wish to extend the React project with API endpoints or dynamic data, you can add your own `.env` file and reference variables in your scripts as needed (see [Vite environment variables](https://vitejs.dev/guide/env-and-mode.html)).

---

## API Endpoints & Routes

- **image-swiper-jquery**: Clicking a slide triggers a redirect to `/product/{productId}`. You can implement these routes in your backend or static site as needed.
- **image-swiper-reactjs**: Uses React Router for `/` (slider) and `/product/:id` (product page). No external API calls are made by default.

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

This repository is a great starting point for anyone looking to build a modern, responsive image slider with jQuery or React and SwiperJS. Both projects are easy to customize, extend, and integrate into any web project. Perfect for learning, teaching, or production use!

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
