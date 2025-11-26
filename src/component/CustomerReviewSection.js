import { CustomerReviewCard } from './CustomerReviewCard';

const review = [
    {
        id: 1,
        stars: '⭐⭐⭐⭐⭐',
        comment:
            'Produk sangat bagus dan berkualitas tinggi! Bahannya terasa kokoh dan finishing-nya rapi. Setelah digunakan beberapa hari, saya merasa sangat puas karena sesuai dengan deskripsi. Pasti akan beli lagi di toko ini.',
        customer: ' - Andi',
        address: ' - Jakarta',
    },
    {
        id: 2,
        stars: '⭐⭐⭐⭐',
        comment:
            'Pengiriman cepat, pelayanan ramah. Paket datang dengan aman karena dibungkus rapi. Saya sempat menanyakan detail produk lewat chat, adminnya menjawab dengan jelas dan sangat membantu. Hanya saja saya berharap pilihan warnanya bisa lebih banyak.',
        customer: ' - Budi',
        address: ' - Bandung',
    },
    {
        id: 3,
        stars: '⭐⭐⭐⭐⭐',
        comment:
            'Harga terjangkau dan produk berkualitas. Untuk kelas harga segini, kualitasnya jauh di atas ekspektasi saya. Sangat cocok digunakan sehari-hari, dan desainnya juga modern. Saya sudah rekomendasikan ke teman-teman agar beli di sini.',
        customer: ' - Cici',
        address: ' - Surabaya',
    },
    {
        id: 4,
        stars: '⭐⭐⭐⭐⭐',
        comment:
            'Produk sangat bagus dan berkualitas tinggi! Saya membeli untuk hadiah dan penerimanya juga sangat senang. Proses transaksi mudah, pengiriman tepat waktu, dan packaging aman. Terima kasih banyak, saya pasti akan order lagi.',
        customer: ' - Dewa',
        address: ' - Yogyakarta',
    },
];

export default function CustomerReviewSection() {
    return (
        <div className="">
            <div className="flex flex-col gap-5 mt-20 sm:mt-50">
                <div className="flex justify-center text-primary text-Roboto text-2xl font-bold  items-center">
                    <h2>Apa Kata Pelanggan ?</h2>
                </div>
                <div className="flex justify-center items-center flex-col gap-10">
                    {review.map((item) => (
                        <CustomerReviewCard
                            key={item.id}
                            stars={item.stars}
                            comment={item.comment}
                            customer={item.customer}
                            address={item.address}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
