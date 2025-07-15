import users from "../data/users";
import reviews from "../data/reviews";
import "../css/ProductCardModal.css";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const getUserInfo = (userId) => users.find((u) => u.id === userId);

  // Lọc reviews theo productId
  const productReviews = reviews.filter((r) => r.productId === product.id);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-btn">
          &times;
        </button>
        <img src={product.image} alt={product.name} className="product-img" />
        <h2>{product.name}</h2>
        <p>{product.longDesc}</p>
        <p className="product-price">{product.price.toLocaleString()} VND</p>

        <div className="reviews-section">
          <h3>Đánh giá của học viên</h3>
          {productReviews.length > 0 ? (
            productReviews.map((review, index) => {
              const user = getUserInfo(review.userId);
              return (
                <div className="review-item" key={index}>
                  <img src={user.avatar} alt={user.name} className="review-avatar" />
                  <div className="review-content">
                    <p className="review-user">{user.name}</p>
                    <p className="review-rating">
                      {"⭐".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </p>
                    <p className="review-comment">{review.comment}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="no-review">Chưa có đánh giá nào.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
