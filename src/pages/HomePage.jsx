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
import "../css/HomePage.css";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    toast.info("Đang lấy gợi ý sản phẩm...");
    try {
      const res = await fetchSuggestions("demoUser");
      setSuggestions(res);
      toast.success("Đã có gợi ý sản phẩm!");
    } catch (error) {
      toast.error("Không thể lấy gợi ý lúc này");
    }
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  return (
    <div className="container">
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <button className="ai-button" onClick={handleSuggestion}>
            Gợi Ý AI
          </button>
        </div>

        {suggestions.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Gợi ý Sản phẩm</h2>
            <ul className="list-disc list-inside">
              {suggestions.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

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
          : filteredProducts.slice(0, visibleCount).map((product) => (
              <div key={product.id} onClick={() => setSelectedProduct(product)}>
                <ProductCard product={product} />
              </div>
            ))}
      </div>

      {visibleCount < filteredProducts.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Xem thêm
          </button>
        </div>
      )}

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default HomePage;
