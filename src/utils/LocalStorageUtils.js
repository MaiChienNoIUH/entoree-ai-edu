// Lấy danh sách yêu thích của một user
export const getFavorites = (userId) => {
  const stored = localStorage.getItem(`favorites_${userId}`);
  return stored ? JSON.parse(stored) : [];
};

// Lưu danh sách yêu thích của một user
export const saveFavorites = (userId, favorites) => {
  localStorage.setItem(`favorites_${userId}`, JSON.stringify(favorites));
};

// Thêm hoặc xóa sản phẩm yêu thích
export const toggleFavorite = (userId, product) => {
  const favorites = getFavorites(userId);
  const exists = favorites.find((item) => item.id === product.id);
  let updatedFavorites;

  if (exists) {
    updatedFavorites = favorites.filter((item) => item.id !== product.id);
  } else {
    updatedFavorites = [...favorites, product];
  }

  saveFavorites(userId, updatedFavorites);
  return updatedFavorites;
};

