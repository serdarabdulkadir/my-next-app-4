
export default function Partners() {
  const logos = [
    { src: "/amazon.svg", alt: "Amazon" },
    { src: "/dribbble.svg", alt: "Dribbble" },
    { src: "/hubspot.svg", alt: "HubSpot" },
    { src: "/notion.svg", alt: "Notion" },
    { src: "netflix.svg", alt: "Netflix" },
    { src: "zoom.svg", alt: "Zoom" },
  ];

  return (
    <section className="flex flex-wrap items-center justify-center gap-20 py-12 bg-white">
      {logos.map((logo) => (
        <img
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          width={120}
          height={60}
          className="opacity-70 hover:opacity-100 transition-opacity"
        />
      ))}
    </section>
  );
}
