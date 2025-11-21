import Image from 'next/image';

export default function WhyChooseUsSection() {
    return (
        <section className="mt-10 lg:mt-20 px-4 sm:px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Section */}
                <div className="flex flex-col gap-8">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-Roboto text-primary relative inline-block">
                            Kenapa Pilih Toko Kami
                            <span className="absolute -bottom-2 left-1/2 lg:left-0 -translate-x-1/2 lg:-translate-x-0 w-2/3 h-1 bg-gradient-to-r from-primary to-pink-500 rounded-full"></span>
                        </h1>
                    </div>

                    <div className="flex flex-col gap-6">
                        {[
                            '100% Produk Original dan Bergaransi',
                            'Bisa membayar dengan metode COD',
                            'Respon Cepat dan Layanan Ramah',
                        ].map((reason, index) => (
                            <div
                                key={index}
                                className="rounded-3xl p-4 sm:p-5 flex items-center gap-4 bg-gradient-to-r from-primary to-pink-500 shadow-lg hover:scale-[1.02] transition-transform duration-300"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex justify-center items-center font-bold text-primary shadow">
                                    {index + 1}
                                </div>
                                <h3 className="text-white font-Roboto text-sm sm:text-base font-semibold">
                                    {reason}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center">
                    <Image
                        src="/hero/WhyChooseUsSectionImage.png"
                        alt="section-2"
                        width={500}
                        height={400}
                        className="rounded-3xl shadow-xl max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-full hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
        </section>
    );
}
