import './service.css';
import ServiceCard from './serviceCard';
import { Fade } from 'react-awesome-reveal'; // 👈 import animation

export default function Service() {
  const services = [
    {
      title: "Website Design & Development",
      description: "Crafting modern, responsive websites that reflect your brand and engage users.",
      image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9",
      hoverImage: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamdxYWFla2VneWU0dGE4Z2thZ3c4eXM5cjIxM2kwNTdzaDI2NHF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SpopD7IQN2gK3qN4jS/giphy.gif",
      width: "300px",
      height: "384px"
    },
    {
      title: "Website Maintenance",
      description: "Regular updates, performance monitoring, and support to keep your site running smoothly.",
      image: "https://images.unsplash.com/photo-1525186402429-b4ff38bedec6",
      hoverImage: "https://i.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
      width: "260px",
      height: "420px"
    },
    {
      title: "SEO Optimization",
      description: "Improving your site's visibility with on-page and technical SEO best practices.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      hoverImage: "https://i.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif",
      width: "260px",
      height: "420px"
    },
    {
      title: "Custom Solutions",
      description: "Need something unique? From landing pages to web apps — we’ve got you covered.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      hoverImage: "https://i.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
      width: "260px",
      height: "420px"
    }
  ];

  return (
    <div className="ser-main">
      <div className="ser-in-1">
        <h1>What we offer?</h1>
      </div>

      <Fade cascade damping={0.1} triggerOnce>
        <div className="ser-in-2">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              hoverImage={service.hoverImage}
              width={service.width}
              height={service.height}
            />
          ))}
        </div>
      </Fade>
    </div>
  );
}
