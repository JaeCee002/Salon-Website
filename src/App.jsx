import Navbar from './Navbar';
import Landingpage from './landingpage'
import IMG1 from './assets/img1.jpg'
import IMG2 from './assets/img2.jpg'
import IMG3 from './assets/img3.jpg'
import IMG4 from './assets/img4.jpg'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useRef } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const socialLinks = {
  facebook: 'https://web.facebook.com/profile.php?id=61590595032678',
  tiktok: 'https://www.tiktok.com/@tinashebwalya7',
  whatsapp: 'https://wa.me/260978313971',
}

function SocialIcon({ type }) {
  const paths = {
    facebook: <path d="M14 8.5h-2V7c0-.7.3-1 1-1h1V3.1c-.4-.1-1-.1-1.7-.1-2.1 0-3.5 1.3-3.5 3.6v1.9H7v3h1.8V21h3.2v-9.5H14l.4-3Z" />,
    tiktok: <path d="M15.5 3c.3 1.9 1.4 3.1 3.2 3.3v3a7.7 7.7 0 0 1-3.2-1V14a5.1 5.1 0 1 1-5.1-5.1c.3 0 .6 0 .9.1v3.1a2.2 2.2 0 1 0 1.1 1.9V3h3.1Z" />,
    whatsapp: <path d="M12 3.2a8.8 8.8 0 0 0-7.6 13.3L3 21l4.7-1.3A8.8 8.8 0 1 0 12 3.2Zm0 15.8a7 7 0 0 1-3.6-1l-.3-.2-2.8.8.8-2.7-.2-.3a7 7 0 1 1 6.1 3.4Zm3.8-5.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.2-.5.7-.6.8-.1.2-.2.2-.4.1-.2-.1-.8-.3-1.5-1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.3.1-.4l.3-.4c.1-.1.1-.2.2-.4.1-.1 0-.3 0-.4l-.6-1.4c-.2-.4-.3-.4-.5-.4h-.4c-.2 0-.4.1-.6.3-.2.2-.7.7-.7 1.7s.7 2  .8 2.1c.1.2 1.4 2.2 3.5 3.1.5.2.9.4 1.2.5.5.2 1 .2 1.3.1.4-.1 1.2-.5 1.3-1 .2-.5.2-.9.1-1Z" />,
  }

  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[type]}
    </svg>
  )
}

function SocialLinks({ label = 'Connect with us' }) {
  return (
    <div className="social-links" aria-label={label}>
      <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Visit us on Facebook">
        <SocialIcon type="facebook" />
      </a>
      <a href={socialLinks.tiktok} target="_blank" rel="noreferrer" aria-label="Visit us on TikTok">
        <SocialIcon type="tiktok" />
      </a>
      <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp">
        <SocialIcon type="whatsapp" />
      </a>
    </div>
  )
}

