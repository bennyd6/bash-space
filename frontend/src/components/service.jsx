import './service.css';
import ServiceCard from './serviceCard';

export default function Service() {
  const services = [
    {
      title: "Website Design & Development",
      description: "Crafting modern, responsive websites that reflect your brand and engage users.",
      hoverImage: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamdxYWFla2VneWU0dGE4Z2thZ3c4eXM5cjIxM2kwNTdzaDI2NHF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SpopD7IQN2gK3qN4jS/giphy.gif",
    },
    {
      title: "Website Maintenance",
      description: "Regular updates, performance monitoring, and support to keep your site running smoothly.",
      hoverImage: "https://i.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
    },
    {
      title: "SEO Optimization",
      description: "Improving your site's visibility with on-page and technical SEO best practices.",
      hoverImage: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHd5ZzVwempldjVtbGhic3k3bmVndTIyYmZraDgwd2llYXVob2lsMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RZnKZpkUJv8dxf22qG/giphy.gif",
    },
    {
      title: "Custom Solutions",
      description: "Need something unique? From landing pages to web apps — we’ve got you covered.",
      hoverImage: "https://i.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
    }
  ];

  return (
    <div className="ser-main" id='services'>
      <div className="ser-in-1">
        <h1>What we offer?</h1>
      </div>
      <div className="ser-in-2">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            hoverImage={service.hoverImage}
          />
        ))}
      </div>
    </div>
  );
}
