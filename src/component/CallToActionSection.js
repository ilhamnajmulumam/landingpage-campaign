import Image from 'next/image';

export default function CallToActionSection() {
    return (
        <section className="mt-20 font-Roboto flex flex-col items-center text-center px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
                Pesan Tupperware Sekarang!
            </h1>
            <p className="mt-4 text-base md:text-lg max-w-3xl">
                Jangan lewatkan kesempatan untuk mendapatkan produk Tupperware
                berkualitas tinggi yang akan memudahkan hidup Anda. Pesan
                sekarang dan nikmati manfaatnya! Kunjungi situs web resmi kami
                atau hubungi layanan pelanggan untuk melakukan pemesanan.
            </p>

            {/* CTA Button */}
            <button className="mt-6 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/80 transition duration-300">
                Beli Sekarang
            </button>

            {/* Marketplace Links */}
            <div className="flex gap-6 justify-center mt-10 border-2 border-primary p-4 rounded-2xl bg-white shadow-lg">
                <Image
                    src="/logos/tokopedia_blackwhite.svg"
                    alt="Tokopedia"
                    width={60}
                    height={60}
                    className="hover:scale-110 transition duration-300 cursor-pointer"
                />
                <Image
                    src="/logos/shopee_blackwhite.svg"
                    alt="Shopee"
                    width={60}
                    height={60}
                    className="hover:scale-110 transition duration-300 cursor-pointer"
                />
                <Image
                    src="/logos/lazada_blackwhite.svg"
                    alt="Lazada"
                    width={60}
                    height={60}
                    className="hover:scale-110 transition duration-300 cursor-pointer"
                />
            </div>
        </section>
    );
}
