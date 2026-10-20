import BG from "./assets/backgound.jpg"
import "./Landingpage.css"

function LandingPage() {
  return (
    <section className="landing-hero" aria-label="Nashes Beauty Lounge">
      <img
        className="landing-hero__image"
        src={BG}
        alt="Nashes Beauty Lounge salon"
      />
      <div className="landing-hero__overlay" />
      <div className="landing-hero__content">
        {/* <h1>Nashe&apos;s Beauty Lounge</h1> */}
      </div>
    </section>
  );
}

export default LandingPage;