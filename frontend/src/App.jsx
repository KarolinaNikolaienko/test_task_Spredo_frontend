import { useEffect, useMemo, useState } from "react";

import { fetchCryptos } from "./api/cryptoApi";

import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import SortSelect from "./components/SortSelect";
import CryptoTable from "./components/CryptoTable";

import "./styles.css";

function App() {
  const [cryptos, setCryptos] = useState([]);

  const [search, setSearch] = useState("");
  const [fdvLimit, setFdvLimit] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCryptos = async () => {
      try {
        const data = await fetchCryptos();
        setCryptos(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadCryptos();
  }, []);

  const filteredCryptos = useMemo(() => {
    let result = [...cryptos];

    // Search
    result = result.filter((crypto) =>
      crypto.name.toLowerCase().includes(search.toLowerCase())
    );

    // FDV filter
    if (fdvLimit) {
      result = result.filter((crypto) => crypto.fdv < Number(fdvLimit));
    }

    // Sorting
    if (sortBy) {
      result.sort((a, b) => b[sortBy] - a[sortBy]);
    }

    return result;
  }, [cryptos, search, fdvLimit, sortBy]);

  return (
    <div className="container">
      <h1>Crypto Projects</h1>

      <div className="controls">
        <SearchBar search={search} setSearch={setSearch} />

        <Filters fdvLimit={fdvLimit} setFdvLimit={setFdvLimit} />

        <SortSelect sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {loading ? <p>Loading...</p> : <CryptoTable cryptos={filteredCryptos} />}
    </div>
  );
}

export default App;
