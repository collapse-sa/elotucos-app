import "./home.css";
import heroImg from "../../assets/img/elotucos_home_img.png";
import logo from "../../assets/img/elotucos_toolbar_logo.png";
import tostitos from "../../assets/img/elotucos_tostitos_img.png";
import maruchanImg from "../../assets/img/elotucos_marucha_elote.png";

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

        {/* 🔥 ELOTITOS DECORATIVOS */}
        <img src={logo} className="floating-elote elote-1" alt="" />
        <img src={logo} className="floating-elote elote-2" alt="" />

        <div className="hero-copy">
          <div className="eyebrow">🌶️ El sabor que sí antoja</div>
          <h2 className="hero-title">
            Elotes con <span>mucho antojo</span>, sabor y estilo.
          </h2>

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

      <section className="section menu-section" id="menu">
        <div className="menu-header">
            <div className="menu-kicker">MENÚ</div>
            <h2 className="menu-main-title">Lo más pedido</h2>
        </div>

        <div className="menu-feature">
            <div className="menu-feature-image-wrap">
            <img src={tostitos} alt="Esquite loco" className="menu-feature-image" />
            </div>

            <div className="menu-feature-content">
            <h3 className="menu-feature-name">Esquite Loco</h3>

            <p className="menu-feature-desc">
                Doritos, elote blanco o amarillo, crema o mayonesa, espolvoreado,
                queso amarillo, queso molido y salsas.
            </p>

            <div className="menu-feature-meta">
                <span className="menu-feature-tag">Individual</span>
                <span className="menu-feature-price">$80</span>
            </div>
            </div>
        </div>

        <div className="menu-feature menu-feature-reverse">
            <div className="menu-feature-content">
                <h3 className="menu-feature-name">Maruchan con Elote</h3>

                <p className="menu-feature-desc">
                Maruchan preparada con elote, crema, queso, salsas y ese toque picosito
                que la hace irresistible.
                </p>

                <div className="menu-feature-meta">
                <span className="menu-feature-tag">Individual</span>
                <span className="menu-feature-price">$85</span>
                </div>
            </div>

            <div className="menu-feature-image-wrap menu-feature-image-wrap-right">
                <img
                src={maruchanImg}
                alt="Maruchan con elote"
                className="menu-feature-image menu-feature-image-maruchan"
                />
            </div>
        </div>

        <div className="menu-list">
            {menuItems.map((item) => (
            <article className="menu-list-item" key={item.title}>
                <div className="menu-list-text">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                </div>
                <span className="menu-list-price">{item.price}</span>
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