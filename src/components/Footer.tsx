export function Footer() {
  const services = [
    "Traditional Massage",
    "Scrub Rileks Massage",
    "Swedish Massage",
    "Sport Massage",
    "Balinese Massage",
    "Treatment Kerik",
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img
              src="/images/almlg.jpeg"
              alt="Alamanda Spa Logo"
              className="h-16 w-auto object-contain mb-4 bg-white rounded-lg p-2"
            />
            <p className="text-slate-400 leading-relaxed mb-4">
              Alamanda Spa solusi terbaik untuk pijat dan terapi tradisional
              bersertifikat.
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6">Layanan Kami</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {services.map((service, index) => (
                <span key={index} className="text-slate-300 text-sm">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Alamanda Spa. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
