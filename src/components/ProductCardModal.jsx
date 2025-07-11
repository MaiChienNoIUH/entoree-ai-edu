const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-btn">
          &times;
        </button>
        <img src={product.image} alt={product.name} className="product-img" />
        <h2>{product.name}</h2>
        <p>{product.longDesc}</p>
        <p>{product.price.toLocaleString()} VND</p>
      </div>
    </div>
  );
};

export default ProductModal;
