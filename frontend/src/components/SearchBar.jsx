function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by project name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="input"
    />
  );
}

export default SearchBar;
