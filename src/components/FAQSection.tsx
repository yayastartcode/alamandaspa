import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "Apakah layanan massage tersedia 24 jam?",
      answer: "Ya, layanan kami tersedia 24 jam setiap hari termasuk hari libur. Anda bisa memesan kapan saja sesuai kebutuhan.",
    },
    {
      question: "Bagaimana cara memesan layanan massage?",
      answer: "Cukup hubungi kami via WhatsApp, pilih jenis layanan yang diinginkan, dan terapis kami akan datang ke lokasi Anda.",
    },
    {
      question: "Area mana saja yang dilayani?",
      answer: "Kami melayani area Jabodetabek meliputi Jakarta, Tangerang, Bogor, Bekasi, dan Depok.",
    },
    {
      question: "Apakah terapis sudah bersertifikat?",
      answer: "Ya, semua terapis kami sudah profesional dan bersertifikat sesuai keahlian terapi masing-masing.",
    },
    {
      question: "Berapa lama durasi massage?",
      answer: "Durasi massage bervariasi tergantung jenis layanan yang dipilih, mulai dari 60 menit hingga 120 menit.",
    },
  ];

  return (
    <section id="faq" className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/heromom.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-slate-800/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-wide">
            FAQS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pertanyaan Seputar Layanan
            <br />
            Massage Panggilan 24 Jam
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border-0 shadow-md overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-left hover:no-underline hover:bg-slate-50 transition-colors [&[data-state=open]]:bg-slate-50">
                  <span className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-2">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
