import { motion } from "motion/react";

const services = [
  {
    title: "Tradisional Massage",
    description:
      "Tradisional Massage sangat Cocok untuk yang butuh pelepas penat setelah hari yang padat. Menggunakan teknik pijat tradisional untuk melancarkan peredaran darah dan meredakan ketegangan otot.",
    image: "/images/service/tradisionalmesage.jpg",
  },
  {
    title: "Massage + Lulur",
    description:
      "Relaksasi tubuh + scrup kulit untuk mengangkat sel kulit mati dan mencerahkan kulit",
    image: "/images/service/massagelulur.jpg",
  },
  {
    title: "Swedish Massage",
    description:
      "Swedish teknik pijat khas Eropa dengan pijatan lembut dan ritme lambat. Membantu meredakan stres, meningkatkan sirkulasi, dan membawa ketenangan yang dalam.",
    image: "/images/service/swedishmassage.jpg",
  },
  {
    title: "Deep Massage",
    description:
      "Teknik pijat yang berfokus pada pemecahan perlengketan (adhesi) dan ketegangan pada otot dan jaringan ikat yang lebih dalam",
    image: "/images/service/deepmassage.jpg",
  },
  {
    title: "Vitalitas Massage",
    description:
      "Vitalitas Pijat & wanita untuk meningkatkan stamina, melancarkan sirkulasi darah, dan menjaga kebugaran tubuh. Membantu mengurangi kelelahan, pegal, serta menjaga vitalitas secara alami.",
    image: "/images/service/vitalitasmassage.jpg",
  },
  {
    title: "Thai Massage + Kretek",
    description:
      "Thai massage dapat membantu meredakan stres, meningkatkan fleksibilitas, mengurangi ketegangan otot, meningkatkan aliran energi, dan memberikan relaksasi secara keseluruhan.",
    image: "/images/service/thaimassage.jpg",
  },
  {
    title: "Totok Wajah + Full Body Massage",
    description:
      "Pijat lembut full body + wajah membuat syaraf dapat menenangkan pikiran dan tubuh. Cocok untuk meredakan stres, menyeimbangkan emosi, dan membantu tidur lebih nyenyak",
    image: "/images/service/totokwajah.jpg",
  },
  {
    title: "Shiatsu Massage",
    description:
      "Untuk melancarkan energi vital dan meredakan ketegangan otot, serta meningkatkan relaksasi dan kesejahteraan secara keseluruhan.",
    image: "/images/service/shiatsu.jpg",
  },
  {
    title: "Balinese Massage",
    description:
      "Menggabungkan berbagai teknik pijat, akupresur, refleksiologi, dan aromaterapi untuk memberikan pengalaman relaksasi yang menyeluruh",
    image: "/images/service/balinese.jpg",
  },
  {
    title: "Javanese Massage",
    description:
      "Untuk melancarkan energi vital (qi) dan meredakan ketegangan otot, serta meningkatkan relaksasi dan kesejahteraan secara keseluruhan",
    image: "/images/service/javanese.jpg",
  },
  {
    title: "Kerokan",
    description:
      "Meringankan dan membantu rileksasi dan mengeluarkan angin dalam tubuh, membuat tubuh menjadi segar kembali",
    image: "/images/service/kerokan.jpg",
  },
  {
    title: "Brazilian Waxing",
    description:
      "Metode hair removal yang populer untuk area kemaluan, termasuk area bikini dan sekitarnya, menggunakan lilin panas yang ditarik untuk mencabut rambut dari akarnya.",
    image: "/images/service/brazilianwaxing.jpg",
  },
  {
    title: "Bekam Basah",
    description:
      "Meningkatkan ketahanan tubuh menjadi lebih sehat dan membatu kelancaran peredaran darah",
    image: "/images/service/bekambasah.jpg",
  },
  {
    title: "Sport Massage",
    description:
      "Meregangkan otot yang tegang, sport massage juga dapat merangsang otot yang tidak aktif dan memperbaiki kondisi jaringan lunak",
    image: "/images/service/sportmassage.jpg",
  },
  {
    title: "Full Body Massage & Refleksi",
    description:
      "Perpaduan massage seluruh badan dan refleksi yang memberikan manfaat yang lebih banyak pada tubuh Anda",
    image: "/images/service/fullbodymassage.jpg",
  },
  {
    title: "Totok Wajah",
    description: "Meningkatkan kecerahan wajah menjadi lebih awet muda",
    image: "/images/service/ttkwjh.jpg",
  },
  {
    title: "Akupuntur",
    description:
      "Membatu syaraf kecerahan, mengencangkan wajah, melasma, menunda ketuaan, membuat awet muda",
    image: "/images/service/akupuntur.jpg",
  },
];

const WA_NUMBER = "6281996151615";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold mb-4 uppercase tracking-wide">
            Layanan Kami
          </p>
          <h2 className="text-4xl font-bold text-slate-900">
            Pilihan Layanan Massage
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {service.description}
                </p>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=Halo, saya ingin booking ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Booking via WA
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
