import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { MdPrivacyTip, MdWork, MdInfo, MdLocalShipping, MdHelpOutline, MdArticle } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 text-center">
            <div>
                <h2 className="tracking-wide font-bold mb-2 text-2xl flex items-center justify-center gap-2">
                    <span className="text-cyan-400"></span>
                    Etonic E-Commerce
                </h2>
                <p className="text-base text-gray-300 mb-2 flex items-center justify-center gap-2">
                    <FaMapMarkerAlt className="text-cyan-400" /> Your trusted online store for quality products.
                </p>
                <div className="flex justify-center gap-12 flex-wrap mt-8">
                    <div className="min-w-[180px] text-left">
                        <div className="text-cyan-400 text-base mb-4 tracking-wider flex items-center gap-2">
                            <MdInfo /> Company
                        </div>
                        <a href="/about" className="text-white font-medium hover:text-cyan-400 transition-colors mb-2 flex items-center gap-2">
                            <MdInfo /> About Us
                        </a>
                        <a href="/careers" className="text-white font-medium hover:text-cyan-400 transition-colors mb-2 flex items-center gap-2">
                            <MdWork /> Careers
                        </a>
                        <a href="/blog" className="text-white font-medium hover:text-cyan-400 transition-colors flex items-center gap-2">
                            <MdArticle /> Blog
                        </a>
                    </div>
                    <div className="min-w-[180px] text-left">
                        <div className="text-cyan-400 text-base mb-4 tracking-wider flex items-center gap-2">
                            <MdHelpOutline /> Support
                        </div>
                        <a href="/contact" className="text-white font-medium hover:text-cyan-400 transition-colors mb-2 flex items-center gap-2">
                            <FaEnvelope /> Contact Us
                        </a>
                        <a href="/faq" className="text-white font-medium hover:text-cyan-400 transition-colors mb-2 flex items-center gap-2">
                            <MdHelpOutline /> FAQ
                        </a>
                        <a href="/shipping" className="text-white font-medium hover:text-cyan-400 transition-colors flex items-center gap-2">
                            <MdLocalShipping /> Shipping Info
                        </a>
                    </div>
                    <div className="min-w-[180px] text-left">
                        <div className="text-cyan-400 text-base mb-4 tracking-wider flex items-center gap-2">
                            <MdPrivacyTip /> Legal
                        </div>
                        <a href="/privacy" className="text-white font-medium hover:text-cyan-400 transition-colors mb-2 flex items-center gap-2">
                            <MdPrivacyTip /> Privacy Policy
                        </a>
                        <a href="/terms" className="text-white font-medium hover:text-cyan-400 transition-colors flex items-center gap-2">
                            <MdArticle /> Terms of Service
                        </a>
                    </div>
                    <div className="min-w-[180px] text-left">
                        <div className="text-cyan-400 text-base mb-4 tracking-wider flex items-center gap-2">
                            Follow Us
                        </div>
                        <a href="https://facebook.com" className="text-white font-medium hover:text-cyan-400 transition-colors mb-2 flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF /> Facebook
                        </a>
                        <a href="https://twitter.com" className="text-white font-medium hover:text-cyan-400 transition-colors mb-2 flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                            <FaTwitter /> Twitter
                        </a>
                        <a href="https://instagram.com" className="text-white font-medium hover:text-cyan-400 transition-colors flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                            <FaInstagram /> Instagram
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-6 mt-8 text-gray-400 text-sm">
                    <span className="flex items-center gap-2">
                        <FaEnvelope className="text-cyan-400" /> support@etonic.com
                    </span>
                    <span className="flex items-center gap-2">
                        <FaPhoneAlt className="text-cyan-400" /> +1 234 567 890
                    </span>
                </div>
                <hr className="my-8 border-gray-700 w-4/5 mx-auto" />
                <p className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Etonic. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
