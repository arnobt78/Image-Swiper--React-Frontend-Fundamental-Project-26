# Shopify Schema Swiper – Job Assessment Project 3

<img width="664" alt="reactjs" src="https://github.com/user-attachments/assets/f539f58d-8cba-4479-8735-81eca53fe5f9">

---

## Project Summary

Shopify Schema Swiper – Job Assessment Project 3 is a demonstration of integrating interactive image sliders with product linking in a Shopify environment. The project explores two implementations: a classic jQuery-based approach for direct Shopify theme integration, and a modern ReactJS-based Single Page Application (SPA) using SwiperJS and React Router. Both versions allow users to swipe through images, each associated with products and metaobjects, and navigate to specific product pages by clicking on a slide.

---

## Table of Contents

- [Project Summary](#project-summary)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [How It Works](#how-it-works)
    - [jQuery Version](#jquery-version)
    - [ReactJS Version](#reactjs-version)
- [Setup & Usage](#setup--usage)
    - [jQuery Shopify Theme Integration](#jquery-shopify-theme-integration)
    - [ReactJS SPA](#reactjs-spa)
- [Component & File Walkthrough](#component--file-walkthrough)
    - [jQuery Version Key Files](#jquery-version-key-files)
    - [ReactJS Version Key Files](#reactjs-version-key-files)
- [Examples and Code Snippets](#examples-and-code-snippets)
- [Keywords](#keywords)
- [Conclusion](#conclusion)

---

## Project Structure

```
Shopify-Schema-Swiper--Job-Assessment-Project-3/
│
├── README.md
├── my-shopify-jquery/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── settings_schema.json
│   ├── template.liquid
│   └── README.md
├── my-shopify-reactjs/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── components/
│   │   │   ├── ImageSlider.jsx
│   │   │   ├── ProductPage.jsx
│   │   ├── shopifySchema.js
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── index.html
│   └── README.md
└── ...
```
Each folder contains a self-contained project with its own documentation.

---

## Features

- **SwiperJS Image Slider:** Swipeable, animated image gallery.
- **Product Linking:** Each image links to a specific product or metaobject.
- **Navigation Controls:** Next/Previous arrows and pagination dots.
- **Customizable Schema:** Easily configure images and links via Shopify Theme Customizer in the jQuery version.
- **Responsive Design:** Works on desktop and mobile devices.
- **Two Implementations:** jQuery for direct Shopify theme use, ReactJS for a modern SPA approach.
- **Educational Value:** Step-by-step documentation and well-commented code for learning purposes.

---

## Technology Stack

- **SwiperJS:** Popular JavaScript slider library.
- **jQuery:** For DOM manipulation and event handling (jQuery version).
- **ReactJS:** Modern UI library for SPA (React version).
- **React Router:** Routing in the React SPA.
- **Shopify Liquid:** Shopify's templating language for theme integration.
- **CSS3:** Custom styles for both versions.
- **Vite:** Fast development build tool (React version).
- **ESLint:** Linting for code quality (React version).

---

## How It Works

### jQuery Version

1. **HTML Structure:** Swiper container with image slides, navigation, and pagination elements.
2. **CSS Styling:** Custom styles for slider, navigation, overlays.
3. **JavaScript:** Initializes Swiper, handles slide clicks for redirection.
4. **Shopify Schema:** Define images and URLs in `settings_schema.json` for Theme Customizer.
5. **Liquid Template:** Dynamically renders the slider in a Shopify theme section.

### ReactJS Version

1. **SPA Structure:** Entry point renders `ImageSlider` or `ProductPage` based on route.
2. **ImageSlider Component:** Uses Swiper React components, displays images, navigates to product pages on click.
3. **ProductPage Component:** Shows details for selected product.
4. **Routing:** `react-router-dom` for navigation between slider and product pages.
5. **Configuration:** `shopifySchema.js` centralizes slider settings.

---

## Setup & Usage

### jQuery Shopify Theme Integration

1. **Copy Files:** Place `index.html`, `styles.css`, and `script.js` into your Shopify theme (or use as a section with the provided Liquid template).
2. **Add SwiperJS and jQuery:** Ensure your theme includes SwiperJS and jQuery via CDN.
3. **Configure Schema:** Edit `settings_schema.json` to add your images and product URLs.
4. **Liquid Integration:** Use `template.liquid` in a Shopify section or block.
5. **Result:** End users get a swipeable product gallery with clickable slides.

### ReactJS SPA

1. **Clone the Project:**
   ```sh
   git clone https://github.com/arnobt78/Shopify-Schema-Swiper--Job-Assessment-Project-3.git
   cd Shopify-Schema-Swiper--Job-Assessment-Project-3/my-shopify-reactjs
   ```
2. **Install Dependencies:**
   ```sh
   npm install
   ```
3. **Run Development Server:**
   ```sh
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000).

4. **Build for Production:**
   ```sh
   npm run build
   ```
   Output is in the `dist/` directory.

5. **Linting:**
   ```sh
   npm run lint
   ```

---

## Component & File Walkthrough

### jQuery Version Key Files

- **index.html:** Contains the Swiper container, slides, and overlays.
- **styles.css:** Styles for the slider, arrows, pagination, overlays.
- **script.js:** Initializes Swiper, binds click events.
- **settings_schema.json:** Shopify section settings for images/URLs.
- **template.liquid:** Liquid template for rendering in Shopify themes.

### ReactJS Version Key Files

- **src/components/ImageSlider.jsx:** Swiper slider with navigation and product linking.
- **src/components/ProductPage.jsx:** Renders product detail view.
- **src/shopifySchema.js:** Centralizes Swiper configuration.
- **src/App.jsx:** Sets up routes for SPA navigation.
- **src/main.jsx:** Entry point for React app.
- **src/App.css, src/components/ImageSlider.css:** Styles for slider and layout.

---

## Examples and Code Snippets

### HTML Structure (jQuery)
```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide image-container" data-product-id="product1" onclick="redirectToProduct(this)">
      <img src="images/image1.png" alt="" />
      <div class="text-overlay">
        <p class="subtitle">Super Solid Glass - Glanz</p>
        <p class="subsubtitle">Polierter Onyxmarmor</p>
      </div>
    </div>
    <!-- Additional slides... -->
  </div>
  <div class="swiper-navigation-pagination-container">
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
  </div>
</div>
```

### ReactJS ImageSlider Component
```jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import shopifySchema from "../shopifySchema";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImageSlider.css";

const mockImages = [
  { id: 1, src: "/image1.png", productId: "product1" },
  // ...more images
];

const ImageSlider = () => {
  const navigate = useNavigate();
  return (
    <div className="outer-container">
      <div className="inner-container">
        <h2 className="heading">Wunderschön - Ergebnisse unserer Kunden</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={shopifySchema.sliderSettings.spaceBetween}
          slidesPerView={shopifySchema.sliderSettings.slidesPerView}
          loop={true}
        >
          {mockImages.map((image) => (
            <SwiperSlide key={image.id} onClick={() => navigate(`/product/${image.productId}`)}>
              <div className="image-container">
                <img src={image.src} alt={`Slide ${image.id}`} />
                <div className="text-overlay">
                  <p>Super Solid Glass - Glanz</p>
                  <p>Polierter Onyxmarmor</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-navigation"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};
export default ImageSlider;
```

### Shopify Schema Example
```json
{
  "name": "Image Slider",
  "settings": [
    { "type": "image_picker", "id": "image_1", "label": "Image 1" },
    { "type": "url", "id": "url_1", "label": "URL 1" }
    // Add more fields as needed
  ]
}
```

---

## Keywords

Shopify, SwiperJS, Image Slider, ReactJS, jQuery, SPA, Theme Section, Liquid, Product Linking, Frontend, Pagination, Navigation, JavaScript, CSS, Vite, ESLint, Teaching, Walkthrough, Metaobject, Routing, Interactive, Gallery, Educational.

---

## Conclusion

This project provides a hands-on exploration of building feature-rich, interactive image sliders in Shopify, supporting both legacy and modern frontend workflows. The jQuery version is perfect for direct theme integration, while the ReactJS SPA demonstrates scalable, maintainable architecture for more advanced use cases. The documentation and code are structured for easy learning and adaptation, making this repository an ideal reference for developers integrating SwiperJS with Shopify or similar platforms.

For further details and specific code walkthroughs, see the individual `README.md` files inside `my-shopify-jquery/` and `my-shopify-reactjs/`.

---
