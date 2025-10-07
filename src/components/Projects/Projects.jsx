import React from "react";
import Card from "../Card/Card";
import va from "../../assets/va.png";
import fw from "../../assets/fw.png";
import cb from "../../assets/cb.png";
import tti from "../../assets/tti.png";
import br from "../../assets/br.png";
import ise from "../../assets/ise.png";
import ge from "../../assets/ge.png";
import lw from "../../assets/lw.png";
import pg from "../../assets/pg.png";
import tct from "../../assets/tct.png";
import "./Projects.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useGSAP(() => {
    gsap.from("#para", {
      y: 100,
      duration: 1,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#para",
        scroller: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 40%",
      },
    });

    gsap.from(".project-grid", {
      y: 100,
      duration: 1,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".project-grid",
        scroller: "body",
        scrub: 2,
        start: "top 85%",
        end: "top 40%",
      },
    });
  });

  return (
    <div id="projects">
      <h1 id="para">2+ YEARS EXPERIENCED IN PROJECTS</h1>

      <div className="project-grid">
        <Card title="VIRTUAL ASSISTANT" image={va} />
        <Card title="GROCERY E-COMMERCES" image={ge} />
        <Card title="LIVE WEATHER" image={lw} />
        <Card title="PASSWORD GENERATOR APP" image={pg} />
        <Card title="TIC TAC TOE GAME" image={tct} />
        
        {/* <Card title="AI POWERED FITNESS WEBSITE" image={fw} />
        <Card title="AI CHATBOT" image={cb} />
        <Card title="AI TEXT TO IMAGE" image={tti} />
        <Card title="AI BACKGROUND REMOVER" image={br} />
        <Card title="IMAGE SEARCH ENGINE" image={ise} /> */}
      </div>
    </div>
  );
}

export default Projects;
