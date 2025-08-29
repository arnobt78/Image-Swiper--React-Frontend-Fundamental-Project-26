import React from "react";
// Import useParams hook from React Router to access URL parameters
import { useParams } from "react-router-dom";

// ProductPage component
const ProductPage = () => {
  // Extract the 'id' parameter from the URL
  const { id } = useParams();

  return (
    <div>
      {/* Display the product ID */}
      <h1>Product Page for {id}</h1>
      {/* Add more product details here */}
    </div>
  );
};

// Export the ProductPage component as the default export
export default ProductPage;
