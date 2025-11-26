'use client';

import { useState, useEffect } from 'react';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Smooth scroll to section
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false); // Close menu after clicking
    };

    return (
        <div>
            <header className="flex flex-row justify-between items-center w-full px-6 py-4 shadow-lg fixed top-0 left-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto flex flex-row justify-between items-center w-full">
                    <h1 className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors duration-200">
                        TShop
                    </h1>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex gap-8 text-lg font-medium">
                        <button
                            onClick={() => scrollToSection('hero-section')}
                            className="hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                        >
                            Home
                        </button>
                        <button
                            onClick={() =>
                                scrollToSection('why-choose-us-section')
                            }
                            className="hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                        >
                            Kenapa Pilih Kami
                        </button>
                        <button
                            onClick={() =>
                                scrollToSection('featured-products-section')
                            }
                            className="hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                        >
                            Produk Unggulan
                        </button>
                        <button
                            onClick={() =>
                                scrollToSection('customer-reviews-section')
                            }
                            className="hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                        >
                            Review
                        </button>
                        <button
                            onClick={() =>
                                scrollToSection('call-to-action-section')
                            }
                            className="hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                        >
                            Pesan Sekarang
                        </button>
                    </nav>
                </div>

                {/* Mobile Burger */}
                <button
                    className="flex flex-col justify-center items-center lg:hidden space-y-1 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    onClick={handleClick}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <span
                        className={`bg-black h-0.5 w-6 rounded-sm transition-all duration-300 ${
                            isOpen ? 'rotate-45 translate-y-1.5' : ''
                        }`}
                    />
                    <span
                        className={`bg-black h-0.5 w-6 rounded-sm transition-all duration-300 ${
                            isOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                    />
                    <span
                        className={`bg-black h-0.5 w-6 rounded-sm transition-all duration-300 ${
                            isOpen ? '-rotate-45 -translate-y-1.5' : ''
                        }`}
                    />
                </button>
            </header>

            {/* Overlay mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300"
                    onClick={handleClick}
                    aria-hidden="true"
                ></div>
            )}

            {/* Sidebar Mobile */}
            <div
                className={`fixed top-0 right-0 h-full w-[75%] bg-white shadow-2xl p-6 flex flex-col transform transition-transform duration-300 z-50 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <button
                    className="self-end mb-8 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    onClick={handleClick}
                    aria-label="Close menu"
                >
                    <svg
                        className="w-6 h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <nav className="flex flex-col gap-6 text-black text-lg font-medium">
                    <button
                        onClick={() => scrollToSection('hero-section')}
                        className="text-left hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => scrollToSection('why-choose-us-section')}
                        className="text-left hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                    >
                        Kenapa Pilih Kami
                    </button>
                    <button
                        onClick={() =>
                            scrollToSection('featured-products-section')
                        }
                        className="text-left hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                    >
                        Produk Unggulan
                    </button>
                    <button
                        onClick={() =>
                            scrollToSection('customer-reviews-section')
                        }
                        className="text-left hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                    >
                        Review
                    </button>
                    <button
                        onClick={() =>
                            scrollToSection('call-to-action-section')
                        }
                        className="text-left hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                    >
                        Pesan Sekarang
                    </button>
                </nav>
            </div>
        </div>
    );
}
