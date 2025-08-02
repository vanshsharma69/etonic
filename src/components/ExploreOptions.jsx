import React from 'react';
import { Home, ShoppingCart, UploadCloud, Handshake } from 'lucide-react';

const cardOverlay = "bg-gradient-to-t from-black/80 via-black/40 to-transparent";

const ExploreOptions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 max-w-6xl mx-auto my-16">
      
      {/* Left Large Card */}
      <div className="relative rounded-xl overflow-hidden h-[420px] group shadow-lg">
        <img
          src="https://imgs.search.brave.com/E90eCvDImkslLhlEn3PfYUiHeDshdE5Nr-D3nVpPlas/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dC1jZG4uc3Rhbnph/bGl2aW5nLmNvbS9z/dGFuemEtbGl2aW5n/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8scV9h/dXRvLHdfNjAwL2Vf/aW1wcm92ZS9lX3No/YXJwZW46MzAvZl9h/dXRvLHFfYXV0by92/MTY1NTkxODI3Ny9X/ZWJzaXRlL0NNUy1V/cGxvYWRzL3pjbDhv/aGo1amZycWRxbzA5/djl2LmpwZw"
          alt="PG"
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
        />
        <div className={`absolute inset-0 ${cardOverlay} flex flex-col justify-end p-6 text-white`}>
          <div className="flex items-center gap-2 text-2xl font-semibold mb-2">
            <Home className="w-7 h-7" /> Looking for a PG?
          </div>
          <p className="text-sm mb-3">Find clean, safe, and affordable PGs near your location.</p>
          <button className="text-sm underline">Explore Now</button>
        </div>
      </div>

      {/* Right Column with 3 Smaller Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* Want to Buy */}
        <div className="relative rounded-xl overflow-hidden h-[200px] group shadow-lg">
          <img
            src="https://imgs.search.brave.com/ECt4TqBcSYE80UQeOVYrFZii_NTDiG0-ls3X-CNoPaE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL3R3Zy1j/b250ZW50L29yaWdp/bmFsX2ltYWdlcy9j/b25zdW1lci1pLXdh/bnQtdG8tYnV5LW1p/Y3JvLW1vbWVudHMt/bGcuanBn"
            alt="Buy"
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className={`absolute inset-0 ${cardOverlay} flex flex-col justify-end p-4 text-white`}>
            <div className="flex items-center gap-2 text-lg font-medium">
              <ShoppingCart className="w-5 h-5" /> Want to Buy?
            </div>
            <p className="text-xs mt-1">Buy essentials, gadgets, furniture & more.</p>
            <button className="mt-1 underline text-xs">Shop Now</button>
          </div>
        </div>

        {/* Want to Sell */}
        <div className="relative rounded-xl overflow-hidden h-[200px] group shadow-lg">
          <img
            src="https://imgs.search.brave.com/nqfRzQIKllF9CEaD0iYTwCK382rux0IVh2RkrTDW2R0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbGVt/ZW50cy1yZXNpemVk/LmVudmF0b3VzZXJj/b250ZW50LmNvbS9l/bGVtZW50cy1jb3Zl/ci1pbWFnZXMvZDBh/OTU0OTItNjkxYy00/MzU1LWJkMmEtNmE4/NTg0OTVlMmIzP3c9/MzE2JmNmX2ZpdD1z/Y2FsZS1kb3duJnE9/OTQmZm9ybWF0PWpw/ZWcmcz1kOWZkNzdi/YjdjNTNhZWY4MDZm/MTU5MmFhNTNmOTdm/MDAxMzJhMGExMDg5/Nzg2ZDdiMzQ0NDhi/NDkxOGZmYzIw"
            alt="Sell"
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className={`absolute inset-0 ${cardOverlay} flex flex-col justify-end p-4 text-white`}>
            <div className="flex items-center gap-2 text-lg font-medium">
              <UploadCloud className="w-5 h-5" /> Want to Sell?
            </div>
            <p className="text-xs mt-1">Easily list your items for sale in minutes.</p>
            <button className="mt-1 underline text-xs">Post Now</button>
          </div>
        </div>

        {/* Become a Partner */}
        <div className="col-span-1 sm:col-span-2 relative rounded-xl overflow-hidden h-[200px] group shadow-lg">
          <img
            src="https://imgs.search.brave.com/1mabYgbp8Za2oXaLbZeIbhEXjG-TRcCaiJdaY2PEMLc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9maW5p/c2hpbmctdXAtbWVl/dGluZy1idXNpbmVz/cy1oYW5kc2hha2Ut/ZGlzY3Vzc2luZy1n/b29kLWRlYWwtdHJh/ZGluZy10by1zaWdu/LWFncmVlbWVudC1i/ZWNvbWUtcGFydG5l/ci1jb250cmFjdC0x/NTIxNTUyMjguanBn"
            alt="Partner"
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className={`absolute inset-0 ${cardOverlay} flex flex-col justify-end p-4 text-white`}>
            <div className="flex items-center gap-2 text-lg font-medium">
              <Handshake className="w-5 h-5" /> Become a Partner
            </div>
            <p className="text-xs mt-1">Partner with us and grow your local business.</p>
            <button className="mt-1 underline text-xs">Register Now</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExploreOptions;
