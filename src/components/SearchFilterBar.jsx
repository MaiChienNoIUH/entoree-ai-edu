import "../css/SearchFilterBar.css";

const SearchFilterBar = ({ searchTerm, setSearchTerm, filter, setFilter }) => {
  const handleClear = () => {
    setSearchTerm("");
    setFilter("all");
  };
  return (
    <div className="search-filter-bar">
      <input
        type="text"
        placeholder="Tìm kiếm theo tên khóa học..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className="filter-select"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">Tất cả</option>
        <option value="lt500">Dưới 500K</option>
        <option value="500to1m">500K-1 Triệu</option>
        <option value="gt1m">Trên 1 Triệu</option>
      </select>
      <button className="clear-button" onClick={handleClear}>
        Clear All
      </button>
    </div>
  );
};

export default SearchFilterBar;
