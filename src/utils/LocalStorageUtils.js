const FAVORITES_KEY = 'favorites';

export const getFavorites = () => {
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveFavorites = (favorites) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

export const toggleFavorite = (product) => {
  const favorites = getFavorites();
  const exists = favorites.find((item) => item.id === product.id);
  let updatedFavorites;
  if (exists) {
    updatedFavorites = favorites.filter((item) => item.id !== product.id);
  } else {
    updatedFavorites = [...favorites, product];
  }
  saveFavorites(updatedFavorites);
  return updatedFavorites;
};