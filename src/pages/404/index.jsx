import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="font-display text-[180px] font-light leading-none text-light-gray select-none">
          404
        </div>
        <div className="mt-4 mb-8">
          <div className="w-12 h-px bg-gold mx-auto mb-6" />
          <h1 className="font-display text-3xl font-light text-obsidian mb-4">
            Page Not Found
          </h1>
          <p className="font-body text-sm text-warm-gray font-light leading-relaxed">
            The page you're looking for may have been moved or doesn't exist.
            Let us guide you back to our collection.
          </p>
        </div>
        <Link to="/" className="btn-primary">
          Return Home <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}