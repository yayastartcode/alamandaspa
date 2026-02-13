import { motion } from "motion/react";
import { Check } from "lucide-react";

export function WhyChooseUs() {
  const benefits = [
    { title: "Menjaga privasi Anda" },
    { title: "Menyediakan terapis profesional" },
    { title: "Lebih mendukung efisiensi waktu Customer" },
    { title: "Tidak perlu pusing kemacetan" },
    { title: "Kami menghubungkan customer dengan terapis profesional" },
    { title: "Membantu menemukan layanan yang dibutuhkan Customer" },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/whycus.webp"
                alt="Why Choose Us"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-slate-900">
              Mengapa Harus Memilih Kami?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Istirahat saja kadang tidak cukup untuk membantu tubuh pulih,
              sehingga Pijat Alamanda Spa sering menjadi solusi pilihan ketika badan
              pegal-pegal dan kecapekan. Alamanda Spa solusi terbaik memijat dengan
              lembut dan bertenaga merupakan terapi tradisional yang
              bersertifikat mampu mengatasi berbagai keluhan, mulai dari
              kelelahan hingga masuk angin.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Kota besar seperti  Bogor dan sekitarnya
              merupakan kota terpadat dan membuat badan butuh relaksasi, agar
              badan lebih rilek dan segar. Alamanda Spa menyediakan tenaga
              profesional dan bersertifikat sesuai keahlian terapi. Tenaga bisa
              memilih sesuai pelanggan inginkan.
            </p>


            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {benefit.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
