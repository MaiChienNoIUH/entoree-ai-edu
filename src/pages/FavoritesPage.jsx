import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { getFavorites } from "../utils/localStorageUtils";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = getFavorites();
    setFavorites(favs);
  }, []);

  return (
    <div className="container">
      <h1>Danh sách Yêu thích</h1>
      {favorites.length === 0 ? (
        <p>Chưa có sản phẩm yêu thích.</p>
      ) : (
        <div className="product-grid">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
