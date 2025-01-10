import { useLocation } from 'react-router-dom';

const Insights = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 p-6">
        <h1 className="text-3xl font-bold mb-4">Product Insights</h1>
        <p className="text-slate-400">Please select a product from the homepage to view insights.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title} Insights</h1>
      <div className="grid gap-6">
        {/* We'll implement the AI summary and strategy components in the next iteration */}
        <div className="bg-card/50 backdrop-blur-sm border-slate-800/50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Product Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-slate-400">Daily Revenue</p>
              <p className="text-2xl font-bold">${product.dailyRevenue.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Members</p>
              <p className="text-2xl font-bold">{product.membersCount?.toLocaleString() || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Ranking</p>
              <p className="text-2xl font-bold">#{product.ranking || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Niche</p>
              <p className="text-2xl font-bold">{product.niche}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;