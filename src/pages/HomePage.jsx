import { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductCardModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import mockProducts from "../data/products"; // Giả lập dữ liệu sản phẩm

const HomePage = () => {
  const [products] = useState(mockProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="container">
      <h1>Danh sách Khóa học</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} onClick={() => setSelectedProduct(product)}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default HomePage;
