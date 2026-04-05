export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Michele Graziano",
    "jobTitle": "Data Engineer & Software Engineer",
    "url": "https://graziano.app",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Zürich",
      "addressCountry": "CH"
    },
    "sameAs": [
      "https://www.linkedin.com/in/michele-graziano-420236171/",
      "https://github.com/michelgr95"
    ],
    "knowsAbout": [
      "Computer Vision",
      "Data Engineering",
      "Machine Learning",
      "Autonomous Systems",
      "Cloud Infrastructure",
      "Terraform",
      "Snowflake",
      "YOLO",
      "MediaPipe"
    ],
    "description": "Software Engineer specializing in Computer Vision (CheerClip) and Autonomous Systems (AMZ). Expert in AI and data platform architecture."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
