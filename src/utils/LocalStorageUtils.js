// ========== YÊU THÍCH ==========
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


// ========== LỊCH SỬ XEM THEO USER ==========
export const getViewedProducts = (userId) => {
  const viewed = localStorage.getItem(`viewedProducts_${userId}`);
  return viewed ? JSON.parse(viewed) : [];
};

export const addViewedProduct = (userId, product) => {
  if (!userId) return;

  const viewed = getViewedProducts(userId);
  const exists = viewed.find((item) => item.id === product.id);

  if (!exists) {
    viewed.unshift(product);
    if (viewed.length > 30) viewed.pop();
    localStorage.setItem(`viewedProducts_${userId}`, JSON.stringify(viewed));
  }
};

export const clearViewedProducts = (userId) => {
  localStorage.removeItem(`viewedProducts_${userId}`);
};

export const removeViewedProduct = (userId, productId) => {
  const viewed = getViewedProducts(userId).filter((p) => p.id !== productId);
  localStorage.setItem(`viewedProducts_${userId}`, JSON.stringify(viewed));
};

