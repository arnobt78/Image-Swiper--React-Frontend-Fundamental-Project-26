// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImageSlider from "./components/ImageSlider";
import ProductPage from "./components/ProductPage";

// Main App component
function App() {
  return (
    // Router component to handle routing
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      {/* Routes component to define the different routes */}
      <Routes>
        {/* Route for the home page, rendering the ImageSlider component */}
        <Route path="/" element={<ImageSlider />} />
        {/* Route for the product page, rendering the ProductPage component */}
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

// Export the App component as the default export
export default App;
