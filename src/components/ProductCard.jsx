import { useState, useEffect } from "react";
import {
  toggleFavorite,
  getFavorites,
  addViewedProduct,
} from "../utils/LocalStorageUtils";
import "../css/ProductCard.css";
import { toast } from "react-toastify";

const ProductCard = ({ product, currentUser, onOpenModal, onFavoriteChange }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (currentUser) {
      const favorites = getFavorites(currentUser.id);
      setIsFavorite(favorites.some((item) => item.id === product.id));
    }
  }, [product.id, currentUser]);

  const handleToggleFavorite = () => {
    if (!currentUser) {
      toast.warning("Vui lòng đăng nhập để thêm sản phẩm yêu thích!", {
        position: "top-right",
      });
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
      return;
    }

    const updatedFavorites = toggleFavorite(currentUser.id, product);
    setIsFavorite(updatedFavorites.some((item) => item.id === product.id));

    toast.success(
      isFavorite
        ? "Đã xóa khỏi danh sách yêu thích"
        : "Đã thêm vào danh sách yêu thích",
      { position: "top-right" }
    );

    if (onFavoriteChange) {
      onFavoriteChange();
    }
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
        <button
          onClick={() => {
            // addViewedProduct(product);
            if (currentUser) addViewedProduct(currentUser.id, product);
            onOpenModal();
          }}
          className="details-link"
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
