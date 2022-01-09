import React from "react";
import Footer from "../../components/Common/Footer/Footer";
import Header from "../../components/Common/Header/Header";
import Exprience from "../../components/Home/Experience/Exprience";
import Gallery from "../../components/Home/Gallery/Gallery";
import OutTeam from "../../components/Home/OurTeam/OutTeam";
import Process from "../../components/Home/Process/Process";
import QuestionForm from "../../components/Home/QuestionForm/QuestionForm";
import Services from "../../components/Home/Services/Services";
import Slider from "../../components/Home/Slider/Slider";
import Testimonials from "../../components/Home/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Services />
      <Exprience />
      <OutTeam />
      <Gallery />
      <Process />
      <Testimonials />
      <QuestionForm />
      <Footer />
    </>
  );
};

export default Home;
