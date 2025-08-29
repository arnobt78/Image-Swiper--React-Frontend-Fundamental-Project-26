# Shopify Style Image Swiper Slider (React)

![reactjs](https://github.com/user-attachments/assets/f539f58d-8cba-4479-8735-81eca53fe5f9)

---

## Project Overview

A modern, responsive image swiper slider inspired by Shopify, built with React, SwiperJS, and Vite. This project demonstrates how to create a sleek, interactive product gallery with smooth navigation, pagination, and custom styling. Perfect for e-commerce, portfolios, or any site needing a beautiful image slider.

---

## Features

- Responsive, mobile-friendly design
- SwiperJS-powered slider with navigation and pagination
- React Router for seamless navigation between slider and product pages
- Clickable product slides with redirect functionality
- Modular, reusable React components
- Customizable styles and easy-to-edit structure
- SEO-optimized HTML with rich metadata

---

## Project Structure

```text
image-swiper-reactjs/
├── public/                # Static assets (images, favicon)
│   ├── image1.png
│   ├── image2.png
│   ├── image3.png
│   ├── image4.png
│   ├── image5.png
│   └── vite.svg
├── src/                   # Source code
│   ├── App.jsx            # Main app with routing
│   ├── main.jsx           # React entry point
│   ├── index.css          # Global styles
│   ├── shopifySchema.js   # Slider configuration
│   └── components/
│       ├── ImageSlider.jsx      # Main slider component
│       ├── ImageSlider.css      # Slider styles
│       └── ProductPage.jsx      # Product details page
├── index.html             # Main HTML file (entry point)
├── package.json           # Project metadata and dependencies
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

---

## How It Works

- The `index.html` file sets up the root div and includes SEO metadata.
- `src/main.jsx` renders the React app into the root div.
- `src/App.jsx` sets up routing for the home (slider) and product pages.
- `src/components/ImageSlider.jsx` displays the Swiper slider with images and handles navigation to product pages.
- `src/components/ProductPage.jsx` displays a simple product details page based on the product ID in the URL.
- `src/shopifySchema.js` provides configuration for the slider (navigation, pagination, etc).
- Images are stored in the `public/` directory and referenced in the slider.

---

## Quick Start

1. **Clone or Download** this repository.
2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Open** the app in your browser at the URL shown in the terminal (usually `http://localhost:5173`).

---

## Usage & Integration

### Using in Your Own Project

- Copy the `src/` folder, `public/` assets, and `index.html` into your own Vite/React project.
- Update image paths and product details as needed.
- Customize styles in `ImageSlider.css` and `index.css` to match your branding.
- The slider is fully client-side and works without a backend.

### Example: Adding a New Slide

```jsx
// In src/components/ImageSlider.jsx
const mockImages = [
  // ...existing images
  { id: 6, src: "/image6.png", productId: "product6" },
];
```

---

## Components & Functionality

- **ImageSlider.jsx**: Main Swiper slider, handles navigation and image click events.
- **ProductPage.jsx**: Displays product details based on the URL parameter.
- **shopifySchema.js**: Centralized slider configuration (navigation, pagination, etc).
- **App.jsx**: Sets up React Router routes for the slider and product pages.

---

## Technologies Used

- React 18
- SwiperJS 11
- React Router DOM 6
- Vite
- CSS3

---

## .env File & Environment Variables

This project does **not** require a `.env` file or any environment variables for basic usage. All configuration is handled in the code. If you wish to extend the project with API endpoints or dynamic data, you can add your own `.env` file and reference variables in your scripts as needed (see [Vite environment variables](https://vitejs.dev/guide/env-and-mode.html)).

---

## API Endpoints & Routes

- **Home (`/`)**: Displays the image slider.
- **Product Page (`/product/:id`)**: Displays details for the selected product. You can extend this page to fetch and show real product data.
- **No external API calls** are made by default.

---

## Reusing Components

- The `ImageSlider` and `ProductPage` components are modular and can be imported into any React project.
- Update the `mockImages` array and slider settings in `shopifySchema.js` to fit your needs.
- The CSS is modular and can be imported into other projects.

---

## Example Code Snippet: Swiper Initialization in React

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

Shopify, Swiper, Slider, React, Image Slider, Product Gallery, Responsive, E-commerce, Arnob Mahmud, Frontend, Static Site, Web Components, Vite

---

## Conclusion

This project is a great starting point for anyone looking to build a modern, responsive image slider with React and SwiperJS. It’s easy to customize, extend, and integrate into any web project. Perfect for learning, teaching, or production use!

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
