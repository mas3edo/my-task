import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaSnapchat,
  FaPhone,
  FaClock,
  FaMailBulk,
  FaMap,
} from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <header className="header   flex  justify-center items-center">
      <div className="container flex justify-center items-center">
        <div className="main flex justify-center md:justify-between items-center w-full">
          <div className="left-side flex items-center justify-center md:hidden lg:flex">
            <div className="social-media">
              <ul className="flex  justify-center">
                <li
                  className="rounded-full flex items-center justify-center"
                  style={{ width: "21.02px", height: "21.02px" }}
                >
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="text-white text-base hover:text-blue-500 " />
                  </a>
                </li>
                <li
                  className="rounded-full flex items-center justify-center"
                  style={{ width: "21.02px", height: "21.02px" }}
                >
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-white text-base hover:text-pink-500" />
                  </a>
                </li>
                <li
                  className="rounded-full flex items-center justify-center"
                  style={{ width: "21.02px", height: "21.02px" }}
                >
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="text-white text-base hover:text-green-500" />
                  </a>
                </li>
                <li
                  className="rounded-full flex items-center justify-center"
                  style={{ width: "21.02px", height: "21.02px" }}
                >
                  <a
                    href="https://snapchat.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Snapchat"
                  >
                    <FaSnapchat className="text-white text-base hover:text-yellow-400" />
                  </a>
                </li>
              </ul>
            </div>
            <a className="tel" href="tel:+922254548524">
              +922 254 548 524
              <span style={{ marginLeft: "8px" }}>
                <FaPhone />
              </span>
            </a>
          </div>
          <div className="right-side flex items-center  ">
            <div>
              مفتوح في مواقيت العمل: 9 صباحا الي 10 مساء{" "}
              <span>
                <FaClock />
              </span>
            </div>
            <div className="link">
              <a
                className="flex items-center gap-1"
                href="mailto:info@sofrah.com"
              >
                info@sofrah.com{" "}
                <span>
                  {" "}
                  <FaMailBulk />
                </span>
              </a>{" "}
            </div>
            <div>
              السعودية, الرياض{" "}
              <span>
                {" "}
                <FaMap />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
