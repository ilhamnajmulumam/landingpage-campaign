import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="mb-5 mt-5 flex flex-col xl:gap-60 xl:flex-row justify-center gap-12 items-center min-h-[100vh] px-3 sm:px-6 lg:px-0">
            {/* Text Section */}
            <div className="flex flex-col max-w-150 gap-6 transform transition-all duration-700 ease-out opacity-0 animate-fade-in-left text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-Roboto text-primary leading-snug">
                    Belanja Tupperware Asli & Berkualitas
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-700 text-justify lg:text-left">
                    Temukan koleksi{' '}
                    <span className="font-semibold">Tupperware original</span>{' '}
                    dengan desain modern, awet, dan aman untuk makanan. Nikmati
                    kualitas terjamin dengan harga terbaik.
                </p>

                <div className="flex justify-center lg:justify-start">
                    <button
                        className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-pink-500 
                           text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 
                           transition-all duration-300 w-fit"
                    >
                        Belanja Sekarang
                    </button>
                </div>

                {/* Marketplace Links */}
                <div className="flex gap-6 items-center justify-center lg:justify-start mt-4">
                    <Link href="https://shopee.co.id/" target="_blank">
                        <Image
                            src="/logos/shopee_blackwhite.svg"
                            alt="Shopee"
                            width={36}
                            height={36}
                            className="hover:scale-110 transition-transform duration-300"
                        />
                    </Link>

                    <Link href="https://www.tokopedia.com/" target="_blank">
                        <Image
                            src="/logos/tokopedia_blackwhite.svg"
                            alt="Tokopedia"
                            width={36}
                            height={36}
                            className="hover:scale-110 transition-transform duration-300"
                        />
                    </Link>

                    <Link href="https://www.lazada.co.id/" target="_blank">
                        <Image
                            src="/logos/lazada_blackwhite.svg"
                            alt="Lazada"
                            width={36}
                            height={36}
                            className="hover:scale-110 transition-transform duration-300"
                        />
                    </Link>
                </div>
            </div>

            {/* Image Section */}
            <div className="flex xs:justify-end justify-center opacity-0 animate-fade-in-right">
                <Image
                    src="/hero/HeroSectionImage.jpeg"
                    alt="Tupperware"
                    width={500}
                    height={500}
                    className="rounded-3xl shadow-xl max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-none hover:scale-105 transition-transform duration-500"
                />
            </div>
        </section>
    );
}
