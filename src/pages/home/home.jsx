import "./home.css";
import heroImg from "../../assets/img/elotucos_home_img.png";
import logo from "../../assets/img/elotucos_toolbar_logo.png";

export default function Home() {
  const menuItems = [
    {
      title: "Elote Clásico",
      desc: "Elote entero con crema, mayonesa, queso y chile al gusto.",
      price: "$45",
    },
    {
      title: "Esquite Supremo",
      desc: "Vaso generoso de granos de elote con mantequilla, queso y salsas especiales.",
      price: "$60",
    },
    {
      title: "Elote Flamin'",
      desc: "Combinación botanera con frituras, queso amarillo y toque picosito.",
      price: "$75",
    },
    {
      title: "Maruchan con Elote",
      desc: "La favorita para el antojo fuerte, cremosa y con mucho sabor.",
      price: "$85",
    },
  ];

  const branches = [
    {
      name: "Sucursal Principal",
      address: "Ubicación en Google Maps",
      schedule: "Lunes a Domingo · 6:00 PM a 11:00 PM",
      map: "https://maps.app.goo.gl/LfYRpwku5iFo1Sxb8",
    },
  ];

  const events = [
    "Cumpleaños y reuniones familiares",
    "Eventos escolares y empresariales",
    "Contrataciones para bodas y fiestas",
  ];

  return (
    <div className="page-shell">
      <div className="floating-kernel" />

      <div className="navbar-wrap">
        <nav className="navbar">
          <div className="brand">
            <img src={logo} alt="Elotucos Logo" className="brand-logo" />
          </div>

          <div className="nav-links">
            <a href="#inicio">Home</a>
            <a href="#menu">Menú</a>
            <a href="#eventos">Eventos</a>
            <a href="#sucursales">Sucursales</a>
            <a href="#contacto">Contacto</a>
          </div>

          <a className="nav-cta" href="#contacto">Pedir ahora</a>
        </nav>
      </div>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow">🌶️ El sabor que sí antoja</div>
          <h2 className="hero-title">
            Elotes con <span>mucho antojo</span>, sabor y estilo.
          </h2>
          <p className="hero-desc">
            Una landing vibrante para tu puesto de elotes, con una imagen moderna,
            cálida y muy apetecible. Ideal para mostrar tus platillos, promocionar
            eventos, ubicar tus sucursales y hacer que más personas te contacten.
          </p>

          <div className="hero-actions">
            <a href="#menu" className="btn-primary">Ver menú</a>
            <a href="#sucursales" className="btn-secondary">Cómo llegar</a>
          </div>
        </div>

        <div className="hero-visual">
            <img src={heroImg} alt="Elotes" className="hero-image" />

            <div className="offer-card">
                <strong>Especial de la casa</strong>
                <p>
                Elotes preparados con topping crujiente, queso, crema y ese toque
                picosito que se queda en la memoria.
                </p>
            </div>
        </div>
      </section>

      <section className="section" id="menu">
        <div className="section-head">
          <div>
            <div className="section-label">Menú</div>
            <h2 className="section-title">Tus favoritos en una sola vista</h2>
            <p className="section-desc">
              Inspirado en sitios de elotes con estilo comercial fuerte, pero adaptado
              a una propuesta más limpia, cálida y llamativa para tu marca.
            </p>
          </div>
        </div>

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <article className="menu-card" key={item.title}>
              <span className="menu-tag">Popular #{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="price-row">
                <span className="price">{item.price}</span>
                <span className="chip">Muy pedido</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="eventos">
        <div className="section-head">
          <div>
            <div className="section-label">Eventos</div>
            <h2 className="section-title">Llevamos el sabor a tu evento</h2>
            <p className="section-desc">
              Esta sección está pensada para convertir visitas en contrataciones,
              destacando tus servicios para fiestas, reuniones y celebraciones.
            </p>
          </div>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <article className="event-card" key={event}>
              <div className="event-icon">🎉</div>
              <h3>{event}</h3>
              <p>
                Servicio con presentación atractiva, atención rápida y una propuesta
                perfecta para consentir a tus invitados.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="sucursales">
        <div className="section-head">
          <div>
            <div className="section-label">Sucursales</div>
            <h2 className="section-title">Encuéntranos y lánzate por tu antojo</h2>
            <p className="section-desc">
              Dejé conectada la llamada a Google Maps usando el enlace que compartiste,
              para que puedas reutilizarlo directamente como CTA principal.
            </p>
          </div>
        </div>

        <div className="branches-grid">
          {branches.map((branch) => (
            <article className="branch-card" key={branch.name}>
              <h3>{branch.name}</h3>
              <p>{branch.address}</p>
              <div className="branch-meta">
                <span className="meta-pill">{branch.schedule}</span>
                <span className="meta-pill">Pedidos por mensaje</span>
              </div>
              <div className="branch-actions">
                <a className="btn-primary" href={branch.map} target="_blank" rel="noreferrer">
                  Abrir en Maps
                </a>
                <a className="btn-secondary" href="#contacto">
                  Contactar
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="contacto">
        <div className="section-head">
          <div>
            <div className="section-label">Contacto</div>
            <h2 className="section-title">Haz tu pedido o cotiza tu evento</h2>
            <p className="section-desc">
              Aquí puedes poner tu número de WhatsApp, redes sociales, horarios y cualquier
              detalle importante para cerrar ventas más rápido.
            </p>
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-panel contact-highlight">
            <h3>Información directa</h3>
            <p>
              Reemplaza estos datos por los reales de tu negocio y deja esta sección lista
              para recibir mensajes desde el primer día.
            </p>
            <ul>
              <li><span className="contact-icon">📞</span> +52 81 0000 0000</li>
              <li><span className="contact-icon">💬</span> WhatsApp para pedidos</li>
              <li><span className="contact-icon">📍</span> Monterrey, Nuevo León</li>
              <li><span className="contact-icon">🕒</span> 6:00 PM a 11:00 PM</li>
            </ul>
          </div>

          <div className="contact-panel">
            <h3>Redes y atención</h3>
            <p>
              También puedes usar este bloque para Instagram, Facebook, TikTok o una forma
              rápida de generar confianza con testimonios y promociones semanales.
            </p>
            <ul>
              <li><span className="contact-icon">📸</span> Instagram / TuUsuario</li>
              <li><span className="contact-icon">👍</span> Facebook / TuPagina</li>
              <li><span className="contact-icon">🎵</span> TikTok / TuMarca</li>
              <li><span className="contact-icon">✉️</span> hola@tuelotiza.com</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-card">
          <p>© 2026 Elotes del Barrio. Sabor callejero, imagen inolvidable.</p>
          <div className="footer-links">
            <a href="#inicio">Home</a>
            <a href="#menu">Menú</a>
            <a href="#eventos">Eventos</a>
            <a href="#sucursales">Sucursales</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}