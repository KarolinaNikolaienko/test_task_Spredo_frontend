function SortSelect({ sortBy, setSortBy }) {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="input"
    >
      <option value="">No Sorting</option>
      <option value="market_cap">Market Cap</option>
      <option value="total_volume">24h Volume</option>
    </select>
  );
}

export default SortSelect;
