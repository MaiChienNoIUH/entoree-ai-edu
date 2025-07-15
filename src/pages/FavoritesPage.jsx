import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getFavorites } from "../utils/localStorageUtils";
import ProductModal from "../components/ProductCardModal";

const FavoritesPage = ({ currentUser }) => {
  const [favorites, setFavorites] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (currentUser) {
      const favs = getFavorites(currentUser.id);
      setFavorites(favs);
    }
  }, [currentUser]);

  if (!currentUser) {
    return <p>Vui lòng đăng nhập để xem sản phẩm yêu thích.</p>;
  }

  return (
    <div className="container">
      <h1>Danh sách Yêu thích</h1>
      {favorites.length === 0 ? (
        <p>Chưa có sản phẩm yêu thích.</p>
      ) : (
        <div className="product-grid">
          {favorites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              currentUser={currentUser}
              onOpenModal={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      )}
      <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
    </div>
  );
};

export default FavoritesPage;
