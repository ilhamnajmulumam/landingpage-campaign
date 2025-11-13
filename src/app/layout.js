import './globals.css';

export const metadata = {
    title: 'TShop - Tupperware Shop',
    description: 'Toko Tupperware Online Terpercaya',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
