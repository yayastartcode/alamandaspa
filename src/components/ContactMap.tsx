import { motion } from "motion/react";
import { MapPin, Phone } from "lucide-react";
import { getWhatsAppLink, formatWhatsAppNumber } from "@/lib/config";

const locations = [
  "Jakarta Selatan",
  "Jakarta Timur",
  "Jakarta Utara",
  "Jakarta Barat",
  "Tangerang Kota",
  "Tangerang Selatan",
  "Bekasi Kota",
  "Bekasi Kabupaten",
  "Depok",
  "Bogor",
];

export function ContactMap() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Area Layanan</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Nikmati pengalaman pijat tanpa perlu meninggalkan rumah. Kami siap mendatangi Anda di manapun dan kapanpun, terutama di wilayah Jakarta, Tangerang, Bogor, Bekasi, Depok dan sekitarnya. Layanan kami tersedia sepanjang hari selama 24 jam. Pesanlah langsung melalui WhatsApp tanpa perlu mengunduh aplikasi tambahan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Lokasi</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {locations.map((loc, i) => (
                <span key={i} className="text-slate-700">{loc}</span>
              ))}
            </div>
          </motion.div>

          {/* WhatsApp & Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Hubungi Kami</h3>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
                  >
                    {formatWhatsAppNumber()}
                  </a>
                  <p className="text-slate-600 mt-2 text-sm">Klik untuk chat via WhatsApp</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 rounded-2xl p-6">
              <h4 className="font-semibold text-slate-900 mb-3">Jam Operasional</h4>
              <p className="text-2xl font-bold text-blue-600">24 Jam</p>
              <p className="text-slate-600 text-sm mt-1">Setiap hari, termasuk hari libur</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
