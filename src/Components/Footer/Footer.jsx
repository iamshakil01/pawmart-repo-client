import React from 'react';
import { MdSmartToy } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="container mx-auto bg-neutral text-neutral-content mt-12 shadow-inner">
      <div className="footer p-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        <aside className="mb-8 md:mb-0">
          <div className="mb-4 flex justify-center font-bold 2xl items-center">
            <MdSmartToy /> <p> Paws <span className='text-red-600'>Mart</span></p>
          </div>
          <p className="max-w-xs text-sm opacity-80">
            PawMart connects local pet owners and buyers for adoption and pet care products.
          </p>
        </aside>
        <nav className="mb-6 md:mb-0">
          <h6 className="footer-title text-lg">UseFul Links</h6>
          <a className="link link-hover text-sm" href="#">Home</a>
          <a className="link link-hover text-sm" href="#">Contact</a>
          <a className="link link-hover text-sm" href="#">Terms</a>
          <a className="link link-hover text-sm" href="#">Privacy Policy</a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg">Community</h6>
          <a className="link link-hover text-sm" href="#">Seller Portal</a>
          <a className="link link-hover text-sm" href="#">Adoption Guidelines</a>
          <a className="link link-hover text-sm" href="#">FAQs</a>
        </nav>
      </div>
      <div className="py-4 border border-gray-500 text-center">
        <p className="text-xs opacity-60 max-w-7xl mx-auto px-4">2025 PawMart. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;