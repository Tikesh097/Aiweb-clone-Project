import Filters from "./components/Filters";
import TopTrends from "./components/TopTrends";
import TrendsTable from "./components/TrendsTable";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19]">
      <Filters />
      <TopTrends />
      <TrendsTable />
      <Footer />
    </div>
  );
}

export default App;
