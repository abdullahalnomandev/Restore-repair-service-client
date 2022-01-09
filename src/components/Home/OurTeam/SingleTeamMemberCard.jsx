import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
const SingleTeamMemberCard = ({ member }) => {
  return (
    <div className="col-md-3 mb-3">
      <div className="card">
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
  );
};

export default SingleTeamMemberCard;
