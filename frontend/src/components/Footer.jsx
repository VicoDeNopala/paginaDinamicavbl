import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h4>CansinoRock</h4>

      <div className="d-flex justify-content-center gap-4 fs-2 my-3">
        <a href="https://facebook.com" target="_blank">
          <FaFacebook color="white" />
        </a>

        <a href="https://instagram.com" target="_blank">
          <FaInstagram color="white" />
        </a>

        <a href="https://youtube.com" target="_blank">
          <FaYoutube color="white" />
        </a>
      </div>

      <a href="/privacidad.html" className="text-light">
        Todos los derechos reservados y manejo de información.
      </a>
    </footer>
  );
}

export default Footer;
