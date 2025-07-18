import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { projects } from '../data/projects';
import Image from 'next/image';

const ShowcaseCards = () => {
  const { t } = useTranslation('translation');
  const { locale } = useRouter();

  return (
    <section className="text-center py-36 px-6 transition-colors duration-300 dark:text-white">
      <motion.h2
        className="font-space font-bold text-4xl md:text-4xl leading-snug text-transparent animate-gradient"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {t('showcase.title', 'SHOWCASE')}
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-zinc-600 dark:text-gray-400 font-redhat"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        {t('showcase.subtitle', 'Some of my latest work')}
      </motion.p>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative">
        {projects.map((project, idx) => (
          <Link
            key={project.slug}
            href={`/${locale || 'en'}/showcase/${project.slug}`}
            className="group"
          >
            <motion.div
              className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl dark:shadow-2xl group"
              whileHover={{
                scale: 1.1,
                zIndex: 20,
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              title={project.title}
            >
              <Image
                src={project.thumbnail || project.image}
                alt={`${project.title} screenshot`}
                layout="fill"
                objectFit="cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              <div className="absolute top-4 right-4 z-20 bg-white p-3 rounded-full shadow-md hover:scale-110 transition-transform">
                <ArrowUpRight className="w-7 h-7 text-black" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-20 text-left">
                <p className="text-xs md:text-sm text-white/70 mb-1 drop-shadow-sm tracking-widest">
                  {t(`projects.${project.slug}.role`, project.role)}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseCards;



/* 
MIS SUPERS CARDS.
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { projects } from '../data/projects';

const ShowcaseCards = () => {
  const { t } = useTranslation('translation');
  const { locale } = useRouter()

  return (
    <section className="text-center py-36 transition-colors duration-300 px-6 dark:text-white">
      <motion.h2
        className="font-space font-bold text-4xl md:text-3xl leading-snug animate-gradient text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {t('showcase.title', 'SHOWCASE')}
      </motion.h2>

      <motion.p
        className="mt-2 text-lg md:text-xl text-zinc-600 dark:text-gray-400 font-redhat"
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
            key={project.slug}
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
              <Link href={`/${locale || 'en'}/showcase/${project.slug}`}>
                <ArrowUpRight className="w-7 h-7 text-black" />
              </Link>
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

export default ShowcaseCards; */