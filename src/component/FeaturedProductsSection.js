import { ProductCard } from './ProductCard';

const product = [
    {
        id: 1,
        name: 'Botol Minum Eco',
        price: 'Rp 75.000',
        image: '/images/tupperware1.jpg',
    },
    {
        id: 2,
        name: 'Kotak Bekal Smart Saver',
        price: 'Rp 120.000',
        image: '/images/tupperware2.jpg',
    },
    {
        id: 3,
        name: 'Set Wadah Serbaguna',
        price: 'Rp 75.000',
        image: '/images/tupperware3.jpg',
    },
];

export default function FeaturedProductSection() {
    return (
        <section className="mt-16 px-4 md:px-10 lg:px-16">
            {/* Heading */}
            <div className="flex flex-col gap-4 items-center text-center mb-12">
                <h2 className="lg:text-4xl text-2xl font-bold text-primary font-Roboto relative inline-block">
                    Produk Unggulan
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-primary to-pink-500 rounded-full"></span>
                </h2>
                <p className="lg:text-lg text-gray-700 max-w-2xl">
                    Berikut adalah beberapa produk Tupperware unggulan kami yang
                    populer di kalangan pelanggan:
                </p>
            </div>

            {/* Products Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
                {product.map((item, index) => (
                    <div
                        key={item.id}
                        className={`opacity-0 translate-y-10 animate-fade-up`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <ProductCard
                            name={item.name}
                            price={item.price}
                            image={item.image}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
