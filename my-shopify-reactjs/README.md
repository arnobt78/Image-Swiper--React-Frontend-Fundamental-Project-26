## My Shopify ReactJS Project

## Project Overview

This project is a ReactJS application that features an image slider and product pages. It uses the Swiper library for the image slider and React Router for navigation between the image slider and product pages.

## Project Structure

```
my-shopify-reactjs/
├── .DS_Store
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── public/
├── README.md
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── assets/
│   ├── components/
│   │   ├── ImageSlider.css
│   │   ├── ImageSlider.jsx
│   │   ├── ProductPage.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── shopifySchema.js
├── vite.config.js
```

## Installation

1. Clone the repository:

```
git clone <repository-url>
cd my-shopify-reactjs
```

2. Install dependencies:

```
npm install
```

## Development

To start the development server, run:

```
npm run dev
```

This will start the Vite development server and you can view the application at http://localhost:3000.

## Building for Production

To build the project for production, run:

```
npm run build
```

The production-ready files will be in the dist directory.

## Linting

To lint the project, run:

```
npm run lint
```

## Project Components

shopifySchema.js

This file contains the configuration for the image slider.

```
const shopifySchema = {
  sliderSettings: {
    navigation: true,
    pagination: true,
    spaceBetween: 50,
    slidesPerView: 1,
  },
};

export default shopifySchema;
```

ImageSlider.jsx

This component renders the image slider using the Swiper library.

```
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./ImageSlider.css";
import { useNavigate } from "react-router-dom";
import shopifySchema from "../shopifySchema";

const mockImages = [
  { id: 1, src: "/image1.png", productId: "product1" },
  { id: 2, src: "/image2.png", productId: "product2" },
  { id: 3, src: "/image3.png", productId: "product3" },
  { id: 4, src: "/image4.png", productId: "product4" },
  { id: 5, src: "/image5.png", productId: "product5" },
];

const ImageSlider = () => {
  const navigate = useNavigate();

  const handleImageClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const { navigation, pagination, spaceBetween, slidesPerView } =
    shopifySchema.sliderSettings;

  return (
    <div className="outer-container">
      <div className="inner-container">
        <h2 className="heading">Wunderschön - Ergebnisse unserer Kunden</h2>
        <div className="swiper-container">
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
                <div className="image-container">
                  <img src={image.src} alt={`Slide ${image.id}`} />
                  <div className="text-overlay">
                    <p
                      style={{
                        margin: "20px 20px 0px",
                        fontSize: "1rem",
                        textAlign: "left",
                        lineHeight: "1.5",
                      }}
                    >
                      Super Solid Glass - Glanz
                    </p>
                    <p
                      style={{
                        margin: "0px 20px 20px",
                        fontSize: "0.8rem",
                        textAlign: "left",
                        lineHeight: "1.5",
                      }}
                    >
                      Polierter Onyxmarmor
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-navigation"></div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
```

ProductPage.jsx

This component renders the product page based on the product ID from the URL.

```
import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Page for {id}</h1>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductPage;
```

App.jsx

This is the main application component that sets up the routes.

```
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImageSlider from "./components/ImageSlider";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ImageSlider />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
```

index.html

This is the main HTML file that includes the root div where the React app will be mounted.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Swiper Slider App</title>
  </head>
  <body>
    <div
      id="root"
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
      "
    ></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

ImageSlider.css

This file contains the styles for the ImageSlider component.

```
/* Styles for the outer container of the slider */
.outer-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Styles for the heading text */
.heading {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #000000;
}

/* Styles for the inner container of the slider */
.inner-container {
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Styles for the Swiper container */
.swiper-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  height: 400px;
}

/* Styles for the image container within each slide */
.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Styles for the images within the image container */
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Styles for the text overlay on the images */
.text-overlay {
  position: absolute;
  bottom: 0px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0px;
  width: 100%;
  /* opacity: rgba(25, 25, 25, 0.6); */
}

/* Styles for the container holding navigation and pagination controls */
.swiper-navigation-pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

/* Styles for the navigation controls */
.swiper-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Styles for the previous and next buttons */
.swiper-button-prev,
.swiper-button-next {
  /* padding: 0 210px; */
  cursor: pointer;
  display: inline-block;
  transition: color 0.3s;
  /* border-radius: 50%;
  border-color: darkgray;
  top: 385px; */
}

/* Hover effect for the previous and next buttons */
.swiper-button-prev:hover,
.swiper-button-next:hover {
  color: blue;
}

/* Styles for the pagination controls */
.swiper-pagination {
  /* display: flex;
  justify-content: center; */
  display: inline-block;
  margin: 0 auto;
}

/* .swiper-button-prev,
.swiper-button-next,
.swiper-pagination {
   z-index: 10;
  position: static;
  display: inline-block;
} */

/* Styles for the active pagination bullet */
.swiper-pagination-bullet-active {
  background-color: blue !important;
}

/* Global styles for the HTML document */
html {
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,
    helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial,
    sans-serif;
}

/* Styles for a container with a maximum width */
.container {
  max-width: 600px;
  margin: auto;
}

/* Root-level CSS variables for Swiper customization */
:root {
  --swiper-pagination-bullet-size: 20px;
  --swiper-navigation-size: 50px;
  --swiper-pagination-bottom: 0px;
  --swiper-theme-color: #fff;
  --swiper-pagination-bullet-inactive-color: #fff;
  --swiper-pagination-bullet-inactive-opacity: 0.3;
}
```

## ESLint Configuration

The ESLint configuration is defined in eslint.config.js:

```
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
```

## Dependencies

The project dependencies are listed in package.json:

```
{
  "dependencies": {
    "jquery": "^3.7.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.27.0",
    "swiper": "^11.1.14"
  },
  "devDependencies": {
    "@eslint/js": "^9.11.1",
    "@types/react": "^18.3.10",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.2",
    "eslint": "^9.11.1",
    "eslint-plugin-react": "^7.37.0",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0"
  }
}
```

## Conclusion

This documentation provides an overview of the my-shopify-reactjs project, including its structure, installation steps, development commands, and descriptions of key components. For more details, refer to the source code and comments within the files.
