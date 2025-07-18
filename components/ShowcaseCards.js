import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'next-i18next';

const projects = [
  {
    title: 'Gabriele Garbolino',
    role: 'FRONT-END DEVELOPMENT / SEO',
    image: 'assets/screen2.png',
  },
  {
    title: 'Albertina Academy',
    role: 'FRONT-END DEVELOPMENT / SEO',
    image: 'assets/screen.png',
  },
  {
    title: 'Gabriele Garbolino',
    role: 'FRONT-END DEVELOPMENT / SEO',
    image: 'assets/screen2.png',
  },
];

const ShowcaseCards = () => {
  const { t } = useTranslation('translation');

  return (
    <section className="py-36 transition-colors duration-300 px-4">
      <motion.h2
        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {t('showcase.title', 'SHOWCASE')}
      </motion.h2>

      <motion.p
        className="mt-2 text-lg md:text-xl text-zinc-600 dark:text-gray-400"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        {t('showcase.subtitle', 'Some of my latest work')}
      </motion.p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="relative rounded-3xl overflow-hidden shadow-xl dark:shadow-2xl group cursor-pointer bg-black"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            title={project.title}
          >
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="h-[400px] md:h-[560px] w-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="absolute top-4 right-4 z-20 bg-white p-3 rounded-full shadow-md hover:scale-110 transition-transform">
              <ArrowUpRight className="w-7 h-7 text-black" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 z-20 text-left">
              <p className="text-xs md:text-sm text-white/70 mb-1 drop-shadow-sm tracking-widest">
                {project.role}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseCards;