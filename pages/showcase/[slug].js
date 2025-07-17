import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from '../../next-i18next.config';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import { projects } from '../../data/projects';
import { ArrowUpRight } from 'lucide-react';

export const getStaticPaths = async () => {
  const paths = [];

  for (const locale of i18n.locales) {
    projects.forEach((project) => {
      paths.push({
        params: { slug: project.slug },
        locale,
      });
    });
  }

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ locale, params }) => {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return { notFound: true };
  }

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['translation'])),
      project,
      prevProject,
      nextProject,
    },
  };
};

const ProjectDetailPage = ({ project, prevProject, nextProject }) => {
  const { t } = useTranslation('translation');
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>{`${project?.title || 'Proyecto'} | Portfolio`}</title>
        <meta name="description" content={project?.description || 'Descripción del proyecto'} />
      </Head>


      <motion.div
        className="min-h-screen flex items-center justify-center bg-[#0e0d12] text-white px-4 md:px-10 lg:px-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Background Blurs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#A98BFF] opacity-20 blur-3xl rounded-full z-0" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#4B4BF9] opacity-10 blur-2xl rounded-full z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl w-full mx-auto bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl my-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Side */}
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-widest bg-gradient-to-r from-[#A98BFF] to-[#4B4BF9] bg-clip-text text-transparent">
                {t(`projects.${project.slug}.role`, project.role)}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>

              {/* Visit Site */}

              {/* About Section */}
              <div className="mt-8 space-y-4">
                <h2 className="text-lg font-semibold text-white/80">
                  {t('project_detail.about', 'Sobre el proyecto')}
                </h2>
                <p className="text-white/70 leading-relaxed">
                  {t(`projects.${project.slug}.description`, project.description || '')}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1 font-semibold text-base transition-colors duration-150 group"
                  >
                    <span className="bg-gradient-to-r from-[#A98BFF] to-[#4B4BF9] bg-clip-text text-transparent group-hover:bg-none group-hover:text-[#4B4BF9] transition-colors duration-150">
                      {t('project_detail.visit_site', 'Visitar sitio')}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#4B4BF9] group-hover:text-[#4B4BF9] transition-colors duration-150" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Side Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl shadow-lg w-full max-w-md transform rotate-6 hover:rotate-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-white/70">
            <div className="flex space-x-4">
              {prevProject && (
                <Link href={`/${locale || 'en'}/showcase/${prevProject.slug}`} passHref>
                  <a className="hover:text-[#A98BFF] transition-colors">
                    ← {t('project_detail.previous', 'Anterior')}
                  </a>
                </Link>
              )}
              {nextProject && (
                <Link href={`/${locale || 'en'}/showcase/${nextProject.slug}`} passHref>
                  <a className="hover:text-[#A98BFF] transition-colors">
                    {t('project_detail.next', 'Siguiente')} →
                  </a>
                </Link>
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="hover:text-[#4B4BF9] transition-colors"
              >
                {t('project_detail.back_to_home', 'Inicio')}
              </Link>

              <Link
                href="/#contact"
                className="bg-black/90 hover:bg-black text-white font-bold py-3 px-6 rounded-full text-lg backdrop-blur-xl transition-all shadow-xl dark:bg-white/10 dark:hover:bg-white/20 dark:border dark:border-white/20"
              >
                {t('project_detail.contact', 'Contacto')}
              </Link>

            {/*   <Link
                href="/#contact"
                className="bg-black/90 hover:bg-black text-white font-bold py-3 px-6 rounded-full text-lg backdrop-blur-xl transition-all shadow-xl dark:bg-white/10 dark:hover:bg-white/20 dark:border dark:border-white/20"
              >
                {t('project_detail.contact', 'Contacto')}
              </Link> */}

              <Link
                href="/social"
                className="hover:text-cyan-300 transition-colors"
              >
                {t('project_detail.social', 'Redes sociales')}
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectDetailPage;




/* import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from '../../next-i18next.config';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import { projects } from '../../data/projects';
import ScrollVelocity from "../../components/ScrollVelocity.js";

export const getStaticPaths = async () => {
  const paths = [];

  for (const locale of i18n.locales) {
    projects.forEach((project) => {
      paths.push({
        params: { slug: project.slug },
        locale,
      });
    });
  }

  console.log('Rutas generadas en getStaticPaths:', paths);

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ locale, params }) => {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['translation'])),
      project,
      prevProject,
      nextProject,
    },
  };
};

const ProjectDetailPage = ({ project, prevProject, nextProject }) => {
  const { t } = useTranslation('translation');
  const router = useRouter();
  const { locale } = router;

  return (
    <>
      <Head>
        <title>{project.title} | Mi Portafolio</title>
        <meta name="description" content={project.description} />
        <meta
          name="keywords"
          content={`${project.title}, portfolio, front-end, SEO`}
        />
      </Head>
      <motion.div
        className="min-h-screen bg-[#0e0d12] text-white py-16 px-4 md:px-8 lg:px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-cyan-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-teal-400 opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 left-1/2 w-[200px] h-[200px] bg-cyan-400 opacity-10 rounded-full blur-2xl"></div>
        <div className="max-w-7xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <motion.p
                className="text-teal-400 uppercase text-sm tracking-widest"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {project.role}
              </motion.p>
              <motion.h1
                className="text-4xl md:text-5xl font-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {project.title}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Link
                  href="#"
                  className="inline-block bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-orange-500 transition-colors"
                >
                  <span>
                    {t('project_detail.visit_site', 'Visita el sito')} →
                  </span>
                </Link>
              </motion.div>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h2 className="text-teal-500 uppercase text-lg font-semibold">
                  {t('project_detail.about', 'Acerca del proyecto')}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            </div>

            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full max-w-md rounded-lg shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 flex flex-wrap justify-between items-center text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="flex space-x-4">
              {prevProject && (
                <Link
                  href={`/${locale}/showcase/${prevProject.slug}`}
                  className="flex items-center space-x-2 hover:text-purple-300 transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <span>←</span>
                    <span>{t('project_detail.previous', 'Anterior')}</span>
                  </span>
                </Link>
              )}
              {nextProject && (
                <Link
                  href={`/${locale}/showcase/${nextProject.slug}`}
                  className="flex items-center space-x-2 hover:text-purple-300 transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <span>{t('project_detail.next', 'Siguiente')}</span>
                    <span>→</span>
                  </span>
                </Link>
              )}
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href={`/${locale}`}
                className="hover:text-purple-300 transition-colors"
              >
                {t('project_detail.back_to_home', 'Volver al inicio')}
              </Link>
              <Link href="#" className="hover:text-cyan-300 transition-colors">
                {t('project_detail.offer', 'Hacer una propuesta')}
              </Link>
              <Link href={`/${locale}/social`} className="hover:text-cyan-300 transition-colors">
                {t('project_detail.social', 'Redes sociales')}
              </Link>
            </div>
          </motion.div>
        </div>

        
      </motion.div>
    </>
  );
};

export default ProjectDetailPage; */

