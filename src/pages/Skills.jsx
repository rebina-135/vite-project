import { useEffect, useState } from "react";

function Skills() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="page skills">
      <h1>My Skills</h1>

      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React</li>
        <li>Python</li>
      </ul>

      <h2>Users from API:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;