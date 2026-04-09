import { useState } from "react";
import { FaTerminal } from "react-icons/fa";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <div className="home-layout">
        <div className="page-header">
          <h1>Welcome to My Portfolio!</h1>
          <p className="subtitle">I am a 2nd year B.Tech Student .</p>
        </div>

        <div className="counter-widget">
          <p className="subtitle">Interactive Counter Widget</p>
          <div className="counter-value">{count}</div>
          <button onClick={() => setCount(count + 1)}>
            <FaTerminal /> Initialize Count
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;