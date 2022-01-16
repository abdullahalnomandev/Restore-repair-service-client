import AOS from "aos";
import "aos/dist/aos.css";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

const SingleTeamMemberCard = ({ member }) => {
  AOS.init({ duration: 1500 });

  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-4 mb-3" id="team">
        <div className="card" data-aos="flip-left">
          <img style={{ maxHeight: "300px" }} src={member.image} alt="" />
          <div className="content text-center py-2">
            <h5>{member.name}</h5>
            <p className="text-secondary">{member.title}</p>
          </div>
          <div className="social-icon pb-2">
            <a
              style={{ color: "#4267B2" }}
              target="_blank"
              href="https://facebook.com/"
              rel="noreferrer"
            >
              <AiFillFacebook />
            </a>
            <a
              style={{ color: "#1DA1F2" }}
              target="_blank"
              href="https://www.linkedin.com/"
              rel="noreferrer"
            >
              <AiFillTwitterSquare />
            </a>
            <a
              style={{ color: "0e76a8 " }}
              target="_blank"
              href="https://twitter.com/"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTeamMemberCard;
