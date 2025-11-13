import Image from 'next/image';

export const ProductCard = ({ name, price, image }) => {
    return (
        <div className="flex justify-center items-center font-Roboto">
            <div className="w-[350px] rounded-3xl flex flex-col gap-4 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 bg-white overflow-hidden">
                {/* Product Image */}
                <div className="flex justify-center p-4 bg-gray-50 min-h-[250px] max-h-[250px]">
                    <Image
                        src={image}
                        alt={name}
                        width={250}
                        height={250}
                        className="object-contain rounded-xl"
                    />
                </div>

                {/* Product Info */}
                <div className="p-6 bg-primary flex flex-col gap-4 rounded-t-3xl">
                    <h1 className="font-bold text-2xl text-white truncate">
                        {name}
                    </h1>
                    <h2 className="text-white text-xl font-semibold">
                        {price}
                    </h2>

                    <div className="flex justify-between items-center mt-2">
                        {/* CTA Button */}
                        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-white to-gray-200 text-primary font-semibold shadow hover:shadow-md hover:scale-105 transition-all duration-300">
                            Beli Sekarang
                        </button>

                        {/* Marketplace Icons */}
                        <div className="flex gap-3 rounded-full px-4 py-2 bg-white shadow-inner">
                            <Image
                                src="logos/shopee_blackwhite.svg"
                                alt="Shopee"
                                width={24}
                                height={24}
                                className="hover:scale-110 transition-transform cursor-pointer"
                            />
                            <Image
                                src="logos/tokopedia_blackwhite.svg"
                                alt="Tokopedia"
                                width={24}
                                height={24}
                                className="hover:scale-110 transition-transform cursor-pointer"
                            />
                            <Image
                                src="logos/lazada_blackwhite.svg"
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
