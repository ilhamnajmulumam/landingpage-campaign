import './globals.css';

export const metadata = {
    title: {
        default: 'TShop - Tupperware Shop',
        template: '%s | TShop',
    },
    description:
        'Toko Tupperware Online Terpercaya dengan harga terbaik dan pengiriman cepat.',
    keywords: [
        'Tupperware',
        'Toko Tupperware',
        'Tupperware Original',
        'Tupperware Murah',
        'Tupperware Indonesia',
    ],
    authors: [{ name: 'TShop' }],
    creator: 'TShop',
    publisher: 'TShop',
    robots: 'index, follow',
};

export default function RootLayout({ children }) {
    return (
        <html lang="id">
            <body>{children}</body>
        </html>
    );
}
