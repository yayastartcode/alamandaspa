import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { getWhatsAppLink } from '@/lib/config'

export function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    address: '',
    service: '',
  })

  const services = [
    'Traditional Massage - Rp 300.000 (60 mnt)',
    'Scrub Rileks Massage - Rp 400.000 (90 mnt)',
    'Swedish Massage - Rp 350.000 (60 mnt)',
    'Sport Massage - Rp 450.000 (120 mnt)',
    'Balinese Massage - Rp 350.000 (90 mnt)',
    'Treatment Kerik - Rp 100.000',
  ]

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Build WhatsApp message
    const message = `Halo, saya ingin reservasi layanan:\n\nNama: ${formData.name}\nNo WhatsApp: ${formData.whatsapp}\nAlamat: ${formData.address}\nLayanan: ${formData.service}`

    // Open WhatsApp using centralized config
    window.open(getWhatsAppLink(message), '_blank')
  }

  return (
    <section id="reservation-form" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Reservasi Sekarang
          </h2>
          <p className="text-lg text-slate-600">
            Isi form di bawah ini untuk melakukan reservasi layanan
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-slate-900 font-semibold mb-2 text-lg">
                Nama
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Masukkan nama Anda"
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-slate-900 font-semibold mb-2 text-lg">
                No WhatsApp
              </label>
              <input
                type="tel"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="Contoh: 08123456789"
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-slate-900 font-semibold mb-2 text-lg">
                Alamat
              </label>
              <textarea
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Masukkan alamat lengkap Anda"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-slate-900 font-semibold mb-2 text-lg">
                Layanan
              </label>
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none bg-white transition-all"
              >
                <option value="">Pilih layanan</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full text-lg py-6 bg-green-500 hover:bg-green-600 text-white font-bold"
            >
              Kirim via WhatsApp
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
