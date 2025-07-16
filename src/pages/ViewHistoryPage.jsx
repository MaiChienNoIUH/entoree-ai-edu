import { useState, useEffect } from "react";
import {
  getViewedProducts,
  clearViewedProducts,
  removeViewedProduct,
} from "../utils/LocalStorageUtils";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductCardModal";
import "../css/ViewHistoryPage.css";

const ViewHistoryPage = ({ currentUser }) => {
  const [viewedProducts, setViewedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (currentUser) {
      setViewedProducts(getViewedProducts(currentUser.id));
    }
  }, [currentUser]);

  const handleClearAll = () => {
    clearViewedProducts(currentUser.id);
    setViewedProducts([]);
  };

  const handleRemove = (id) => {
    removeViewedProduct(currentUser.id, id);
    setViewedProducts((prev) => prev.filter((p) => p.id !== id));
  };

  if (!currentUser) {
    return <p style={{ textAlign: "center" }}>Vui lòng đăng nhập để xem lịch sử.</p>;
  }

  return (
    <div className="container">
      <h1>Lịch sử xem</h1>
      {viewedProducts.length === 0 ? (
        <p className="history-empty" style={{ paddingBottom: "300px" }}>
          Chưa có sản phẩm nào trong lịch sử xem
        </p>
      ) : (
        <>
          <button className="btn-clear-all" onClick={handleClearAll}>
            Xóa toàn bộ lịch sử
          </button>
          <div className="history-grid">
            {viewedProducts.map((product) => (
              <div key={product.id} className="history-item">
                <ProductCard
                  product={product}
                  currentUser={currentUser}
                  onOpenModal={() => setSelectedProduct(product)}
                />
                <button
                  className="btn-remove"
                  onClick={() => handleRemove(product.id)}
                >
                  Xóa khỏi lịch sử
                </button>
              </div>
            ))}
          </div>
        </>
      )}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default ViewHistoryPage;
