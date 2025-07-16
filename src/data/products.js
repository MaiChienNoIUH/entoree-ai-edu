const mockProducts = [
  {
    id: 1,
    name: "Khoá Tiếng Anh Cơ Bản dành cho học viên mới",
    price: 450000,
    image:
      "https://img.freepik.com/free-vector/kids-learning-english-abc_74855-6316.jpg",
    shortDesc: "Khóa tiếng Anh cho người mới bắt đầu",
    longDesc:
      "Khóa tiếng Anh cơ bản giúp bạn nâng cao ngữ pháp và từ vựng. Bao gồm video, bài tập và đánh giá định kỳ. Lộ trình phù hợp người mất gốc, hỗ trợ học theo nhóm và phát triển kỹ năng giao tiếp.",
  },
  {
    id: 2,
    name: "Khoá Luyện Nói Trực Tuyến Với Giáo Viên Bản Ngữ",
    price: 1500000,
    image:
      "https://img.freepik.com/free-photo/online-english-class-with-native-speaker_23-2149354241.jpg",
    shortDesc: "Khoá luyện nói 1-1 với giáo viên bản ngữ",
    longDesc:
      "Khoá học giao tiếp 1-1 trực tuyến với giáo viên bản ngữ, giúp học viên luyện phản xạ tự nhiên, cải thiện phát âm và mở rộng vốn từ vựng qua các buổi trò chuyện cá nhân hóa.",
  },
  {
    id: 3,
    name: "Khoá Học Ngữ Âm của Tiếng Anh Chuẩn",
    price: 600000,
    image:
      "https://img.freepik.com/free-photo/english-pronunciation-practice_23-2149347248.jpg",
    shortDesc: "Khóa học luyện phát âm tiếng Anh chuẩn",
    longDesc:
      "Khóa học chuyên sâu về phát âm tiếng Anh, tập trung luyện từng âm tiết và ngữ điệu. Phù hợp với người muốn cải thiện khả năng nói và giao tiếp như người bản xứ.",
  },
  {
    id: 4,
    name: "Khoá Học Ngữ Pháp Nâng Cao",
    price: 600000,
    image:
      "https://img.freepik.com/free-vector/grammar-lessons-concept-illustration_114360-7475.jpg",
    shortDesc: "Khóa học ngữ pháp chuyên sâu",
    longDesc:
      "Khóa ngữ pháp nâng cao giúp bạn thành thạo cấu trúc phức tạp, phân tích lý thuyết và bài tập chuyên biệt. Thích hợp cho người muốn sử dụng ngữ pháp thành thạo trong học thuật, công việc, giao tiếp nâng cao.",
  },
  {
    id: 5,
    name: "Khoá Học TOEIC Cấp Tốc",
    price: 950000,
    image:
      "https://img.freepik.com/free-vector/toeic-exam-preparation-concept_23-2148764923.jpg",
    shortDesc: "Khoá luyện TOEIC trong thời gian ngắn",
    longDesc:
      "Khóa luyện thi TOEIC cấp tốc với giáo trình cô đọng, tập trung vào mẹo thi và kỹ thuật xử lý bài thi. Bao gồm đề thi thật và bài tập sát định dạng thi, giúp nhanh chóng tăng điểm số hiệu quả.",
  },
  {
    id: 6,
    name: "Khoá Học Phát Âm Chuẩn Mỹ",
    price: 750000,
    image:
      "https://img.freepik.com/free-photo/close-up-woman-speaking-microphone_23-2148873173.jpg",
    shortDesc: "Khóa học phát âm chuẩn giọng Mỹ",
    longDesc:
      "Khóa học giúp học viên luyện phát âm tiếng Anh chuẩn theo giọng Mỹ, tập trung vào các âm khó, ngữ điệu và cách nối âm. Bao gồm video mẫu và bài luyện chuyên sâu từ giáo viên bản ngữ.",
  },
  {
    id: 7,
    name: "Khoá Luyện Nghe Tiếng Anh nâng cao",
    price: 500000,
    image:
      "https://img.freepik.com/free-photo/young-woman-headphones_23-2148864514.jpg",
    shortDesc: "Khóa học luyện nghe tiếng Anh hiệu quả trong các bài thi thực tế",
    longDesc:
      "Khóa học luyện nghe thông qua các video hội thoại thực tế, audio chuyên đề và bài kiểm tra kỹ năng. Giúp học viên cải thiện khả năng nghe hiểu và tăng tốc độ phản xạ với tiếng Anh.",
  },
  {
    id: 8,
    name: "Khoá Học Tiếng Anh Cho Trẻ Em",
    price: 400000,
    image:
      "https://img.freepik.com/free-photo/kids-learning-english-classroom_23-2148881282.jpg",
    shortDesc: "Khóa học tiếng Anh dành cho trẻ em",
    longDesc:
      "Khóa học thiết kế riêng cho trẻ em với phương pháp học vui nhộn, nhiều trò chơi và hình ảnh minh họa sinh động. Giúp trẻ phát triển tư duy tiếng Anh một cách tự nhiên từ sớm.",
  },
  {
    id: 9,
    name: "Khoá Học Viết Email Chuyên Nghiệp",
    price: 650000,
    image:
      "https://img.freepik.com/free-vector/email-marketing-isometric_1284-63742.jpg",
    shortDesc: "Khóa học viết email chuyên nghiệp",
    longDesc:
      "Khóa học giúp bạn nắm vững cách viết email trong công việc, thương mại và giao tiếp cá nhân. Bao gồm các mẫu email chuẩn, bài tập thực hành và phản hồi từ giảng viên.",
  },
  {
    id: 10,
    name: "Khoá Giao Tiếp Tiếng Anh",
    price: 800000,
    image:
      "https://img.freepik.com/free-vector/flat-english-conversation-illustration_23-2149486484.jpg",
    shortDesc: "Khóa học giao tiếp tiếng Anh thực tiễn dành cho người đi làm",
    longDesc:
      "Khóa học giúp nâng cao giao tiếp qua tình huống thực tế. Học viên luyện phản xạ, thảo luận nhóm và role‑play để tăng tự tin khi nói.",
  },
  {
    id: 11,
    name: "Khoá Học TOEIC Từ Cơ Bản Đến Nâng Cao",
    price: 950000,
    image:
      "https://img.freepik.com/free-vector/toeic-preparation-online-courses_23-2148781365.jpg",
    longDesc:
      "Khóa học TOEIC với lộ trình từ cơ bản đến nâng cao. Học viên sẽ được rèn luyện kỹ năng toàn diện cùng chiến lược làm bài và luyện đề sát đề thật để đạt mục tiêu điểm cao.",
  },
  {
    id: 12,
    name: "Khoá Luyện Nghe Tiếng Anh",
    price: 500000,
    image:
      "https://img.freepik.com/free-vector/english-language-learning-class_52683-85858.jpg",
    shortDesc: "Khóa học luyện nghe tiếng Anh hiệu quả",
    longDesc:
      "Khóa học luyện nghe qua audio, sách và headphone minh họa, giúp cải thiện khả năng nghe hiểu và phản xạ tiếng Anh nhanh hơn.",
  },
  {
    id: 13,
    name: "Khoá Học Tiếng Anh Trong Môi Trường Công Sở",
    price: 700000,
    image:
      "https://img.freepik.com/free-vector/business-english-communication_23-2149157296.jpg",
    shortDesc: "Tiếng Anh dành cho dân văn phòng",
    longDesc:
      "Khóa học tập trung vào kỹ năng giao tiếp tiếng Anh trong môi trường công sở: họp, thuyết trình, email nội bộ, giao tiếp với khách hàng quốc tế. Phù hợp cho người đi làm muốn cải thiện kỹ năng giao tiếp nơi công sở.",
  },
  {
    id: 14,
    name: "Khoá Tiếng Anh Phỏng Vấn & Viết CV",
    price: 550000,
    image:
      "https://img.freepik.com/free-vector/job-interview-conversation_74855-7560.jpg",
    shortDesc: "Chuẩn bị cho phỏng vấn và hồ sơ xin việc bằng tiếng Anh",
    longDesc:
      "Khóa học trang bị kỹ năng viết CV tiếng Anh ấn tượng, luyện trả lời phỏng vấn thông minh, tự tin. Có ví dụ mẫu, mô phỏng phỏng vấn và phản hồi từ giảng viên. Phù hợp cho người chuẩn bị ứng tuyển vào công ty nước ngoài.",
  },
  {
    id: 15,
    name: "Khoá Tiếng Anh Du Lịch Quốc Tế",
    price: 500000,
    image:
      "https://img.freepik.com/free-vector/travel-english-conversation_74855-6482.jpg",
    shortDesc: "Giao tiếp tiếng Anh với người nước ngoài khi đi du lịch nước ngoài",
    longDesc:
      "Học các mẫu câu, đoạn hội thoại, từ vựng dùng trong sân bay, khách sạn, nhà hàng, mua sắm, hỏi đường,... Giúp bạn tự tin và độc lập trong mọi tình huống khi du lịch nước ngoài.",
  },
];

export default mockProducts;
