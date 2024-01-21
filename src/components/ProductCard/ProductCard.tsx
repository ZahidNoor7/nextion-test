import React from "react";
import { Card, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

// Define the props for the ProductCard component
interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

// ProductCard component to display product information
const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  imageUrl,
}) => {
  return (
    // Ant Design Card component for displaying product details
    <Card
      hoverable
      style={{ width: 300 }}
      cover={
        // Product image with styling for consistent height and object-fit
        <img
          alt={title}
          src={imageUrl}
          style={{ height: 200, objectFit: "cover" }}
        />
      }
    >
      {/* Card.Meta for displaying title and description */}
      <Card.Meta title={title} description={description} />

      {/* Price and Add to Cart button */}
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Display product price */}
        <span>${price}</span>

        {/* Add to Cart button with Shopping Cart icon */}
        <Button
          type="primary"
          icon={<ShoppingCartOutlined />}
          onClick={() => alert("Item added to cart")}
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
