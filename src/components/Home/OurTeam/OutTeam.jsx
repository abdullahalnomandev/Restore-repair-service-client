import React from "react";
import SingleTeamMemberCard from "./SingleTeamMemberCard";
const OutTeam = () => {
  const teamMembers = [
    {
      name: "Abdullah Al Noman",
      title: "CEO & Founder",
      image: "https://i.ibb.co/jLk5rtx/jpg.jpg",
    },
    {
      name: "Mellissa Munoz",
      title: "Chief Engineer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYIpyKCGyu5oGb0Ah0DDQ0UMiFRitSDX3YlQ&usqp=CAU",
    },
    {
      name: "John Abraham",
      title: "Technical Manager",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwz3ZqzFg9nAjyClKAOEqG2o9Z1VP184paCw&usqp=CAU",
    },
    {
      name: "Fahima Mahjabin",
      title: "Technical Manager",
      image: "https://i.ibb.co/ky5RV2S/esha.png",
    },
  ];

  return (
    <div className="container-fluid row pb-5" style={{ background: "#f9fafb" }}>
      <div className="service-header text-center">
        <h2>Our Awesome Team</h2>
        <p className="text-secondary text-center">
          Meet with our qualified and expert team. We are specialized in our
          individual field. We have enough skill and tested. That’s why you’re
          getting the quality repair services.
        </p>
      </div>
      {teamMembers.map((member) => (
        <SingleTeamMemberCard member={member} key={member.name} />
      ))}
    </div>
  );
};

export default OutTeam;
