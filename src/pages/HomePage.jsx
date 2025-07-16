import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductCardModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import mockProducts from "../data/products";
import SearchFilterBar from "../components/SearchFilterBar";
import { fetchSuggestions } from "../api/SuggestionApi";
import { FiChevronDown } from "react-icons/fi";
import "../css/HomePage.css";
import banner from "../assets/image/banner.jpg";
import logo from "../assets/image/logo.png";

const HomePage = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [products] = useState(mockProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [suggestions, setSuggestions] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timeout);
  }, [searchTerm, filter]);

  const filteredProducts = products.filter((product) => {
    const matchName = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchPrice =
      filter === "all" ||
      (filter === "lt500" && product.price < 500000) ||
      (filter === "500to1m" &&
        product.price >= 500000 &&
        product.price <= 1000000) ||
      (filter === "gt1m" && product.price > 1000000);
    return matchName && matchPrice;
  });

  const handleSuggestion = async () => {
    setLoadingSuggestions(true);
    setSuggestions([]);
    try {
      const res = await fetchSuggestions(currentUser?.id);

      if (res.length === 0) {
        toast.warn("Không có gợi ý nào cho bạn lúc này");
        setLoadingSuggestions(false);
        return;
      }

      setSuggestions(res);
      toast.success("Đã có gợi ý sản phẩm!");
    } catch (error) {
      console.error(error);
      toast.error("Không thể lấy gợi ý lúc này");
    } finally {
      setLoadingSuggestions(false);
    }
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  return (
    <div>
      <div className="banner-container">
        <img src={banner} className="banner-image" alt="Banner" />
        <div className="banner-content">
          <img src={logo} alt="Logo" className="banner-logo" />
          <h1>Chào mừng đến với Trung Tâm Ngoại Ngữ</h1>
          <p>Khám phá các khóa học tiếng Anh phù hợp với mọi trình độ</p>
          <button className="banner-btn" onClick={handleSuggestion}>
            Gợi ý khóa học với AI
          </button>
        </div>
      </div>

      <div className="container">
        {(loadingSuggestions || suggestions.length > 0) && (
          <div
            className="p-4 rounded-md mb-6"
            style={{
              backgroundColor: "#f9fafb",
              marginBottom: "20px",
              paddingBottom: "40px",
            }}
          >
            <h2 className="text-xl font-bold mb-4 text-blue-600">
              🎯 Gợi ý khóa học cho bạn
            </h2>

            <div className="product-grid">
              {loadingSuggestions
                ? Array.from({ length: 3 }).map((_, idx) => (
                    <div key={idx}>
                      <Skeleton height={200} />
                      <Skeleton
                        height={20}
                        width="80%"
                        style={{ marginTop: "8px" }}
                      />
                      <Skeleton height={20} width="60%" />
                    </div>
                  ))
                : suggestions.map((item) => (
                    <ProductCard
                      key={item.id}
                      product={item}
                      currentUser={currentUser}
                      onOpenModal={() => setSelectedProduct(item)}
                    />
                  ))}
            </div>
          </div>
        )}

        <h1 className="text-2xl font-bold mb-4">Danh sách Khóa học</h1>

        <SearchFilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filter={filter}
          setFilter={setFilter}
        />

        <div className="product-grid">
          {isLoading
            ? Array.from({ length: 9 }).map((_, idx) => (
                <div key={idx}>
                  <Skeleton height={200} />
                  <Skeleton height={20} width="80%" />
                  <Skeleton height={20} width="60%" />
                </div>
              ))
            : filteredProducts
                .slice(0, visibleCount)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    currentUser={currentUser}
                    onOpenModal={() => setSelectedProduct(product)}
                  />
                ))}
        </div>

        {visibleCount < filteredProducts.length && (
          <div className="show-more-container">
            <button onClick={handleShowMore} className="btn-show-more">
              <FiChevronDown className="icon" />
              Xem thêm
            </button>
          </div>
        )}

        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </div>
  );
};

export default HomePage;
