/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Typography } from "antd";
import Loader from "../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import {
  fetchProductDetails,
  ProductState,
} from "../redux/reducers/productSlice";

const { Title, Paragraph } = Typography;

/**
 * ProductDetail Component:
 * Displays detailed information about a product, including images, title, ID, brand, category,
 * description, price, and stock.
 */
const ProductDetail: React.FC = () => {
  // Retrieve the product ID from the route parameters
  const params = useParams<{ id: string }>();

  // Initialize Redux dispatch to trigger actions
  const dispatch = useDispatch<AppDispatch>();

  // Select relevant pieces of state from the Redux store using the useSelector hook
  const { product, isLoading } = useSelector((state: ProductState) => ({
    product: state.product,
    isLoading: state.isLoading,
  }));

  // Fetch product details when the component mounts or when the product ID changes
  useEffect(() => {
    dispatch(fetchProductDetails({ id: params?.id }));
  }, [dispatch, params.id]);

  return (
    <div style={{ padding: "20px" }}>
      {!isLoading && product?.product ? (
        // Display product details if loading is complete and product data is available
        <Row gutter={[16, 16]}>
          {/* Product Images */}
          <Col xs={24} md={12}>
            <Row gutter={[10, 10]}>
              {/* Map over the first 4 images and display them in a grid */}
              {product?.product?.images
                ?.slice(0, 4)
                .map((imageUrl: string, index: number) => (
                  <Col key={product.product.id + index} xs={24} sm={12}>
                    <img
                      src={imageUrl}
                      alt={`Product Image ${index + 1}`}
                      style={{ width: "100%", marginBottom: "10px" }}
                    />
                  </Col>
                ))}
            </Row>
          </Col>

          {/* Product Details */}
          <Col xs={24} md={12} className="md:pl-8">
            <Title level={2} className="text-2xl font-bold mb-4 text-left">
              {product.product.title}
            </Title>
            <Paragraph className="mb-2 text-left">
              <span className="font-bold">ID:</span> {product.product.id}
            </Paragraph>
            <Paragraph className="mb-2 text-left">
              <span className="font-bold">Brand:</span> {product.product.brand}
            </Paragraph>
            <Paragraph className="mb-2 text-left">
              <span className="font-bold">Category:</span>
              {product.product.category}
            </Paragraph>
            <Paragraph className="mb-2 text-left">
              <span className="font-bold">Description:</span>
              {product.product.description}
            </Paragraph>
            <Paragraph className="mb-2 text-left">
              <span className="font-bold">Price:</span> $
              {product.product.price.toFixed(2)}
            </Paragraph>
            <Paragraph className="mb-2 text-left">
              <span className="font-bold">In Stock:</span>
              {product.product.stock}
            </Paragraph>
          </Col>
        </Row>
      ) : (
        // Display a loading spinner while product data is being fetched
        <Loader />
      )}
    </div>
  );
};

export default ProductDetail;
