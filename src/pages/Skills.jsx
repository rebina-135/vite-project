import { useEffect, useState } from "react";
import { FaCode, FaReact, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaUserCircle } from "react-icons/fa";

function Skills() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data.slice(0, 5))); // Just show 5 users for demo
  }, []);

  const skillsList = [
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "Python", icon: <FaPython /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
  ];

  return (
    <div className="page skills">
      <div className="page-header">
        <h1><FaCode /> My Skills</h1>
        <p className="subtitle">Technologies I work with and APIs I've integrated.</p>
      </div>

      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>

      <div className="users-list">
        <h2>Live API Integration</h2>
        <p className="subtitle" style={{marginBottom: "1rem"}}>Fetching recent users from JSONPlaceholder.</p>
        {users.length === 0 ? <p>Loading users...</p> : null}
        {users.map(user => (
          <div className="user-row" key={user.id}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
              <FaUserCircle style={{fontSize: '1.5rem', color: 'var(--accent-color)'}}/>
              <strong>{user.name}</strong>
            </div>
            <span className="subtitle">@{user.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;