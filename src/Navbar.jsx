import IMG from "./assets/logo.jpg";
import { useEffect, useState } from "react";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-dark site-navbar${isScrolled ? " site-navbar--scrolled" : ""}`}>
            <div className="site-navbar__inner">
                <a className="navbar-brand site-navbar__brand" href="#">
                    <img src={IMG} alt="Nashes Beauty Lounge logo" />
                    <span>Nashe&apos;s Beauty Lounge</span>
                </a>
                <ul className="navbar-nav site-navbar__links">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#location">Location</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;