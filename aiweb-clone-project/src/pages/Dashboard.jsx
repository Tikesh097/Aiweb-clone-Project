import Header from "../components/Header";
import Filters from "../components/Filters";
import TopTrends from "../components/TopTrends";
import TrendsTable from "../components/TrendsTable";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <Header />
      <Filters />
      <TopTrends />
      <TrendsTable />
      <Footer />
    </div>
  );
}
