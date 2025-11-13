import Image from 'next/image';

export default function ProductBenefitsSection() {
    const items = [
        {
            id: 1,
            icon: '/icons/security.svg',
            title: 'Tahan Lama',
            desc: 'Materi berkualitas tinggi yang tidak mudah pecah dan awet dalam waktu lama',
        },
        {
            id: 2,
            icon: '/icons/plate.svg',
            title: 'Food Grade',
            desc: 'Aman untuk menyimpan makanan dan minuman tanpa khawatir bahan kimia berbahaya',
        },
        {
            id: 3,
            icon: '/icons/palette.svg',
            title: 'Desain Modern',
            desc: 'Tampilan stylish dan dengan beragam warna menarik',
        },
        {
            id: 4,
            icon: '/icons/plant.svg',
            title: 'Ramah Lingkungan',
            desc: 'Dapat digunakan berulang kali mengurangi sampah plastik',
        },
    ];

    return (
        <div className="p-6 flex flex-col items-center mt-20">
            <h1 className="text-3xl font-bold mb-10 text-primary">
                Kenapa Tupperware?
            </h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                {items.map((item) => (
                    <li
                        key={item.id}
                        className="shadow-xl shadow-black/20 p-6 rounded-2xl flex flex-col items-center text-center 
                                   hover:bg-primary hover:text-white hover:scale-105 transition duration-300 ease-in-out"
                    >
                        <Image
                            width={120}
                            height={120}
                            src={item.icon}
                            alt={item.title}
                        />
                        <h2 className="font-bold text-2xl mt-4">
                            {item.title}
                        </h2>
                        <p className="mt-2">{item.desc}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
