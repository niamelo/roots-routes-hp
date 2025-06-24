import AboutTitle from "./AboutTitle";
import AboutMissionVision from "./AboutMissionVision";
import AboutRepresentative from "./AboutRepresentative";
import AboutAttraction from "./AboutAttraction";
import AboutTeam from "./AboutTeam";

export default function About() {
  return (
    <section className="bg-gradient-to-b from-[#FEF5E7] to-white" id="about">
      <div className="w-full mx-auto flex flex-col pt-[clamp(20px,5vw,45px)]">
        <AboutTitle />
        <AboutMissionVision />
        <AboutRepresentative />
        <AboutAttraction />
        <AboutTeam />
      </div>
    </section>
  );
} 