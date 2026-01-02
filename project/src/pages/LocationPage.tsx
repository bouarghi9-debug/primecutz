import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LocationPage() {
  const { t } = useLanguage();

  const hours = [
    { dayKey: 'location.monday', time: '9:00 AM - 8:00 PM' },
    { dayKey: 'location.tuesday', time: '9:00 AM - 8:00 PM' },
    { dayKey: 'location.wednesday', time: '9:00 AM - 8:00 PM' },
    { dayKey: 'location.thursday', time: '9:00 AM - 8:00 PM' },
    { dayKey: 'location.friday', time: '9:00 AM - 8:00 PM' },
    { dayKey: 'location.saturday', time: '9:00 AM - 6:00 PM' },
    { dayKey: 'location.sunday', time: '10:00 AM - 5:00 PM' },
  ];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold gold-text mb-4">{t('location.title')}</h1>
          <p className="text-gray-400 text-lg">{t('location.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 gold-text flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-100 mb-2">{t('location.address')}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {t('location.addressLine1')}
                  <br />
                  {t('location.addressLine2')}
                  <br />
                  {t('location.addressLine3')}
                </p>
                <a
                  href="https://maps.app.goo.gl/hL8ALck2buXVYcx6A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:text-yellow-600 transition text-sm font-medium mt-2 inline-block"
                >
                  {t('location.viewMaps')}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <Phone className="w-6 h-6 gold-text flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-100 mb-2">{t('location.phone')}</h3>
                <a
                  href="tel:+15141234567"
                  className="text-gray-400 hover:gold-text transition"
                >
                  (514) 123-4567
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <Mail className="w-6 h-6 gold-text flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-100 mb-2">{t('location.email')}</h3>
                <a
                  href="mailto:info@primecutz.com"
                  className="text-gray-400 hover:gold-text transition"
                >
                  info@primecutz.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <Clock className="w-6 h-6 gold-text flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-100 mb-3">{t('location.hours')}</h3>
                <div className="space-y-2">
                  {hours.map((hour) => (
                    <div key={hour.dayKey} className="flex justify-between gap-4">
                      <span className="text-gray-400">{t(hour.dayKey)}</span>
                      <span className="text-gray-500 text-sm">{hour.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button className="btn-gold w-full">
              {t('location.bookAppointment')}
            </button>
          </div>

          {/* Map Section */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="w-full h-96 bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-lg flex items-center justify-center overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.7850920854636!2d-73.48108!3d45.496301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9050b8068a1dd%3A0x7e8dd5c616619715!2sPrime%20Cutz%20-%20Barbier!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* What to Expect */}
            <div className="bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-lg p-6">
              <h3 className="font-bold text-gray-100 mb-4">{t('location.expectTitle')}</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex gap-2">
                  <span className="gold-text">✓</span>
                  <span>{t('location.expect1')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="gold-text">✓</span>
                  <span>{t('location.expect2')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="gold-text">✓</span>
                  <span>{t('location.expect3')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="gold-text">✓</span>
                  <span>{t('location.expect4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Parking & Accessibility */}
        <div className="mt-12 bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] border border-[#D4AF37]/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold gold-text mb-6">{t('location.parkingTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-100 mb-2">{t('location.parking')}</h3>
              <p className="text-gray-400">{t('location.parkingDesc')}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-100 mb-2">{t('location.accessibility')}</h3>
              <p className="text-gray-400">{t('location.accessibilityDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
