import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="mb-16 lg:mb-32 grid lg:grid-cols-2 gap-12 items-center min-h-[100vh]">
            {/* Text Section */}
            <div className="flex flex-col gap-6 transform transition-all duration-700 ease-out opacity-0 animate-fade-in-left">
                <h1 className="text-4xl lg:text-5xl font-bold font-Roboto text-primary leading-snug">
                    Belanja Tupperware Asli & Berkualitas
                </h1>
                <p className="text-lg lg:text-xl text-gray-700 text-justify">
                    Temukan koleksi{' '}
                    <span className="font-semibold">Tupperware original</span>
                    dengan desain modern, awet, dan aman untuk makanan. Nikmati
                    kualitas terjamin dengan harga terbaik.
                </p>

                <button
                    className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-pink-500 
          text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 
          transition-all duration-300 w-fit"
                >
                    Belanja Sekarang
                </button>

                {/* Marketplace Links */}
                <div className="flex gap-6 items-center mt-4">
                    <Link href="https://shopee.co.id/" target="_blank">
                        <Image
                            src="/logos/shopee_blackwhite.svg"
                            alt="Shopee"
                            width={40}
                            height={40}
                            className="hover:scale-110 transition-transform duration-300"
                        />
                    </Link>
                    <Link href="https://www.tokopedia.com/" target="_blank">
                        <Image
                            src="/logos/tokopedia_blackwhite.svg"
                            alt="Tokopedia"
                            width={40}
                            height={40}
                            className="hover:scale-110 transition-transform duration-300"
                        />
                    </Link>
                    <Link href="https://www.lazada.co.id/" target="_blank">
                        <Image
                            src="/logos/lazada_blackwhite.svg"
                            alt="Lazada"
                            width={40}
                            height={40}
                            className="hover:scale-110 transition-transform duration-300"
                        />
                    </Link>
                </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center transform transition-all duration-700 ease-out opacity-0 animate-fade-in-right">
                <Image
                    src="/hero/HeroSectionImage.jpeg"
                    alt="Tupperware"
                    width={500}
                    height={500}
                    className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
                />
            </div>
        </section>
    );
}
