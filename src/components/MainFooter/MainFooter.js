import { mainFooter } from "@/data/mainFooter";
import Link from "next/link";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const {
  year,
  author,
  logo,
  text,
  socials,
  links,
  address,
  phone,
  email,
  textBottom,
} = mainFooter;

const MainFooter = ({ normalPadding = true }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  return (
    <footer className={`main-footer${normalPadding ? " normal-padding" : ""}`}>
      <div className="auto-container">
        <div className="widgets-section">
          <Row className="clearfix">
            <Col xl={4} lg={6} md={6} sm={12} className="column">
              <div className="footer-widget logo-widget">
                <div className="widget-content">
                  <div className="logo">
                    <Link href="/">
                      <a>
                        <Image
                          id="fLogo"
                          src={logo.src}
                          alt=""
                          style={{ height: 150 }}
                        />
                      </a>
                    </Link>
                  </div>
                  {/* <div className="text text-white">{text}</div>
                  <ul className="social-links clearfix">
                    {socials.map(({ id, icon, href }) => (
                      <li key={id}>
                        <a href={href}>
                          <span className={`${icon} text-white`}></span>
                        </a>
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            </Col>
            <Col xl={4} lg={6} md={6} sm={12} className="column">
              <div className="footer-widget links-widget">
                <div className="widget-content">
                  <h6>Explora</h6>
                  <Row className="clearfix">
                    <Col md={6} sm={12}>
                      <ul>
                        {links.slice(0, 5).map(({ id, href, title }) => (
                          <li key={id}>
                            <Link href={href}>{title}</Link>
                          </li>
                        ))}
                      </ul>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={6} md={6} sm={12} className="column">
              <div className="footer-widget info-widget">
                <div className="widget-content">
                  <h6>Contacto</h6>
                  <ul className="contact-info">
                    {/* <li className="address text-white">
                      <span className="icon flaticon-pin-1 text-white"></span>{" "}
                      <TextSplit text={address} />
                    </li> */}
                    <li>
                      <span className="icon flaticon-call text-white"></span>
                      <a
                        href={`tel:${phone.split(" ").join("")}`}
                        className="text-white"
                      >
                        {phone}
                      </a>
                    </li>

                    <li>
                      <span className="icon flaticon-email-2 text-white"></span>
                      <a
                        href={`mailto:miguel.carrion@cyberborders.com`}
                        className="text-white"
                      >
                        info@cyberborders.com.py
                      </a>
                    </li>

                    <li>
                      <span className="icon flaticon-pin text-white"></span>
                      <a
                        href={`mailto:miguel.carrion@cyberborders.com`}
                        className="text-white"
                      >
                        Soldado Ovelar 1515, Fernando de la Mora, Paraguay
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner clearfix text-white">
            <div className="copyright">
              &copy; Todos los derechos reservados {year} - {author}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
