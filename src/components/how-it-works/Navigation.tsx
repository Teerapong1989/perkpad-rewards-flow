
import { ArrowLeft, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
      <Link to="/" className="flex items-center space-x-2">
        <ArrowLeft className="w-5 h-5 text-teal-600" />
        <span className="text-teal-600 hover:text-teal-700 font-medium">Back to Home</span>
      </Link>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
          <Gift className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-slate-800">Perkpad</span>
      </div>
    </nav>
  );
};

export default Navigation;
