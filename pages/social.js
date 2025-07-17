import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { FaRegCopy, FaShareAlt, FaStar } from 'react-icons/fa';
import QRCode from 'qrcode.react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

import { socialData } from '../data/social';
import { useRouter } from 'next/router';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['translation'])),
    },
  };
};

const brandColors = {
  LinkedIn: 'from-[#0077b5] to-[#00a0dc]',
  Twitter: 'from-[#1da1f2] to-[#0e0d12]',
  Bandcamp: 'from-[#629aa9] to-[#1a1724]',
  'Mi Portafolio': 'from-[#A98BFF] to-[#4B4BF9]',
};

const badgePlatform = 'LinkedIn'; // Puedes cambiar la red destacada aquí

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const SocialPage = () => {
  const { t } = useTranslation('translation');
  const [copiedIdx, setCopiedIdx] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const router = useRouter();

  // Redirección automática si no hay prefijo de idioma
  useEffect(() => {
    if (router && router.locale && !router.asPath.startsWith(`/${router.locale}`)) {
      // Evita doble prefijo si ya está
      if (router.pathname === '/social' && typeof window !== 'undefined') {
        router.replace(`/${router.locale}/social`);
      }
    }
  }, [router]);

  const handleCopy = (url, idx) => {
    navigator.clipboard.writeText(url);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1200);
  };

  const handleShare = (url) => {
    if (navigator.share) {
      navigator.share({ url });
    } else {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`);
    }
  };

  return (
    <>
      <Head>
        <title>{socialData.name} | Social</title>
        <meta name="description" content={socialData.description} />
        <meta
          name="keywords"
          content={`${socialData.name}, portfolio, social, front-end, developer`}
        />
      </Head>
      <motion.div
        className="min-h-screen flex items-center justify-center relative bg-[#0e0d12] text-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#A98BFF] opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#4B4BF9] opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 left-1/2 w-[200px] h-[200px] bg-[#A98BFF] opacity-10 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto bg-[#1a1724]/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-lg">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Perfil */}
            <motion.div
              className="space-y-6 col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={socialData.avatar}
                alt={`${socialData.name} avatar`}
                className="w-32 h-32 rounded-full mx-auto lg:mx-0 shadow-xl border-4 border-[#A98BFF]/30 object-cover aspect-square"
              />
              <h1 className="text-4xl md:text-5xl font-extrabold text-center lg:text-left text-white">
                {socialData.name}
              </h1>
              <p className="text-gray-300 leading-relaxed text-center lg:text-left">
                {t('social.description', { ns: 'translation' })}
              </p>
            </motion.div>

            {/* Redes sociales */}
            <div className="col-span-1 lg:col-span-2">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {socialData.links.map((link, idx) => (
                  <motion.div
                    key={link.platform}
                    className={`relative group bg-[#2c2a33]/70 backdrop-blur-sm rounded-2xl p-4 flex items-center space-x-4 transition-all duration-300 cursor-pointer border-2 border-transparent hover:scale-105 hover:shadow-2xl hover:border-gradient-to-r ${brandColors[link.platform] || 'from-[#A98BFF] to-[#4B4BF9]'}`}
                    whileHover={{ scale: 1.04, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    tabIndex={0}
                    aria-label={`Enlace a ${link.platform}`}
                  >
                    <div className="relative">
                      <img
                        src={link.icon}
                        alt={`${link.platform} icon`}
                        className="w-10 h-10 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-md"
                      />
                    </div>
                    <div className="flex-1">
                      <Link
                        href={link.url}
                        className="text-white font-semibold text-lg hover:text-purple-300 transition-colors focus:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={-1}
                      >
                        <span>{link.platform}</span>
                      </Link>
                      <p className="text-gray-400 text-xs truncate max-w-[180px]">{link.url}</p>
                    </div>
                    {/* Botones de acción (sin QR) */}
                    <div className="flex gap-2 ml-2">
                      <button
                        onClick={() => handleCopy(link.url, idx)}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
                        aria-label="Copiar URL"
                        tabIndex={0}
                      >
                        <FaRegCopy className="w-4 h-4 text-purple-300 group-hover:scale-110 transition-transform" />
                        {copiedIdx === idx && (
                          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow-lg animate-fade-in">Copiado!</span>
                        )}
                      </button>
                      <button
                        onClick={() => handleShare(link.url)}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
                        aria-label="Compartir URL"
                        tabIndex={0}
                      >
                        <FaShareAlt className="w-4 h-4 text-purple-300 group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                    {/* Tooltip personalizado */}
                    <span className="absolute left-1/2 -bottom-8 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none bg-black/80 text-white text-xs px-2 py-1 rounded shadow-lg transition-all duration-300">
                      {`Ir a ${link.platform}`}
                    </span>
                  </motion.div>
                ))}
                {/* Mapa visual mejorado */}
                <motion.div
                  className="bg-[#2c2a33]/70 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden shadow-lg border border-purple-900/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  style={{ minHeight: 180 }}
                >
                  <MapContainer center={[-34.6037, -58.3816]} zoom={11} style={{ height: 160, width: '100%', borderRadius: '0.75rem' }} scrollWheelZoom={false} dragging={false} doubleClickZoom={false} zoomControl={false} attributionControl={false}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[-34.6037, -58.3816]}>
                      <Popup>Buenos Aires</Popup>
                    </Marker>
                  </MapContainer>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Botones extra */}
          <motion.div
            className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link
              href="/#contact"
              scroll={false}
              className="bg-gradient-to-r from-[#A98BFF] to-[#4B4BF9] text-white px-6 py-3 rounded-full hover:opacity-90 transition-colors flex items-center space-x-2 shadow-md"
            >
              <span>{t('social.connect', { ns: 'translation' })}</span>
            </Link>
            <Link
              href="/"
              className="bg-gradient-to-r from-[#A98BFF] to-[#4B4BF9] text-white px-6 py-3 rounded-full hover:opacity-90 transition-colors flex items-center space-x-2 shadow-md"
            >
              <span>{t('social.explore', { ns: 'translation' })}</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default SocialPage;

