import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      year: "2024 - Present",
      degree: "B.Tech in Computer Science",
      institution: "Dhemaji Engineering College",
      description: "Currently pursuing my second year, focusing on advanced data structures, algorithms, and full-stack web development."
    },
    {
      year: "2022 - 2024",
      degree: "Higher Secondary Education",
      institution: "State Science Academy",
      description: "Completed higher secondary with a focus on Mathematics, Physics, and Computer Science."
    },
    {
      year: "2022",
      degree: "Secondary School Certificate",
      institution: "Local High School",
      description: "Graduated with top honors and developed an early interest in programming."
    }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1><FaGraduationCap /> Education</h1>
        <p className="subtitle">My academic journey and qualifications.</p>
      </div>

      <div className="timeline">
        {educationData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">{item.year}</div>
              <h3>{item.degree}</h3>
              <p style={{ color: "var(--accent-color)", marginBottom: "0.5rem" }}>{item.institution}</p>
              <p className="subtitle" style={{ fontSize: "0.95rem" }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}