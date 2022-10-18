import React from "react";
//components
import Header from "./components/Header";
import SectionHero from "./components/SectionHero";
import SectionSkill from "./components/SectionSkill";
import SectionBusiness from "./components/SectionBusiness";
import SectionTeam from "./components/SectionTeam";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header/>
    <main className="lg:w-[1400px] w-[540px] mx-auto my-14">
      <SectionHero/>
      <SectionSkill/>
      <SectionBusiness/>
      <SectionTeam/>
    </main>
    <Footer/>
    </>
  );
}

export default App;


