import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { getWhatsAppLink, formatWhatsAppNumber } from "@/lib/config";

export function ContactMap() {
  return (
    <section id="contact" className="relative h-[600px] w-full bg-slate-100">
      {/* Google Maps Embed Fullwidth */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2251770640746!2d106.80867019164567!3d-6.618924476293817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5f7a5c86783%3A0x7bcc692f48c86178!2sR9%20massage%20%26%20refleksi!5e0!3m2!1sid!2sid!4v1770988965308!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Location"
        className="absolute inset-0 w-full h-full brightness-110 contrast-125 transition-all duration-700"
      />

      {/* Contact Overlay */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:left-8 sm:translate-x-0 z-10 w-full max-w-sm px-4 sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg animate-pulse">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Hubungi Kami
              </h3>
              <a
                href={getWhatsAppLink(
                  "Halo, saya ingin bertanya tentang layanan Anda tentang Alamanda SPA dan Massage"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-slate-900 hover:text-green-600 transition-colors block"
              >
                {formatWhatsAppNumber()}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