function Reveal({ children, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-visible')
        observer.unobserve(element)
      }
    }, { threshold: 0.15 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

function App() {
  return (
  <>
    <div className="app">
      <Navbar />
      <Landingpage />

    </div>
    <main id="home" className="landing-page">
      {/* <Swiper
        className="landing-swiper"
        modules={[Autoplay, A11y, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        a11y={{ enabled: true }}
      >
        <SwiperSlide>
          <img src={IMG1} alt="Nashes Beauty Lounge interior" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG2} alt="Nashes Beauty Lounge beauty treatment" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG3} alt="Nashes Beauty Lounge services" />
        </SwiperSlide>
      </Swiper> */}

      <section className="welcome-section content-section">
        <p className="eyebrow">Nashes Beauty Lounge</p>
        <h1>Celebrating Beauty, Elevating Confidence</h1>
        <p className="section-intro">
          Your beauty destination in Lusaka for beautiful, confidence-boosting hair
          and salon experiences.
        </p>
        {/* <div className="welcome-actions">
          <a className="primary-button" href={socialLinks.facebook} target="_blank" rel="noreferrer">
            <SocialIcon type="facebook" />
            Book or enquire on Facebook
          </a>
          <a className="whatsapp-button" href={socialLinks.whatsapp} target="_blank" rel="noreferrer">
            <SocialIcon type="whatsapp" />
            WhatsApp us
          </a>
        </div> */}
        <p style={{
            marginBottom: "2px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#333",
        }}>Book a session with us</p>
        <SocialLinks />
      </section>

      <Reveal className="content-section">
        <section className="showcase-section">
          <p className="eyebrow">Our work</p>
          <h2>Signature looks</h2>
          <div className="showcase-grid">
            <article className="showcase-card">
              <img src={IMG4} alt="Long braided hairstyle at Nashes Beauty Lounge" />
              <div><h3>Protective styles</h3><p>Designed to turn heads.</p></div>
            </article>
            <article className="showcase-card">
              <img src={IMG1} alt="Detailed braided hairstyle at Nashes Beauty Lounge" />
              <div><h3>Detailed braids</h3><p>Finished with confidence.</p></div>
            </article>
            <article className="showcase-card">
              <img src={IMG2} alt="Long twist hairstyle at Nashes Beauty Lounge" />
              <div><h3>Beautiful finishes</h3><p>Made for your moment.</p></div>
            </article>
          </div>
        </section>
      </Reveal>

      <Reveal className="content-section">
      <section id="services">
        <p className="eyebrow">What we offer</p>
        <h2>Our services</h2>
        <Swiper
          className="services-swiper"
          modules={[A11y, Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1.15}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          speed={700}
          grabCursor
          a11y={{ enabled: true }}
        >
          <SwiperSlide>
            <article className="service-card">
              <span className="service-card__number">01</span>
              <h3>Braids &amp; protective styles</h3>
              <p>Beautiful, carefully finished styles designed to suit your look.</p>
              <ul className="price-list">
                <li><span>Normal length</span><strong>K400</strong></li>
                <li><span>Normal length with goddess</span><strong>K450</strong></li>
                <li><span>Bum length</span><strong>K500</strong></li>
                <li><span>Bum length with goddess</span><strong>K550</strong></li>
              </ul>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="service-card">
              <span className="service-card__number">02</span>
              <h3>Hair styling</h3>
              <p>Salon styling for everyday confidence, events, and special occasions.</p>
              <strong>Price on request</strong>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="service-card">
              <span className="service-card__number">03</span>
              <h3>Beauty consultations</h3>
              <p>Get guidance on the style and finish that best matches your needs.</p>
              <strong>Price on request</strong>
            </article>
          </SwiperSlide>
        </Swiper>
        <p className="service-note">
          Services and prices can change. Contact the salon directly for the latest
          menu, availability, and booking information.
        </p>
      </section>
      </Reveal>

      <Reveal className="content-section">
      <section id="location" className="location-section">
        <div>
          <p className="eyebrow">Visit us</p>
          <h2>Find us in Lusaka</h2>
          <p className="section-intro">
            We are located at Kabwata Shopping Complex, Shop C4. Call or WhatsApp
            us to confirm availability and bookings.
          </p>
          <div className="location-actions">
            <a
              className="primary-button"
              href="https://www.bing.com/maps/default.aspx?v=2&pc=FACEBK&mid=8100&where1=Kabwata%20complex%2C%20Lusaka%2C%20Zambia%2C%2010101&FORM=FBKPL1&mkt=en-US"
              target="_blank"
              rel="noreferrer"
            >
              Get directions
            </a>
            <a
              className="secondary-button"
              href="tel:+260978313971"
            >
              Call 978 313 971
            </a>
            <a
              className="secondary-button"
              href="https://wa.me/260978313971"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp us
            </a>
          </div>
        </div>
        <div className="location-card" aria-label="Salon location">
          <span className="location-card__pin">⌖</span>
          <h3>Nashe&apos;s Beauty Lounge</h3>
          <p>Kabwata Shopping Complex, Shop C4, Lusaka, Zambia</p>
          <a href="mailto:bwalyachristie@gmail.com">bwalyachristie@gmail.com</a>
        </div>
      </section>
      </Reveal>

      <footer id="contact" className="site-footer">
        <div className="site-footer__developer">
          <p>Need a website like this?</p>
          <span>Let&apos;s build a beautiful digital presence for your business.</span>
        </div>
        <div className="site-footer__contact">
          <span>Website by <strong>JC Software</strong></span>
          <a href="https://josephchirwa.netlify.app/" target="_blank" rel="noreferrer">
            View portfolio
          </a>
        </div>
      </footer>
    </main>
  </>
  );
 }

export default App;