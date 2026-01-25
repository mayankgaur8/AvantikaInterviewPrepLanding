import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AvantikaLogo from '../assets/Avantika_Interviews.png';
import { Button } from '../components/ui/button';

export default function SiteFrame({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-brand-gradient text-white">
      {/* Header (shared) */}
      <div className="sticky top-0 z-40 border-b border-neutral-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10">
              <img src={AvantikaLogo} alt="Avantika Interviews Logo" className="h-full w-full rounded-full object-contain" />
            </div>
            <div className="leading-tight text-neutral-900">
              <div className="text-sm font-semibold">AvantikaInterviewPrep</div>
              <div className="text-xs text-neutral-500">Prep smarter. Interview faster.</div>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Button
              variant="ghost"
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-indigo-600 to-violet-500 text-white hover:from-indigo-500 hover:to-violet-400 focus:ring-indigo-300 shadow-lg px-4 py-2 rounded-2xl"
            >
              Live Demo
            </Button>

            <Button
              variant="outline"
              onClick={() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald-500 text-white hover:bg-emerald-400 focus:ring-emerald-300 shadow-sm px-3 py-2 rounded-xl"
            >
              Roadmap
            </Button>

            <Button
              onClick={() => navigate('/pricing')}
              className="bg-gradient-to-r from-black to-zinc-800 text-white px-4 py-2 rounded-full shadow-2xl hover:scale-105 transform-gpu transition"
            >
              Get Interview Plan
            </Button>
          </div>
        </div>
      </div>

      {/* Page content */}
      <div>{children}</div>

      {/* Footer (shared) */}
      <footer className="border-t border-neutral-200/60 bg-white mt-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-neutral-600">© {new Date().getFullYear()} AvantikaInterviewPrep</div>

          <div className="flex gap-2">
            <Button
              variant="default"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-black text-white hover:bg-black/90 hover:text-white"
            >
              Back to top
            </Button>

            {location && location.pathname === '/' ? (
              <Button
                variant="default"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-black text-white hover:bg-black/90 hover:text-white"
              >
                Pricing
              </Button>
            ) : (
              <Button
                variant="default"
                onClick={() => navigate('/')}
                className="bg-black text-white hover:bg-black/90 hover:text-white"
              >
                Home
              </Button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
