// eslint-disable-next-line no-unused-vars
import React from "react";

// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import custom styles
import "./ImageSlider.css";

// Import useNavigate hook from React Router
import { useNavigate } from "react-router-dom";

// Import the configuration for the image slider
import shopifySchema from "../shopifySchema";

// Mock images array with image source and product ID
const mockImages = [
  { id: 1, src: "/image1.png", productId: "product1" },
  { id: 2, src: "/image2.png", productId: "product2" },
  { id: 3, src: "/image3.png", productId: "product3" },
  { id: 4, src: "/image4.png", productId: "product4" },
  { id: 5, src: "/image5.png", productId: "product5" },
  // Add more images as needed
];

// ImageSlider component
const ImageSlider = () => {
  // useNavigate hook to programmatically navigate to different routes
  const navigate = useNavigate();

  // Function to handle image click and navigate to the product page
  const handleImageClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // Destructure slider settings from the configuration
  // eslint-disable-next-line no-unused-vars
  const { navigation, pagination, spaceBetween, slidesPerView } =
    shopifySchema.sliderSettings;

  return (
    <div className="outer-container">
      <div className="inner-container">
        <h2 className="heading">
          Shopify Style Image Swiper Slider using ReactJS and SwiperJS
        </h2>
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
