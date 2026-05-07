function CryptoTable({ cryptos }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Symbol</th>
          <th>Market Cap</th>
          <th>FDV</th>
          <th>24h Volume</th>
          <th>TVL</th>
        </tr>
      </thead>

      <tbody>
        {cryptos.map((crypto) => (
          <tr key={crypto.id}>
            <td>{crypto.name}</td>
            <td>{crypto.symbol.toUpperCase()}</td>

            <td>${crypto.market_cap?.toLocaleString()}</td>

            <td>${crypto.fdv?.toLocaleString()}</td>

            <td>${crypto.total_volume?.toLocaleString()}</td>

            <td>${crypto.tvl?.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CryptoTable;
