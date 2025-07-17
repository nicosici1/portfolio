import Head from 'next/head';
import { useRouter } from 'next/router';

const SEO = ({ title, description, image = '/preview.jpg' }) => {
  const router = useRouter();
  const canonicalUrl = `https://nicolassiciliano.com${router.asPath}`;

  // Aseguramos que el título sea siempre un string
  const safeTitle = Array.isArray(title) ? title.join(' ') : title;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nicolás Siciliano',
    url: 'https://nicolassiciliano.com',
    jobTitle: 'Full Stack Developer',
    description: description,
    image: `https://nicolassiciliano.com${image}`,
    sameAs: [
      'https://github.com/nicosici1',
      'https://www.linkedin.com/in/nicol%C3%A1s-siciliano-087794171/'
    ],
    knowsAbout: [
      'Web Development',
      'Frontend Development',
      'Backend Development',
      'UI/UX Design',
      'React',
      'Next.js',
      'Node.js'
    ]
  };

  return (
    <Head>
      <title>{safeTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={safeTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://nicolassiciliano.com${image}`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={safeTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://nicolassiciliano.com${image}`} />
      
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
};

export default SEO; 