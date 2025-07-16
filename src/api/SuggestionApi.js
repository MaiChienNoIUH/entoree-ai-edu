export const fetchSuggestions = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Mock suggestion data
      resolve([
        {
          id: 2,
          name: 'Khoá Luyện Thi IELTS',
          price: 1200000,
        },
      ]);
    }, 1500);
  });
};
