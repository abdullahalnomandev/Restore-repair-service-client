import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="top-header-part" id="contract">
        <div className="top-section container ">
          <div className="row py-4">
            <div className="col-md-9">
              <h3>
                Do you have any question? Feel free to request for a quote
              </h3>
            </div>
            <div className="col-md-3">
              <a
                href="https://abdullahalnoman.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                REQUEST FOR QUITE
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="footer">
        <div className="container text-white">
          <div className="row">
            <div className="col-md-4 repair-content py-5">
              <img
                src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2017/01/logo-footer.png"
                alt=""
              />
              <p className="py-3">
                Restore is a U.S based computer repair service center. Basically
                we repair all major brands of PCs, Laptops, Smartphone, Tablet,
                Flash Drive and Gaming Console devices issues.
              </p>
              <div className="social-icons">
                <a
                  style={{ color: "#4267B2" }}
                  target="_blank"
                  href="https://facebook.com/"
                  rel="noreferrer"
                >
                  <AiFillFacebook />{" "}
                </a>
                <a
                  style={{ color: "0e76a8 " }}
                  target="_blank"
                  href="twitter.com"
                  rel="noreferrer"
                >
                  <AiFillTwitterSquare />{" "}
                </a>
                <a
                  style={{ color: "#E60023" }}
                  target="_blank"
                  href="https://facebook.com/"
                  rel="noreferrer"
                >
                  <FaPinterestSquare />{" "}
                </a>
                <a
                  style={{ color: "#3f729b " }}
                  target="_blank"
                  href="https://facebook.com/"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram />{" "}
                </a>
                <a
                  style={{ color: "#1DA1F2" }}
                  target="_blank"
                  href="https://facebook.com/"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />{" "}
                </a>
              </div>
            </div>
            <div className="col-md-4 shop-info py-5">
              <div className="row">
                <div className="shop col-md-6">
                  <h3>Shop Info</h3>
                  <p>965 East Avenu, Sector 9 Russel Squire, UK</p>
                  <p>+8801741581512</p>
                  <p>info@gmal.com</p>
                  <p>Hours: Mon - Fri (9am - 6pm)</p>
                </div>
                <div className="services col-md-6">
                  <h4>SERVICES</h4>
                  <ul>
                    <li>
                      <MdOutlineArrowRightAlt /> Laptop Repair
                    </li>
                    <li>
                      <MdOutlineArrowRightAlt /> iPhone Repair
                    </li>
                    <li>
                      <MdOutlineArrowRightAlt /> iPad Repair
                    </li>
                    <li>
                      <MdOutlineArrowRightAlt /> Tablet Repair
                    </li>
                    <li>
                      <MdOutlineArrowRightAlt /> Smartphone
                    </li>
                    <li>
                      <MdOutlineArrowRightAlt /> Gadget Repair
                    </li>
                    <li>
                      <MdOutlineArrowRightAlt /> Recover Data
                    </li>
                    <li>
                      <MdOutlineArrowRightAlt /> Laptop Repair
                    </li>
                    <li>
                      <MdOutlineArrowRightAlt /> Backup Data
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 button-info py-5">
              <h4>Newsletter</h4>
              <p className="py-3">
                Signup for regular newsletter and stay upto date with our latest
                news
              </p>
              <input type="text" placeholder="Your email address" />{" "}
              <button className="main-button">SEND</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
