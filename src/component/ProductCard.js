import Image from 'next/image';

export const ProductCard = ({ name, price, image }) => {
    return (
        <div className="flex justify-center items-center font-Roboto">
            <div className="w-full max-w-[350px] rounded-3xl flex flex-col gap-4 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 bg-white overflow-hidden">
                {/* Product Image */}
                <div className="flex justify-center p-4 bg-gray-50 min-h-[220px] md:min-h-[250px]">
                    <Image
                        src={image}
                        alt={name}
                        width={300}
                        height={300}
                        className="object-contain w-full h-full rounded-xl"
                    />
                </div>

                {/* Product Info */}
                <div className="p-6 bg-primary flex flex-col gap-4 rounded-t-3xl max-w-30 text-white">
                    <h1 className="font-bold text-xl md:text-2xl truncate">
                        {name}
                    </h1>
                    <h2 className="text-lg md:text-xl font-semibold">
                        {price}
                    </h2>

                    {/* CTA + Marketplace */}
                    <div className="flex justify-between items-center mt-2">
                        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-white to-gray-200 text-primary font-semibold shadow hover:shadow-md hover:scale-105 transition-all duration-300">
                            Beli Sekarang
                        </button>

                        <div className="flex gap-3 rounded-full px-4 py-2 bg-white shadow-inner">
                            <Image
                                src="/logos/shopee_blackwhite.svg"
                                alt="Shopee"
                                width={24}
                                height={24}
                                className="hover:scale-110 transition-transform cursor-pointer"
                            />
                            <Image
                                src="/logos/tokopedia_blackwhite.svg"
                                alt="Tokopedia"
                                width={24}
                                height={24}
                                className="hover:scale-110 transition-transform cursor-pointer"
                            />
                            <Image
                                src="/logos/lazada_blackwhite.svg"
                                alt="Lazada"
                                width={24}
                                height={24}
                                className="hover:scale-110 transition-transform cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
