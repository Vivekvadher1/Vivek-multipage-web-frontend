import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ServicesWrapper = styled.div`
  min-height: 100vh;
  background: #f9fafb;
  padding: 60px 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .subtitle {
    text-align: center;
    color: #6b7280;
    margin-bottom: 48px;
    font-size: 16px;
    padding: 0 12px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
  }

  .card {
    background: #ffffff;
    border-radius: 16px;
    padding: 28px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  }

  .icon {
    font-size: 36px;
    margin-bottom: 16px;
  }

  .card-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .card-text {
    font-size: 14px;
    color: #6b7280;
    line-height: 1.6;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }

  button {
    background: #4f46e5;
    color: white;
    border: none;
    border-radius: 12px;
    padding: 14px 36px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
  }

  button:hover {
    background: #4338ca;
    transform: translateY(-2px);
  }

  /* Tablet */
  @media (max-width: 768px) {
    padding: 40px 16px;

    h1 {
      font-size: 32px;
    }

    .subtitle {
      font-size: 15px;
      margin-bottom: 36px;
    }

    .card {
      padding: 24px;
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    h1 {
      font-size: 26px;
    }

    .subtitle {
      font-size: 14px;
    }

    .grid {
      gap: 16px;
    }

    .icon {
      font-size: 32px;
    }

    button {
      width: 100%;
      padding: 14px 0;
    }
  }
`;

export default function ServicePage() {
  const services = [
    {
      icon: "🧩",
      title: "REST API Development",
      description:
        "Robust Express.js APIs with clean architecture, validation, and scalability.",
    },
    {
      icon: "🗄️",
      title: "MongoDB & Mongoose",
      description:
        "Optimized schemas, relationships, indexing, and production-ready queries.",
    },
    {
      icon: "🖼️",
      title: "Image Upload Service",
      description: "Secure image handling using Multer, Cloudinary, or AWS S3.",
    },
    {
      icon: "🔐",
      title: "Authentication",
      description:
        "JWT-based authentication, role-based access, and security best practices.",
    },
  ];

  return (
    <ServicesWrapper>
      <div className="container">
        <h1>Our Services</h1>
        <p className="subtitle">
          Backend solutions built for modern, scalable web applications
        </p>

        <div className="grid">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <div className="icon">{service.icon}</div>
              <div className="card-title">{service.title}</div>
              <div className="card-text">{service.description}</div>
            </div>
          ))}
        </div>

        <div className="button-wrapper">
          <NavLink to="/contact">
            <button>Contact Us</button>
          </NavLink>
        </div>
      </div>
    </ServicesWrapper>
  );
}
