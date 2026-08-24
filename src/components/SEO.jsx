function SEO({ title, description, image = "/images/og-default.png", url = "/" }) {
  const siteName = "JEONGWON Portfolio";

  const fullTitle = title ? `${title} | JEONGWON` : "JEONGWON | Frontend Developer";

  // 배포 후 실제 주소로 변경
  const siteUrl = "https://my-portfolio-theta-seven-yxeeaw24ik.vercel.app";

  const pageUrl = `${siteUrl}${url}`;

  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return (
    <>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={pageUrl} />

      <meta property="og:type" content="website" />

      <meta property="og:site_name" content={siteName} />

      <meta property="og:title" content={fullTitle} />

      <meta property="og:description" content={description} />

      <meta property="og:url" content={pageUrl} />

      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={fullTitle} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={imageUrl} />
    </>
  );
}

export default SEO;
