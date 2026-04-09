import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="page home">
      <h1>Welcome to My VercApp!</h1>
        <p>I am XYZ, a 2nd year B.Tech Student of Dhemaji Engineering college and this is my React project.</p>

      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Home;