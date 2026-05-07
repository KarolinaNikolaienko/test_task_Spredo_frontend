function Filters({ fdvLimit, setFdvLimit }) {
  return (
    <input
      type="number"
      placeholder="Max FDV"
      value={fdvLimit}
      onChange={(e) => setFdvLimit(e.target.value)}
      className="input"
    />
  );
}

export default Filters;
