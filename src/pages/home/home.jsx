import "./home.css";
import { useState } from "react";

import heroImg from "../../assets/img/elotucos_home_img.png";
import logo from "../../assets/img/elotucos_toolbar_logo.png";
import tostitos from "../../assets/img/elotucos_tostitos_img.png";
import maruchanImg from "../../assets/img/elotucos_marucha_elote.png";
import mediolitroImg from "../../assets/img/medio-litro.png";
import tostitosImg from "../../assets/img/mega-espolvoreado.png";
import ev1 from "../../assets/img/event_5.png";
import ev2 from "../../assets/img/event_1.jfif";
import ev3 from "../../assets/img/event_2.jfif";
import ev4 from "../../assets/img/event_3.jpg";
import ev5 from "../../assets/img/event_4.jpg";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page-shell">
      <div className="navbar-wrap">
          <nav className="navbar">
            
            <div className="brand">
              <img src={logo} alt="Elotucos Logo" className="brand-logo" />
            </div>

            {/* BOTÓN HAMBURGUESA */}
            <button 
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

            {/* LINKS */}
            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
              <a href="#inicio">Home</a>
              <a href="#menu">Menú</a>
              <a href="#eventos">Eventos</a>
              <a href="#sucursales">Sucursales</a>
              <a href="#contacto">Contacto</a>
            </div>

            {/* BOTÓN SOLO DESKTOP */}
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

        <div className="menu-cards-row">
          <article className="menu-mini-card">
            <img src={maruchanImg} alt="Mega Loco" className="menu-mini-image" />

            <div className="menu-mini-info">
              <div className="menu-mini-top">
                <h4>Mega Loco</h4>
                <span>$135</span>
              </div>

              <p>
                Doritos, doble porción de elote, crema o mayonesa, espolvoreado,
                queso amarillo, queso molido y salsas.
              </p>
            </div>
          </article>

          <article className="menu-mini-card">
            <img src={mediolitroImg} alt="Vaso medio litro" className="menu-mini-image" />

            <div className="menu-mini-info">
              <div className="menu-mini-top">
                <h4>Vaso Medio Litro</h4>
                <span>$75</span>
              </div>

              <p>
                Elote blanco o amarillo en vaso de medio litro con crema o mayonesa,
                queso amarillo y salsas.
              </p>
            </div>
          </article>

          <article className="menu-mini-card">
            <img src={tostitosImg} alt="Mega Espolvoreado" className="menu-mini-image" />

            <div className="menu-mini-info">
              <div className="menu-mini-top">
                <h4>Mega Espolvoreado</h4>
                <span>$92</span>
              </div>

              <p>
                Vaso de medio litro con elote blanco o amarillo, queso amarillo,
                espolvoreado y salsas.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section events-mosaic-section" id="eventos">
        <div className="events-mosaic-top">
          <div className="events-mosaic-heading">
            <span className="events-mosaic-kicker">EVENTOS</span>
            <h2 className="events-mosaic-title">Llevamos Elotucos a tu evento</h2>
          </div>

          <div className="events-mosaic-intro">
            <p>
              Llevamos nuestros elotes y botanas para que tu evento se vea, se disfrute
              y se recuerde. Ideal para cumpleaños, reuniones familiares, fiestas
              privadas y celebraciones especiales.
            </p>

            <div className="events-mosaic-actions">
              <span className="events-mosaic-tag">Servicio para eventos</span>
              <a href="#contacto" className="events-mosaic-btn">Cotizar</a>
            </div>
          </div>
        </div>

        <div className="events-mosaic-grid">
          <article className="events-mosaic-card events-mosaic-card-large">
            <img src={ev1} alt="Evento Elotucos principal" />
          </article>

          <article className="events-mosaic-card">
            <img src={ev2} alt="Maruchan con elote" />
          </article>

          <article className="events-mosaic-card">
            <img src={ev3} alt="Tostitos preparados" />
          </article>

          <article className="events-mosaic-card">
            <img src={ev4} alt="Logo Elotucos" />
          </article>

          <article className="events-mosaic-card">
            <img src={heroImg} alt="Montaje Elotucos" />
          </article>

          <article className="events-mosaic-card">
            <img src={ev5} alt="Producto especial Elotucos" />
          </article>
        </div>
      </section>

      <section className="section sucursales-section" id="sucursales">
        <span className="section-kicker">SUCURSALES</span>

        <h2 className="section-title">
          Encuéntranos y lánzate por tu antojo
        </h2>

        <p className="section-desc">
          Estamos listos para atenderte. Ven a visitarnos o abre la ubicación directamente en Google Maps.
        </p>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps?q=Blvd.+Rogelio+Cantú+Gómez+650,+Monterrey,+NL&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Elotucos"
          ></iframe>
        </div>

        <div className="map-actions">
          <a
            href="https://www.google.com/maps?q=Blvd.+Rogelio+Cantú+Gómez+650,+Monterrey,+NL"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Abrir en Maps
          </a>

          <a href="#contacto" className="btn-secondary">
            Contactar
          </a>
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