import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProductCard from "../components/ProductCard";
import { getFavorites } from "../utils/LocalStorageUtils";
import ProductModal from "../components/ProductCardModal";

const FavoritesPage = ({ currentUser }) => {
  const [favorites, setFavorites] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setIsLoading(true);
      const timeout = setTimeout(() => {
        const favs = getFavorites(currentUser.id);
        setFavorites(favs);
        setIsLoading(false);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [currentUser]);

  const handleUpdateFavorites = () => {
    const favs = getFavorites(currentUser.id);
    setFavorites(favs);
  };

  if (!currentUser) {
    return (
      <p
        style={{
          textAlign: "center",
          marginTop: "20px",
          paddingTop: "20px",
          paddingBottom: "450px",
          backgroundColor: "#ffffff",
        }}
      >
        Vui lòng đăng nhập để xem khóa học yêu thích.
      </p>
    );
  }

  return (
    <div className="container">
      <h1>Danh sách Yêu thích</h1>
      {isLoading ? (
        <div className="product-grid">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx}>
              <Skeleton height={200} />
              <Skeleton height={20} width="80%" />
              <Skeleton height={20} width="60%" />
            </div>
          ))}
        </div>
      ) : favorites.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            paddingBottom: "400px",
          }}
        >
          Chưa có khóa học yêu thích.
        </p>
      ) : (
        <div className="product-grid">
          {favorites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              currentUser={currentUser}
              onOpenModal={() => setSelectedProduct(product)}
              onFavoriteChange={handleUpdateFavorites}
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
