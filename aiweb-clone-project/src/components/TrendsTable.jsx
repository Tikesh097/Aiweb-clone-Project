import { trendingData } from "../data/trendingData";
import { FaInstagram, FaTiktok, FaYoutube, FaGoogle, FaArrowRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function TrendsTable() {
  const icons = {
    instagram: <FaInstagram className="text-pink-500 text-xl" />,
    tiktok: <FaTiktok className="text-white text-xl" />,
    x: <FaXTwitter className="text-white text-xl" />,
    youtube: <FaYoutube className="text-red-500 text-xl" />,
    google: <FaGoogle className="text-blue-400 text-xl" />
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-white/5 border border-white/10 rounded-2xl mt-12">

      {/* Headers */}
      <div className="grid grid-cols-4 text-gray-300 border-b border-white/10 py-4 px-6">
        <span>SOURCE</span>
        <span className="text-red-400">🔥 HOT</span>
        <span className="text-yellow-300">📈 RISING SOON</span>
        <span className="text-blue-300">❄️ COLD</span>
      </div>

      {/* Rows */}
      {trendingData.map((row, index) => (
        <div
          key={index}
          className="grid grid-cols-4 items-center py-4 px-6 text-white hover:bg-white/5 border-b border-white/5"
        >
          <div className="flex items-center gap-3">
            {icons[row.icon]}
            <span>{row.source}</span>
          </div>

          <div className="flex items-center gap-2">
            {row.hot}
            <FaArrowRight className="opacity-70" />
          </div>

          <div className="flex items-center gap-2">
            {row.rising}
            <FaArrowRight className="opacity-70" />
          </div>

          <div className="flex items-center gap-2">
            {row.cold}
            <FaArrowRight className="opacity-70" />
          </div>
        </div>
      ))}
    </div>
  );
}
