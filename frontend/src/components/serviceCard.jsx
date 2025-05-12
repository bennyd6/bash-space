import './scard.css';

export default function ServiceCard({ title, description, image, hoverImage }) {
  return (
    <div className="service-card" style={{ backgroundImage: `url(${image})` }}>
      <div
        className="hover-bg"
        style={{ backgroundImage: `url(${hoverImage})` }}
      ></div>
      <div className="card-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

