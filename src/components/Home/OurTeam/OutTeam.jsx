import SingleTeamMemberCard from "./SingleTeamMemberCard";

const OutTeam = () => {
  const teamMembers = [
    {
      name: "Alexender Gary",
      title: "CEO & Founder",
      image: "https://i.ibb.co/jLk5rtx/jpg.jpg",
    },
    {
      name: "Mellissa Munoz",
      title: "Chief Engineer",
      image:
        "https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_7-1.jpg",
    },
    {
      name: "John Abraham",
      title: "Technical Manager",
      image:
        "https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_6.jpg",
    },
    {
      name: "John Abraham",
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
