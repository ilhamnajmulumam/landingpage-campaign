'use client';

import { useState } from 'react';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <header className="flex flex-row justify-between items-center w-full px-6 py-4 shadow-md fixed top-0 left-0 bg-white z-50">
                <h1 className="text-2xl font-bold text-primary">TShop</h1>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex gap-6 text-lg font-medium">
                    <a href="#hero-section" className="hover:text-primary">
                        Home
                    </a>
                    <a
                        href="#why-choose-us-section"
                        className="hover:text-primary"
                    >
                        Kenapa Pilih Kami
                    </a>
                    <a
                        href="#featured-products-section"
                        className="hover:text-primary"
                    >
                        Produk Unggulan
                    </a>
                    <a
                        href="#customer-reviews-section"
                        className="hover:text-primary"
                    >
                        Review
                    </a>
                    <a
                        href="#call-to-action-section"
                        className="hover:text-primary"
                    >
                        Pesan Sekarang
                    </a>
                </nav>

                {/* Mobile Burger */}
                <button
                    className="flex flex-col justify-center items-center lg:hidden"
                    onClick={handleClick}
                >
                    <span
                        className={`bg-black h-1 w-6 rounded-sm transition-all ${
                            isOpen
                                ? 'rotate-45 translate-y-1'
                                : '-translate-y-0.5'
                        }`}
                    />
                    <span
                        className={`bg-black h-1 w-6 rounded-sm transition-all ${
                            isOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                    />
                    <span
                        className={`bg-black h-1 w-6 rounded-sm transition-all ${
                            isOpen
                                ? '-rotate-45 -translate-y-1'
                                : 'translate-y-0.5'
                        }`}
                    />
                </button>
            </header>

            {/* Overlay mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={handleClick}
                ></div>
            )}

            {/* Sidebar Mobile */}
            <div
                className={`fixed top-0 right-0 h-full w-[70%] bg-black p-6 flex flex-col transform transition-transform duration-300 z-50 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <button className="self-end mb-8" onClick={handleClick}>
                    <span className="bg-white block h-1 w-6 rotate-45 translate-y-1"></span>
                    <span className="bg-white block h-1 w-6 -rotate-45 -translate-y-1"></span>
                </button>

                <nav className="flex flex-col gap-6 text-white text-lg font-medium">
                    <a href="#hero" onClick={handleClick}>
                        Home
                    </a>
                    <a href="#produk-unggulan" onClick={handleClick}>
                        Produk Unggulan
                    </a>
                    <a href="#reason" onClick={handleClick}>
                        Kenapa Pilih Kami
                    </a>
                    <a href="#review" onClick={handleClick}>
                        Review
                    </a>
                    <a href="#order" onClick={handleClick}>
                        Pesan Sekarang
                    </a>
                </nav>
            </div>
        </div>
    );
}
