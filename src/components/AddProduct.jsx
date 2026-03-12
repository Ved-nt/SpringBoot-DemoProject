import React from "react";

const AddProduct = () => {
  return (
    <div className="add-product-container">
      <div className="coming-soon-card">
        <div className="coming-soon-icon">
          <i className="bi bi-box-seam"></i>
        </div>
        <h2>Add Product</h2>
        <p>This feature is coming soon. Stay tuned!</p>
        <div className="coming-soon-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
