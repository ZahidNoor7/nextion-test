import React, { useEffect, useState } from "react";
import { Layout, Row, Col, Pagination } from "antd";
import ProductCard from "../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, ProductState } from "../redux/reducers/productSlice";
import { AppDispatch } from "../redux/store";
import Loader from "../components/Loader/Loader";

const { Content } = Layout;

/**
 * ProductListingPage Component:
 * Displays a paginated list of products with ProductCard components.
 * Allows navigation to individual product pages via links.
 */
const ProductListingPage: React.FC = () => {
  // Redux dispatch to trigger actions
  const dispatch = useDispatch<AppDispatch>();

  // Select relevant pieces of state from the Redux store using the useSelector hook
  const { product, isLoading } = useSelector((state: ProductState) => ({
    product: state.product,
    isLoading: state.isLoading,
  }));

  // State to manage the current page number for pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 8; // Number of products to display per page

  // Callback function to handle page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Fetch products from the server when the component mounts
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Calculate the start and end indices for the displayed products on the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Extract the displayed products based on the calculated indices
  const displayedProducts =
    product?.productsList?.products?.slice(startIndex, endIndex) ?? [];

  // Calculate the total number of products
  const totalProducts = product?.productsList?.total ?? 0;

  return (
    <Layout>
      <Content style={{ padding: "50px" }}>
        {!isLoading ? (
          <>
            {/* Display Product Cards */}
            <Row gutter={[16, 16]}>
              {displayedProducts?.map(
                (product: {
                  id: React.Key | null | undefined;
                  title: string;
                  description: string;
                  price: number;
                  thumbnail: string;
                }) => (
                  <Link to={`/product/${product?.id}`} key={product?.id}>
                    <Col key={product?.id} xs={24} sm={12} md={8} lg={6}>
                      <ProductCard
                        title={product.title}
                        description={product.description}
                        price={product.price.toFixed(2)}
                        imageUrl={product.thumbnail}
                      />
                    </Col>
                  </Link>
                )
              )}
            </Row>

            {/* Pagination Component */}
            {/* <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={product?.productsList?.total ?? 0}
              onChange={handlePageChange}
              style={{ marginTop: "20px", textAlign: "center" }}
            /> */}
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={totalProducts}
              onChange={handlePageChange}
              style={{ marginTop: "20px", textAlign: "center" }}
            />
          </>
        ) : (
          // Display Loader while products are being fetched
          <div>
            <Loader />
          </div>
        )}
      </Content>
    </Layout>
  );
};

export default ProductListingPage;
