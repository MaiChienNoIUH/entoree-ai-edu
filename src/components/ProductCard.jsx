import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toggleFavorite, getFavorites } from "../utils/localStorageUtils";

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = getFavorites();
    setIsFavorite(favorites.some((item) => item.id === product.id));
  }, [product.id]);

  const handleToggleFavorite = () => {
    const updatedFavorites = toggleFavorite(product);
    setIsFavorite(updatedFavorites.some((item) => item.id === product.id));
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h2>{product.name}</h2>
      <p>{product.shortDesc}</p>
      <p>{product.price.toLocaleString()} VND</p>
      <div className="product-actions">
        <button
          className={`favorite-btn ${isFavorite ? "favorited" : ""}`}
          onClick={handleToggleFavorite}
          aria-label="Yêu thích"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
        <Link to={`/product/${product.id}`} className="details-link">
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
