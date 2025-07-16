import { getFavorites, getViewedProducts } from "../utils/LocalStorageUtils";

export const fetchSuggestions = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (!userId) {
          reject(new Error("Thiếu userId"));
          return;
        }

        const favorites = getFavorites(userId);
        const viewed = getViewedProducts(userId);

        // Trộn random
        const shuffledFav = [...favorites].sort(() => 0.5 - Math.random());
        const shuffledViewed = [...viewed].sort(() => 0.5 - Math.random());

        let suggestions = [];

        suggestions = shuffledFav.slice(0, 2);

        if (shuffledViewed.length > 0) {
          const remainingViewed = shuffledViewed.filter(
            (v) => !suggestions.some((s) => s.id === v.id)
          );
          if (remainingViewed.length > 0) {
            suggestions.push(remainingViewed[0]);
          }
        }

        if (suggestions.length < 3) {
          const allRemaining = [...shuffledFav, ...shuffledViewed].filter(
            (v) => !suggestions.some((s) => s.id === v.id)
          );
          suggestions = [
            ...suggestions,
            ...allRemaining.slice(0, 3 - suggestions.length),
          ];
        }

        resolve(suggestions);
      } catch (error) {
        reject(new Error("API failed"));
      }
    }, 500);
  });
};
